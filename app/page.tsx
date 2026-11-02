import { Dvor } from "./components/dvor";
import { SiteFooter } from "./components/site-footer";
import { StudioLogo } from "./components/studio-logo";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh w-full max-w-[100vw] flex-col overflow-x-clip bg-background">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[40rem]" />

      <header className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-24">
        {/* Match the PNG wordmark's left edge (100% minus its 74.15% width). */}
        <div className="grid w-[min(88vw,40rem)] grid-cols-[25.85%_1fr] gap-y-8 sm:gap-y-10">
          <StudioLogo className="col-span-2 w-full" />
          <p className="rise rise-delay-3 col-start-2 flex flex-col gap-2 text-left text-[clamp(0.8rem,2.6vw,1rem)] font-normal uppercase leading-none tracking-[0.3em] text-white/45">
            <span>Brutalist games.</span>
            <span className="text-logo-accent">Beautiful worlds.</span>
          </p>
        </div>
      </header>

      <Dvor />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 sm:px-10">
        <SiteFooter variant="home" />
      </div>
    </main>
  );
}
