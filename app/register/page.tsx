'use client';

import { registerUser } from './actions';
import { useFormStatus } from 'react-dom';
import { ShieldCheck, User, Mail, Lock, Briefcase } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase py-4 rounded-2xl hover:scale-[1.02] transition-all disabled:opacity-50"
    >
      {pending ? 'Initializing Account...' : 'Initialize Vision OS'}
    </button>
  );
}

export default function RegisterPage() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <div className="glass p-12 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
           <ShieldCheck className="text-emerald-500/20" size={120} />
        </div>
        
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-2">Join the OS</h1>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10">Secure Your Sector in the 2026 Fleet</p>

        <form action={registerUser} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-zinc-500 ml-4">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input name="name" type="text" required placeholder="Agbes Founder" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-500 transition-all text-sm font-bold" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-zinc-500 ml-4">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input name="email" type="email" required placeholder="founder@kinseso.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-500 transition-all text-sm font-bold" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-zinc-500 ml-4">Select Sector</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <select name="sector" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-blue-500 transition-all text-sm font-bold appearance-none">
                <option value="logistics">Logistics & Supply</option>
                <option value="health">Healthcare & Bio</option>
                <option value="beauty">Aesthetics & Fashion</option>
                <option value="tech">Software Engineering</option>
              </select>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}