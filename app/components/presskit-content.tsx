const sectionHeading =
  "text-white/90 font-bold uppercase tracking-[0.08em]";

const linkClass = "text-logo-accent underline transition-colors hover:text-white";

const boldInline = "font-bold text-white/80";

export function PressKitContent() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 text-left text-[clamp(0.9375rem,2.2vw,1.125rem)] text-white/70 leading-relaxed">
      <section className="space-y-4">
        <h2 className={sectionHeading}>Fact sheet</h2>
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
            <span className={boldInline}>Platforms:</span>{" "}
            Steam (Mac &amp; PC) —{" "}
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
            <span className={boldInline}>Price:</span> £5.99 / $6.99 / €6.99
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
          A falling-block puzzle game where every piece is a fragment of Soviet
          nostalgia, set to brutalist aesthetics and an original soundtrack.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Short description</h2>
        <p>
          Dvor is a falling-block game about building, not clearing. In Panelka,
          rows don&apos;t clear on their own – you build. Leave a gap and
          it&apos;s classic rules until you clear back down to it; build clean
          and the facade comes to life, piece by piece. The Daily Challenge
          deals every player the same pieces once a day, with a worldwide
          leaderboard.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Features</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>Panelka mode</span> — build without
            clearing lines; leave a gap and it switches to classic rules until
            you clear back down to it; build clean with no gaps and reach the
            twelfth row to trigger the Panelka reward
          </li>
          <li>
            <span className={boldInline}>Daily Challenge</span> — the same
            seeded pieces for every player, one attempt a day, worldwide
            leaderboard
          </li>
          <li>
            <span className={boldInline}>Evolving atmospheres</span> — four
            seasons across twelve speed levels, plus the Gold Transformation
          </li>
          <li>
            <span className={boldInline}>Facade building</span> — as pieces lock,
            the facade comes to life
          </li>
          <li>
            <span className={boldInline}>Season selector</span> — choose your
            starting atmosphere
          </li>
          <li>
            <span className={boldInline}>Tunable DAS/ARR</span> — Modern and
            Competitive presets, plus a Custom mode with fine-control sliders
          </li>
          <li>
            <span className={boldInline}>Original soundtrack by Betonika</span> —
            moves with every season, through to the Gold Transformation
          </li>
          <li>
            <span className={boldInline}>Global leaderboard</span> — Panelka high
            scores and Daily Challenge results tracked across all platforms
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
            <span className={boldInline}>itch.io:</span>{" "}
            <a
              href="https://studio-betonika.itch.io/dvor"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              studio-betonika.itch.io/dvor
            </a>
          </li>
          <li>
            <span className={boldInline}>Trailer:</span>{" "}
            <a
              href="https://youtu.be/1TmWJuN2piI"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              youtu.be/1TmWJuN2piI
            </a>
          </li>
          <li>
            <span className={boldInline}>Gameplay:</span>{" "}
            <a
              href="https://youtu.be/Vo2kRYIB-5U"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              youtu.be/Vo2kRYIB-5U
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
            </a>
          </li>
          <li>
            <span className={boldInline}>Privacy:</span>{" "}
            <a href="/dvor/privacy-policy" className={linkClass}>
              studiobetonika.com/dvor/privacy-policy
            </a>
          </li>
          <li>
            <span className={boldInline}>IGDB:</span>{" "}
            <a
              href="https://www.igdb.com/games/dvor"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              igdb.com/games/dvor
            </a>
          </li>
          <li>
            <span className={boldInline}>IndieDB:</span>{" "}
            <a
              href="https://www.indiedb.com/games/dvor"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              indiedb.com/games/dvor
            </a>
          </li>
          <li>
            <span className={boldInline}>Game Press:</span>{" "}
            <a
              href="https://www.game.press/g/games/1b046744"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              game.press/g/games/1b046744
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>About Dvor</h2>
        <p>
          Dvor means courtyard in Russian – the shared space between apartment
          blocks where countless childhoods happened. It was an extension of the
          living room; the bench outside, of the couch. People could leave the
          most valuable items out there and they&apos;d never be touched. Any
          child could be left in the dvor to play with their friends – and their
          parents would only periodically step out to check on them. Bench
          conversations, hanging up laundry, football against a wall, whole
          blocks turned into a safe communal space. The space between the
          blocks. The place where Soviet children played, where life happened.
        </p>
        <p>
          Dvor returns the falling-block game to its cultural home: a minimalist
          marriage of brutalist aesthetics, an original evolving soundtrack, and
          precise puzzle mechanics. The board is no longer just a playing field.
          It is a construction site.
        </p>
        <p>
          <span className={boldInline}>Construct the Panelka.</span> The falling
          pieces are concretes – slabs of a modular building dropping into place.
          The moment a piece locks down, it transforms from raw material into
          part of a living facade: a window, a balcony, a concrete panel. Floor
          by floor, a massive prefabricated block emerges from your play.
        </p>
        <p>
          In Panelka, rows don&apos;t clear on their own – you build. Leave a
          gap, though, and it switches to classic rules: full rows clear normally
          until you&apos;ve cleared your way back down to it. Build clean, with
          no gaps at all, and the whole board rewards you instead – the board
          clears itself, and the speed climbs.
        </p>
        <p>
          <span className={boldInline}>Authentic precision.</span> A modern, fair
          thirteen-bag randomiser alongside customisable DAS and ARR, with full
          controller support throughout, tested on Xbox Series X|S and PS5
          controllers.
        </p>
        <p>
          <span className={boldInline}>Evolving atmospheres.</span> Four seasons
          breathe and shift across twelve speed levels as you play – from the
          quiet warmth of spring, through the dreaminess of summer and the rains
          of autumn, into the cold drive of winter. Survive long enough to earn
          the Gold Transformation: the coldness dissolves, the storm breaks, and
          the atmosphere permanently shifts into gold.
        </p>
        <p>
          <span className={boldInline}>A striking audio-visual synergy.</span>{" "}
          Art directed by Posteress, a visual artist who treats typography and
          brutalism as fine art forms – architectural sidebars frame the matrix,
          turning negative space into design. The original soundtrack by Betonika
          draws on Soviet music across the decades, from tender waltz to urgent
          post-punk to euphoric release, moving with every season to mirror the
          world closing in around you.
        </p>
        <p>
          The Daily Challenge resets globally every 24 hours – the same pieces
          for every player, one attempt a day, one worldwide leaderboard.
        </p>
        <p>
          Dvor has no advertisements, no in-app purchases, no daily obligations
          – one price, and both modes feed a global leaderboard tracked across
          all platforms.
        </p>
        <p>The version the falling blocks game always deserved.</p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>About the Studio</h2>
        <p>
          Studio Betonika is a small independent game studio based in London.
        </p>
        <p>Development for Dvor is by Alex Severino.</p>
        <p>The original soundtrack is by Betonika.</p>
        <p>
          The art and game design for Dvor are by Posteress, an award-winning
          Visual Artist and Designer.{" "}
          <a
            href="https://posteress.com"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            posteress.com
          </a>
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
            <span className={boldInline}>Company:</span> Studio Betonika (Art
            Britannia Ltd)
          </li>
          <li>
            <span className={boldInline}>Location:</span> London, United Kingdom
          </li>
        </ul>
      </section>
    </div>
  );
}
