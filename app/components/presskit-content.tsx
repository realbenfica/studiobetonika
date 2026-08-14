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
          A falling-block puzzle game where every piece is a fragment of Soviet
          nostalgia, set to brutalist aesthetics and an original soundtrack.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>Short description</h2>
        <p>
          Dvor is a falling-block game in two parts. Panelka rewards clean
          building – leave a gap and it&apos;s classic rules until you clear
          back to it, but build clean and the facade comes to life, piece by
          piece. Stroyka is the competitive branch: an endless Olympics
          marathon, a 40-line Sprint, and a Daily Challenge with a worldwide
          leaderboard.
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
            <span className={boldInline}>Panelka mode</span> — build without
            clearing lines; leave a gap and it switches to classic rules until
            you clear back down to it; build clean with no gaps and reach the
            twelfth row to trigger the Panelka reward
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
            <span className={boldInline}>Facade building</span> — as pieces lock,
            the facade comes to life
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
            </a>
          </li>
          <li>
            <span className={boldInline}>Privacy:</span>{" "}
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
          Severino and Alex Almeida – a wife and husband who live in London with
          their three daughters.
        </p>
        <p>
          Angelina Severino is a Visual Artist and award-winning Designer behind
          Dvor&apos;s game art and game design. Her awards include Cannes Lions,
          Epica, Global Talent UK – Exceptional Talent in Digital Technology;
          she&apos;s also an international keynote speaker across Design and
          Technology.
        </p>
        <p>
          Under the name Posteress her poster art is featured in Grafik
          Editions, she is a member of People of Print, and her designs
          participated in multiple apparel collaborations with brands like Zara,
          Massimo Dutti, etc.
        </p>
        <p>
          Angelina&apos;s art sits at the heart of what she brings to Dvor:
          design, typography and architecture treated as art forms in their own
          right.{" "}
          <a
            href="https://angelinaseverino.com"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            angelinaseverino.com
          </a>{" "}
          –{" "}
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
          Alex Almeida is the game developer and music composer and producer of
          Dvor, previously at Kwalee – a mobile gaming company founded by the
          former owner of Codemasters.
        </p>
        <p>
          Angelina grew up in the Soviet Union and later lived in Minsk for more
          than 20 years. Long before consoles ever reached her, she played the
          unofficial handheld games.
        </p>
        <p>
          Alex played the same kind of handheld as a child in Algarve, Portugal
          – an ocean and an entire political system away.
        </p>
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
          Panelka is the prime experience. Its mechanics are NES authentic – its
          pieces are called concretes: slabs of a Soviet prefabricated apartment
          block, falling into place. As each one locks, it reveals part of the
          facade – a window, a balcony, a painted panel. Posteress gives the
          game a visual identity unlike anything else in the genre – the space
          around the board is as carefully designed as the board itself.
        </p>
        <p>
          In Panelka, rows don&apos;t clear on their own – you build. Leave a
          gap, though, and it switches to classic rules: full rows clear normally
          until you&apos;ve cleared your way back down to it. Build clean, with
          no gaps at all, and the whole board rewards you instead – the board
          clears itself, and the speed climbs.
        </p>
        <p>
          Five atmosphere states evolve as you play – from the warmth of spring
          through the rains of autumn and the cold drive of winter – culminating
          in a gold transformation that has to be earned. The soundtrack changes
          with the atmospheres.
        </p>
        <p>
          Stroyka is the competitive branch – three modes for players who crave
          records and rankings. Olympics is a marathon, slow to fast. Sprint is a
          time trial against the clock. Daily Challenge resets globally every 24
          hours and feeds a worldwide leaderboard.
        </p>
        <p>
          Dvor has no advertisements, no in-app purchases, no daily obligations
          – one price, and both modes feed a global leaderboard tracked across
          all platforms.
        </p>
        <p>The version the falling blocks game always deserved.</p>
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
