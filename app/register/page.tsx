'use client';

import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ShieldCheck, ArrowRight, Github, Twitter } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      {/* Background Glows for the Register Page */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10" />

      <div className="w-full max-w-xl bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase mb-2">Join the Vision</h1>
          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">Create your Kinseso Identity</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-4 top-4 text-zinc-500" size={18} />
              <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 transition-all outline-none" />
            </div>
            <div className="relative">
              <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white focus:border-blue-500 transition-all outline-none" />
            </div>
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-zinc-500" size={18} />
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 transition-all outline-none" />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-zinc-500" size={18} />
            <input type="password" placeholder="Create Password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 transition-all outline-none" />
          </div>

          <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl space-y-3">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Select Primary Hub Access</p>
            <div className="flex flex-wrap gap-2">
              {['Health', 'Insurance', 'Fashion', 'Beauty', 'Matchmaking'].map((hub) => (
                <button key={hub} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-zinc-400 hover:bg-blue-600 hover:text-white transition-all uppercase">
                  {hub}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-blue-900/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 mt-6">
            Initialize Account <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-white/5">
          <p className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Or Connect Via Socials</p>
          <div className="flex gap-4">
            <button className="flex-1 bg-white/5 border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              <Github size={18} className="text-white" />
            </button>
            <button className="flex-1 bg-white/5 border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              <Twitter size={18} className="text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}