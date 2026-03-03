'use client';

import { Globe, Heart, MessageCircle, Share2, Shield, ShoppingCart, Zap, TrendingUp } from 'lucide-react';

export default function DiscoverFeed() {
  const posts = [
    { 
      id: 1, 
      user: "Alex_Design", 
      tag: "Fashion", 
      content: "Just dropped the new 'Neon-Guard' 3D suit. Fully compatible with Kinseso Avatar v4!", 
      stats: { likes: "1.2k", comments: "45" },
      color: "bg-purple-500"
    },
    { 
      id: 2, 
      user: "SecurityNode_04", 
      tag: "Alert", 
      content: "New Evidence Vault protocol active in London zone. Witnesses can now upload 4K dashcam feeds directly.", 
      stats: { likes: "890", comments: "12" },
      color: "bg-blue-600"
    },
    { 
      id: 3, 
      user: "Market_Elite", 
      tag: "Marketplace", 
      content: "Flash Sale: Limited edition hardware nodes for logistics tracking. 20% off for Crypto payments.", 
      stats: { likes: "3.4k", comments: "128" },
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sky-500 mb-2">
            <Globe size={24} className="animate-spin-slow" />
            <span className="font-black uppercase tracking-widest text-sm">Global Pulse</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Discover the Ecosystem</h1>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm overflow-hidden hover:shadow-xl transition-all">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${post.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                      {post.user[0]}
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">{post.user}</p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{post.tag}</p>
                    </div>
                  </div>
                  <button className="text-zinc-400 hover:text-zinc-900"><TrendingUp size={20} /></button>
                </div>

                <p className="text-lg text-zinc-700 leading-relaxed mb-8 font-medium">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
                      <Heart size={20} /> <span className="text-xs font-bold">{post.stats.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors">
                      <MessageCircle size={20} /> <span className="text-xs font-bold">{post.stats.comments}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-3 bg-zinc-50 text-zinc-500 rounded-2xl hover:bg-zinc-100 transition-colors"><Share2 size={18} /></button>
                    <button className="px-6 py-3 bg-zinc-950 text-white rounded-2xl text-xs font-bold hover:bg-blue-600 transition-colors">Interact</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}