import Link from "next/link";
import { SocialLinks } from "./social-links";

const footerText =
  "text-[clamp(0.4375rem,2.5vw,0.875rem)] leading-none tracking-normal sm:tracking-[0.08em]";

type SiteFooterProps = {
  variant?: "default" | "home";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const isHome = variant === "home";

  return (
    <footer
      className={`w-full pb-2 text-left text-logo-grid uppercase ${footerText}`}
    >
      {isHome && <SocialLinks className="mb-6" />}

      <div className="flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap sm:gap-x-3">
        {!isHome && (
          <>
            <Link
              href="/press"
              className="transition-colors hover:text-logo-accent"
            >
              Press
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/privacy-policy"
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
