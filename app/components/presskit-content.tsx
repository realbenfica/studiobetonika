const sectionHeading =
  "text-white/90 font-bold uppercase tracking-[0.08em]";

const linkClass = "text-logo-accent underline transition-colors hover:text-white";

const boldInline = "font-bold text-white/80";

export function PressKitContent() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 text-left text-[clamp(0.875rem,2.8vw,1rem)] text-white/70 leading-relaxed">
      <section className="space-y-4">
        <h2 className={sectionHeading}>Key Facts</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>Game:</span> Dvor
          </li>
          <li>
            <span className={boldInline}>Developer:</span> Studio Betonika (Art
            Britannia Ltd)
          </li>
          <li>
            <span className={boldInline}>Genre:</span> Falling-block puzzle
          </li>
          <li>
            <span className={boldInline}>Platforms:</span> Steam (Mac &amp; PC)
            —{" "}
            <a
              href="https://store.steampowered.com/app/4881830/Dvor/"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              1 September 2026
            </a>
            . Xbox, PlayStation, and Nintendo Switch — coming soon.
          </li>
          <li>
            <span className={boldInline}>Price:</span> £7.99
          </li>
          <li>
            <span className={boldInline}>Website:</span>{" "}
            <a href="https://studiobetonika.com" className={linkClass}>
              studiobetonika.com
            </a>
          </li>
          <li>
            <span className={boldInline}>Press contact:</span>{" "}
            <a href="mailto:hello@studiobetonika.com" className={linkClass}>
              hello@studiobetonika.com
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>One-line pitch</h2>
        <p>
          A falling-block puzzle game where every piece is a slab of Soviet
          concrete — and where you build without fear in Panelka, or compete for
          the record in Stroyka.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Short description</h2>
        <p>
          Dvor is a falling-block game in two parts. Panelka rewards clean
          building over speed — no line clears, no pressure, just a facade that
          reveals itself piece by piece. Stroyka is the competitive branch: an
          endless Olympics marathon, a 40-line Sprint, and a Daily Challenge
          with a worldwide leaderboard.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Features</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>NES-authentic mechanics</span> — exact
            scoring, speed curves, and level system
          </li>
          <li>
            <span className={boldInline}>Panelka mode</span> — build the full
            facade, no line clearing, trigger Panelka at row 16
          </li>
          <li>
            <span className={boldInline}>Stroyka mode</span> — Olympics
            (marathon), Sprint (time trial), Daily Challenge (global
            leaderboard)
          </li>
          <li>
            <span className={boldInline}>Five atmosphere states</span> — Spring,
            Summer, Autumn, Winter, Gold
          </li>
          <li>
            <span className={boldInline}>Facade reveal</span> — as pieces lock,
            the building comes to life
          </li>
          <li>
            <span className={boldInline}>Season selector</span> — choose your
            starting atmosphere
          </li>
          <li>
            <span className={boldInline}>Tunable DAS/ARR</span> — Modern,
            Competitive, and NES Authentic presets, plus a Custom mode with
            fine-control sliders
          </li>
          <li>
            <span className={boldInline}>Original soundtrack by Betonika</span> —
            evolves dynamically through all five atmosphere states
          </li>
          <li>
            <span className={boldInline}>Global leaderboard</span> — Panelka high
            scores and Stroyka records tracked across all platforms
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Links</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>Steam:</span>{" "}
            <a
              href="https://store.steampowered.com/app/4881830/Dvor/"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              store.steampowered.com/app/4881830/Dvor
            </a>
          </li>
          <li>
            <span className={boldInline}>Trailer:</span>{" "}
            <a
              href="https://youtu.be/-ZWJ22-pYI0"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              youtu.be/-ZWJ22-pYI0
            </a>
          </li>
          <li>
            <span className={boldInline}>Soundtrack:</span>{" "}
            <a
              href="https://ditto.fm/dvor"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ditto.fm/dvor
            </a>{" "}
            — all major streaming platforms
          </li>
          <li>
            <span className={boldInline}>Privacy policy:</span>{" "}
            <a href="/dvor/privacy-policy" className={linkClass}>
              studiobetonika.com/dvor/privacy-policy
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>About the Studio</h2>
        <p>
          Studio Betonika is an independent game studio founded by Angelina
          Severino and Alex Almeida, a wife and husband based in London.
        </p>
        <p>
          Angelina Severino is a visual artist and award-winning designer —
          Cannes Lions, Global Talent visa holder, keynote speaker across design
          and technology. Her art project Posteress, a minimalist poster studio
          featured in Grafik Editions and People of Print, sits at the heart of
          what she brings to Dvor: typography and architecture treated as art
          forms in their own right.{" "}
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
          lived in Minsk. The family is now settled in London with their
          daughters.
        </p>
        <p>
          Studio Betonika takes its name from brutalist concrete —{" "}
          <em className="text-white/80 italic">beton</em>, the material, the
          aesthetic, the world Tetris was born in. Their first game is Dvor. The
          word means courtyard in Russian. The space between the blocks. The
          place where Soviet children played.
        </p>
        <p>Dvor is their first game. It arrives fully formed.</p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>About Dvor</h2>
        <p>
          <span className={boldInline}>Panelka</span> is the prime experience —
          designed for people who want to feel something. Built on NES-authentic
          mechanics, its pieces are called concretes: slabs of a Soviet
          prefabricated apartment block, falling into place. As each one locks,
          it reveals part of the facade — a window, a balcony, a stained panel.
          Posteress gives the game a visual identity unlike anything else in the
          genre; the 16:9 layout turns a portrait game into an artistic
          statement, with the space around the board as much a part of the
          design as the board itself.
        </p>
        <p>
          In Panelka, rows don&apos;t clear — you build. The facade reveals
          itself piece by piece. When the building reaches row 16 with no gaps,
          the game rewards you: the stars come out, the board clears, and the
          speed climbs. Leave a hole, and the response is precise — lines clear
          above it, exposing the gap so you can fill it from below.
        </p>
        <p>
          Five atmosphere states evolve as you play — from the warmth of spring
          through the urgency of autumn and the cold drive of winter —
          culminating in a gold transformation that has to be earned. The
          soundtrack evolves with the atmosphere; by the time gold arrives, the
          music has changed completely.
        </p>
        <p>
          <span className={boldInline}>Stroyka</span> is the competitive branch —
          three modes for players who want records and rankings. Olympics is a
          marathon, slow to fast. Sprint is a time trial against the clock.
          Daily Challenge resets globally every 24 hours and feeds a worldwide
          leaderboard.
        </p>
        <p>
          Panelka has no advertisements, no in-app purchases, no daily
          obligations — one price, and both modes feed a global leaderboard
          tracked across all platforms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Contact</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>Email:</span>{" "}
            <a href="mailto:hello@studiobetonika.com" className={linkClass}>
              hello@studiobetonika.com
            </a>
          </li>
          <li>
            <span className={boldInline}>Company:</span> Art Britannia Ltd,
            trading as Studio Betonika
          </li>
          <li>
            <span className={boldInline}>Location:</span> London, United Kingdom
          </li>
        </ul>
      </section>
    </div>
  );
}
