'use client';
import React from 'react';
import * as Icons from 'lucide-react';

export default function LogisticsMap() {
  const activeNodes = [
    { id: 1, location: "London Terminal", status: "Active", load: "82%", color: "text-emerald-400" },
    { id: 2, location: "Lagos Hub", status: "In Transit", load: "45%", color: "text-blue-400" },
    { id: 3, location: "Accra Port", status: "Processing", load: "12%", color: "text-amber-400" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Global Radar</h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Real-Time Asset Tracking OS</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900 border border-white/5 px-6 py-3 rounded-2xl">
            <p className="text-[8px] font-black text-zinc-500 uppercase mb-1">Active Nodes</p>
            <p className="text-xl font-black text-emerald-500 tracking-tighter">412</p>
          </div>
          <div className="bg-zinc-900 border border-white/5 px-6 py-3 rounded-2xl">
            <p className="text-[8px] font-black text-zinc-500 uppercase mb-1">System Load</p>
            <p className="text-xl font-black text-blue-500 tracking-tighter">12.4ms</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* THE RADAR VISUAL */}
        <div className="lg:col-span-2 bg-zinc-950 rounded-[3rem] border border-white/10 p-4 relative overflow-hidden aspect-video flex items-center justify-center">
          {/* Pulsing Radar Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[80%] h-[80%] border border-blue-500/10 rounded-full animate-ping" />
            <div className="absolute w-[60%] h-[60%] border border-blue-500/20 rounded-full" />
            <div className="absolute w-[40%] h-[40%] border border-blue-500/30 rounded-full" />
            {/* Crosshair */}
            <div className="absolute w-full h-[1px] bg-white/5" />
            <div className="absolute h-full w-[1px] bg-white/5" />
          </div>

          <Icons.Navigation className="text-blue-500 animate-bounce" size={40} />
          <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
             <p className="text-[9px] font-black text-emerald-400 uppercase flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Live Tracking Enabled
             </p>
          </div>
        </div>

        {/* STATS SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Live Node Status</h2>
            <div className="space-y-6">
              {activeNodes.map((node) => (
                <div key={node.id} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                  <div>
                    <p className="text-xs font-black text-white uppercase">{node.location}</p>
                    <p className={`text-[9px] font-bold uppercase ${node.color}`}>{node.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-white">{node.load}</p>
                    <div className="w-16 h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: node.load }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 text-white">
            <Icons.ShieldCheck size={32} className="mb-4" />
            <h3 className="font-black uppercase italic leading-none text-lg mb-2">Encrypted Tunnel</h3>
            <p className="text-[10px] font-bold opacity-80 uppercase leading-relaxed">
              All logistics data is routed through the Evidence Cloud Storage with 256-bit encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}