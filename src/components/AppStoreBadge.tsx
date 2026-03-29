interface AppStoreBadgeProps {
  url: string;
  className?: string;
}

export default function AppStoreBadge({ url, className = '' }: AppStoreBadgeProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
      aria-label="Download on the App Store"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 40"
        className="h-[40px] w-[120px]"
      >
        <title>Download on the App Store</title>
        <rect width="120" height="40" rx="5" fill="#000" />
        <rect x="0.5" y="0.5" width="119" height="39" rx="4.5" fill="none" stroke="#A6A6A6" strokeWidth="1" />
        <g fill="#fff">
          <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.36 4.1 4.1 0 0 0 3.237-1.53z" />
        </g>
        <g fill="#fff">
          <text fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="8" x="42.5" y="15" letterSpacing="0.03em">Download on the</text>
          <text fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="16" fontWeight="bold" x="42" y="31" letterSpacing="-0.01em">App Store</text>
        </g>
      </svg>
    </a>
  );
}
