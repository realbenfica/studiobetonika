import Link from "next/link";
import { DvorLogo } from "./components/dvor-logo";
import { SiteFooter } from "./components/site-footer";
import { SteamLogo } from "./components/steam-logo";

const pageLinkClass =
  "font-bold text-logo-grid transition-colors hover:text-logo-accent uppercase text-[clamp(0.4375rem,2.5vw,0.875rem)] leading-none tracking-normal sm:tracking-[0.08em]";

export default function Home() {
  return (
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col items-center overflow-x-clip bg-[#1a1a1a] px-8 py-8 sm:px-4">
      <div className="flex min-h-0 w-full max-w-full flex-1 flex-col sm:w-max sm:max-w-5xl">
        <div className="shrink-0 self-start">
          <img
            src="/images/logo4.png"
            alt="Studio Betonika"
            className="h-auto max-h-[calc(8.75rem*1.15)] w-auto max-w-[calc((100vw-4rem)/2*1.15)] object-contain object-left sm:max-h-[10rem] sm:max-w-[32rem]"
          />
          <p className="mt-4 flex flex-col gap-[0.3125em] text-left font-normal text-white/40 uppercase leading-none tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
            <span>Brutalist games.</span>
            <span>Beautiful worlds.</span>
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-start justify-center self-stretch text-left">
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
          <p className="mt-[2lh] mb-0 flex flex-col text-left font-bold text-white/40 uppercase leading-relaxed tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
            <span className="inline-flex flex-wrap items-center gap-x-2">
              <DvorLogo />
              out 1 September 2026
            </span>
            <span className="mt-[2lh] inline-flex flex-wrap items-center gap-x-2 font-normal">
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
            <span className="mt-4 font-normal">
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
            className="mt-4 flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap sm:gap-x-3"
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

        <SiteFooter variant="home" className="mt-8 shrink-0 self-start" />
      </div>
    </main>
  );
}
