import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Love Notes",
};

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col">
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-accent hover:underline text-sm mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-foreground/50 mb-8">Last updated: February 12, 2026</p>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Introduction
            </h2>
            <p>
              Love Notes (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) is a couples
              communication app that allows partners to send hand-drawn doodles
              and messages. We are committed to protecting your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Information We Collect
            </h2>
            <p>We collect the following information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Account information:</strong> email address and display
                name when you sign up via Apple Sign-In or Google Sign-In.
              </li>
              <li>
                <strong>Content you create:</strong> doodles and messages you
                send to your partner, stored securely in our database.
              </li>
              <li>
                <strong>Device information:</strong> push notification tokens to
                deliver notifications.
              </li>
              <li>
                <strong>Usage data:</strong> anonymous analytics to improve the
                app experience (via Firebase Analytics).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide the core service: sending and receiving doodles between partners.</li>
              <li>To send push notifications when you receive new content.</li>
              <li>To manage your subscription and premium features.</li>
              <li>To improve the app through anonymous usage analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Data Storage &amp; Security
            </h2>
            <p>
              Your data is stored securely using Google Firebase infrastructure.
              Doodle images are stored in Firebase Cloud Storage with
              access-controlled rules. We use industry-standard encryption for
              data in transit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Data Retention
            </h2>
            <p>
              For free users, doodles are automatically deleted after 7 days.
              Premium subscribers&apos; doodles are retained permanently. You can
              delete your account and all associated data at any time from the
              app settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Third-Party Services
            </h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Firebase</strong> (Google) — authentication, database,
                storage, analytics, crash reporting.
              </li>
              <li>
                <strong>Google AdMob</strong> — ads for free-tier users. Premium
                users see no ads.
              </li>
              <li>
                <strong>Apple StoreKit</strong> — subscription management.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Love Notes is not intended for children under 13. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              8. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access your personal data.</li>
              <li>Request deletion of your account and data.</li>
              <li>Opt out of analytics tracking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              9. Contact
            </h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
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
