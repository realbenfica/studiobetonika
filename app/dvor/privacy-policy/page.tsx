import type { Metadata } from "next";
import { DvorLogo } from "../../components/dvor-logo";
import { PageIcon } from "../../components/page-icon";
import { PrivacyPolicyContent } from "../../components/privacy-policy-content";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Dvor",
  description: "Privacy Policy for Dvor by Studio Betonika.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col overflow-x-clip bg-[#1a1a1a] px-4 py-12 sm:px-16 lg:px-24">
      <PageIcon />
      <div className="mx-auto mt-10 w-full max-w-3xl flex-1 text-center sm:mt-14">
        <div className="mb-8 flex justify-center text-white">
          <DvorLogo size="large" />
        </div>
        <h1 className="mb-12 text-white font-bold uppercase tracking-[0.08em] text-[clamp(1.5rem,5vw,2.5rem)]">
          Privacy Policy
        </h1>
        <PrivacyPolicyContent />
      </div>
      <SiteFooter className="mt-16" />
    </main>
  );
}
