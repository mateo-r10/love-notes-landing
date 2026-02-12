import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Love Notes",
};

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col">
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-accent hover:underline text-sm mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-foreground/50 mb-8">Last updated: February 12, 2026</p>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Love Notes (&quot;the
              App&quot;), you agree to be bound by these Terms of Service. If
              you do not agree, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Description of Service
            </h2>
            <p>
              Love Notes is a mobile application that allows couples to send
              hand-drawn doodles, messages, and stickers to each other in a
              private, 1-on-1 connection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. User Accounts
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must be at least 13 years old to use the App.</li>
              <li>
                You are responsible for maintaining the security of your
                account.
              </li>
              <li>
                One account per person. Sharing accounts is not permitted.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Subscriptions &amp; Payments
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Love Notes offers a free tier and premium subscriptions
                (monthly and yearly).
              </li>
              <li>
                Subscriptions are managed through Apple&apos;s App Store and
                billed via your Apple ID.
              </li>
              <li>
                Free trials automatically convert to paid subscriptions unless
                cancelled before the trial ends.
              </li>
              <li>
                You can cancel your subscription at any time through your
                device&apos;s subscription settings.
              </li>
              <li>Refunds are handled by Apple per their refund policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Use the App to send harmful, abusive, or illegal content.
              </li>
              <li>Attempt to reverse-engineer or exploit the App.</li>
              <li>
                Use automated systems or bots to interact with the App.
              </li>
              <li>Impersonate another person.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Content Ownership
            </h2>
            <p>
              You retain ownership of the doodles and messages you create. By
              using the App, you grant us a limited license to store and
              transmit your content solely for the purpose of providing the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account if you
              violate these terms. You may delete your account at any time from
              the app settings, which will permanently remove your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided &quot;as is&quot; without warranties of any
              kind. We do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Love Notes shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              10. Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the
              App after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              11. Contact
            </h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a
                href="mailto:support@love-notes.app"
                className="text-accent hover:underline"
              >
                support@love-notes.app
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
