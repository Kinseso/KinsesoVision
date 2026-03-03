'use client';

import { ShieldCheck, EyeOff, Key, Fingerprint, Database, Bell, Trash2, Lock } from 'lucide-react';
import { useState } from 'react';

export default function PrivacyHub() {
  const [encryption, setEncryption] = useState(true);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Lock size={24} />
            <span className="font-black uppercase tracking-widest text-sm">Compliance Engine</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Privacy & Data Sovereignty</h1>
          <p className="text-zinc-500 mt-2">Manage your UK GDPR rights and end-to-end encryption keys.</p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {/* Encryption Toggle */}
          <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Quantum-Resistant Encryption</h3>
                <p className="text-zinc-400 text-sm">Protecting all Vault uploads and Chat Hub messages.</p>
              </div>
            </div>
            <button 
              onClick={() => setEncryption(!encryption)}
              className={`w-16 h-8 rounded-full transition-colors relative ${encryption ? 'bg-emerald-500' : 'bg-zinc-700'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${encryption ? 'left-9' : 'left-1'}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Identity Protection */}
            <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-[2.5rem] hover:border-blue-500 transition-colors">
              <Fingerprint className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Biometric Identity</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">Link your physical identity to your Kinseso Node for high-value Marketplace trades.</p>
              <button className="text-xs font-black text-blue-600 uppercase tracking-widest">Configure ID</button>
            </div>

            {/* Data Portability */}
            <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-[2.5rem] hover:border-purple-500 transition-colors">
              <Database className="text-purple-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Right to Portability</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">Download a full JSON archive of your Evidence Vault and Financial history.</p>
              <button className="text-xs font-black text-purple-600 uppercase tracking-widest">Request Export</button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="mt-8 border-t border-zinc-100 pt-8">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Account Sovereignty</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 p-6 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center gap-4 hover:bg-zinc-100 transition-all">
                <EyeOff className="text-zinc-400" />
                <div className="text-left">
                  <p className="text-sm font-bold text-zinc-900">Incognito Mode</p>
                  <p className="text-[10px] text-zinc-500">Hide your location on the Ops Map.</p>
                </div>
              </button>
              <button className="flex-1 p-6 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-4 hover:bg-red-100 transition-all">
                <Trash2 className="text-red-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-red-600">Right to be Forgotten</p>
                  <p className="text-[10px] text-red-400">Permanently wipe all platform data.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}