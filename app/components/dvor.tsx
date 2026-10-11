import Link from "next/link";
import type { CSSProperties } from "react";
import { DvorLogo } from "./dvor-logo";
import { PlayStationLogo } from "./playstation-logo";
import { SteamLogo } from "./steam-logo";

/*
 * The Dvor block recreates the game's key art: light terrazzo concrete, a
 * heavy grid, and five stripes that pour down and fan out across the panel.
 */

// Stripe edges in a 1000×1000 box: straight down from the top, then fanning
// out past the bend. Positions follow the key art.
const BEND = 300;
const STRIPES = [
  { color: "#9c1320", top: [298, 361], bottom: [-260, 40] },
  { color: "#b8621a", top: [383, 446], bottom: [80, 340] },
  { color: "#b38a10", top: [468, 532], bottom: [372, 628] },
  { color: "#3b5f15", top: [553, 617], bottom: [660, 920] },
  { color: "#2f416e", top: [639, 702], bottom: [960, 1260] },
] as const;

function stripePath(top: readonly number[], bottom: readonly number[]) {
  const [a, b] = top;
  const [c, d] = bottom;
  const k = 1000 - BEND;
  return [
    `M${a} 0V${BEND}`,
    `C${a} ${BEND + k * 0.45} ${c + (a - c) * 0.25} ${1000 - k * 0.25} ${c} 1000`,
    `H${d}`,
    `C${d + (b - d) * 0.25} ${1000 - k * 0.25} ${b} ${BEND + k * 0.45} ${b} ${BEND}`,
    "V0Z",
  ].join("");
}

// Terrazzo flecks, generated from a fixed seed so server and client agree.
const FLECKS = (() => {
  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 90 }, () => ({
    x: rand() * 180,
    y: rand() * 180,
    size: 1.2 + rand() * 3.4,
    diamond: rand() < 0.45,
    shade: rand() < 0.55 ? "#3a3a3a" : "#7c7c7c",
    opacity: 0.3 + rand() * 0.5,
  }));
})();

const LINKS = [
  { kicker: "Listen", label: "Soundtrack", href: "https://ditto.fm/dvor", color: "#9c1320", external: true },
  { kicker: "Media", label: "Press Kit", href: "/dvor/press", color: "#b38a10", external: false },
  { kicker: "Legal", label: "Privacy Policy", href: "/dvor/privacy-policy", color: "#2f416e", external: false },
] as const;

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {STRIPES.map((stripe, i) => (
        <div
          key={stripe.color}
          className="stripe-pour absolute inset-0"
          style={{ animationDelay: `${0.15 + i * 0.12}s` }}
        >
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="h-full w-full">
            <path d={stripePath(stripe.top, stripe.bottom)} fill={stripe.color} />
          </svg>
        </div>
      ))}

      {/* The grid and flecks multiply over the stripes, as in the key art. */}
      <div className="dvor-grid absolute inset-0 mix-blend-multiply" />
      <svg className="absolute inset-0 h-full w-full mix-blend-multiply">
        <defs>
          <pattern id="dvor-terrazzo" width="180" height="180" patternUnits="userSpaceOnUse">
            {FLECKS.map((f, i) => (
              <rect
                key={i}
                x={f.x}
                y={f.y}
                width={f.size}
                height={f.size}
                fill={f.shade}
                opacity={f.opacity}
                transform={f.diamond ? `rotate(45 ${f.x + f.size / 2} ${f.y + f.size / 2})` : undefined}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dvor-terrazzo)" />
      </svg>
    </div>
  );
}

export function Dvor() {
  return (
    <section
      aria-labelledby="dvor-title"
      className="relative w-full overflow-hidden border-y-[6px] border-[#1a1a1a] bg-[#bab9b5] text-[#1a1a1a]"
    >
      <Backdrop />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <p className="rise bg-[#1a1a1a] px-3 py-2 text-[0.6875rem] uppercase tracking-[0.3em] text-logo-accent sm:text-xs">
          A Studio Betonika game
        </p>

        <h2
          id="dvor-title"
          className="rise rise-delay-1 mt-8 text-[clamp(2.75rem,12vw,8rem)] leading-none text-white [filter:drop-shadow(0.05em_0.07em_0_rgb(26_26_26_/_0.6))]"
        >
          <DvorLogo />
        </h2>

        <p className="rise rise-delay-2 mt-8 max-w-xl bg-[#f2f0ea] px-4 py-3 text-center text-[clamp(0.875rem,2.4vw,1.0625rem)] leading-snug shadow-[4px_4px_0_#1a1a1a]">
          A falling-block game about building, not clearing.
        </p>

        <figure className="rise rise-delay-3 m-0 mt-12 w-full sm:mt-16">
          <div className="relative aspect-video w-full overflow-hidden border-[6px] border-[#1a1a1a] bg-black shadow-[14px_14px_0_rgb(26_26_26_/_0.85)]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/1TmWJuN2piI"
              title="Dvor trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </figure>

        <div className="mt-12 grid w-full gap-5 sm:mt-14 sm:grid-cols-[minmax(0,1fr)_auto]">
          <a
            href="https://store.steampowered.com/app/4881830/Dvor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dvor now on Steam"
            className="press group flex items-center justify-between gap-4 border-2 border-[#1a1a1a] bg-[#1a1a1a] px-5 py-5 text-logo-accent sm:px-7"
          >
            <span className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[clamp(1.125rem,3.4vw,1.625rem)] font-bold uppercase leading-none">
              <DvorLogo />
              <span className="font-normal">now on</span>
              <SteamLogo />
            </span>
            <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
          <div className="press-static flex items-center justify-center gap-4 border-2 border-[#1a1a1a] bg-[#f2f0ea] px-6 py-5">
            <span className="text-[0.6875rem] uppercase tracking-[0.25em]">Coming to</span>
            <PlayStationLogo className="text-[1.375rem]" />
          </div>
        </div>

        <nav aria-label="Site pages" className="mt-5 grid w-full gap-5 sm:grid-cols-3">
          {LINKS.map((link) => {
            const className =
              "press group flex flex-col gap-8 border-2 border-[#1a1a1a] bg-[#f2f0ea] p-5 transition-colors hover:bg-[var(--swatch)] hover:text-white sm:p-6";
            const style = { "--swatch": link.color } as CSSProperties;
            const content = (
              <>
                <span className="flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.25em] opacity-70">
                  <span
                    aria-hidden="true"
                    className="size-2.5 bg-[var(--swatch)] group-hover:bg-white"
                  />
                  {link.kicker}
                </span>
                <span className="flex items-end justify-between gap-4 text-[clamp(1.0625rem,2.4vw,1.3125rem)] font-bold uppercase leading-none tracking-[0.08em]">
                  {link.label}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    {link.external ? "↗" : "→"}
                  </span>
                </span>
              </>
            );
            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
              >
                {content}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={className} style={style}>
                {content}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
