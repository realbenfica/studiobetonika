export function PrivacyPolicyContent() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 text-left text-[clamp(0.875rem,2.8vw,1rem)] text-white/70 leading-relaxed">
      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Who We Are
        </h2>
        <p>
          Dvor is developed and published by Art Britannia Ltd, trading as Studio
          Betonika.
        </p>
        <p>
          Art Britannia Ltd — Company number: 16631916
          <br />
          12 Mulberry Place, Pinnell Road, London, United Kingdom, SE9 6AR
        </p>
        <p>
          Contact:{" "}
          <a
            href="mailto:hello@studiobetonika.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@studiobetonika.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          The Short Version
        </h2>
        <p>
          Dvor collects nothing. No account. No internet connection required. No
          data leaves your device. Ever.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          What We Collect
        </h2>
        <p>
          Your high score is stored locally on your device using standard
          platform storage. It never leaves your device. We do not have access
          to it. It is deleted when you uninstall the game.
        </p>
        <p>That is the complete list.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          What We Do Not Collect
        </h2>
        <ul className="list-outside list-disc space-y-1 pl-5">
          <li>No name, email address, or contact information</li>
          <li>No location data</li>
          <li>No device identifiers or advertising identifiers</li>
          <li>No gameplay statistics or session data</li>
          <li>No analytics of any kind</li>
          <li>No cookies or tracking technologies</li>
          <li>No third party services of any kind</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Third Party Services
        </h2>
        <p>
          Dvor uses none. No analytics platform, no cloud storage, no
          advertising network, no external data processing of any kind.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Children
        </h2>
        <p>
          Dvor is rated for all ages. We do not collect data from anyone,
          including children.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Your Rights
        </h2>
        <p>
          As we hold no data about you, there is nothing to access, correct, or
          delete. If you have any questions contact{" "}
          <a
            href="mailto:hello@studiobetonika.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@studiobetonika.com
          </a>{" "}
          and we will respond within 30 days.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Changes
        </h2>
        <p>
          If we ever change this policy in a material way we will update the
          date above and notify users through the application.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Contact
        </h2>
        <p>
          <a
            href="mailto:hello@studiobetonika.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@studiobetonika.com
          </a>
        </p>
        <p>
          Art Britannia Ltd, 12 Mulberry Place, Pinnell Road, London, SE9 6AR
        </p>
        <p>
          UK ICO:{" "}
          <a
            href="https://ico.org.uk"
            className="text-logo-accent transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>{" "}
          — 0303 123 1113
        </p>
      </section>

      <p className="pt-2 text-white/50 italic">
        Studio Betonika — Last updated: June 2026
      </p>
    </div>
  );
}
