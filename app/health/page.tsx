'use client';

import { HeartPulse, Activity, Stethoscope, AlertCircle, CalendarPlus, UserPlus } from 'lucide-react';

export default function HealthHub() {
  return (
    <div className="min-h-screen bg-emerald-50/30 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-emerald-600 mb-2">
            <HeartPulse size={24} />
            <span className="font-black uppercase tracking-widest text-sm">Emergency & Care Hub</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Kinseso Health Care</h1>
        </header>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 bg-emerald-100 rounded-[2rem] flex items-center justify-center text-emerald-600 animate-pulse">
              <Activity size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-zinc-900 mb-2">Request Urgent Care</h3>
              <p className="text-sm text-zinc-500 mb-6">Connect directly with a verified Kinseso Health Professional in your local area.</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-zinc-950 transition-all">Emergency Signal</button>
                <button className="bg-white border-2 border-emerald-100 text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all">Book Consultation</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-8 rounded-[2.5rem] text-white">
              <Stethoscope className="text-emerald-400 mb-4" />
              <h4 className="font-bold mb-2">General Health Check</h4>
              <p className="text-xs text-zinc-400 mb-6">AI-assisted diagnosis and local doctor routing.</p>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-400" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200">
              <UserPlus className="text-blue-500 mb-4" />
              <h4 className="font-bold text-zinc-900 mb-2">Caregiver Network</h4>
              <p className="text-xs text-zinc-500">Join our network of healthcare responders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}