'use client';

import { Zap, Play, Image as ImageIcon, Music, Share2, Plus, Sparkles, Trophy } from 'lucide-react';

export default function CreatorHub() {
  const content = [
    { title: "Cyber-Suit V4", type: "3D Design", views: "12.4k", status: "Trending" },
    { title: "Security Tips #102", type: "Video", views: "8.1k", status: "Published" },
    { title: "Marketplace Intro", type: "Social", views: "45.2k", status: "Viral" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <Zap size={24} fill="currentColor" />
              <span className="font-black uppercase tracking-widest text-sm">Creator Studio</span>
            </div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Manage Your Influence</h1>
          </div>
          <button className="bg-zinc-950 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-purple-600 transition-all shadow-xl hover:scale-105">
            <Plus size={20} /> Create New Content
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content List */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
              <Sparkles className="text-amber-500" size={20} /> Active Projects
            </h3>
            {content.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-zinc-200 flex items-center justify-between group hover:border-purple-500 transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                    {item.type === "Video" ? <Play size={24} /> : item.type === "3D Design" ? <ImageIcon size={24} /> : <Share2 size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.type} • {item.views} views</p>
                  </div>
                </div>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status === 'Viral' ? 'bg-red-100 text-red-600' : 'bg-zinc-100 text-zinc-600'}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Monetization / Rewards Side */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <Trophy size={40} className="mb-4 text-purple-200" />
                <h3 className="text-2xl font-bold mb-2 text-white">Creator Rewards</h3>
                <p className="text-purple-100 text-sm mb-6">You've earned 1.2 BTC from Fashion Sales this month.</p>
                <div className="text-3xl font-black">£2,450.00</div>
                <p className="text-[10px] text-purple-200 uppercase mt-1 font-bold">Available to Withdraw</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full" />
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200">
              <h4 className="font-bold text-zinc-900 mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-zinc-50 rounded-2xl hover:bg-zinc-100 text-zinc-600 transition-colors flex flex-col items-center gap-2">
                  <Music size={20} /> <span className="text-[10px] font-bold">Audio Library</span>
                </button>
                <button className="p-4 bg-zinc-50 rounded-2xl hover:bg-zinc-100 text-zinc-600 transition-colors flex flex-col items-center gap-2">
                  <Share2 size={20} /> <span className="text-[10px] font-bold">Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}