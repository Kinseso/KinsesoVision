'use client';

import React from 'react';
import { Scissors, Sparkles, Clock, Star, Heart, ArrowRight } from 'lucide-react';

export default function BeautyHub() {
  const professionals = [
    { name: "Aura Aesthetics", service: "Advanced Skincare", rating: "5.0", price: "From £45", icon: <Sparkles className="text-pink-500" /> },
    { name: "Luxe Grooming", service: "Precision Styling", rating: "4.9", price: "From £30", icon: <Scissors className="text-zinc-700" /> }
  ];

  return (
    <div className="min-h-screen bg-pink-50/30 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-pink-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">
            <Heart size={14} fill="currentColor" /> Premium Wellness
          </div>
          <h1 className="text-5xl font-black text-zinc-900 tracking-tighter italic">Beauty & Wellness</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map((pro, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center">
                  {pro.icon}
                </div>
                <div className="flex items-center gap-1 bg-zinc-900 text-white px-3 py-1 rounded-full text-[10px] font-black">
                  <Star size={10} fill="currentColor" className="text-amber-400" /> {pro.rating}
                </div>
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-1">{pro.name}</h3>
              <p className="text-zinc-500 font-bold mb-6">{pro.service}</p>
              <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                <span className="text-lg font-black text-pink-600">{pro.price}</span>
                <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-zinc-900 group-hover:gap-4 transition-all">
                  Book Session <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}