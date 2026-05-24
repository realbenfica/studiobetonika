export function PrivacyPolicyContent() {
  return (
    <div className="mx-auto w-full max-w-3xl text-left text-[clamp(0.875rem,2.8vw,1rem)] text-white/70 leading-relaxed">
      <section className="space-y-2">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Dvor — Studio Betonika
        </h2>
        <p className="font-bold text-white/80">Last updated: May 2026</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Who We Are
        </h2>
        <p>
          Dvor is developed and published by Art Britannia Ltd, trading as Studio
          Betonika.
        </p>
        <p>
          <span className="font-bold text-white/80">Art Britannia Ltd</span>
          <br />
          Company number: 16631916
          <br />
          12 Mulberry Place, Pinnell Road
          <br />
          London, United Kingdom
          <br />
          SE9 6AR
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
        <p>
          We are the data controller for any personal data collected through the
          Dvor application.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          What We Collect and Why
        </h2>
        <p>
          We designed Dvor to collect as little data as possible. Here is
          exactly what we collect and why.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-white/80">Leaderboard Username</h3>
            <p>
              When you choose to submit a score to the global leaderboard, you
              enter a username of your choice (maximum 12 characters). This
              username is publicly visible on the leaderboard alongside your
              score.
            </p>
            <p className="font-bold text-white/80">
              We do not ask for your real name. The username is entirely your
              choice and can be anonymous.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white/80">Scores and Game Data</h3>
            <p>When you submit to the leaderboard we store:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Your chosen username</li>
              <li>Your score or sprint time</li>
              <li>The game mode (Classic, Sprint, or Daily Challenge)</li>
              <li>A timestamp of when the score was submitted</li>
            </ul>
            <p>
              We do not store any other information. We do not collect your email
              address, device identifiers, location, or any other personal data.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white/80">Daily Challenge Attempt</h3>
            <p>
              To enforce the one-attempt-per-day rule for the Daily Challenge
              mode, we store locally on your device a record of whether you have
              played today&apos;s challenge. This data never leaves your device.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          What We Do Not Collect
        </h2>
        <p>To be explicit about our approach:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            We do not collect your name, email address, or any contact
            information
          </li>
          <li>We do not collect your location</li>
          <li>We do not collect device identifiers or advertising identifiers</li>
          <li>We do not use cookies or tracking technologies</li>
          <li>We do not use analytics services</li>
          <li>We do not serve advertisements</li>
          <li>We do not sell any data to third parties</li>
          <li>
            We do not share any data with third parties except as described below
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Third Party Services
        </h2>
        <div>
          <h3 className="font-bold text-white/80">Firebase (Google)</h3>
          <p>
            We use Firebase Firestore, provided by Google LLC, to store
            leaderboard data. Your chosen username and scores are stored on
            Firebase servers located in the European Union (europe-west2,
            London region).
          </p>
          <p>
            Google&apos;s privacy policy is available at:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-logo-accent transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>
          <p>
            Firebase processes data on our behalf under a data processing
            agreement in compliance with GDPR.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Legal Basis for Processing
        </h2>
        <p>
          Under the UK General Data Protection Regulation (UK GDPR) and the EU
          General Data Protection Regulation (EU GDPR), our legal basis for
          processing leaderboard data is <span className="font-bold text-white/80">legitimate interests</span> — specifically, providing the global
          leaderboard feature that is a core part of the game.
        </p>
        <p>
          You are not required to submit your score to the leaderboard. The game
          is fully playable without submitting any data.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Data Retention
        </h2>
        <p>
          Leaderboard scores are retained indefinitely as they form the
          historical record of the global leaderboard. If you wish to have your
          leaderboard entries removed, contact us at{" "}
          <a
            href="mailto:hello@artbritannia.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@artbritannia.com
          </a>{" "}
          and we will delete them within 30 days.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Your Rights
        </h2>
        <p>Under UK GDPR and EU GDPR you have the following rights:</p>
        <p>
          <span className="font-bold text-white/80">Right to access</span> — You
          can request a copy of any data we hold about you.
        </p>
        <p>
          <span className="font-bold text-white/80">Right to erasure</span> —
          You can request that we delete your leaderboard entries. Contact us
          at{" "}
          <a
            href="mailto:hello@artbritannia.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@artbritannia.com
          </a>
          .
        </p>
        <p>
          <span className="font-bold text-white/80">Right to rectification</span>{" "}
          — If your username contains an error you can request it be corrected.
        </p>
        <p>
          <span className="font-bold text-white/80">Right to object</span> — You
          can object to processing of your data.
        </p>
        <p>
          <span className="font-bold text-white/80">Right to restrict processing</span>{" "}
          — You can request we restrict how we use your data.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:hello@artbritannia.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@artbritannia.com
          </a>
          . We will respond within 30 days.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Children
        </h2>
        <p>
          Dvor is rated for all ages. We do not knowingly collect data from
          children under 13. If you believe a child under 13 has submitted data
          to our leaderboard, please contact us at{" "}
          <a
            href="mailto:hello@artbritannia.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@artbritannia.com
          </a>{" "}
          and we will delete it promptly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Changes to This Policy
        </h2>
        <p>
          If we make material changes to this privacy policy we will update the
          date at the top of this page and notify users through the application
          where reasonably possible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-white/90 font-bold uppercase tracking-[0.08em]">
          Contact and Complaints
        </h2>
        <p>For any privacy questions or requests:</p>
        <p>
          <span className="font-bold text-white/80">Email:</span>{" "}
          <a
            href="mailto:hello@artbritannia.com"
            className="text-logo-accent transition-colors hover:text-white"
          >
            hello@artbritannia.com
          </a>
        </p>
        <p>
          <span className="font-bold text-white/80">Post:</span>
          <br />
          Art Britannia Ltd
          <br />
          12 Mulberry Place, Pinnell Road
          <br />
          London, United Kingdom
          <br />
          SE9 6AR
        </p>
        <p>
          If you are unhappy with how we handle your data you have the right to
          lodge a complaint with the UK Information Commissioner&apos;s Office
          (ICO) at{" "}
          <a
            href="https://ico.org.uk"
            className="text-logo-accent transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>{" "}
          or by calling 0303 123 1113.
        </p>
        <p>
          If you are in the EU, you may contact your local data protection
          authority.
        </p>
      </section>

      <section className="space-y-1 text-white/50">
        <p>Art Britannia Ltd — Company number 16631916</p>
        <p>Trading as Studio Betonika</p>
      </section>
    </div>
  );
}
