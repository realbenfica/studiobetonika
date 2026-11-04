import Link from "next/link";
import type { CSSProperties } from "react";
import { DvorLogo } from "./dvor-logo";
import { PlayStationLogo } from "./playstation-logo";
import { SteamLogo } from "./steam-logo";
import TrailerPlayer from "./trailer-player";

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

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <h2
          id="dvor-title"
          className="rise text-[clamp(2.75rem,12vw,8rem)] leading-none text-white [filter:drop-shadow(0.05em_0.07em_0_rgb(26_26_26_/_0.6))]"
        >
          <DvorLogo />
        </h2>

        <div className="rise rise-delay-1 mt-20 flex w-full max-w-[55rem] flex-col sm:mt-28">
          <div className="order-2 mt-12 grid w-full grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3">
            <a
              href="https://store.steampowered.com/app/4881830/Dvor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dvor available on Steam"
              className="press group relative flex items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a] px-11 py-5 text-logo-accent hover:bg-logo-accent hover:text-[#1a1a1a] max-[22rem]:px-4 sm:col-span-2 md:px-14"
            >
              <span className="block whitespace-nowrap text-[clamp(1.25rem,3.4vw,2rem)] font-bold uppercase leading-none">
                <span className="font-normal">available on</span>
                <SteamLogo className="ml-3" />
              </span>
              <span aria-hidden="true" className="absolute right-5 text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-[22rem]:hidden md:right-7">
                ↗
              </span>
            </a>
            <div className="press-static flex items-center justify-center gap-4 whitespace-nowrap border-2 border-[#1a1a1a] bg-[#f2f0ea] px-6 py-5 transition-colors hover:bg-[#b8621a] hover:text-white sm:max-lg:flex-col sm:max-lg:gap-2 sm:max-lg:px-3">
              <span className="text-[0.6875rem] uppercase tracking-[0.25em]">
                Coming to
              </span>
              <PlayStationLogo className="text-[1.625rem]" />
            </div>
          </div>

          <figure className="order-1 m-0 w-full">
            <div className="relative w-full overflow-hidden border-[6px] border-[#1a1a1a] bg-black shadow-[14px_14px_0_#1a1a1a]">
              <TrailerPlayer
                src="/videos/dvor-trailer.mp4"
                poster="/images/dvor-trailer.png"
                alt="Dvor trailer"
              />
            </div>
          </figure>

          <nav aria-label="Site pages" className="order-3 mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
