'use client';

import React from 'react';
import { Palette, ShoppingBag, Zap, Shirt, Layers, Plus } from 'lucide-react';

export default function FashionHub() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Curated Style</span>
            <h1 className="text-6xl font-black text-zinc-900 tracking-tighter italic leading-none mt-2">Fashion Hub</h1>
          </div>
          <button className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2">
            <Plus size={18} /> New Collection
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FEATURED ITEM */}
          <div className="md:col-span-2 bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="px-3 py-1 bg-blue-600 rounded-full w-fit text-[10px] font-black mb-6">TRENDING NOW</div>
              <h2 className="text-4xl font-black italic mb-4">Visionary Streetwear v1</h2>
              <p className="text-zinc-400 font-medium max-w-sm mb-8 italic">Limited release logistics-inspired apparel for the modern founder.</p>
              <button className="flex items-center gap-3 font-black text-sm group-hover:gap-5 transition-all">
                Shop Collection <Zap size={18} className="fill-blue-500 text-blue-500" />
              </button>
            </div>
            <Shirt size={200} className="absolute -right-10 -bottom-10 text-zinc-800 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          {/* QUICK CATEGORIES */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all">
              <Layers size={32} className="text-blue-500 mb-4" />
              <h3 className="font-black text-zinc-900">Accessories</h3>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all">
              <Palette size={32} className="text-purple-500 mb-4" />
              <h3 className="font-black text-zinc-900">Designers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}