'use client';

import React from 'react';
import { ShieldCheck, HardDrive, FileText, PlayCircle, Lock, Eye, Download, Search } from 'lucide-react';

export default function EvidenceVault() {
  const evidences = [
    { title: "Bradford Logistics Node", type: "Blueprints", date: "2026-02-14", status: "Verified" },
    { title: "Health Hub Prototypes", type: "Technical Spec", date: "2026-03-01", status: "Secured" },
    { title: "Founder Identity Data", type: "KYC/Biometric", date: "2026-01-20", status: "Encrypted" },
    { title: "Insurance Liability Bond", type: "Legal Document", date: "2026-02-28", status: "Verified" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
          <h1 className="text-8xl font-black italic tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            Evidence Vault
          </h1>
          <p className="text-zinc-500 font-black tracking-[0.5em] uppercase text-xs mt-4 flex items-center gap-3">
            <Lock size={14} className="text-emerald-500" /> SECURE BLOCKCHAIN STORAGE • HOME OFFICE COMPLIANT
          </p>
        </div>
        <div className="flex bg-zinc-900/80 backdrop-blur-md p-2 rounded-2xl border border-white/5 shadow-2xl">
            <div className="px-6 py-3 border-r border-white/5">
                <div className="text-[10px] font-black text-zinc-500 uppercase">Vault Integrity</div>
                <div className="text-xl font-black text-emerald-400 uppercase italic">99.9%</div>
            </div>
            <div className="px-6 py-3">
                <div className="text-[10px] font-black text-zinc-500 uppercase">Encrypted Files</div>
                <div className="text-xl font-black text-white uppercase italic">14.2 GB</div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* MAIN VISUAL: THE HOLOGRAPHIC VAULT INTERFACE */}
        <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-[3rem] p-1 h-[450px] relative overflow-hidden group">
                {/* Simulated Video/Graphic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-zinc-950 to-indigo-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-64 h-64 border-[1px] border-blue-500/20 rounded-full animate-spin-slow p-4 flex items-center justify-center">
                            <div className="w-48 h-48 border-[1px] border-emerald-500/30 rounded-full animate-reverse-spin p-4 flex items-center justify-center">
                                <ShieldCheck size={80} className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                            </div>
                        </div>
                        {/* Floating Data Points */}
                        <div className="absolute -top-10 -right-20 bg-zinc-900/80 p-3 rounded-xl border border-white/10 text-[9px] font-black uppercase italic animate-bounce">0X-EVIDENCE-LOCKED</div>
                        <div className="absolute bottom-10 -left-20 bg-zinc-900/80 p-3 rounded-xl border border-white/10 text-[9px] font-black uppercase italic">GPS-STAMP-VERIFIED</div>
                    </div>
                </div>
                
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="text-left">
                        <div className="text-2xl font-black text-white italic uppercase">Security Matrix</div>
                        <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Global Surveillance Monitoring Active</div>
                    </div>
                    <PlayCircle className="text-white opacity-20 hover:opacity-100 cursor-pointer transition-opacity" size={48} />
                </div>
            </div>

            {/* LOWER GRID FOR VIDEOS/EVIDENCE */}
            <div className="grid grid-cols-2 gap-6">
                <div className="glass p-8 rounded-[2rem] hover:border-blue-500/30 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl mb-4 flex items-center justify-center">
                        <PlayCircle className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-black italic uppercase">Live Demo Clips</h4>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2">Operational Screen Recordings</p>
                </div>
                <div className="glass p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl mb-4 flex items-center justify-center">
                        <FileText className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg font-black italic uppercase">Legal Vault</h4>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2">Patent & Trademark Filings</p>
                </div>
            </div>
        </div>

        {/* RIGHT PANEL: DOCUMENT LIST */}
        <div className="lg:col-span-1 glass rounded-[3rem] p-8 flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8 flex items-center gap-2">
                <Search size={14} /> Document Index
            </h3>
            <div className="space-y-4 flex-1">
                {evidences.map((doc, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[8px] font-black bg-blue-600 px-2 py-0.5 rounded text-white uppercase">{doc.type}</span>
                            <span className="text-[8px] font-black text-emerald-500 uppercase">{doc.status}</span>
                        </div>
                        <div className="text-sm font-black italic text-white uppercase">{doc.title}</div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                            <span className="text-[8px] font-bold text-zinc-500">{doc.date}</span>
                            <div className="flex gap-2">
                                <Eye size={12} className="text-zinc-600 hover:text-white" />
                                <Download size={12} className="text-zinc-600 hover:text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-8 bg-white text-black font-black uppercase text-[10px] py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all">
                Export Evidence Package (PDF)
            </button>
        </div>

      </div>
    </div>
  );
}