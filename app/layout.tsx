import type { Metadata, Viewport } from "next";
import { Archivo, Barlow, Oswald, Syne } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "./components/google-analytics";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Font switcher.
 * - `"alex"` → PP Alex (brand; Gosha is no longer in the repo)
 * - `"barlow"` → preferred trial face (geometric grotesque, similar feel to Gosha)
 * - `"archivo"` | `"syne"` | `"oswald"` → other trials
 */
const TRIAL_FONT = "barlow" as "alex" | "barlow" | "syne" | "archivo" | "oswald";

const alex = localFont({
  src: [
    {
      path: "../public/fonts/PPAlex-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPAlex-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brand",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brand",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brand",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brand",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brand",
  display: "swap",
});

const fonts = { alex, barlow, syne, archivo, oswald } as const;
const font = fonts[TRIAL_FONT];

export const metadata: Metadata = {
  title: "Studio Betonika",
  description: "Brutalist games. Beautiful worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.variable} ${font.className} h-full w-full overflow-x-hidden bg-[#1a1a1a] antialiased`}
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-[#1a1a1a] font-sans">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
