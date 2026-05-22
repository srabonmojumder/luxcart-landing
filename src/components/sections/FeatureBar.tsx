import { FEATURES } from "@/lib/site-data";

export default function FeatureBar() {
  return (
    <section className="py-8 bg-page-alt dark:bg-page-dark-alt border-y border-line dark:border-line-dark" aria-label="Why shop with us">
      <div className="container max-w-[1200px] mx-auto px-6" data-reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 list-none p-0 m-0 lg:divide-x lg:divide-line lg:dark:divide-line-dark">
          {FEATURES.map(({ icon: Icon, title, desc, iconClass }) => (
            <li key={title} className="flex items-center gap-3.5 lg:justify-center lg:px-4">
              <span className={`grid place-items-center w-11 h-11 rounded-xl flex-none ${iconClass}`}>
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-[14.5px]">{title}</div>
                <div className="text-[12.5px] text-ink-mute">{desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
