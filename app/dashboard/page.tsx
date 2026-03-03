'use client';

import React from 'react';
import { Activity, Bell, Shield, User, Cloud, MessageSquare, ArrowUpRight, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tight">System Overview</h1>
            <p className="text-zinc-500 font-medium">Kinseso Vision Live Status</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4">
            <Activity className="text-emerald-500" size={24} />
            <div className="text-sm font-bold text-zinc-900 underline decoration-emerald-500">System Stable</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ACTIVITY LIST */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm p-8">
            <h2 className="text-xl font-black text-zinc-900 mb-8">Live Activity Feed</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-500"><User size={18} /></div>
                  <p className="text-sm font-bold text-zinc-800">New Connection: Jordan Tech</p>
                </div>
                <ArrowUpRight size={16} className="text-zinc-300" />
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-emerald-500"><Cloud size={18} /></div>
                  <p className="text-sm font-bold text-zinc-800">CCTV Evidence Uploaded</p>
                </div>
                <ArrowUpRight size={16} className="text-zinc-300" />
              </div>
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="space-y-6">
            <div className="bg-zinc-950 rounded-[2.5rem] p-8 text-white">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Cloud Status</p>
              <h3 className="text-3xl font-black mb-4 italic tracking-tighter">OPTIMIZED</h3>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[45%]" />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm p-8">
              <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl text-emerald-700">
                <Shield size={24} />
                <span className="text-xs font-black uppercase tracking-widest">Security: Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}