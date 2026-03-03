'use client';
import { Newspaper, ExternalLink, TrendingUp } from 'lucide-react';

export default function BlogPage() {
  const news = [
    { title: "AI Logistics Trends in 2026", source: "Global Tech News", tag: "Logistics" },
    { title: "Emerging African Fashion Markets", source: "Vogue Business", tag: "Fashion" },
    { title: "UK Visa Policy Updates for Founders", source: "Home Office News", tag: "Legal" }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-black">
          <Newspaper size={24} />
        </div>
        <h1 className="text-6xl font-black italic uppercase text-gradient-amber">Vision Newsroom</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, i) => (
          <div key={i} className="glass p-8 rounded-[3rem] hover:scale-105 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-amber-500">{item.tag}</span>
              <TrendingUp size={16} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-black italic text-white uppercase leading-tight mb-4 group-hover:text-amber-400 transition-colors">
              {item.title}
            </h2>
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
              <span className="text-[10px] font-bold text-zinc-500 uppercase">{item.source}</span>
              <ExternalLink size={14} className="text-zinc-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}