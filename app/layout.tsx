import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { 
  Globe, Heart, Activity, ShieldPlus, Palette, 
  Scissors, Map, Lock, Bell, Search, LayoutDashboard, Cloud, LogIn
} from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#020617]`}>
        <div className="flex min-h-screen">
          
          {/* HIGH-TECH SIDEBAR */}
          <nav className="w-72 bg-zinc-950/80 backdrop-blur-2xl text-zinc-400 p-6 border-r border-white/5 hidden md:flex flex-col fixed h-full z-50">
            <div className="mb-10 px-2 flex items-center justify-between">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-black italic tracking-tighter text-2xl uppercase">
                Kinseso
              </div>
              <div className="relative p-2 bg-zinc-900 rounded-lg border border-white/5 cursor-pointer">
                <Bell size={16} />
                <div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-zinc-950" />
              </div>
            </div>

            {/* AUTH ACTIONS */}
            <div className="mb-8 flex gap-2">
              <Link href="/login" className="flex-1 bg-white text-black text-[10px] font-black uppercase py-3 rounded-xl text-center transition-all hover:bg-blue-500 hover:text-white flex items-center justify-center gap-2">
                <LogIn size={12} /> Sign In
              </Link>
              <Link href="/register" className="flex-1 border border-zinc-800 text-white text-[10px] font-black uppercase py-3 rounded-xl text-center hover:bg-zinc-800 transition-all">
                Join
              </Link>
            </div>

            {/* NAVIGATION MENU */}
            <div className="flex-1 space-y-1 overflow-y-auto pr-2 scrollbar-hide">
              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2">Social & Lifestyle</p>
              <Link href="/feed" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-blue-400 transition-all group font-bold text-sm">
                <Globe size={18} /> Social Feed
              </Link>
              <Link href="/match" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-rose-400 transition-all group font-bold text-sm">
                <Heart size={18} /> Matchmaking
              </Link>

              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2 mt-6">Health & Security</p>
              <Link href="/health" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-emerald-400 transition-all font-bold text-sm">
                <Activity size={18} /> Health Hub
              </Link>
              <Link href="/insurance" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-all font-bold text-sm">
                <ShieldPlus size={18} /> Insurance Hub
              </Link>

              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2 mt-6">Sectors & Evidence</p>
              <Link href="/fashion" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-purple-400 transition-all font-bold text-sm"><Palette size={18} /> Fashion Hub</Link>
              <Link href="/beauty" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-pink-400 transition-all font-bold text-sm"><Scissors size={18} /> Beauty Hub</Link>
              <Link href="/map" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 hover:text-blue-400 transition-all font-bold text-sm"><Map size={18} /> Logistics Map</Link>
              <Link href="/vault" className="flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 mt-4 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                <Cloud size={18} /> Evidence Vault
              </Link>
            </div>

            {/* FOUNDER FOOTER */}
            <div className="mt-auto pt-6 border-t border-zinc-900">
              <div className="flex items-center gap-3 p-3 bg-zinc-900/40 rounded-2xl border border-white/5">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-900/40">A</div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-black text-white uppercase tracking-tighter">Founder: Agbes</span>
                  <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest mt-1 flex items-center gap-1">
                    <Lock size={8} /> Verified OS
                  </span>
                </div>
              </div>
            </div>
          </nav>

          {/* MAIN PAGE AREA */}
          <main className="flex-1 md:ml-72 bg-slate-950 text-white relative min-h-screen">
             {/* Dynamic Glows that move across pages */}
             <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
             <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="p-8 pb-24">
               {children}
             </div>
          </main>
        </div>
      </body>
    </html>
  )
}