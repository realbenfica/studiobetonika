const maskClasses =
  "[mask-image:url(/images/logo_ps5.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] [-webkit-mask-image:url(/images/logo_ps5.svg)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:left_center]";

type PlayStationLogoProps = {
  className?: string;
};

export function PlayStationLogo({ className = "" }: PlayStationLogoProps) {
  return (
    <span
      role="img"
      aria-label="PlayStation 5"
      className={`inline-block h-[1em] w-[calc(1em*990.96/215.56)] shrink-0 bg-current aspect-[990.96/215.56] ${maskClasses} ${className}`}
    />
  );
}
