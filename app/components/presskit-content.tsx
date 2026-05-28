import { DvorLogo } from "./dvor-logo";

const sectionHeading =
  "text-white/90 font-bold uppercase tracking-[0.08em]";

const linkClass = "text-logo-accent transition-colors hover:text-white";

export function PressKitContent() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 text-left text-[clamp(0.875rem,2.8vw,1rem)] text-white/70 leading-relaxed">
      <div className="flex justify-center pb-2">
        <DvorLogo size="large" />
      </div>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Key Facts</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className="font-bold text-white/80">Game:</span> Dvor
          </li>
          <li>
            <span className="font-bold text-white/80">Developer:</span> Studio
            Betonika (Art Britannia Ltd)
          </li>
          <li>
            <span className="font-bold text-white/80">Genre:</span> Falling
            block puzzle
          </li>
          <li>
            <span className="font-bold text-white/80">Steam:</span> September
            2026
          </li>
          <li>
            <span className="font-bold text-white/80">Xbox & PS5:</span>{" "}
            December 2026
          </li>
          <li>
            <span className="font-bold text-white/80">Nintendo Switch:</span>{" "}
            January 2027
          </li>
          <li>
            <span className="font-bold text-white/80">Mobile:</span> TBC
          </li>
          <li>
            <span className="font-bold text-white/80">Price:</span> £6.99–£7.99
            Steam and console
          </li>
          <li>
            <span className="font-bold text-white/80">Website:</span>{" "}
            <a href="https://studiobetonika.com" className={linkClass}>
              studiobetonika.com
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">Press contact:</span>{" "}
            <a href="mailto:hello@studiobetonika.com" className={linkClass}>
              hello@studiobetonika.com
            </a>
          </li>
        </ul>
        <p className="font-bold text-white/80">Core features:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            NES-authentic mechanics — DAS, ARR, and soft drop scoring true to
            the original
          </li>
          <li>
            7-bag randomiser — fair, modern, competitive standard
          </li>
          <li>
            Fully tunable DAS/ARR/SDF — presets for Modern, Competitive, and
            NES Authentic
          </li>
          <li>
            One global leaderboard across all platforms simultaneously
          </li>
          <li>Three modes — Classic, Sprint (40 lines), Daily Challenge</li>
          <li>
            Seven atmosphere states — world transforms as level increases
          </li>
          <li>Original coldwave soundtrack by Alex Almeida</li>
          <li>No advertisements. No in-app purchases. One price.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Studio Story</h2>
        <p>
          Studio Betonika is an independent game studio founded by Alex and
          Angelina, a husband and wife based in London.
        </p>
        <p>
          Angelina is a world-class designer. Alex writes code and makes music.
          Together they make games of considered design and psychological depth.
        </p>
        <p>
          Their parents belong to the same generation as Alexey Pajitnov, who
          created Tetris in 1984. Angelina grew up in the Soviet Union and later
          lived in Minsk. The family is now settled in London with three
          daughters.
        </p>
        <p>
          Studio Betonika takes its name from brutalist concrete architecture —
          beton, the material, the aesthetic, the world Tetris was born in.
        </p>
        <p>
          Their first game is Dvor. The word means courtyard in Russian —
          the space between the blocks, the place where Soviet children played.
          It is a falling block game that returns the genre to its cultural
          home: the brutalist architecture, the coldwave atmosphere, the
          restraint and precision of the original.
        </p>
        <p>
          Dvor is premium. No advertisements. No in-app purchases. One
          price, one global leaderboard across every platform simultaneously.
        </p>
        <p>It is Studio Betonika&apos;s first game. It arrives fully formed.</p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>About</h2>
        <p>
          Dvor is a falling block game built on NES-authentic mechanics — the
          same DAS, ARR, speed curves, and soft drop scoring that competitive
          players have trained on for decades, combined with a fair 7-bag
          randomiser and fully tunable handling. It is immediately familiar and
          immediately different.
        </p>
        <p>
          The world of Dvor is Soviet brutalist architecture. Seven atmosphere
          states respond to the player&apos;s level — the background shifts from
          near-black through deep blues and storm purple, culminating in a gold
          transformation at level 18 that feels earned. Angelina Severino&apos;s
          design work gives the game a visual identity unlike anything else in
          the genre.
        </p>
        <p>
          The soundtrack is original coldwave, composed and produced by Alex
          Almeida. Music evolves dynamically with the atmosphere states. There
          are no advertisements. No in-app purchases. One price.
        </p>
        <p>
          Three modes: Classic for score, Sprint for speed across 40 lines, and
          Daily Challenge — one attempt per day, the same piece sequence for
          every player on earth, one global leaderboard.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Screenshots</h2>
        <p className="italic text-white/50">
          Will be available at{" "}
          <a href="/press" className={linkClass}>
            studiobetonika.com/press
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Trailer</h2>
        <p className="italic text-white/50">
          60 second gameplay trailer — will be available at{" "}
          <a href="/press" className={linkClass}>
            studiobetonika.com/press
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Soundtrack</h2>
        <p>Composed and produced by Alex Almeida.</p>
        <p>Will be available on Bandcamp and all streaming platforms.</p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Links</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className="font-bold text-white/80">Website:</span>{" "}
            <a href="https://studiobetonika.com" className={linkClass}>
              studiobetonika.com
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">Press kit:</span>{" "}
            <a href="/press" className={linkClass}>
              studiobetonika.com/press
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">Privacy policy:</span>{" "}
            <a href="/privacy-policy" className={linkClass}>
              studiobetonika.com/privacy
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">TikTok:</span>{" "}
            <a
              href="https://www.tiktok.com/@studiobetonika"
              className={linkClass}
            >
              @studiobetonika
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">Bluesky:</span>{" "}
            <a
              href="https://bsky.app/profile/studiobetonika.bsky.social"
              className={linkClass}
            >
              @studiobetonika
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">X:</span>{" "}
            <a href="https://x.com/studiobetonika" className={linkClass}>
              @studiobetonika
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/studiobetonika"
              className={linkClass}
            >
              @studiobetonika
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Contact</h2>
        <p>
          <a href="mailto:hello@studiobetonika.com" className={linkClass}>
            hello@studiobetonika.com
          </a>
        </p>
        <p>
          Art Britannia Ltd, trading as Studio Betonika
          <br />
          London, United Kingdom
        </p>
      </section>

      <p className="text-white/50 italic">Last updated: May 2026</p>
    </div>
  );
}
