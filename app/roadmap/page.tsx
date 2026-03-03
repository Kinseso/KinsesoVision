'use client';

import React from 'react';
import { CheckCircle2, Circle, Flag, Star, Zap, Shield, Globe, Award } from 'lucide-react';

export default function VisaRoadmap() {
  const milestones = [
    { title: "Innovation", desc: "AI-Driven Logistics OS & Community Integration", status: "Completed", icon: <Zap className="text-blue-500" /> },
    { title: "Scalability", desc: "Marketplace Hub for SME Service Booking", status: "Active", icon: <Globe className="text-emerald-500" /> },
    { title: "Security", desc: "Encrypted Evidence Vault & CCTV Linkage", status: "Completed", icon: <Shield className="text-purple-500" /> },
    { title: "Viability", desc: "Live Infrastructure Map (Bradford Node)", status: "Completed", icon: <Flag className="text-orange-500" /> }
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full w-fit mb-4">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Innovator Founder Track 2026</span>
            </div>
            <h1 className="text-5xl font-black text-zinc-900 tracking-tighter italic">VISA ROADMAP</h1>
          </div>
          <div className="bg-zinc-900 p-6 rounded-[2rem] text-white flex items-center gap-6 shadow-2xl">
            <div className="text-center">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Current Readiness</p>
              <p className="text-3xl font-black italic text-blue-400">85%</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <Award size={32} className="text-blue-500" />
          </div>
        </header>

        {/* TIMELINE */}
        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-100" />
          
          {milestones.map((m, i) => (
            <div key={i} className="relative flex items-start gap-12 group">
              <div className="z-10 w-16 h-16 bg-white border-4 border-zinc-50 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              
              <div className="flex-1 bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100 group-hover:bg-white group-hover:shadow-2xl group-hover:border-transparent transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-zinc-900">{m.title}</h3>
                  {m.status === "Completed" ? (
                    <span className="flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                      <CheckCircle2 size={14} /> {m.status}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-black text-blue-600 uppercase tracking-widest animate-pulse">
                      <Circle size={14} /> {m.status}
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 font-medium leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-20 p-8 bg-blue-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200">
          <p className="text-xl font-bold tracking-tight">Ready for Endorsement Submission?</p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase text-xs hover:scale-105 transition-transform">
            Generate Report PDF
          </button>
        </div>
      </div>
    </div>
  );
}