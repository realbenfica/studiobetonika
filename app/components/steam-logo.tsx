const maskClasses =
  "[mask-image:url(/images/logo_steam.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] [-webkit-mask-image:url(/images/logo_steam.svg)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:left_center]";

type SteamLogoProps = {
  className?: string;
};

// Sized in cap units so the STEAM wordmark matches the cap height of the
// surrounding text. The wordmark's baseline sits 0.8025cap above the box bottom.
export function SteamLogo({ className = "" }: SteamLogoProps) {
  return (
    <span
      role="img"
      aria-label="Steam"
      className={`inline-block h-[2.590437cap] w-[8.515593cap] shrink-0 bg-current align-[-0.8025cap] ${maskClasses} ${className}`}
    />
  );
}
