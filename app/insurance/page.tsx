export default function InsuranceHub() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-6xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 uppercase">Insurance Hub</h1>
        <p className="text-zinc-400 mt-4 text-xl font-medium uppercase tracking-widest">Asset & Risk Protection Vault</p>
      </div>

      <div className="bg-zinc-900/50 rounded-[3rem] p-12 border border-white/5 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase mb-6">Smart Policy Management</h2>
            <ul className="space-y-4 text-zinc-400 font-bold uppercase text-xs tracking-widest">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-amber-500 rounded-full" /> Logistics Liability Cover</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-amber-500 rounded-full" /> Health Professional Indemnity</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-amber-500 rounded-full" /> Fashion Inventory Security</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 rounded-2xl p-8 border border-amber-500/20">
            <div className="text-4xl font-black text-amber-500 italic">$2.4M</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-2">Total Value Insured under Kinseso Vision</div>
          </div>
        </div>
      </div>
    </div>
  )
}