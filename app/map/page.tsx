'use client';

import React, { useState, useEffect } from 'react';
import { Map as MapIcon, Shield, Zap, Crosshair, Navigation, Wifi } from 'lucide-react';

export default function LogisticsMap() {
  const [pulse, setPulse] = useState(true);

  // Simulate real-time radar pulse
  useEffect(() => {
    const interval = setInterval(() => setPulse(!pulse), 2000);
    return () => clearInterval(interval);
  }, [pulse]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h1 className="text-7xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 uppercase">
            Logistics Radar
          </h1>
          <p className="text-zinc-500 mt-4 text-xl font-medium uppercase tracking-[0.3em] flex items-center gap-3">
            <Wifi size={20} className="text-blue-500 animate-pulse" /> Bradford Node: Active
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl">
            <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Fleet</div>
            <div className="text-2xl font-black text-white italic">124 Units</div>
          </div>
          <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl">
            <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Security Level</div>
            <div className="text-2xl font-black text-emerald-500 italic">MAX</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* LEFT PANEL: DATA FEED */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-zinc-900/50 p-6 rounded-[2rem] border border-white/5">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
              <Navigation size={14} /> Live Tracking
            </h3>
            <div className="space-y-6">
              {[
                { id: 'KV-091', loc: 'Little Germany', status: 'In Transit' },
                { id: 'KV-112', loc: 'University Dist', status: 'Delivered' },
                { id: 'KV-204', loc: 'Forster Square', status: 'Loading' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer">
                  <div>
                    <div className="text-sm font-black text-white italic">{item.id}</div>
                    <div className="text-[10px] font-bold text-zinc-500 uppercase">{item.loc}</div>
                  </div>
                  <div className={`text-[9px] font-black px-2 py-1 rounded border ${item.status === 'In Transit' ? 'border-blue-500 text-blue-500' : 'border-zinc-800 text-zinc-600'}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER: THE RADAR MAP */}
        <div className="lg:col-span-3 h-[600px] bg-zinc-950 rounded-[3rem] border border-blue-500/20 relative overflow-hidden group">
          {/* Radar Background (Simulated) */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50" />
             {/* Circular Grid */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/10 rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/10 rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-blue-500/10 rounded-full" />
          </div>

          {/* Radar Sweep Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-conic-gradient from-blue-500/20 to-transparent rounded-full animate-spin duration-[4s]" />

          {/* Random Pulsing "Nodes" */}
          <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse" />
          <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
          <div className="absolute top-[50%] left-[70%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

          {/* Map Overlay Text */}
          <div className="absolute bottom-8 left-8">
            <div className="text-3xl font-black italic text-white uppercase tracking-tighter opacity-50">Bradford Sector 01</div>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em]">Satellite Lock: 100%</div>
          </div>

          <div className="absolute top-8 right-8">
            <Crosshair className="text-blue-500 opacity-50" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}