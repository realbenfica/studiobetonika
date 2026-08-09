import Link from "next/link";
import { DvorLogo } from "./dvor-logo";
import { SteamLogo } from "./steam-logo";

const pageLinkClass =
  "font-bold text-logo-grid transition-colors hover:text-logo-accent uppercase text-[clamp(0.4375rem,2.5vw,0.875rem)] leading-none tracking-normal sm:tracking-[0.08em]";

export function Dvor() {
  return (
    <div className="flex w-full flex-col items-start self-stretch text-left">
      <div className="w-full max-w-[calc(100vw-4rem)] sm:max-w-xl">
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
      <p className="mt-3 mb-0 flex flex-col text-left font-bold text-white/40 uppercase leading-tight tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)] sm:mt-[1lh] sm:leading-relaxed">
        <span className="inline-flex flex-wrap items-center gap-x-2">
          <DvorLogo />
          out 1 September 2026
        </span>
        <span className="mt-3 inline-flex flex-wrap items-center gap-x-2 font-normal sm:mt-[2lh]">
          Mac &amp; PC –{" "}
          <a
            href="https://store.steampowered.com/app/4881830/Dvor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-1.5 text-white transition-colors hover:text-logo-accent"
            aria-label="Wishlist on Steam"
          >
            Wishlist on
            <SteamLogo />
          </a>
        </span>
        <span className="mt-3 font-normal sm:mt-[calc(1rem*1.33*2)]">
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
        className="mt-1.5 flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap sm:mt-4 sm:gap-x-3"
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
