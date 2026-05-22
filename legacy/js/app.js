/* =============================================================
   Trust IT — Vanilla JS
   Modules:
     - Theme toggle (with localStorage)
     - Mobile menu toggle
     - Sticky navbar shadow on scroll
     - Smooth scroll & active link highlight
     - Scroll reveal (IntersectionObserver)
     - Back-to-top button
     - Contact form validation + success state
     - Year stamp
   ============================================================= */

(function () {
    'use strict';

    /* ---------- DOM helpers ---------- */
    const $  = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    /* ---------- 1. Theme toggle (class-based for Tailwind) ---------- */
    const themeToggle = $('#themeToggle');
    const root = document.documentElement;
    const STORAGE_KEY = 'trustit-theme';

    const applyTheme = (theme) => {
        if (theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');
        if (themeToggle) {
            themeToggle.setAttribute(
                'aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = root.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem(STORAGE_KEY, next);
        });
    }
    // Initial label sync (theme class is already applied by the head bootstrap)
    applyTheme(root.classList.contains('dark') ? 'dark' : 'light');

    /* ---------- 2. Mobile drawer ---------- */
    const hamburger = $('#hamburger');
    const drawer = $('#mobileMenu');
    const backdrop = $('#drawerBackdrop');
    const drawerClose = $('#drawerClose');

    const setDrawer = (open) => {
        if (!drawer || !backdrop || !hamburger) return;
        drawer.classList.toggle('open', open);
        backdrop.classList.toggle('open', open);
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        drawer.setAttribute('aria-hidden', String(!open));
        backdrop.setAttribute('aria-hidden', String(!open));

        if (open) {
            // Compute scrollbar width before locking, so the page doesn't shift
            const sbWidth = window.innerWidth - document.documentElement.clientWidth;
            document.documentElement.style.setProperty('--scrollbar-w', sbWidth + 'px');
            document.body.classList.add('drawer-open');
            // Move focus to the close button for keyboard users
            if (drawerClose) drawerClose.focus({ preventScroll: true });
        } else {
            document.body.classList.remove('drawer-open');
            document.documentElement.style.removeProperty('--scrollbar-w');
        }
    };

    const closeDrawer = () => setDrawer(false);
    const openDrawer = () => setDrawer(true);
    const toggleDrawer = () => setDrawer(!drawer?.classList.contains('open'));

    if (hamburger) hamburger.addEventListener('click', toggleDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Close when any link inside the drawer is clicked
    $$('.mobile-link').forEach(link => link.addEventListener('click', closeDrawer));

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer?.classList.contains('open')) closeDrawer();
    });

    // Auto-close if the viewport grows past the mobile breakpoint while open
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && drawer?.classList.contains('open')) closeDrawer();
    });

    /* ---------- 3. Navbar shadow on scroll ---------- */
    const navbar = $('#navbar');
    const backToTop = $('#backToTop');

    const onScroll = () => {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle('scrolled', y > 8);
        if (backToTop) backToTop.classList.toggle('show', y > 480);
        updateActiveLink();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- 4. Smooth scroll ---------- */
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const headerH = navbar ? navbar.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerH + 1;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- 5. Active nav link on scroll ---------- */
    const sections = ['home', 'services', 'about', 'insights', 'contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const navLinks = $$('.nav-link');

    function updateActiveLink() {
        if (!sections.length) return;
        const scrollY = window.scrollY + (navbar ? navbar.offsetHeight + 40 : 100);
        let currentId = sections[0].id;
        for (const section of sections) {
            if (section.offsetTop <= scrollY) currentId = section.id;
        }
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + currentId);
        });
    }

    /* ---------- 6. Scroll reveal ---------- */
    const revealEls = $$('[data-reveal]');
    const reveal = (el) => el.classList.add('is-visible');

    // Immediately reveal anything already in the viewport on load (e.g. hero).
    // This prevents above-the-fold content from briefly appearing blank.
    const revealIfInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh && rect.bottom > 0) reveal(el);
    };
    revealEls.forEach(revealIfInViewport);

    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const delay = Math.min(i * 80, 240);
                    setTimeout(() => reveal(entry.target), delay);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => {
            if (!el.classList.contains('is-visible')) io.observe(el);
        });
    } else {
        revealEls.forEach(reveal);
    }

    // Safety net: if anything is still hidden after 1.8s (e.g. observer never
    // fired, screenshot tools, headless renderers), force-reveal it.
    setTimeout(() => revealEls.forEach(reveal), 1800);

    /* ---------- 7. Contact form validation ---------- */
    const form = $('#contactForm');
    if (form) {
        const fields = {
            name:    { input: $('#name'),    err: $('#errName') },
            email:   { input: $('#email'),   err: $('#errEmail') },
            message: { input: $('#message'), err: $('#errMessage') },
        };
        const successEl = $('#formSuccess');
        const submitBtn = $('#submitBtn');

        const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        // Tracks fields the user has interacted with — only validate "touched"
        // fields on input/blur so we don't yell at a user who just landed on the form.
        const touched = { name: false, email: false, message: false };

        const checkField = (key, value) => {
            const v = (value ?? '').trim();
            if (key === 'name') {
                if (!v) return 'Please enter your name.';
                if (v.length < 2) return 'Name must be at least 2 characters.';
                if (v.length > 80) return 'Name is too long (max 80 characters).';
                return '';
            }
            if (key === 'email') {
                if (!v) return 'Email is required.';
                if (!EMAIL_RE.test(v)) return 'Please enter a valid email address.';
                return '';
            }
            if (key === 'message') {
                if (!v) return 'Please share a few words about your project.';
                if (v.length < 10) return 'A bit more detail helps us respond well (10+ chars).';
                if (v.length > 2000) return 'Message is too long (max 2000 characters).';
                return '';
            }
            return '';
        };

        const setFieldState = (key, message, { showValid = false } = {}) => {
            const f = fields[key];
            if (!f || !f.input || !f.err) return;
            if (message) {
                f.input.classList.add('has-error');
                f.input.classList.remove('is-valid');
                f.input.setAttribute('aria-invalid', 'true');
                f.err.textContent = message;
                f.err.classList.add('show');
            } else {
                f.input.classList.remove('has-error');
                f.input.removeAttribute('aria-invalid');
                f.err.textContent = '';
                f.err.classList.remove('show');
                if (showValid && f.input.value.trim()) {
                    f.input.classList.add('is-valid');
                } else {
                    f.input.classList.remove('is-valid');
                }
            }
        };

        const validateAll = () => {
            let firstInvalid = null;
            Object.keys(fields).forEach(key => {
                touched[key] = true;
                const msg = checkField(key, fields[key].input.value);
                setFieldState(key, msg, { showValid: !msg });
                if (msg && !firstInvalid) firstInvalid = fields[key].input;
            });
            return { isValid: !firstInvalid, firstInvalid };
        };

        Object.keys(fields).forEach(key => {
            const input = fields[key].input;
            if (!input) return;

            // Validate when user leaves the field (after first interaction).
            input.addEventListener('blur', () => {
                touched[key] = true;
                const msg = checkField(key, input.value);
                setFieldState(key, msg, { showValid: !msg });
            });

            // Live update for already-touched fields — clears errors as user fixes them
            // and shows the green tick the moment input becomes valid.
            input.addEventListener('input', () => {
                if (!touched[key]) return;
                const msg = checkField(key, input.value);
                setFieldState(key, msg, { showValid: !msg });
                if (successEl && successEl.classList.contains('show')) {
                    successEl.classList.remove('show');
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const { isValid, firstInvalid } = validateAll();
            if (!isValid) {
                if (firstInvalid) firstInvalid.focus({ preventScroll: false });
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                const label = submitBtn.querySelector('.btn-label');
                if (label) label.textContent = 'Sending…';
            }

            setTimeout(() => {
                form.reset();
                Object.keys(fields).forEach(k => {
                    touched[k] = false;
                    setFieldState(k, '');
                });
                if (successEl) successEl.classList.add('show');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const label = submitBtn.querySelector('.btn-label');
                    if (label) label.textContent = 'Send another';
                }
            }, 700);
        });
    }

    /* ---------- 8. Newsletter (footer) ---------- */
    const newsletterForm = $('#newsletterForm');
    if (newsletterForm) {
        const emailInput = $('#newsletterEmail');
        const msgEl = $('#newsletterMsg');
        const labelEl = newsletterForm.querySelector('.newsletter-label');
        const NEWSLETTER_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        const setMsg = (text, ok) => {
            if (!msgEl) return;
            msgEl.textContent = text;
            msgEl.classList.remove('hidden');
            msgEl.classList.toggle('text-emerald-500', !!ok);
            msgEl.classList.toggle('text-red-500', !ok);
        };

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const value = (emailInput?.value || '').trim();
            if (!value) return setMsg('Please enter your email.', false);
            if (!NEWSLETTER_EMAIL_RE.test(value)) return setMsg('Please enter a valid email address.', false);

            if (labelEl) labelEl.textContent = 'Sending…';
            emailInput.disabled = true;
            setTimeout(() => {
                newsletterForm.reset();
                emailInput.disabled = false;
                if (labelEl) labelEl.textContent = 'Subscribe';
                setMsg('Subscribed! Check your inbox to confirm.', true);
            }, 600);
        });
    }

    /* ---------- 9. Year stamp ---------- */
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
