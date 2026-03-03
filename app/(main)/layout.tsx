import Link from 'next/link'
import * as Icons from 'lucide-react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      {/* SIDEBAR */}
      <nav className="w-72 bg-zinc-950/90 backdrop-blur-2xl p-6 border-r border-white/5 hidden md:flex flex-col fixed h-full z-50">
        <div className="mb-10 px-2 flex items-center justify-between">
          <Link href="/dashboard" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-black italic tracking-tighter text-2xl uppercase">
            Kinseso
          </Link>
          <Icons.ShieldCheck size={18} className="text-blue-500/50" />
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar text-zinc-400">
          <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2">Navigation</p>
          <Link href="/feed" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Globe size={18} className="group-hover:text-blue-400" /> Community Feed
          </Link>
          <Link href="/crypto" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Coins size={18} className="group-hover:text-yellow-500" /> Crypto Market
          </Link>
          <Link href="/beauty" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Scissors size={18} className="group-hover:text-pink-400" /> Beauty Hub
          </Link>
          <Link href="/health" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm transition-all group">
            <Icons.Activity size={18} className="group-hover:text-emerald-400" /> Health Hub
          </Link>
        </div>

        <div className="mt-auto pt-6 border-t border-zinc-900">
          <div className="flex items-center gap-3 p-3 bg-zinc-900/40 rounded-2xl border border-white/5">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black italic">A</div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black text-white uppercase italic">Agbes</span>
              <span className="text-[8px] font-bold text-emerald-500 uppercase mt-1">Vision OS</span>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENT AREA */}
      <main className="flex-1 md:ml-72 p-10 relative">
        {children}
      </main>
    </div>
  )
}