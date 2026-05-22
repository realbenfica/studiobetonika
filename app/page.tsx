import { SocialLinks } from "./components/social-links";

export default function Home() {
  return (
    <main className="box-border flex min-h-dvh w-full max-w-[100vw] flex-col items-center justify-center overflow-x-clip bg-[#1a1a1a] px-4 py-8">
      <div className="flex w-full min-w-0 max-w-full flex-col items-center">
        <img
          src="/images/logo3.png"
          alt="Studio Betonika"
          className="h-auto max-h-[17.5rem] w-full max-w-full object-contain sm:max-h-[20rem] sm:max-w-5xl"
        />
        <div className="mt-8 flex w-full justify-center">
          <p className="text-left text-white/40 uppercase leading-relaxed tracking-[0.12em] text-[clamp(0.875rem,4.7vw,1.5rem)]">
            Brutalist games.
            <br />
            Beautiful worlds.
            <br />
            DVOR coming Autumn 2026
          </p>
        </div>
        <SocialLinks />
      </div>
    </main>
  );
}
