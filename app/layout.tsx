import { Inter } from 'next/font/google'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020617] text-slate-200 antialiased`}>
        <div className="flex min-h-screen">
          
          {/* SIDEBAR */}
          <nav className="w-72 bg-zinc-950/90 backdrop-blur-2xl p-6 border-r border-white/5 hidden md:flex flex-col fixed h-full z-50">
            <div className="mb-10 px-2 flex items-center justify-between">
              <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-black italic tracking-tighter text-2xl uppercase">
                Kinseso
              </Link>
              <Icons.Bell size={18} className="text-zinc-500" />
            </div>

            <div className="mb-8 flex gap-2">
              <Link href="/register" className="flex-1 bg-white text-black text-[10px] font-black uppercase py-3 rounded-xl text-center hover:bg-blue-600 transition-all">Sign In</Link>
              <Link href="/register" className="flex-1 border border-zinc-800 text-white text-[10px] font-black uppercase py-3 rounded-xl text-center hover:bg-zinc-800 transition-all">Join OS</Link>
            </div>

            <div className="flex-1 space-y-1 overflow-y-auto">
              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2">Network</p>
              <Link href="/feed" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm"><Icons.Globe size={18} /> Social Community</Link>
              <Link href="/blog" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm"><Icons.Newspaper size={18} /> News & Blog</Link>
              
              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] px-3 mb-2 mt-6">Sectors</p>
              <Link href="/health" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm"><Icons.Activity size={18} /> Health Hub</Link>
              <Link href="/beauty" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm"><Icons.Scissors size={18} /> Beauty Hub</Link>
              <Link href="/map" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 font-bold text-sm"><Icons.Navigation size={18} /> Logistics Map</Link>
              
              <Link href="/vault" className="flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 mt-8 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all"><Icons.Cloud size={18} /> Evidence Vault</Link>
            </div>

            <div className="mt-auto pt-6 border-t border-zinc-900">
              <div className="flex items-center gap-3 p-3 bg-zinc-900/40 rounded-2xl">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black italic">A</div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-black text-white uppercase italic tracking-tighter">Founder: Agbes</span>
                  <span className="text-[8px] font-bold text-emerald-500 uppercase mt-1 tracking-widest">● Live Vision OS</span>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-1 md:ml-72 bg-slate-950 relative min-h-screen">
             <div className="p-10 pb-24 relative z-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}