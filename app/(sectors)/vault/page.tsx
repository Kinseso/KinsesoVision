'use client';
import React from 'react';
import * as Icons from 'lucide-react';

export default function EvidenceVault() {
  const files = [
    { name: "Sector_License_2026.pdf", size: "2.4 MB", type: "PDF", date: "Mar 01" },
    { name: "Vision_Identity_Proof.jpg", size: "1.1 MB", type: "IMG", date: "Feb 28" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Evidence Vault</h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Secured Cloud Storage OS</p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-2xl font-black uppercase text-[10px] flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all">
          <Icons.Upload size={14} /> Upload Evidence
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FILE EXPLORER */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="grid grid-cols-4 text-[9px] font-black uppercase text-zinc-500 tracking-widest mb-6 px-4">
              <div className="col-span-2">File Name</div>
              <div>Size</div>
              <div className="text-right">Action</div>
            </div>
            
            <div className="space-y-2">
              {files.map((file, i) => (
                <div key={i} className="grid grid-cols-4 items-center p-4 bg-zinc-950/50 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
                  <div className="col-span-2 flex items-center gap-3">
                    <Icons.File className="text-blue-500" size={18} />
                    <span className="text-xs font-bold text-white truncate">{file.name}</span>
                  </div>
                  <div className="text-[10px] font-bold text-zinc-500">{file.size}</div>
                  <div className="text-right">
                    <button className="text-zinc-500 hover:text-white transition-colors">
                      <Icons.MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STORAGE STATS */}
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <Icons.Cloud className="absolute -right-4 -bottom-4 opacity-20" size={120} />
            <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">Storage Used</p>
            <p className="text-4xl font-black italic mb-6">12.4 <span className="text-xl">GB</span></p>
            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden mb-4">
              <div className="bg-white h-full w-[40%]" />
            </div>
            <p className="text-[9px] font-bold uppercase tracking-tight">Level 1 Encryption Active</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Security Log</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                <div>
                  <p className="text-[10px] font-black text-white uppercase">Vault Accessed</p>
                  <p className="text-[8px] font-bold text-zinc-600 uppercase">Just Now • London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}