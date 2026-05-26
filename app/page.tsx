import { DvorLogo } from "./components/dvor-logo";
import { SocialLinks } from "./components/social-links";
import { SiteFooter } from "./components/site-footer";

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
            <br />
            <span className="inline-flex flex-wrap items-center gap-x-2 font-bold">
              <DvorLogo />
              coming Autumn 2026
            </span>
          </p>
          <SocialLinks />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-fit max-w-full min-w-0 flex-col items-start">
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
