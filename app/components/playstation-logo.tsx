const maskClasses =
  "[mask-image:url(/images/logo_ps5.png)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] [-webkit-mask-image:url(/images/logo_ps5.png)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:left_center]";

type PlayStationLogoProps = {
  className?: string;
};

export function PlayStationLogo({ className = "" }: PlayStationLogoProps) {
  return (
    <span
      role="img"
      aria-label="PlayStation 5"
      className={`inline-block h-[0.95em] w-[calc(0.95em*225/51)] shrink-0 bg-current align-[-0.08em] aspect-[225/51] ${maskClasses} ${className}`}
    />
  );
}
