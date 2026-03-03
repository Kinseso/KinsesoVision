'use client';

import React from 'react';
import { Sparkles, Scissors, Camera, Layers, Star, Heart, ArrowUpRight } from 'lucide-react';

export default function BeautyHub() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* HEADER SECTION */}
      <div className="relative mb-20">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-rose-500/20 blur-[120px] rounded-full -z-10" />
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-rose-500" />
          <span className="text-rose-500 font-black tracking-[0.5em] uppercase text-[10px]">Kinseso Aesthetics 2026</span>
        </div>
        <h1 className="text-8xl font-black italic tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-500 to-orange-400 leading-none">
          Beauty <br/> Hub
        </h1>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* BIG GRAPHIC CARD */}
        <div className="lg:col-span-2 h-[500px] glass rounded-[3rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <div className="absolute bottom-10 left-10">
            <div className="bg-rose-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 w-fit">Featured Innovation</div>
            <h2 className="text-4xl font-black italic text-white uppercase max-w-lg leading-tight">AI-Driven Precision Stylist Interface</h2>
            <p className="text-zinc-400 mt-4 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <Star size={14} className="text-rose-400 fill-rose-400" /> 4.9/5 Rating from Beta Users
            </p>
          </div>
        </div>

        {/* SIDE SERVICE LIST */}
        <div className="space-y-6">
          {[
            { title: "Smart Salon Booking", icon: Scissors, color: "text-pink-400", desc: "Real-time calendar sync for premium stylists." },
            { title: "AR Visualizer", icon: Camera, color: "text-orange-400", desc: "Try hairstyles & makeup in 3D AR." },
            { title: "Asset Portfolio", icon: Layers, color: "text-rose-400", desc: "Store high-res work for your visa evidence." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-[2.5rem] hover:border-rose-500/40 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <item.icon className={item.color} size={28} />
                <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black italic text-white uppercase">{item.title}</h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Partner Salons", val: "42" },
          { label: "Active Stylists", val: "128" },
          { label: "Bookings Today", val: "840" },
          { label: "Growth", val: "+22%" }
        ].map((stat, i) => (
          <div key={i} className="glass py-6 px-4 rounded-3xl text-center border-t border-white/5">
            <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-white italic">{stat.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}