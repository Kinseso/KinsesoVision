import { Activity, ShieldCheck, Heart, Palette, Scissors, ArrowUpRight } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { label: "Active Nodes", val: "1,204", color: "text-blue-400", icon: Activity },
    { label: "Health Vitals", val: "Normal", color: "text-emerald-400", icon: Heart },
    { label: "Protected Assets", val: "£4.2M", color: "text-amber-400", icon: ShieldCheck },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6">
      <header className="mb-12">
        <h1 className="text-7xl font-black italic tracking-tighter text-white uppercase leading-none">
          Operational <br/> <span className="text-blue-500">Overview</span>
        </h1>
      </header>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <stat.icon size={80} className={stat.color} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">{stat.label}</p>
            <div className={`text-5xl font-black italic ${stat.color}`}>{stat.val}</div>
            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Live Feed Active <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* GRID FOR SECTORS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-96 bg-gradient-to-br from-blue-600 to-purple-700 rounded-[3rem] p-12 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
           <div className="absolute top-0 right-0 p-10 rotate-12 opacity-20 group-hover:rotate-0 transition-transform duration-500">
             <Palette size={200} className="text-white" />
           </div>
           <div className="relative z-10">
             <h2 className="text-4xl font-black italic uppercase text-white leading-tight">Fashion & <br/> Retail Ecosystem</h2>
             <p className="text-blue-100 mt-4 font-bold uppercase text-xs tracking-widest">Manage Global Inventory</p>
           </div>
           <button className="relative z-10 w-fit bg-white text-blue-600 px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
             Enter Hub <ArrowUpRight size={14} />
           </button>
        </div>

        <div className="h-96 bg-zinc-900 rounded-[3rem] border border-white/5 p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start">
             <h2 className="text-4xl font-black italic uppercase text-white leading-tight">Health <br/> Statistics</h2>
             <div className="bg-emerald-500/10 text-emerald-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Live Sync</div>
          </div>
          <div className="flex items-end gap-2">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-lg transition-all hover:bg-emerald-500" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}