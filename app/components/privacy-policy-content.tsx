const sectionHeading =
  "flex items-center gap-4 text-white font-bold uppercase tracking-[0.12em] text-[clamp(1.125rem,3vw,1.5rem)] before:h-px before:w-8 before:shrink-0 before:bg-logo-accent";

const subHeading = "text-white/80 font-bold tracking-[0.04em]";

const linkClass =
  "text-logo-accent underline underline-offset-4 decoration-logo-grid transition-colors hover:text-white hover:decoration-logo-accent break-all";

const boldInline = "font-bold text-white/80";

const thirdPartyServices = [
  {
    name: "Steam",
    purpose: "Windows and macOS distribution",
    provider: "Valve Corporation",
    policyUrl: "https://store.steampowered.com/privacy_agreement",
    policyLabel: "store.steampowered.com/privacy_agreement",
  },
  {
    name: "Google Firebase",
    purpose: "Leaderboard storage",
    provider: "Google LLC",
    policyUrl: "https://policies.google.com/privacy",
    policyLabel: "policies.google.com/privacy",
  },
  {
    name: "Nintendo Switch",
    purpose: "Console distribution (from Jan 2027)",
    provider: "Nintendo Co., Ltd.",
    policyUrl: "https://www.nintendo.co.uk/legal/privacy-policy",
    policyLabel: "nintendo.co.uk/legal/privacy-policy",
  },
  {
    name: "Xbox",
    purpose: "Console distribution (from Dec 2026)",
    provider: "Microsoft",
    policyUrl: "https://privacy.microsoft.com",
    policyLabel: "privacy.microsoft.com",
  },
  {
    name: "PlayStation",
    purpose: "Console distribution (from Dec 2026)",
    provider: "Sony Interactive Entertainment",
    policyUrl: "https://www.playstation.com/en-gb/legal/privacy-policy",
    policyLabel: "playstation.com/en-gb/legal/privacy-policy",
  },
];

