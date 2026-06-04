import Link from "next/link";
import { DvorLogo } from "./components/dvor-logo";
import { SiteFooter } from "./components/site-footer";

const pageLinkClass =
  "font-bold text-logo-grid transition-colors hover:text-logo-accent uppercase text-[clamp(0.4375rem,2.5vw,0.875rem)] leading-none tracking-normal sm:tracking-[0.08em]";

export default function Home() {
  return (
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col items-center overflow-x-clip bg-[#1a1a1a] px-8 py-8 sm:px-4">
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex w-fit max-w-full min-w-0 flex-col items-start">
          <img
            src="/images/logo3.png"
            alt="Studio Betonika"
            className="h-auto max-h-[17.5rem] w-auto max-w-[calc(100vw-4rem)] object-contain object-left sm:max-h-[20rem] sm:max-w-5xl"
          />
          <p className="mt-8 text-left font-normal text-white/40 uppercase leading-relaxed tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
            Brutalist games.
            <br />
            Beautiful worlds.
          </p>
          <div className="mt-16 space-y-4">
            <p className="mb-0 text-left font-bold text-white/40 uppercase leading-relaxed tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
              <span className="inline-flex flex-wrap items-center gap-x-2">
                <DvorLogo />
                coming Autumn 2026
              </span>
            </p>
            <nav
              className="flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap sm:gap-x-3"
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
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-fit max-w-full min-w-0 flex-col items-start">
          <SiteFooter variant="home" />
        </div>
      </div>
    </main>
  );
}
