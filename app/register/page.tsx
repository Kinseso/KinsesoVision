'use client';

import React, { useState } from 'react';
import { ShieldCheck, User, Mail, Briefcase, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate the high-tech processing for your OS
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Send them to the feed
    router.push('/feed');
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <div className="bg-zinc-900/50 backdrop-blur-3xl p-12 rounded-[3rem] relative overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <ShieldCheck size={140} className="text-emerald-500" />
        </div>

        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-2 text-white">Join the OS</h1>
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">Secure Your Sector in the 2026 Fleet</p>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-zinc-500 ml-4 tracking-widest">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input 
                required 
                type="text" 
                placeholder="Enter Full Name" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-500 transition-all text-sm font-bold text-white placeholder:text-zinc-800" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-zinc-500 ml-4 tracking-widest">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input 
                required 
                type="email" 
                placeholder="founder@kinseso.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-500 transition-all text-sm font-bold text-white placeholder:text-zinc-800" 
              />
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-[9px] font-black uppercase text-zinc-500 ml-4 tracking-widest">Select Sector</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <select 
                required 
                className="w-full bg-zinc-950 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-500 transition-all text-sm font-bold text-white appearance-none cursor-pointer"
              >
                <option value="logistics">Logistics & Supply</option>
                <option value="health">Healthcare & Bio</option>
                <option value="beauty">Aesthetics & Fashion</option>
              </select>
            </div>
          </div>

          {/* THE SUBMIT BUTTON */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 mt-4"
          >
            {loading ? (
              <><Loader2 className="animate-spin" size={18} /> Initializing...</>
            ) : (
              <>Initialize Vision OS <ArrowRight size={18} /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}