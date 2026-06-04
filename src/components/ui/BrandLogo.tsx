type BrandLogoProps = {
  className?: string;
  /** Unique gradient id so multiple logos on a page don't collide */
  gradientId?: string;
};

/** LuxCart shopping-bag mark */
export default function BrandLogo({ className, gradientId = "brandLogoGrad" }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#59bdef" />
          <stop offset="100%" stopColor="#2575a6" />
        </linearGradient>
      </defs>
      {/* Bag body */}
      <path
        fill={`url(#${gradientId})`}
        d="M5 7h14a1 1 0 0 1 1 .94l.93 11.99A2 2 0 0 1 18.94 22H5.06a2 2 0 0 1-1.99-2.07L4 7.94A1 1 0 0 1 5 7z"
      />
      {/* Handle */}
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2"
      />
    </svg>
  );
}
