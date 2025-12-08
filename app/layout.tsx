import "../styles/globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "KinsesoVision – Fashion x Tech",
  description: "v12 production scaffold",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        {/* Header Navigation */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/10 border-b border-slate-800">
          <div className="max-w-7xl mx-auto p-4 flex items-center gap-6 flex-wrap">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="KinsesoVision" className="h-8 w-auto" />
              <span className="text-sm font-semibold tracking-wide">KinsesoVision</span>
            </Link>

            {/* Navigation */}
            <nav className="text-sm flex gap-4 flex-wrap">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/cloud">Cloud Locker</Link>
              <Link href="/analytics">Analytics</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/insurance">Insurance</Link>
              <Link href="/chat">Chat</Link>
              <Link href="/trends">Trends</Link>
              <Link href="/forum">Forum</Link>
              <Link href="/influencers">Influencers</Link>
              <Link href="/ads">Ads</Link>
            </nav>

          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="border-t mt-8 border-slate-800">
          <div className="max-w-7xl mx-auto p-4 text-sm flex flex-wrap items-center justify-between text-slate-400">
            <span>KinsesoVision v12.0</span>
            <span>Built for innovators & fashion founders</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
