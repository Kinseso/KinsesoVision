'use client';

import { User, ShieldCheck, Star, Settings, Link as LinkIcon, MapPin, Briefcase, Camera } from 'lucide-react';

export default function ProfileHub() {
  const achievements = [
    { title: "Elite Security Agent", icon: <ShieldCheck className="text-blue-500" /> },
    { title: "Top 1% Marketplace Seller", icon: <Star className="text-amber-500" /> },
    { title: "Verified 3D Designer", icon: <Camera className="text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-[3rem] p-8 shadow-sm border border-zinc-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-32 h-32 bg-zinc-900 rounded-[2.5rem] flex items-center justify-center text-white relative">
              <User size={60} />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full border-4 border-white">
                <ShieldCheck size={20} className="text-white" />
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-black text-zinc-900 mb-1">Founder_Kinseso</h1>
              <p className="text-zinc-500 flex items-center justify-center md:justify-start gap-2 text-sm mb-4">
                <MapPin size={14} /> United Kingdom • <Briefcase size={14} /> Ecosystem Architect
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Innovation Lead</span>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Identity Verified</span>
              </div>
            </div>

            <button className="bg-zinc-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Settings size={18} /> Edit Identity
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reputation & Badges */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Trust & Reputation</h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors">
                  <div className="bg-white p-2 rounded-xl shadow-sm">{item.icon}</div>
                  <span className="font-bold text-sm text-zinc-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Web3 / Social Accounts */}
          <div className="bg-zinc-900 p-8 rounded-[2.5rem] text-white">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <LinkIcon size={20} className="text-blue-400" /> Linked Nodes
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs font-mono">MetaMask Wallet</span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase">Connected</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10 opacity-50">
                <span className="text-xs font-mono">IPFS Storage</span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase">Pending</span>
              </div>
              <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors">
                Connect New Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}