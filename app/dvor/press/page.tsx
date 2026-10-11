import type { Metadata } from "next";
import { DvorLogo } from "../../components/dvor-logo";
import { PageIcon } from "../../components/page-icon";
import { PressKitContent } from "../../components/presskit-content";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "Press — Studio Betonika",
  description: "Press kit for Studio Betonika and Dvor.",
};

export default function PressPage() {
  return (
    <main className="relative flex min-h-dvh w-full max-w-[100vw] flex-col overflow-x-clip bg-background">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[40rem]" />

      <div className="relative mx-auto flex w-full min-w-0 max-w-3xl flex-1 flex-col px-4 py-10 sm:px-10 sm:py-14">
        <PageIcon />

        <header className="rise flex flex-col gap-8 border-b border-logo-grid pb-12">
          <DvorLogo size="large" className="text-white" />
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Media resources</p>
            <h1 className="font-bold uppercase leading-[0.95] tracking-[0.04em] text-white text-[clamp(2rem,9vw,5rem)]">
              Press Kit
            </h1>
          </div>
          <a
            href="/dvor_presskit.zip"
            download
            className="slab-shadow inline-flex w-fit items-center gap-4 bg-logo-accent px-6 py-4 font-bold uppercase tracking-[0.12em] text-background transition-transform hover:-translate-y-0.5 text-[clamp(0.9375rem,2.6vw,1.125rem)]"
          >
            Download the presskit (ZIP)
            <span aria-hidden="true">↓</span>
          </a>
        </header>

        <div className="rise rise-delay-1 mt-14">
          <PressKitContent />
        </div>

        <SiteFooter className="mt-24" />
      </div>
    </main>
  );
}
