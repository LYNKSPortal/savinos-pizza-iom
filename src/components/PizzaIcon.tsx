interface PizzaIconProps {
  className?: string;
}

export default function PizzaIcon({ className = "" }: PizzaIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="#1a2b35" />
      <circle cx="50" cy="50" r="44" fill="#23353f" />
      <circle cx="50" cy="50" r="40" fill="#2d4a5a" />
      <circle cx="32" cy="38" r="5" fill="#5b8fa8" opacity="0.8" />
      <circle cx="60" cy="32" r="4" fill="#5b8fa8" opacity="0.8" />
      <circle cx="65" cy="58" r="5" fill="#5b8fa8" opacity="0.8" />
      <circle cx="38" cy="62" r="4" fill="#5b8fa8" opacity="0.8" />
      <circle cx="50" cy="48" r="3.5" fill="#5b8fa8" opacity="0.8" />
      <circle cx="42" cy="28" r="2.5" fill="#2ecc71" opacity="0.9" />
      <circle cx="70" cy="44" r="2.5" fill="#2ecc71" opacity="0.9" />
      <circle cx="28" cy="55" r="2" fill="#2ecc71" opacity="0.9" />
      <circle cx="55" cy="68" r="2.5" fill="#2ecc71" opacity="0.9" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="#5b8fa8" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
