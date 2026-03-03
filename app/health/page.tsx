import { Activity, Heart, Thermometer, Wind } from 'lucide-react';

export default function HealthHub() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="relative mb-16">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full" />
        <h1 className="text-8xl font-black italic tracking-tighter uppercase text-gradient-emerald">Health OS</h1>
        <p className="text-emerald-500/60 font-black tracking-[0.5em] uppercase text-xs mt-4">Kinseso Bio-Integrated Monitoring</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* VITAL CHART GRAPHIC */}
        <div className="lg:col-span-2 glass rounded-[3rem] p-10 overflow-hidden relative">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black italic uppercase">Real-Time Vitals</h2>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase text-emerald-500">Live Stream</span>
            </div>
          </div>
          
          {/* Visualizing a Heartbeat Waveform */}
          <div className="h-64 flex items-end gap-1">
            {[20, 40, 30, 90, 20, 40, 80, 100, 30, 50, 20, 40, 90, 30, 60, 20, 40, 50, 90, 100, 40, 20].map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-500/40 rounded-t-sm hover:bg-emerald-400 transition-all cursor-pointer" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
        </div>

        {/* STATS STACK */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-[2rem] border-l-4 border-emerald-500">
            <Heart className="text-emerald-500 mb-4" size={32} />
            <div className="text-4xl font-black italic">72 BPM</div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Average Heart Rate</div>
          </div>
          <div className="glass p-8 rounded-[2rem] border-l-4 border-cyan-500">
            <Wind className="text-cyan-500 mb-4" size={32} />
            <div className="text-4xl font-black italic">98%</div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Oxygen Saturation</div>
          </div>
        </div>
      </div>
    </div>
  )
}