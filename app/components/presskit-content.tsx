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

      <p className="font-bold text-white/80">Last updated: June 2026</p>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Studio Betonika</h2>
        <p>
          Studio Betonika is an independent game studio founded by Angelina and
          Alex Severino, a husband and wife based in London.
        </p>
        <p>
          Angelina is an award-winning Brand and Product Design Leader with two
          decades of experience across global advertising and technology. Art
          Director at TBWA, DDB and Starcom, leading campaigns for Coca-Cola,
          Mastercard and Volkswagen. Design Lead at Gamgee and Lebara. Keynote
          speaker across design and technology. Global Talent visa holder
          recognised for Exceptional Talent in Digital Technology by Tech
          Nation. She is also the artist behind Posteress, a poster art studio
          featured in Grafik Editions and People of Print, with an apparel
          collaboration for Zara Man.{" "}
          <a
            href="https://angelinaseverino.com"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            angelinaseverino.com
          </a>{" "}
          —{" "}
          <a
            href="https://posteress.com"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            posteress.com
          </a>
        </p>
        <p>
          Their parents belong to the same generation as Alexey Pajitnov, who
          created Tetris in 1984. Angelina grew up in the Soviet Union and later
          lived in Minsk. The family is now settled in London with three
          daughters.
        </p>
        <p>
          Studio Betonika takes its name from brutalist concrete —{" "}
          <em className="text-white/80 italic">beton</em>, the material, the
          aesthetic, the world Tetris was born in. Their first game is Dvor. The
          word means courtyard in Russian. The space between the blocks. The
          place where Soviet children played.
        </p>
        <p>It is their first game. It arrives fully formed.</p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>
          Dvor — The space between the blocks
        </h2>
        <p>
          Dvor is a falling block game designed for people who want to feel
          something.
        </p>
        <p>
          It is built on NES-authentic mechanics — the same scoring, speed
          curves, and rules the genre was born with. But for the first time, it
          is beautiful. The version Tetris always deserved.
        </p>
        <p>
          The world of Dvor is Soviet brutalist architecture. Seven atmosphere
          states evolve as you play — from a sunny afternoon through first snow,
          heavy snowfall, blizzard, and whiteout — culminating in a gold
          transformation that has to be earned. Angelina Severino&apos;s design
          gives the game a visual identity unlike anything else in the genre.
          The 16:9 layout turns the problem of a portrait game into an artistic
          statement — the space around the board is part of the design.
        </p>
        <p>
          The soundtrack is original coldwave, composed and produced by Alex de
          Alma. It lives in the same cultural space as the most resonant
          post-Soviet music of the last decade — the world of Molchat Doma, the
          sound of brutalism set to music. It evolves dynamically as the
          atmosphere shifts. By the time the gold state arrives, the music has
          changed completely.{" "}
          <a
            href="https://alexdealma.com"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            alexdealma.com
          </a>
        </p>
        <p>
          Dvor introduces <span className="font-bold text-white/80">Panelka</span>
          . A new scoring moment named after the Soviet prefabricated apartment
          blocks the pieces are made from. Build a solid wall — nine columns
          full, one tunnel open — reach the height of a building, and the game
          rewards you. Break it. Rebuild it. Earn it again.
        </p>
        <p>
          No advertisements. No in-app purchases. No leaderboard. No daily
          obligations. No online requirement. One price.
        </p>
        <p>
          You choose your starting level — one per atmosphere state, from the
          quiet of a sunny afternoon to the edge of a storm. You play. The world
          builds around you. If you survive long enough it turns gold, and the
          speed keeps climbing until it is over.
        </p>
        <p>
          Your high score is the only thing that persists. It is enough. It has
          always been enough.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Features</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className="font-bold text-white/80">NES-authentic mechanics</span>{" "}
            — exact scoring, speed curves, and level system.
          </li>
          <li>
            <span className="font-bold text-white/80">Panelka</span> — a new
            scoring mechanic unique to Dvor, named after the architecture the
            pieces are built from.
          </li>
          <li>
            <span className="font-bold text-white/80">Seven atmosphere states</span>{" "}
            — the world transforms as you play.
          </li>
          <li>
            <span className="font-bold text-white/80">Level selector 1–7</span> —
            choose your starting atmosphere.
          </li>
          <li>
            <span className="font-bold text-white/80">Tunable DAS/ARR</span> —
            presets for Modern, Competitive, and NES Authentic.
          </li>
          <li>
            <span className="font-bold text-white/80">
              Original coldwave soundtrack
            </span>{" "}
            — composed by Alex de Alma, dynamically evolving.
          </li>
          <li>
            <span className="font-bold text-white/80">Pure experience</span> — No
            advertisements. No in-app purchases. No leaderboard. One price.
          </li>
        </ul>
      </section>

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
            <span className="font-bold text-white/80">Genre:</span> Falling block
            puzzle
          </li>
          <li>
            <span className="font-bold text-white/80">Steam:</span> September 2026
          </li>
          <li>
            <span className="font-bold text-white/80">Xbox & PS5:</span> December
            2026
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
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Screenshots & Trailer</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className="font-bold text-white/80">Visual assets:</span>{" "}
            60-second gameplay trailer and screenshots available at{" "}
            <a href="https://studiobetonika.com/press" className={linkClass}>
              studiobetonika.com/press
            </a>{" "}
            before launch.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Soundtrack</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className="font-bold text-white/80">Audio:</span> Composed and
            produced by Alex de Alma.
          </li>
          <li>
            <span className="font-bold text-white/80">Availability:</span>{" "}
            Available on Bandcamp and all streaming platforms from September
            2026.
          </li>
        </ul>
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
            <a href="https://studiobetonika.com/press" className={linkClass}>
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
            <span className="font-bold text-white/80">
              TikTok / Instagram / Bluesky / X:
            </span>{" "}
            @studiobetonika
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Contact</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className="font-bold text-white/80">Email:</span>{" "}
            <a href="mailto:hello@studiobetonika.com" className={linkClass}>
              hello@studiobetonika.com
            </a>
          </li>
          <li>
            <span className="font-bold text-white/80">Company:</span> Art
            Britannia Ltd, trading as Studio Betonika
          </li>
          <li>
            <span className="font-bold text-white/80">Location:</span> London,
            United Kingdom
          </li>
        </ul>
      </section>
    </div>
  );
}
