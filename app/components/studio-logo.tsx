import type { CSSProperties } from "react";

/*
 * The Studio Betonika mark, rebuilt as SVG so its windows can light up.
 * Geometry is measured from /images/logo4.png (2863×730): the mark is the
 * square at x 0–652, y 76–730; the wordmark starts at x 740.
 */
const OFFSETS = [7.89, 30.92, 54.17, 77.19];
const WINDOW = 14.91;
const BRAND_WINDOW = 6; // row 1, column 2 — the one lit window in the logo

// Order in which windows blink on during the intro; the brand window comes last.
const INTRO_ORDER = [5, 12, 2, 15, 9, 0, 13, 3, 10, 14, 1, 8, 11, 4, 7];

// A few windows keep flickering now and then, like a block at dusk.
const IDLE: Record<number, { period: number; delay: number }> = {
  0: { period: 13, delay: 4.5 },
  9: { period: 17, delay: 7 },
  11: { period: 11, delay: 9.5 },
  15: { period: 19, delay: 5.5 },
};

function windowStyle(index: number, row: number, col: number): CSSProperties {
  const idle = IDLE[index];
  return {
    "--intro-delay": `${0.25 + INTRO_ORDER.indexOf(index) * 0.07}s`,
    "--wave-delay": `${(row + col) * 0.06}s`,
    ...(idle && {
      "--idle-period": `${idle.period}s`,
      "--idle-delay": `${idle.delay}s`,
    }),
  } as CSSProperties;
}

export function StudioLogo({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Studio Betonika"
      className={`studio-logo relative aspect-[2863/730] ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[89.6%] w-[22.77%]"
      >
        <rect width="100" height="100" fill="var(--logo-grid)" />
        {OFFSETS.map((y, row) =>
          OFFSETS.map((x, col) => {
            const index = row * 4 + col;
            const isBrand = index === BRAND_WINDOW;
            return (
              <rect
                key={index}
                x={x}
                y={y}
                width={WINDOW}
                height={WINDOW}
                fill={isBrand ? "var(--logo-accent)" : "var(--background)"}
                className={
                  isBrand
                    ? "logo-window logo-window--brand"
                    : `logo-window${IDLE[index] ? " logo-window--idle" : ""}`
                }
                style={windowStyle(index, row, col)}
              />
            );
          }),
        )}
      </svg>
      <div
        aria-hidden="true"
        className="logo-wordmark absolute top-0 right-0 h-full w-[74.15%] bg-[url(/images/logo4.png)] bg-[length:auto_100%] bg-right bg-no-repeat"
      />
    </div>
  );
}
