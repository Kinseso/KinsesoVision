import Link from 'next/link'
import * as Icons from 'lucide-react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      
      {/* SIDEBAR NAVIGATION */}
      <nav className="w-72 bg-zinc-950/90 backdrop-blur-2xl p-6 border-r border-white/5 hidden md:flex flex-col fixed h-full z-50">
        
        {/* LOGO AREA */}
        <div className="mb-10 px-2 flex items-center justify-between">
          <Link href="/dashboard" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-black italic tracking-tighter text-2xl uppercase">
            Kinseso
          </Link>
          <Icons.ShieldCheck size={18} className="text-blue-500/50" />
        </div>

        {/* QUICK ACTIONS (SIGN IN / JOIN) */}
        <div className="mb-8 flex gap-2">
          <Link href="/register" className="flex-1 bg-white text-black text-[10px] font-black uppercase py-3 rounded-xl text-center hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-white/5">
            Sign In
          </Link>
          <Link href="/register" className="flex-1 border border-zinc-800 text-white text-[10px] font-black uppercase py-3 rounded-xl text-center hover:bg-zinc-800 transition-all">
            Join OS
          </Link>
        </div>

        {/* MENU SCROLL AREA */}
        <div className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar text-zinc-400">
          
          <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2">Network & Social</p>
          <Link href="/feed" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Globe size={18} className="group-hover:text-blue-400" /> Community Feed
          </Link>
          <Link href="/blog" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Newspaper size={18} className="group-hover:text-emerald-400" /> News & Blog
          </Link>

          <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2 mt-6">Financial OS</p>
          <Link href="/crypto" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Coins size={18} className="group-hover:text-yellow-500" /> Crypto Market
          </Link>
          
          <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2 mt-6">Sectors</p>
          <Link href="/health" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Activity size={18} className="group-hover:text-emerald-400" /> Health Hub
          </Link>
          <Link href="/beauty" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Scissors size={18} className="group-hover:text-pink-400" /> Beauty Hub
          </Link>
          <Link href="/food" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Utensils size={18} className="group-hover:text-orange-400" /> Food Hub
          </Link>
          
          <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2 mt-6">Secure</p>
          <Link href="/vault" className="flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
            <Icons.Cloud size={18} /> Evidence Vault
          </Link>
        </div>

        {/* FOUNDER TAB */}
        <div className="mt-auto pt-6 border-t border-zinc-900">
          <div className="flex items-center gap-3 p-3 bg-zinc-900/40 rounded-2xl border border-white/5">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-500/20">A</div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black text-white uppercase tracking-tighter italic">Founder: Agbes</span>
              <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest mt-1 flex items-center gap-1">
                <Icons.Circle size={6} fill="currentColor" /> Live Vision OS
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT VIEWPORT */}
      <main className="flex-1 md:ml-72 relative min-h-screen">
         {/* Background Subtle Glows */}
         <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="p-10 relative z-10 max-w-7xl mx-auto">
           {children}
         </div>
      </main>
    </div>
  )
}