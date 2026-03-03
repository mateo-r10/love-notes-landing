import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // evita texto invisible y reduce render-blocking (FOIT → FOUT controlado)
});

export const metadata: Metadata = {
  title: "Love Notes - Draw Your Love",
  description:
    "Send hand-drawn doodles to your partner. A private, intimate space for couples to express love through drawings, stickers, and more.",
  keywords: ["couples app", "doodle", "love notes", "drawing app", "relationship"],
  openGraph: {
    title: "Love Notes - Draw Your Love",
    description: "Send hand-drawn doodles to your partner.",
    url: "https://love-notes.app",
    siteName: "Love Notes",
    type: "website",
  },
  // Google Search Console: configura NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION en .env.local o en tu host
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* El título, description, openGraph, etc. los inyecta Next.js desde el objeto metadata de arriba. */}
        {/* Google Search Console: si no usas la variable de entorno, pega aquí la meta tag:
            <meta name="google-site-verification" content="TU_CODIGO_DE_VERIFICACION" /> */}
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
