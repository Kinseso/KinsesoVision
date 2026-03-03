'use client';

import { Utensils, Flame, Bike, Navigation, ShoppingBag, Plus, Star } from 'lucide-react';

export default function FoodHub() {
  const kitchens = [
    { name: "Kinseso Kitchens", type: "Health-Focus", rating: "4.9", time: "15-20 min" },
    { name: "Global Fusion", type: "Mixed Cuisines", rating: "4.7", time: "25-30 min" }
  ];

  return (
    <div className="min-h-screen bg-orange-50/30 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-orange-500 mb-2">
            <Utensils size={20} />
            <span className="font-black uppercase tracking-widest text-sm">Logistics Food Hub</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Fuel Your Journey</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {kitchens.map((k, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-orange-100 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-zinc-900">{k.name}</h3>
                    <p className="text-sm text-zinc-500">{k.type}</p>
                  </div>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame size={12} /> Hot Now
                  </span>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="bg-zinc-50 px-4 py-2 rounded-xl text-xs font-bold text-zinc-600 flex items-center gap-2">
                    <Bike size={14} /> {k.time}
                  </div>
                  <div className="bg-zinc-50 px-4 py-2 rounded-xl text-xs font-bold text-zinc-600 flex items-center gap-2">
                    <Star size={14} className="text-orange-400" /> {k.rating}
                  </div>
                </div>
                <button className="bg-zinc-950 text-white w-full py-4 rounded-2xl font-bold hover:bg-orange-600 transition-colors">View Menu</button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full -mr-16 -mt-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}