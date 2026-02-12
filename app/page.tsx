import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-accent-light/30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Love Notes"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-lg">Love Notes</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-foreground/70">
            <a href="#features" className="hover:text-accent transition-colors">
              Features
            </a>
            <a href="#download" className="hover:text-accent transition-colors">
              Download
            </a>
            <a
              href="mailto:support@love-notes.app"
              className="hover:text-accent transition-colors"
            >
              Support
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-16 pb-20 text-center">
        {/* iPhone Mockup */}
        <div className="mb-10">
          <div className="relative w-[240px] h-[480px] bg-[#1a1a1a] rounded-[3rem] p-[10px] shadow-2xl border-[3px] border-gray-600">
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-[#1a1a1a] rounded-b-2xl z-10" />
            <div className="w-full h-full bg-[#FFF5F5] rounded-[2.4rem] flex flex-col items-center justify-center overflow-hidden relative">
              <Image
                src="/app-icon.png"
                alt="Love Notes App Icon"
                width={140}
                height={140}
                className="rounded-[30px] shadow-lg"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-2xl leading-tight">
          Send love notes.
          <br />
          <span className="text-accent">Draw your love.</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/60 max-w-lg mb-8 leading-relaxed">
          The couples app that connects you through hand-drawn doodles,
          stickers, messages, and more — in a private space just for the two of
          you.
        </p>

        {/* App Store Button */}
        <div id="download" className="mb-6">
          <div className="inline-flex items-center gap-2 bg-foreground text-white px-7 py-3.5 rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-lg">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Coming soon on the App Store
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Everything you need to stay close
          </h2>
          <p className="text-center text-foreground/50 mb-14 max-w-md mx-auto">
            Simple features that make every day a little more special.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              emoji="🎨"
              title="Draw Together"
              description="A full canvas with brushes, colors, and tools to create unique doodles for your partner."
            />
            <FeatureCard
              emoji="💕"
              title="Just You Two"
              description="A private, intimate space. No social feeds, no followers, no distractions."
            />
            <FeatureCard
              emoji="📱"
              title="Home Screen Widgets"
              description="See your partner's latest doodle right on your home screen, all day long."
            />
            <FeatureCard
              emoji="🔥"
              title="Love Streaks"
              description="Keep your streak alive by sending doodles every day. Watch your love grow."
            />
            <FeatureCard
              emoji="✍️"
              title="Handwriting Fonts"
              description="22 beautiful handwriting styles to make your messages feel personal and unique."
            />
            <FeatureCard
              emoji="⏰"
              title="Scheduled Notes"
              description="Write now, send later. Schedule doodles for special moments and surprises."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to draw your love?
        </h2>
        <p className="text-foreground/50 mb-8 max-w-md mx-auto">
          Join couples who express their love through hand-drawn doodles every
          day.
        </p>
        <div className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-foreground/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/app-icon.png"
                alt="Love Notes"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold">Love Notes</span>
            </div>
            <p className="text-sm text-foreground/40">
              Draw your love, one doodle at a time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground/70">Legal</span>
              <Link
                href="/privacy"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground/70">Support</span>
              <a
                href="mailto:support@love-notes.app"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@love-notes.app?subject=Feature%20Request%20-%20Love%20Notes"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                Request a Feature
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-foreground/5 text-center text-sm text-foreground/30">
          &copy; {new Date().getFullYear()} Love Notes. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-foreground/50 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
