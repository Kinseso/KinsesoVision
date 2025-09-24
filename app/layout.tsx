import "./../styles/globals.css"; import Link from "next/link";
export const metadata = { title: "KinsesoVision — Fashion × Tech", description: "v10 production scaffold" };
export default function RootLayout({ children }:{children:React.ReactNode}){
  return <html lang="en"><body>
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="max-w-7xl mx-auto p-4 flex items-center gap-6 flex-wrap">
        <Link href="/"><div className="flex items-center gap-2"><img src="/logo.png" alt="KinsesoVision" className="h-8 w-auto"/><span className="font-bold text-xl">KinsesoVision</span></div></Link>
        <nav className="text-sm flex gap-4 flex-wrap">
          <Link href="/analytics">Analytics</Link><Link href="/marketplace">Marketplace</Link><Link href="/insurance">Insurance</Link><Link href="/showcase">Showcase</Link><Link href="/forum">Forum</Link><Link href="/social">Social</Link><Link href="/tryon">Try‑On</Link><Link href="/trends">Trends</Link><Link href="/influencers">Influencers</Link><Link href="/ads">Ads</Link><Link href="/education">Education</Link><Link href="/chat">Chat</Link><Link href="/profiles">Profiles</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/blog">Blog</Link><Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
    {children}
    <footer className="border-t mt-8"><div className="max-w-7xl mx-auto p-4 text-sm flex flex-wrap items-center justify-between gap-2"><div>© KinsesoVision</div><div className="flex items-center gap-3"><a className="underline" href="https://www.linkedin.com/in/kingsleyagbeso/" target="_blank">LinkedIn</a><a className="underline" href="https://kinseso-vision.vercel.app" target="_blank">Live</a></div></div></footer>
  </body></html>;
}
