'use client';

import { Globe, ShieldCheck, Wallet, ArrowRightLeft, Cpu, Lock, Search, RefreshCw, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function CryptoTerminal() {
  const [browserUrl, setBrowserUrl] = useState("https://kinseso.network/dex");
  const [isProcessing, setIsProcessing] = useState(false);

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 p-6 md:p-10 flex flex-col gap-8">
      
      {/* HEADER: The Gateway Status */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-8">
        <div>
          <div className="flex items-center gap-2 text-blue-500 mb-1">
            <Cpu size={20} />
            <span className="font-black uppercase tracking-widest text-[10px]">Quantum Gateway v2.0</span>
          </div>
          <h1 className="text-3xl font-black text-white">Financial Terminal</h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl flex items-center gap-3">
            <Wallet className="text-amber-500" size={20} />
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Vault Balance</p>
              <p className="text-sm font-mono text-white">4.829 ETH</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
        
        {/* LEFT COLUMN: THE BROWSER */}
        <div className="lg:col-span-2 flex flex-col bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="bg-zinc-800 p-4 flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
            </div>
            <div className="flex-1 bg-zinc-950 rounded-xl px-4 py-2 flex items-center gap-3 border border-zinc-700">
              <Lock size={12} className="text-emerald-500" />
              <input 
                type="text" 
                value={browserUrl} 
                onChange={(e) => setBrowserUrl(e.target.value)}
                className="bg-transparent text-xs w-full outline-none text-zinc-400 font-mono"
              />
            </div>
            <RefreshCw size={16} className="text-zinc-500 cursor-pointer hover:rotate-180 transition-transform duration-500" />
          </div>
          
          <div className="flex-1 flex items-center justify-center p-12 text-center">
            <div className="max-w-md">
              <Globe size={64} className="mx-auto mb-6 text-zinc-800 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Web3 Browser Active</h3>
              <p className="text-sm text-zinc-500">
                You are currently browsing the **Kinseso Decentralized Network**. All connections are routed through our encrypted UK relay nodes.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PAYMENT GATEWAY */}
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ArrowRightLeft size={20} /> Payment Gateway
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <label className="text-[10px] font-bold uppercase opacity-60">Pay With</label>
                <select className="bg-transparent w-full font-bold outline-none mt-1">
                  <option className="bg-zinc-900">Ethereum (ETH)</option>
                  <option className="bg-zinc-900">Bitcoin (BTC)</option>
                  <option className="bg-zinc-900">GBP (Card)</option>
                </select>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <label className="text-[10px] font-bold uppercase opacity-60">Amount</label>
                <input type="text" placeholder="0.00" className="bg-transparent w-full font-bold outline-none mt-1 text-2xl" />
              </div>
            </div>

            <button 
              onClick={processPayment}
              className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? <RefreshCw className="animate-spin" /> : <ShieldCheck />}
              {isProcessing ? "VALIDATING..." : "AUTHORIZE PAYMENT"}
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2.5rem]">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <CreditCard size={18} className="text-zinc-500" /> Recent Settlements
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono">ID: #0921-X</span>
                <span className="text-emerald-500 font-bold">+ £1,200.00</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono">ID: #0922-B</span>
                <span className="text-blue-400 font-bold">0.02 ETH</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}