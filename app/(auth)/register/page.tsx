'use client';
import React, { useState } from 'react';
import { ShieldCheck, User, Mail, Briefcase, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/feed');
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-zinc-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
        <div className="mb-8 text-center">
          <div className="inline-flex p-4 bg-blue-600/10 rounded-2xl mb-4">
            <ShieldCheck className="text-blue-500" size={32} />
          </div>
          <h1 className="text-3xl font-black uppercase italic text-white tracking-tighter">Initialize OS</h1>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">Kinseso Security Protocol 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input required type="text" placeholder="FULL NAME" className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 text-xs font-bold text-white outline-none focus:border-blue-500" />
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 text-xs font-bold text-white outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="pb-4">
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <select required className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 text-xs font-bold text-white outline-none appearance-none">
                <option value="">SELECT SECTOR</option>
                <option value="logistics">LOGISTICS & SUPPLY</option>
                <option value="health">HEALTHCARE & BIO</option>
                <option value="beauty">AESTHETICS & FASHION</option>
              </select>
            </div>
          </div>

          {/* BRIGHT BLUE SUBMIT BUTTON */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>ACTIVATE ACCESS <ArrowRight size={18} /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}