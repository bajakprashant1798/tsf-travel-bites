export function VegDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="Vegetarian"
      title="Pure Vegetarian"
      className={`inline-flex h-4 w-4 items-center justify-center border-2 border-brand-green bg-white ${className}`}
    >
      <span className="block h-2 w-2 rounded-full bg-brand-green" />
    </span>
  );
}
