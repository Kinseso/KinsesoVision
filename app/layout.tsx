import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "KinsesoVision · Fashion x Tech Studio",
  description:
    "Visa-ready fashion innovation workspace: data, cloud storage, video portfolio and founder onboarding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
            {/* Left: Logo / Brand */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="KinsesoVision"
                className="h-8 w-auto"
              />
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                KinsesoVision
              </span>
            </Link>

            {/* Center: Main Navigation */}
            <nav className="hidden md:flex text-xs font-medium text-slate-200 gap-4 flex-wrap">
              <Link href="/" className="hover:text-emerald-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-emerald-300">
                About
              </Link>
              <Link href="/evidence" className="hover:text-emerald-300">
                Evidence Engine
              </Link>
              <Link href="/cloud" className="hover:text-emerald-300">
                Cloud Evidence
              </Link>
              <Link href="/hub" className="hover:text-emerald-300">
                Life Hub
              </Link>
              <Link href="/fashion" className="hover:text-emerald-300">
                Fashion Hub
              </Link>
              <Link href="/nhs" className="hover:text-emerald-300">
                NHS &amp; Wellbeing
              </Link>
              <Link href="/analytics" className="hover:text-emerald-300">
                Analytics &amp; Insights
              </Link>
              <Link href="/social" className="hover:text-emerald-300">
                Community
              </Link>
              <Link href="/blog" className="hover:text-emerald-300">
                Blog &amp; Updates
              </Link>
            </nav>

            {/* Right: Auth Actions */}
            <div className="flex items-center gap-2 text-xs">
              <Link
                href="/login"
                className="rounded-full border border-slate-600 px-3 py-1 text-slate-100 hover:border-emerald-400 hover:text-emerald-300"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-emerald-500 px-3 py-1 font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile nav (simple version – uses same links in a scrollable row) */}
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
            <nav className="flex gap-3 overflow-x-auto px-4 py-2 text-[11px] text-slate-200">
              <Link href="/" className="whitespace-nowrap hover:text-emerald-300">
                Home
              </Link>
              <Link href="/about" className="whitespace-nowrap hover:text-emerald-300">
                About
              </Link>
              <Link href="/evidence" className="whitespace-nowrap hover:text-emerald-300">
                Evidence
              </Link>
              <Link href="/cloud" className="whitespace-nowrap hover:text-emerald-300">
                Cloud
              </Link>
              <Link href="/hub" className="whitespace-nowrap hover:text-emerald-300">
                Life Hub
              </Link>
              <Link href="/fashion" className="whitespace-nowrap hover:text-emerald-300">
                Fashion
              </Link>
              <Link href="/nhs" className="whitespace-nowrap hover:text-emerald-300">
                NHS
              </Link>
              <Link href="/analytics" className="whitespace-nowrap hover:text-emerald-300">
                Analytics
              </Link>
              <Link href="/social" className="whitespace-nowrap hover:text-emerald-300">
                Community
              </Link>
              <Link href="/blog" className="whitespace-nowrap hover:text-emerald-300">
                Blog
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950/90">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} KinsesoVision. All rights reserved.</p>
            <p className="text-slate-500">
              Built for fashion innovators, investors &amp; global mobility officers.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
