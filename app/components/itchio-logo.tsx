const maskClasses =
  "[mask-image:url(/images/itchio.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url(/images/itchio.svg)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]";

type ItchioLogoProps = {
  className?: string;
};

export function ItchioLogo({ className = "" }: ItchioLogoProps) {
  return (
    <span
      role="img"
      aria-label="itch.io"
      className={`inline-block h-[1.7em] w-[1.7em] shrink-0 bg-current align-[-0.12em] aspect-square ${maskClasses} ${className}`}
    />
  );
}
