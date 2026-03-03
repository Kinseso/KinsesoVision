'use client';

import { Search, Globe, ArrowLeft, ArrowRight, RotateCcw, ShieldCheck, Lock, Star, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

export default function GlobalBrowser() {
  const [url, setUrl] = useState("https://www.google.com/search?igu=1");
  const [input, setInput] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This creates a Google search URL that is allowed to be framed
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}&igu=1`;
    setUrl(searchUrl);
  };

  return (
    <div className="h-screen bg-zinc-50 flex flex-col overflow-hidden">
      
      {/* BROWSER TOOLBAR */}
      <nav className="bg-white border-b border-zinc-200 p-4 flex items-center gap-4 shadow-sm z-10">
        <div className="flex gap-2">
          <button className="p-2 hover:bg-zinc-100 rounded-full text-zinc-400"><ArrowLeft size={18} /></button>
          <button className="p-2 hover:bg-zinc-100 rounded-full text-zinc-400"><ArrowRight size={18} /></button>
          <button className="p-2 hover:bg-zinc-100 rounded-full text-zinc-400"><RotateCcw size={18} /></button>
        </div>

        <form onSubmit={handleSearch} className="flex-1 flex items-center gap-3 bg-zinc-100 px-4 py-2 rounded-2xl border border-zinc-200 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <Lock size={14} className="text-emerald-500" />
          <input 
            type="text" 
            placeholder="Search the internet or enter URL..." 
            className="bg-transparent w-full text-sm outline-none text-zinc-600 font-medium"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <Search size={16} className="text-zinc-400 hover:text-blue-500 transition-colors" />
          </button>
        </form>

        <div className="flex items-center gap-4 text-zinc-400">
          <Star size={18} className="hover:text-amber-500 cursor-pointer" />
          <LayoutGrid size={18} className="hover:text-zinc-900 cursor-pointer" />
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl border border-blue-100">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">VPN Active</span>
          </div>
        </div>
      </nav>

      {/* BROWSER VIEWPORT */}
      <div className="flex-1 bg-zinc-200 relative">
        {/* We use an iframe with &igu=1 which allows Google to be embedded for demos */}
        <iframe 
          src={url} 
          className="w-full h-full border-none bg-white"
          title="Kinseso Web Portal"
        />
        
        {/* Floating AI Search Tooltips */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <div className="bg-zinc-950 text-white p-4 rounded-2xl shadow-2xl border border-zinc-800 animate-bounce">
            <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">AI Insight</p>
            <p className="text-xs font-medium italic">"I can summarize any website you visit here."</p>
          </div>
        </div>
      </div>
    </div>
  );
}