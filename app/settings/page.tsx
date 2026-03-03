'use client';

import { useState } from 'react';
import { Shield, CheckCircle, PenTool, Lock, FileText, Download } from 'lucide-react';

export default function SettingsPage() {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Founder Identity</h1>
          <p className="text-zinc-500 font-medium">Manage legal signatures and system credentials.</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {/* DIGITAL SIGNATURE CARD */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm overflow-hidden relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <PenTool size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-zinc-900">Digital Signature Vault</h3>
                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Biometric E-Sign v2.0</p>
              </div>
            </div>

            <div className="bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center">
              {isSigned ? (
                <div className="animate-in fade-in zoom-in duration-500">
                  <p className="text-4xl font-black italic text-zinc-800 mb-2 underline decoration-blue-500 decoration-4 underline-offset-8">
                    Agbes_Kinseso_Vision
                  </p>
                  <p className="text-[10px] font-mono text-zinc-400 mt-4 uppercase">Signed: March 03, 2026 • 01:09 GMT</p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-emerald-600 font-black text-xs">
                    <CheckCircle size={16} /> SIGNATURE VERIFIED
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setIsSigned(true)}
                  className="group flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PenTool className="text-zinc-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-sm font-black text-zinc-400 group-hover:text-zinc-900 transition-colors uppercase tracking-widest">Click to Sign Founder Documents</p>
                </button>
              )}
            </div>
          </div>

          {/* DOCUMENT STATUS */}
          <div className="bg-zinc-900 p-8 rounded-[2.5rem] text-white">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
              <FileText size={16} /> Document Compliance
            </h3>
            <div className="space-y-4">
              {[
                { name: "Business Plan 2026", status: "Verified" },
                { name: "Innovation Endorsement", status: "Ready" },
                { name: "Bradford Logistics Map", status: "Certified" }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 group hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm font-bold">{doc.name}</span>
                  </div>
                  <Download size={16} className="text-zinc-500 group-hover:text-white cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}