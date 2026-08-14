type ItchLogoProps = {
  className?: string;
};

export function ItchLogo({ className = "" }: ItchLogoProps) {
  return (
    // Black source SVG; invert to white to match surrounding store logos.
    <img
      src="/images/itchio.svg"
      alt="itch.io"
      className={`inline-block h-[1.7em] w-auto shrink-0 align-[-0.12em] invert ${className}`}
    />
  );
}
