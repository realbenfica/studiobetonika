import type { Metadata } from "next";
import { PageIcon } from "../components/page-icon";
import { PrivacyPolicyContent } from "../components/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy — Studio Betonika",
  description: "Privacy Policy for Dvor by Studio Betonika.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="box-border min-h-dvh w-full max-w-[100vw] overflow-x-clip bg-[#1a1a1a] px-4 py-12 sm:px-16 lg:px-24">
      <PageIcon />
      <div className="mx-auto w-full max-w-3xl text-center">
        <h1 className="mb-12 text-white font-bold uppercase tracking-[0.08em] text-[clamp(1.5rem,5vw,2.5rem)]">
          Privacy Policy
        </h1>
        <PrivacyPolicyContent />
      </div>
    </main>
  );
}
