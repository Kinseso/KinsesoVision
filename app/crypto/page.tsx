'use client';
import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Coins, Wallet } from 'lucide-react';

const MOCK_COINS = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '68,432.12', change: '+2.4%', up: true },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '3,841.50', change: '+1.8%', up: true },
  { id: 3, name: 'Solana', symbol: 'SOL', price: '145.22', change: '-0.5%', up: false },
];

export default function CryptoPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">Market Terminal</h1>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Real-time Ledger v2.026</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl flex items-center gap-2">
          <TrendingUp className="text-emerald-500" size={16} />
          <span className="text-emerald-500 font-bold text-xs uppercase">Market Bullish</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_COINS.map((coin) => (
          <div key={coin.id} className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-blue-600/20 transition-colors">
                <Coins className="text-zinc-400 group-hover:text-blue-400" size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black ${coin.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {coin.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {coin.change}
              </div>
            </div>
            <h3 className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{coin.name}</h3>
            <p className="text-2xl font-bold text-white tracking-tighter">${coin.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}