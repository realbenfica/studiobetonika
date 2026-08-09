const maskClasses =
  "[mask-image:url(/images/logo_steam.png)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] [-webkit-mask-image:url(/images/logo_steam.png)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:left_center]";

type SteamLogoProps = {
  className?: string;
};

export function SteamLogo({ className = "" }: SteamLogoProps) {
  return (
    <span
      role="img"
      aria-label="Steam"
      className={`inline-block h-[1.7em] w-[calc(1.7em*1193/386)] shrink-0 bg-current align-[-0.12em] aspect-[1193/386] ${maskClasses} ${className}`}
    />
  );
}
