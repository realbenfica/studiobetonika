import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "./components/google-analytics";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/** Flip to `false` to restore PP Alex (brand face). */
const USE_SYNE = true;

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
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});

const font = USE_SYNE ? syne : alex;

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
      className={`${font.variable} h-full w-full overflow-x-hidden bg-[#1a1a1a] font-sans antialiased`}
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-[#1a1a1a] font-sans">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
