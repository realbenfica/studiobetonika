export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
      <img
        src="/images/logo.png"
        alt="Studio Betonika"
        className="w-64"
      />
      <h1 className="mt-8 text-white font-light tracking-[0.2em] uppercase text-sm">
        Studio Betonika
      </h1>
      <p className="mt-3 text-white/40 text-xs tracking-widest uppercase">
        Brutalist games. Beautiful worlds. DVOR is coming 2026
      </p>
    </main>
  )
}