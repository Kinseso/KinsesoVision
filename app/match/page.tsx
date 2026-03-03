'use client';

import React, { useState } from 'react';
import { Heart, Star, ShieldCheck, Search, Users, Sparkles, MapPin, Check } from 'lucide-react';

export default function MatchmakingHub() {
  const [matches] = useState([
    { id: 1, name: "Sarah J.", goal: "Marriage-Oriented", interest: "Logistics/Tech", bio: "Looking for a partner to build a future and a business with.", match: "98%" },
    { id: 2, name: "David K.", goal: "Serious Relationship", interest: "Fashion Design", bio: "Creative soul looking for a grounded partner in the Kinseso network.", match: "92%" }
  ]);

  return (
    <div className="min-h-screen bg-rose-50/30 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-rose-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">
              <Sparkles size={14} fill="currentColor" /> Verified Connections
            </div>
            <h1 className="text-5xl font-black text-zinc-900 tracking-tighter italic">Matchmaking Hub</h1>
            <p className="text-zinc-500 font-bold mt-2 italic">Building foundations for life and legacy.</p>
          </div>
          <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-rose-100">
            <button className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-black uppercase">Find Matches</button>
            <button className="px-4 py-2 text-zinc-400 text-xs font-black uppercase">My Profile</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SEARCH FILTERS */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-rose-100 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 mb-6">Match Preferences</h3>
              <div className="space-y-4">
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-700">Marriage Oriented</span>
                  <Check size={14} className="text-rose-600" />
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500">Business Synergy</span>
                  <div className="w-4 h-4 rounded-full border border-zinc-300" />
                </div>
              </div>
              <button className="w-full mt-8 py-4 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <Search size={16} /> Update Search
              </button>
            </div>
          </div>

          {/* MATCH LIST */}
          <div className="lg:col-span-2 space-y-6">
            {matches.map((m) => (
              <div key={m.id} className="bg-white p-8 rounded-[3rem] border border-rose-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <div className="bg-rose-600 text-white px-4 py-1 rounded-full text-[10px] font-black italic">
                    {m.match} Match
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-rose-100 rounded-[2rem] flex items-center justify-center text-rose-600 font-black text-2xl">
                    {m.name[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-zinc-900">{m.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-[10px] font-black uppercase text-rose-500 flex items-center gap-1">
                        <Heart size={10} fill="currentColor" /> {m.goal}
                      </span>
                      <span className="text-[10px] font-black uppercase text-zinc-400 flex items-center gap-1">
                        <MapPin size={10} /> Bradford Node
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-zinc-500 font-medium leading-relaxed italic">
                  "{m.bio}"
                </p>

                <div className="mt-8 pt-8 border-t border-rose-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Identity Verified</span>
                  </div>
                  <button className="px-8 py-3 bg-rose-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-rose-700 transition-colors flex items-center gap-2">
                    Send Interest <Heart size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}