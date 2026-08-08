import Link from "next/link";
import { DvorLogo } from "./components/dvor-logo";
import { SiteFooter } from "./components/site-footer";

const pageLinkClass =
  "font-bold text-logo-grid transition-colors hover:text-logo-accent uppercase text-[clamp(0.4375rem,2.5vw,0.875rem)] leading-none tracking-normal sm:tracking-[0.08em]";

export default function Home() {
  return (
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col items-center overflow-x-clip bg-[#1a1a1a] px-8 py-8 sm:px-4">
      <div className="flex min-h-0 w-full max-w-full flex-1 flex-col sm:w-max sm:max-w-5xl">
        <div className="flex min-h-0 flex-1 flex-col sm:justify-center">
          <div className="shrink-0 self-start">
            <img
              src="/images/logo4.png"
              alt="Studio Betonika"
              className="h-auto max-h-[8.75rem] w-auto max-w-[calc((100vw-4rem)/2)] object-contain object-left sm:max-h-[10rem] sm:max-w-[32rem]"
            />
            <p className="mt-4 text-left font-normal text-white/40 uppercase leading-relaxed tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
              Brutalist games.
              <br />
              Beautiful worlds.
            </p>
          </div>

          <div className="mt-8 flex min-h-0 flex-1 flex-col items-start justify-center self-stretch text-left sm:mt-16 sm:flex-none sm:justify-start sm:self-start">
            <div className="mb-4 w-full max-w-[calc(100vw-4rem)] sm:max-w-xl">
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
            <p className="mb-0 text-left font-bold text-white/40 uppercase leading-relaxed tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
              <span className="inline-flex flex-wrap items-center gap-x-2">
                <DvorLogo />
                out 1 September 2026
              </span>
              <br />
              <span className="font-normal">Mac &amp; PC on{" "}
                <a
                  href="https://store.steampowered.com/app/4881830/Dvor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-logo-grid transition-colors hover:text-logo-accent"
                >
                  Steam
                </a>
              </span>
              <br />
              <span className="font-normal">
                <a
                  href="https://ditto.fm/dvor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-logo-grid transition-colors hover:text-logo-accent"
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
        </div>

        <SiteFooter variant="home" className="mt-8 shrink-0 self-start sm:mt-0" />
      </div>
    </main>
  );
}
