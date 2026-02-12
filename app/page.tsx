import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="text-6xl mb-6">💌</div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Love Notes
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 max-w-md mb-8">
          Draw your love. Send hand-drawn doodles, stickers, and heartfelt
          messages to your partner — just the two of you.
        </p>

        {/* App Store button placeholder */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium opacity-80">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Coming soon on the App Store
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl">🎨</div>
            <h3 className="font-semibold">Draw Together</h3>
            <p className="text-sm text-foreground/60">
              A full canvas with brushes, colors, and tools to create unique
              doodles.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl">💕</div>
            <h3 className="font-semibold">Just You Two</h3>
            <p className="text-sm text-foreground/60">
              A private, intimate space. No social feeds, no distractions.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl">📱</div>
            <h3 className="font-semibold">Widgets &amp; Streaks</h3>
            <p className="text-sm text-foreground/60">
              See your partner&apos;s latest doodle right on your home screen.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-foreground/50 border-t border-foreground/10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link href="/privacy" className="hover:text-foreground/80 underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground/80 underline">
            Terms of Service
          </Link>
          <a
            href="mailto:support@love-notes.app"
            className="hover:text-foreground/80 underline"
          >
            Contact
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Love Notes. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
