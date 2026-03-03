'use client';
import React from 'react';
import * as Icons from 'lucide-react';

export default function HealthHub() {
  const vitals = [
    { label: "Heart Rate", value: "72 BPM", status: "Optimal", icon: Icons.Heart, color: "text-rose-500" },
    { label: "Sleep Cycle", value: "7h 20m", status: "Stable", icon: Icons.Moon, color: "text-indigo-400" },
    { label: "Blood Oxygen", value: "98%", status: "Optimal", icon: Icons.Wind, color: "text-blue-400" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Health Hub</h1>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Bio-Metric Monitoring OS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {vitals.map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:border-emerald-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 bg-white/5 rounded-xl ${item.color}`}>
                <item.icon size={20} />
              </div>
              <span className="text-[8px] font-black uppercase px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-full">
                {item.status}
              </span>
            </div>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
            <p className="text-2xl font-black text-white mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* MEDICAL RECORDS */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
          <h2 className="text-sm font-black uppercase tracking-widest text-white mb-6 flex items-center gap-2">
            <Icons.FileText className="text-emerald-500" size={18} /> Evidence Medical Records
          </h2>
          <div className="space-y-4">
            {[1, 2].map((record) => (
              <div key={record} className="flex items-center justify-between p-4 bg-zinc-950 rounded-2xl border border-white/5 hover:bg-zinc-900 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-zinc-400">
                    <Icons.ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white uppercase tracking-tight">Annual Health Assessment</p>
                    <p className="text-[9px] text-zinc-500 font-bold uppercase">Verified on 02 Mar 2026</p>
                  </div>
                </div>
                <Icons.Download size={16} className="text-zinc-600 hover:text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* APPOINTMENT OS */}
        <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 border border-emerald-500/20 rounded-[2.5rem] p-8 relative overflow-hidden">
          <Icons.Activity className="absolute -right-10 -top-10 text-white/5" size={240} />
          <h2 className="text-sm font-black uppercase tracking-widest text-white mb-6 flex items-center gap-2 relative z-10">
            <Icons.Calendar className="text-emerald-400" size={18} /> Tele-Health Connect
          </h2>
          <div className="bg-zinc-950/80 backdrop-blur-md rounded-2xl p-6 relative z-10 border border-white/5">
            <p className="text-xs font-bold text-zinc-300 mb-4">No upcoming consultations. Our AI is monitoring your vitals 24/7.</p>
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase py-3 rounded-xl text-[10px] transition-all">
              Book Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}