'use client';

import { Camera, MapPin, ShieldAlert, Send, FileText, UploadCloud } from 'lucide-react';
import { useState } from 'react';

export default function IncidentReport() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <ShieldAlert size={24} />
            <span className="font-black uppercase tracking-tighter">Emergency Intake</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900">Secure Incident Reporting</h1>
          <p className="text-zinc-500 mt-2">Upload dashcam footage or witness statements directly to the Vault.</p>
        </header>

        <div className="space-y-8">
          {/* Step 1: Media Upload */}
          <div className="bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[2rem] p-12 text-center group hover:border-blue-500 transition-colors cursor-pointer">
            <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <UploadCloud className="text-blue-600" size={32} />
            </div>
            <p className="font-bold text-zinc-900">Upload Media Files</p>
            <p className="text-xs text-zinc-400 mt-1">MP4, MOV, or JPG (Max 500MB)</p>
          </div>

          {/* Step 2: Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-zinc-400 flex items-center gap-1">
                <MapPin size={12} /> Location of Incident
              </label>
              <input type="text" placeholder="e.g. London, EC1" className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-zinc-400 flex items-center gap-1">
                <Camera size={12} /> Device Type
              </label>
              <select className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none">
                <option>Kinseso Dashcam v1</option>
                <option>Mobile Device</option>
                <option>CCTV Feed</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-zinc-400 flex items-center gap-1">
              <FileText size={12} /> Statement / Description
            </label>
            <textarea rows={4} placeholder="Describe what happened..." className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 focus:ring-red-500" />
          </div>

          <button 
            onClick={() => setSubmitted(true)}
            className="w-full bg-zinc-950 text-white p-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-red-600 transition-colors"
          >
            {submitted ? 'INCIDENT LOGGED' : 'SUBMIT TO VAULT'}
            <Send size={18} />
          </button>

          {submitted && (
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-700 text-center animate-bounce">
              <p className="font-bold text-sm">Case #KS-99201 has been encrypted and hashed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}