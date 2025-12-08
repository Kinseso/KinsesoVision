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
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
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

            <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <Link href="/" className="hover:text-emerald-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-emerald-300">
                About the App
              </Link>
              <Link href="/analytics" className="hover:text-emerald-300">
                Analytics
              </Link>
              <Link href="/cloud" className="hover:text-emerald-300">
                Cloud Storage
              </Link>
              <Link href="/showcase" className="hover:text-emerald-300">
                Video Showcase
              </Link>
              <Link href="/onboarding" className="hover:text-emerald-300">
                Visa Onboarding
              </Link>
              <Link href="/marketplace" className="hover:text-emerald-300">
                Marketplace
              </Link>
              <Link href="/insurance" className="hover:text-emerald-300">
                Insurance
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>

        <footer className="border-t border-slate-800 bg-slate-950/90">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} KinsesoVision. All rights reserved.</p>
            <p className="text-slate-500">
              Built for fashion innovators, investors & global mobility officers.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
