import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "./components/google-analytics";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
      className={`${alex.variable} ${alex.className} h-full w-full overflow-x-hidden bg-[#1a1a1a] antialiased`}
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-[#1a1a1a] font-sans">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
