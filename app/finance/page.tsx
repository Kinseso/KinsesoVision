'use client';

import { BarChart3, TrendingUp, DollarSign, Wallet, ArrowUpRight, ArrowDownRight, PieChart } from 'lucide-react';

export default function FinanceAnalytics() {
  const stats = [
    { label: "Total Revenue", value: "£12,450.00", change: "+14.2%", up: true },
    { label: "Crypto Holdings", value: "0.42 BTC", change: "+2.1%", up: true },
    { label: "Ops Expenses", value: "£3,120.00", change: "-5.4%", up: false },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <DollarSign size={24} />
              <span className="font-black uppercase tracking-widest text-sm">Financial Oversight</span>
            </div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Revenue & Sales Hub</h1>
          </div>
          <div className="bg-zinc-100 p-2 rounded-xl flex gap-1">
            <button className="px-4 py-2 bg-white shadow-sm rounded-lg text-xs font-bold">Monthly</button>
            <button className="px-4 py-2 text-xs font-bold text-zinc-500">Yearly</button>
          </div>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-zinc-50 border border-zinc-200 p-8 rounded-[2rem] hover:shadow-lg transition-all">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <h2 className="text-3xl font-black text-zinc-900 mb-4">{stat.value}</h2>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change} <span className="text-zinc-400 font-normal ml-1">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales Breakdown */}
          <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-blue-400" /> Sales Channels
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2"><span>Marketplace (Physical)</span><span>65%</span></div>
                  <div className="w-full bg-white/10 h-2 rounded-full"><div className="bg-blue-500 h-full rounded-full w-[65%]" /></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2"><span>3D Fashion NFTs</span><span>25%</span></div>
                  <div className="w-full bg-white/10 h-2 rounded-full"><div className="bg-purple-500 h-full rounded-full w-[25%]" /></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2"><span>Security Subscriptions</span><span>10%</span></div>
                  <div className="w-full bg-white/10 h-2 rounded-full"><div className="bg-emerald-500 h-full rounded-full w-[10%]" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Wallet Section */}
          <div className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-zinc-900">
              <Wallet size={20} className="text-amber-500" /> Secure Wallet
            </h3>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200 mb-6">
              <p className="text-[10px] font-bold text-zinc-400 uppercase mb-4">Linked Address</p>
              <p className="font-mono text-sm text-zinc-600 break-all bg-white p-3 rounded-xl border border-zinc-100">
                0x71C4B436219306469c467654391ea48e42
              </p>
            </div>
            <button className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-colors">
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}