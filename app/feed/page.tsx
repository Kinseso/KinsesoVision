'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Shield, Zap, Image as ImageIcon, Send } from 'lucide-react';

export default function FounderFeed() {
  const [posts] = useState([
    {
      id: 1,
      author: "Agbes (Founder)",
      time: "2 hours ago",
      content: "Just integrated the Bradford Logistics Map into the core OS. The real-time sensor tracking for the Evidence Vault is officially live! 🚀",
      likes: 24,
      comments: 5,
      type: "Update"
    },
    {
      id: 2,
      author: "Kinseso AI",
      time: "5 hours ago",
      content: "System Security Audit: 100% Pass. All Fashion and Beauty hub transactions are now encrypted via the new Signature Vault.",
      likes: 18,
      comments: 2,
      type: "System"
    }
  ]);

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        
        {/* FEED HEADER */}
        <header className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-black text-zinc-900 tracking-tighter italic uppercase">Founder Feed</h1>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg">A</div>
        </header>

        {/* CREATE POST BOX */}
        <div className="bg-white rounded-[2rem] p-6 border border-zinc-100 shadow-sm mb-8">
          <textarea 
            placeholder="What's the latest update for Kinseso Vision?" 
            className="w-full bg-zinc-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500 min-h-[100px] transition-all resize-none"
          />
          <div className="flex justify-between items-center mt-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-black uppercase">
              <ImageIcon size={18} /> Add Evidence
            </button>
            <button className="bg-zinc-900 text-white px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 transition-all">
              Post <Send size={14} />
            </button>
          </div>
        </div>

        {/* POST LIST */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-[2.5rem] p-8 border border-zinc-100 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${post.type === 'Update' ? 'bg-blue-600' : 'bg-zinc-900'}`}>
                    {post.type === 'Update' ? <Zap size={18} fill="currentColor" /> : <Shield size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-black text-zinc-900 leading-none">{post.author}</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1 tracking-widest">{post.time}</p>
                  </div>
                </div>
                <MoreHorizontal size={20} className="text-zinc-300 cursor-pointer" />
              </div>

              <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                {post.content}
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-zinc-50">
                <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
                  <Heart size={18} /> <span className="text-[10px] font-black">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} /> <span className="text-[10px] font-black">{post.comments}</span>
                </button>
                <Share2 size={18} className="text-zinc-400 ml-auto cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}