import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full pb-2 text-left text-logo-grid leading-none tracking-normal text-[clamp(0.4375rem,2.5vw,0.875rem)] sm:tracking-[0.08em] uppercase">
      <div className="flex flex-nowrap items-center gap-x-1.5 whitespace-nowrap sm:gap-x-3">
        <Link
          href="/privacy-policy"
          className="transition-colors hover:text-logo-accent"
        >
          Privacy Policy
        </Link>
        <span aria-hidden="true">|</span>
        <a
          href="mailto:hello@studiobetonika.com"
          className="transition-colors hover:text-logo-accent"
        >
          hello@studiobetonika.com
        </a>
        <span aria-hidden="true">|</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
