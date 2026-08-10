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
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col overflow-x-clip bg-[#1a1a1a] px-4 py-12 sm:px-16 lg:px-24">
      <PageIcon />
      <div className="mx-auto mt-10 w-full max-w-3xl flex-1 text-center sm:mt-14">
        <div className="mb-8 flex justify-center text-white">
          <DvorLogo size="large" />
        </div>
        <h1 className="mb-8 text-white font-bold uppercase tracking-[0.08em] text-[clamp(1.5rem,5vw,2.5rem)]">
          Press Kit
        </h1>
        <p className="mb-12 text-left">
          <a
            href="/dvor_presskit.zip"
            download
            className="text-logo-accent font-bold uppercase tracking-[0.08em] underline transition-colors hover:text-white text-[clamp(1.125rem,3.5vw,1.5rem)]"
          >
            Download the presskit (ZIP)
          </a>
        </p>
        <PressKitContent />
      </div>
      <SiteFooter className="mt-16" />
    </main>
  );
}
