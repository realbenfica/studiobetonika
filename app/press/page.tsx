import type { Metadata } from "next";
import { PageIcon } from "../components/page-icon";
import { PressKitContent } from "../components/presskit-content";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Press — Studio Betonika",
  description: "Press kit for Studio Betonika and Dvor.",
};

export default function PressPage() {
  return (
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col overflow-x-clip bg-[#1a1a1a] px-4 py-12 sm:px-16 lg:px-24">
      <PageIcon />
      <div className="mx-auto w-full max-w-3xl flex-1 text-center">
        <h1 className="mb-12 text-white font-bold uppercase tracking-[0.08em] text-[clamp(1.5rem,5vw,2.5rem)]">
          Press Kit
        </h1>
        <PressKitContent />
      </div>
      <div className="mx-auto mt-16 flex w-fit max-w-full justify-center">
        <SiteFooter />
      </div>
    </main>
  );
}
