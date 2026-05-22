import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const gosha = localFont({
  src: [
    {
      path: "../public/fonts/PPGoshaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPGoshaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gosha",
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
      className={`${gosha.variable} h-full w-full overflow-x-hidden bg-[#1a1a1a] font-sans antialiased`}
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-[#1a1a1a] font-sans">
        {children}
      </body>
    </html>
  );
}
