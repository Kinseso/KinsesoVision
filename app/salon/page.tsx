'use client';

import { Scissors, Calendar, Star, MapPin, Sparkles, Clock } from 'lucide-react';

export default function SalonHub() {
  const styles = [
    { name: "Precision Fade", price: "£25", time: "45 min" },
    { name: "3D Texture Sculpting", price: "£45", time: "60 min" },
    { name: "Eco-Organic Treatment", price: "£60", time: "90 min" }
  ];

  return (
    <div className="min-h-screen bg-rose-50/30 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-rose-500 mb-2">
              <Scissors size={20} />
              <span className="font-black uppercase tracking-widest text-sm">Unisex Beauty Hub</span>
            </div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Kinseso Aesthetic Studio</h1>
          </div>
          <button className="bg-zinc-950 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg">
            <Calendar size={18} /> Book Session
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {styles.map((style, i) => (
            <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-rose-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Sparkles size={24} />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-1">{style.name}</h3>
              <div className="flex items-center gap-3 text-xs text-zinc-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={12}/> {style.time}</span>
                <span className="font-black text-rose-600">{style.price}</span>
              </div>
              <button className="w-full py-3 bg-zinc-50 rounded-xl text-xs font-bold text-zinc-600 hover:bg-rose-50 transition-colors">Select Style</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}