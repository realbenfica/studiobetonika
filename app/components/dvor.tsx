import Link from "next/link";
import { DvorLogo } from "./dvor-logo";
import { ItchLogo } from "./itch-logo";
import { SteamLogo } from "./steam-logo";

const pageLinkClass =
  "font-bold text-logo-grid transition-colors hover:text-logo-accent uppercase text-[0.8150625rem] sm:text-[0.942rem] min-[2000px]:!text-[1.413rem] leading-none tracking-normal sm:tracking-[0.08em]";

export function Dvor() {
  return (
    <div className="mt-6 flex w-full flex-col items-start self-stretch text-left min-[2000px]:mt-10">
      <div className="w-full max-w-[calc(100vw-4rem)] sm:max-w-xl min-[2000px]:max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/-ZWJ22-pYI0"
            title="Dvor trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <p className="mt-2 mb-0 flex flex-col text-left font-bold text-white/40 uppercase leading-tight tracking-[0.12em] text-[0.978075rem] sm:text-[1.254rem] min-[2000px]:!text-[1.881rem] min-[2000px]:!mt-10">
        <span className="inline-flex flex-wrap items-center gap-x-2">
          <DvorLogo />
          out 1 September 2026
        </span>
        <span className="mt-1.5 inline-flex flex-wrap items-center gap-x-2 font-normal min-[2000px]:!mt-3">
          Mac &amp; PC –{" "}
          <span className="inline-flex flex-wrap items-center gap-x-1.5 text-white">
            Wishlist on
            <a
              href="https://store.steampowered.com/app/4881830/Dvor/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-colors hover:text-logo-accent"
              aria-label="Wishlist on Steam"
            >
              <SteamLogo />
            </a>
            <span className="text-white/40" aria-hidden="true">
              /
            </span>
            <ItchLogo />
          </span>
        </span>
        <span className="mt-1.5 font-normal min-[2000px]:!mt-20">
          <a
            href="https://ditto.fm/dvor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-logo-grid underline transition-colors hover:text-logo-accent"
          >
            Listen to the soundtrack
          </a>
        </span>
      </p>
      <nav
        className="mt-1 flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap min-[2000px]:!mt-20 sm:gap-x-3"
        aria-label="Site pages"
      >
        <Link href="/dvor/press" className={pageLinkClass}>
          Press Kit
        </Link>
        <span className="text-logo-grid" aria-hidden="true">
          |
        </span>
        <Link href="/dvor/privacy-policy" className={pageLinkClass}>
          Privacy Policy
        </Link>
      </nav>
    </div>
  );
}
