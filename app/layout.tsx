import "./../styles/globals.css";
import Link from "next/link";
export const metadata = { title: "KinsesoVision — Fashion × Tech", description: "All features merged (v4+v6): analytics, AI, social, voting, insurance, education, marketplace." };
export default function RootLayout({ children }:{children:React.ReactNode}){
  return <html lang="en"><body>
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="max-w-7xl mx-auto p-4 flex items-center gap-6 flex-wrap">
        <Link href="/"><span className="font-bold text-xl">KinsesoVision</span></Link>
        <nav className="text-sm flex gap-4 flex-wrap">
          <Link href="/analytics">Analytics</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/insurance">Insurance</Link>
          <Link href="/showcase">Showcase</Link>
          <Link href="/forum">Forum</Link>
          <Link href="/social">Social</Link>
          <Link href="/tryon">Try‑On</Link>
          <Link href="/trends">Trends</Link>
          <Link href="/influencers">Influencers</Link>
          <Link href="/ads">Ads</Link>
          <Link href="/education">Education</Link>
          <Link href="/chat">Chat</Link>
          <Link href="/profiles">Profiles</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
    {children}
  </body></html>;
}
