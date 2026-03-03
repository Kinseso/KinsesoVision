'use client';
import React from 'react';
import { Utensils, Zap, Star, Clock } from 'lucide-react';

const MEALS = [
  { id: 1, name: 'Cyber Ramen', cal: '450', time: '15m', rating: '4.9' },
  { id: 2, name: 'Neural Bowl', cal: '320', time: '10m', rating: '4.7' },
];

export default function FoodHubPage() {
  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">Fuel Station</h1>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">High-Performance Nutrition</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MEALS.map((meal) => (
          <div key={meal.id} className="relative group overflow-hidden bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-blue-600 text-[9px] font-black px-3 py-1 rounded-full text-white uppercase tracking-tighter">New Arrival</span>
                <h2 className="text-3xl font-bold text-white mt-4 italic uppercase">{meal.name}</h2>
              </div>
              <Utensils className="text-zinc-800" size={48} />
            </div>
            
            <div className="flex gap-6 mt-8">
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase">
                <Zap size={14} className="text-yellow-500" /> {meal.cal} kcal
              </div>
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase">
                <Clock size={14} /> {meal.time}
              </div>
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase">
                <Star size={14} className="text-blue-500" /> {meal.rating}
              </div>
            </div>

            <button className="w-full mt-8 bg-white text-black font-black uppercase py-4 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
              Order Deployment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}