export function PrivacyPolicyContent() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 text-left text-[clamp(0.9375rem,2.2vw,1.125rem)] text-white/70 leading-relaxed">
      <div className="space-y-1 text-white/50">
        <p className="italic">Last updated: June 2026</p>
      </div>

      <section className="space-y-4">
        <h2 className={sectionHeading}>1. Who we are</h2>
        <p>
          Dvor is developed and published by Art Britannia Ltd, trading as Studio
          Betonika, a company registered in England and Wales (Company No.
          16631916), based in London, United Kingdom.
        </p>
        <p>
          For any privacy-related queries, contact us at:{" "}
          <a href="mailto:hello@studiobetonika.com" className={linkClass}>
            hello@studiobetonika.com
          </a>
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={sectionHeading}>2. What data we collect and why</h2>

        <div className="space-y-4">
          <h3 className={subHeading}>2a. Data stored locally on your device</h3>
          <p>
            Dvor stores the following data locally using Unity PlayerPrefs on
            your device:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
            <li>Your high score and lines cleared</li>
            <li>Your chosen DAS/ARR settings (input timing preferences)</li>
            <li>Your audio preference (Music / SFX / Off)</li>
            <li>Your ghost piece preference (on/off)</li>
            <li>Your last chosen starting season</li>
            <li>
              Your Daily Challenge progress (date-keyed, to prevent replaying the
              same challenge)
            </li>
          </ul>
          <p>
            This data never leaves your device unless you submit a leaderboard
            score (see 2b). We have no access to this data.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className={subHeading}>2b. Leaderboard data (Firebase)</h3>
          <p>
            If you submit a score to the global leaderboard, the following data
            is collected and stored on Google Firebase:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
            <li>
              Your display name (Steam username on Windows and macOS; platform
              gamer tag on console)
            </li>
            <li>Your score or time</li>
            <li>The game mode (Panelka or Daily Challenge)</li>
            <li>A timestamp</li>
          </ul>
          <p>
            We do not collect your email address, real name, payment information,
            or any other personal data. Your display name is the only identifier
            we store, and it is the name you have chosen on your gaming platform.
          </p>
          <p>
            Leaderboard data is stored in the European Union where possible, in
            accordance with Google Firebase&apos;s data residency options.
            Firebase is operated by Google LLC. Google&apos;s privacy policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className={subHeading}>2c. Steam (Windows and macOS)</h3>
          <p>
            On Windows and macOS, Dvor is distributed via Steam (Valve
            Corporation). Steam may collect usage and analytics data in
            accordance with its own privacy policy:{" "}
            <a
              href="https://store.steampowered.com/privacy_agreement"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              store.steampowered.com/privacy_agreement
            </a>
          </p>
          <p>
            We do not receive individual user data from Steam beyond what is
            necessary to verify purchases.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className={subHeading}>2d. Console platforms</h3>
          <p>
            On Nintendo Switch, Xbox, and PlayStation, your platform&apos;s own
            privacy policy applies in addition to this one. We receive only the
            data your platform permits us to access (typically your gamer tag, if
            you submit a leaderboard score).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>3. Data we do not collect</h2>
        <p>We do not collect:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>Your name, email address, or contact details</li>
          <li>Your location or IP address</li>
          <li>Device identifiers or advertising IDs</li>
          <li>Crash reports or telemetry (no analytics SDK is integrated)</li>
          <li>Any data from players under 13, or under 16 in the EU</li>
        </ul>
        <p>
          Dvor contains no advertising, no in-app purchases, and no account
          system. We have no way to identify you as an individual unless you
          submit a leaderboard score.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>
          4. Legal basis for processing (UK GDPR)
        </h2>
        <p>
          We are based in the United Kingdom and operate under UK GDPR and the
          Data Protection Act 2018.
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>Local device data (PlayerPrefs):</span>{" "}
            Legitimate interest — necessary to provide core game functionality
            (saving your settings and progress).
          </li>
          <li>
            <span className={boldInline}>Leaderboard data (Firebase):</span>{" "}
            Consent — by choosing to submit a score to the leaderboard, you
            consent to your display name and score being stored and displayed
            publicly.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>5. Data retention</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>
            <span className={boldInline}>Local device data:</span> Retained on
            your device until you uninstall the game or clear application data.
          </li>
          <li>
            <span className={boldInline}>Leaderboard data:</span> Retained
            indefinitely to maintain leaderboard integrity. To request removal
            of your leaderboard entry, contact{" "}
            <a href="mailto:hello@studiobetonika.com" className={linkClass}>
              hello@studiobetonika.com
            </a>{" "}
            with your display name and platform. We will action the request within
            30 days.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>6. Your rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
          <li>Access the data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>
            Lodge a complaint with the Information Commissioner&apos;s Office
            (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact:{" "}
          <a href="mailto:hello@studiobetonika.com" className={linkClass}>
            hello@studiobetonika.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>7. Children</h2>
        <p>
          Dvor is rated suitable for all ages on the platforms where it is
          available. We do not knowingly collect personal data from children
          under 13 (or under 16 in the EU). The only data we collect via
          Firebase is a leaderboard display name chosen by the player. If you
          believe a child has submitted data to our leaderboard and you wish to
          have it removed, contact{" "}
          <a href="mailto:hello@studiobetonika.com" className={linkClass}>
            hello@studiobetonika.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>8. Third-party services</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {thirdPartyServices.map((service) => (
            <li
              key={service.name}
              className="flex flex-col gap-2 rounded-lg border border-white/15 bg-white/[0.03] p-4"
            >
              <p className="font-bold uppercase tracking-[0.06em] text-white/85">
                {service.name}
              </p>
              <dl className="space-y-1 text-[0.9em]">
                <div className="flex gap-2">
                  <dt className="shrink-0 text-white/40">Purpose</dt>
                  <dd>{service.purpose}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 text-white/40">Provider</dt>
                  <dd>{service.provider}</dd>
                </div>
              </dl>
              <a
                href={service.policyUrl}
                className={`${linkClass} mt-auto text-[0.9em] break-all`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.policyLabel}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>9. Changes to this policy</h2>
        <p>
          We may update this policy as the game&apos;s features evolve — for
          example, when console versions launch. The latest version will always
          be available at{" "}
          <a href="/dvor/privacy-policy" className={linkClass}>
            studiobetonika.com/dvor/privacy-policy
          </a>
          . The date at the top of this document reflects the most recent update.
          Significant changes will be noted in game update release notes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={sectionHeading}>10. Contact</h2>
        <p>
          Art Britannia Ltd, trading as Studio Betonika
          <br />
          <a href="mailto:hello@studiobetonika.com" className={linkClass}>
            hello@studiobetonika.com
          </a>
          <br />
          London, United Kingdom
          <br />
          Company No. 16631916
        </p>
      </section>
    </div>
  );
}
