import { Dvor } from "./components/dvor";
import { SiteFooter } from "./components/site-footer";

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

        <Dvor />

        <SiteFooter variant="home" className="mt-8 shrink-0 self-start" />
      </div>
    </main>
  );
}
