import { SocialLinks } from "./components/social-links";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-6">
      <img
        src="/images/logo.png"
        alt="Studio Betonika"
        className="w-64 max-w-full"
      />
      <h1 className="mt-8 w-full max-w-5xl text-center text-white font-light uppercase leading-none tracking-[0.08em] text-[clamp(1.75rem,8vw,4.375rem)] sm:tracking-[0.12em] lg:tracking-[0.2em]">
        Studio Betonika
      </h1>
      <p className="mt-3 w-full max-w-xl text-center text-white/40 text-xs tracking-widest uppercase">
        Brutalist games. Beautiful worlds. DVOR is coming 2026
      </p>
      <SocialLinks />
    </main>
  )
}