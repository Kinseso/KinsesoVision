'use client';

import React from 'react';
import { ShoppingBag, Star, Zap, Clock, ChevronRight } from 'lucide-react';

export default function MarketplaceHub() {
  const services = [
    { name: "Kinseso Express Delivery", price: "£4.99", time: "15 min", icon: <Zap /> },
    { name: "Premium Site Security", price: "£120/day", time: "Instant", icon: <ShoppingBag /> },
    { name: "Founder Concierge", price: "£45/hr", time: "Scheduled", icon: <Star /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight italic uppercase">Marketplace Hub</h1>
          <p className="text-zinc-500 font-bold">Book services and manage logistics revenue.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-zinc-900 mb-2">{s.name}</h3>
              <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 mb-6">
                <span className="flex items-center gap-1"><Clock size={12} /> {s.time}</span>
                <span className="text-emerald-500">{s.price}</span>
              </div>
              <button className="w-full py-3 bg-zinc-50 rounded-xl font-black text-zinc-900 flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                Book Now <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}