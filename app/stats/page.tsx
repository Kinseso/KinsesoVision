'use client';

import { BarChart3, TrendingUp, Users, DollarSign, Globe, PieChart, ArrowUpRight, Target } from 'lucide-react';

export default function FounderStats() {
  const revenueStreams = [
    { label: "Security Vault Subs", value: "£42,000", growth: "+12%", color: "bg-blue-500" },
    { label: "3D Fashion Royalties", value: "0.82 ETH", growth: "+24%", color: "bg-purple-500" },
    { label: "Marketplace Fees", value: "£18,500", growth: "+8%", color: "bg-emerald-500" },
    { label: "Salon & Care Bookings", value: "£12,200", growth: "+15%", color: "bg-rose-500" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <BarChart3 size={24} />
            <span className="font-black uppercase tracking-widest text-sm">Growth Intelligence</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Ecosystem Analytics</h1>
          <p className="text-zinc-500 mt-2 font-medium">Real-time performance metrics across all 14 Kinseso business units.</p>
        </header>

        {/* TOP LEVEL METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {revenueStreams.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-zinc-200 shadow-sm">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{item.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-black text-zinc-900">{item.value}</h3>
                <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                  <ArrowUpRight size={14} /> {item.growth}
                </span>
              </div>
              <div className="w-full h-1.5 bg-zinc-100 rounded-full mt-4 overflow-hidden">
                <div className={`h-full ${item.color}`} style={{ width: item.growth.replace('+', '') }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* USER ADOPTION MAP */}
          <div className="lg:col-span-2 bg-zinc-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                <Globe className="text-blue-400" /> Global Adoption
              </h3>
              <p className="text-zinc-400 text-sm mb-8">User density across London, Birmingham, and Manchester nodes.</p>
              
              <div className="space-y-6">
                {[ { city: "London", val: 85 }, { city: "Birmingham", val: 62 }, { city: "Manchester", val: 45 } ].map((loc, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold uppercase mb-2">
                      <span>{loc.city} Hub</span>
                      <span className="text-blue-400">{loc.val}% Capacity</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{ width: `${loc.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>

          {/* PROJECTED SCALABILITY */}
          <div className="bg-white rounded-[3rem] border border-zinc-200 p-10 shadow-sm">
            <Target className="text-zinc-900 mb-4" size={32} />
            <h3 className="text-xl font-black text-zinc-900 mb-6">Year 1 Targets</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center font-bold text-zinc-900 text-sm">01</div>
                <div>
                  <p className="font-bold text-sm">5k Verified Nodes</p>
                  <p className="text-[10px] text-zinc-400 uppercase">Security Expansion</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center font-bold text-zinc-900 text-sm">02</div>
                <div>
                  <p className="font-bold text-sm">£500k GMV</p>
                  <p className="text-[10px] text-zinc-400 uppercase">Marketplace Volume</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center font-bold text-zinc-900 text-sm">03</div>
                <div>
                  <p className="font-bold text-sm">12 Global Partners</p>
                  <p className="text-[10px] text-zinc-400 uppercase">Logistics Network</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}