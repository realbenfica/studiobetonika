import Link from "next/link";
import { SocialLinks } from "./social-links";

const footerText =
  "text-[clamp(0.375rem,2vw,0.625rem)] leading-none tracking-normal sm:text-[clamp(0.4375rem,2.5vw,0.875rem)] sm:tracking-[0.08em]";

type SiteFooterProps = {
  variant?: "default" | "home";
  className?: string;
};

export function SiteFooter({ variant = "default", className = "" }: SiteFooterProps) {
  const isHome = variant === "home";

  return (
    <footer
      className={`pb-2 text-logo-grid uppercase ${footerText} ${
        isHome ? "w-max max-w-full self-start text-left" : "mx-auto w-fit text-center"
      } ${className}`}
    >
      {isHome && <SocialLinks className="mb-6" />}

      <div
        className={`flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap sm:gap-x-3 ${
          isHome ? "" : "justify-center"
        }`}
      >
        {!isHome && (
          <>
            <Link
              href="/dvor/press"
              className="transition-colors hover:text-logo-accent"
            >
              Press
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/dvor/privacy-policy"
              className="transition-colors hover:text-logo-accent"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
          </>
        )}
        <a
          href="mailto:hello@studiobetonika.com"
          className="inline-flex items-center transition-colors hover:text-logo-accent"
        >
          <span>hello</span>
          <span className="mx-0.5 inline-flex shrink-0 items-center justify-center border border-logo-grid px-0.5 leading-none">
            @
          </span>
          <span>studiobetonika.com</span>
        </a>
      </div>
      <p className="mt-2 max-w-3xl normal-case leading-snug">
        © 2026 Art Britannia Ltd (trading as Studio Betonika). Company No.
        16631916.
        <br />
        Registered office: 12 Mulberry Place, Pinnell Road, London, SE9 6AR.
      </p>
    </footer>
  );
}
