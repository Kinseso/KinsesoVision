'use client';
import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

export default function Dashboard() {
  const sectors = [
    { name: "Health Hub", icon: Icons.Activity, href: "/health", color: "text-emerald-500", desc: "Bio-Metric Monitoring" },
    { name: "Crypto Terminal", icon: Icons.Coins, href: "/crypto", color: "text-yellow-500", desc: "Live Market Ledger" },
    { name: "Logistics Radar", icon: Icons.Navigation, href: "/map", color: "text-blue-500", desc: "Asset Tracking OS" },
    { name: "Food Hub", icon: Icons.Utensils, href: "/food", color: "text-orange-500", desc: "Fuel & Nutrition" },
    { name: "Beauty Hub", icon: Icons.Scissors, href: "/beauty", color: "text-pink-500", desc: "Aesthetic Design" },
    { name: "Evidence Vault", icon: Icons.Cloud, href: "/vault", color: "text-blue-400", desc: "Secure Storage" },
  ];

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white">Command Center</h1>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] mt-2">Kinseso Multi-Sector OS v2.026</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector) => (
          <Link href={sector.href} key={sector.name} className="group">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] hover:bg-zinc-800 transition-all hover:border-white/20 h-full">
              <div className={`p-4 bg-white/5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform ${sector.color}`}>
                <sector.icon size={28} />
              </div>
              <h3 className="text-2xl font-black italic uppercase text-white tracking-tight">{sector.name}</h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">{sector.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-white text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Enter Sector <Icons.ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}