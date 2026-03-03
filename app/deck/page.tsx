'use client';

import React, { useState } from 'react';
import { Presentation, ChevronLeft, ChevronRight, Target, TrendingUp, Users, Shield, Zap } from 'lucide-react';

export default function InvestorDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The Vision",
      content: "Kinseso Vision is an AI-powered logistics & security ecosystem designed for the modern founder.",
      icon: <Zap size={48} className="text-blue-500" />,
      stats: "Target Market: £2.4B UK Logistics Tech"
    },
    {
      title: "The Problem",
      content: "Disconnected security data and fragmented logistics services lead to £800M in annual loss for SMEs.",
      icon: <Target size={48} className="text-red-500" />,
      stats: "45% of delivery data is unverified"
    },
    {
      title: "The Solution",
      content: "A unified Operating System (Founder OS) integrating Evidence Vaults, Social Hubs, and Live Tracking.",
      icon: <Shield size={48} className="text-emerald-500" />,
      stats: "End-to-End Encryption Enabled"
    },
    {
      title: "Traction",
      content: "Our prototype currently supports real-time evidence mapping and community-driven logistics.",
      icon: <TrendingUp size={48} className="text-purple-500" />,
      stats: "Prototype Stage: v1.4 Live"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-4xl w-full">
        
        {/* SLIDE COUNTER */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <Presentation className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Investor Deck 2026</span>
          </div>
          <span className="text-sm font-mono text-zinc-500">{currentSlide + 1} / {slides.length}</span>
        </div>

        {/* ACTIVE SLIDE */}
        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] min-h-[400px] flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
             <div 
              className="bg-blue-600 h-full transition-all duration-500" 
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
             />
          </div>
          
          <div className="mb-8 p-6 bg-zinc-950 rounded-3xl border border-zinc-800 group-hover:scale-110 transition-transform">
            {slides[currentSlide].icon}
          </div>
          
          <h2 className="text-4xl font-black italic tracking-tighter mb-6">{slides[currentSlide].title}</h2>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed mb-10">
            {slides[currentSlide].content}
          </p>
          
          <div className="px-6 py-2 bg-blue-600/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest border border-blue-500/20">
            {slides[currentSlide].stats}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-6 mt-12">
          <button 
            disabled={currentSlide === 0}
            onClick={() => setCurrentSlide(prev => prev - 1)}
            className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 hover:bg-zinc-800 disabled:opacity-20 transition-all"
          >
            <ChevronLeft />
          </button>
          <button 
            disabled={currentSlide === slides.length - 1}
            onClick={() => setCurrentSlide(prev => prev + 1)}
            className="px-12 py-4 bg-blue-600 rounded-2xl font-black text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2"
          >
            Next Slide <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}