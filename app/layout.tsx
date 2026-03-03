import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { 
  ShoppingBag, TrendingUp, Users, MessageSquare, Palette, 
  Cloud, Settings, Activity, Map, Shield, Presentation, 
  Star, Scissors, Lock, Bell, Sparkles, X, Send, Layout, Heart
} from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen bg-white">
          
          <nav className="w-72 bg-zinc-950 text-zinc-400 p-6 border-r border-zinc-800 hidden md:flex flex-col fixed h-full z-50">
            <div className="mb-10 flex items-center justify-between px-2">
              <div className="text-white font-black italic tracking-tighter text-xl uppercase">Kinseso Vision</div>
              <Bell size={18} className="text-zinc-600 hover:text-white cursor-pointer" />
            </div>

            <Link href="/settings" className="mb-8 mx-2 p-3 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center gap-3 group transition-all hover:border-blue-500/50">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-900/40">A</div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">Founder: Agbes</span>
                <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest mt-1 flex items-center gap-1">
                  <Lock size={8} /> Identity Verified
                </span>
              </div>
              <Settings size={14} className="ml-auto text-zinc-700 group-hover:text-white transition-colors" />
            </Link>
            
            <div className="flex-1 space-y-1 overflow-y-auto scrollbar-hide">
              <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest px-3 mb-2">Social Echo</p>
              <Link href="/feed" className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-zinc-900 text-white border border-zinc-800 mb-4 hover:bg-zinc-800 transition-all group">
                <Layout size={18} className="text-blue-500" />
                <span className="font-bold">Founder Feed</span>
              </Link>

              <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest px-3 mb-2 mt-6">Sectors</p>
              <Link href="/fashion" className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors"><Palette size={18} /> Fashion Hub</Link>
              <Link href="/beauty" className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors"><Scissors size={18} /> Beauty Hub</Link>
              <Link href="/match" className="flex items-center gap-3 px-3 py-2 text-rose-400 hover:text-rose-500 transition-colors font-bold"><Heart size={18} fill="currentColor" /> Matchmaking Hub</Link>
              
              <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest px-3 mb-2 mt-6">Logistics & Visa</p>
              <Link href="/roadmap" className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors"><Star size={18} className="text-amber-500" /> Visa Roadmap</Link>
              <Link href="/map" className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors"><Map size={18} /> Logistics Map</Link>
              <Link href="/vault" className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors"><Cloud size={18} /> Evidence Vault</Link>
              
              <div className="pt-8 px-2">
                <Link href="/deck" className="flex items-center justify-center gap-2 py-3 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-all text-[10px] font-black uppercase text-zinc-500">
                  <Presentation size={14} /> Investor Deck
                </Link>
              </div>
            </div>
          </nav>

          <main className="flex-1 md:ml-72 bg-slate-50 min-h-screen relative overflow-x-hidden">
            {children}
            <div className="fixed bottom-8 right-8 z-[100]">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform ring-4 ring-white">
                <MessageSquare className="text-white fill-white" size={24} />
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}