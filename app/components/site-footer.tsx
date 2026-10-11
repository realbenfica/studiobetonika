import Link from "next/link";
import { SocialLinks } from "./social-links";

const footerLinkText =
  "text-[clamp(0.6875rem,2.4vw,0.8125rem)] leading-none tracking-[0.12em]";

const footerLegalText =
  "text-[clamp(0.625rem,2vw,0.75rem)] leading-relaxed tracking-normal";

type SiteFooterProps = {
  variant?: "default" | "home";
  className?: string;
};

export function SiteFooter({ variant = "default", className = "" }: SiteFooterProps) {
  const isHome = variant === "home";

  return (
    <footer
      className={`w-full pb-8 uppercase text-logo-grid ${
        isHome ? "" : "border-t border-logo-grid pt-10"
      } ${className}`}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <SocialLinks className="justify-center" />

        <div
          className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-3 ${footerLinkText}`}
        >
          {!isHome && (
            <>
              <Link href="/dvor/press" className="transition-colors hover:text-logo-accent">
                Press
              </Link>
              <span aria-hidden="true" className="text-white/20">
                /
              </span>
              <Link href="/dvor/privacy-policy" className="transition-colors hover:text-logo-accent">
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-white/20">
                /
              </span>
            </>
          )}
          <a
            href="mailto:hello@studiobetonika.com"
            className="inline-flex items-center font-bold transition-colors hover:text-logo-accent"
          >
            <span>hello</span>
            <span className="mx-0.5 inline-flex shrink-0 items-center justify-center border border-logo-grid px-1 leading-none">
              @
            </span>
            <span>studiobetonika.com</span>
          </a>
        </div>
      </div>

      <p
        className={`mx-auto mt-8 max-w-3xl text-center normal-case text-white/30 ${footerLegalText}`}
      >
        © 2026 Art Britannia Ltd (trading as Studio Betonika). Company No.
        16631916.
        <br />
        Registered office: 12 Mulberry Place, Pinnell Road, London, SE9 6AR.
      </p>
    </footer>
  );
}
