'use client';

import React from 'react';
import { Map as MapIcon, Shield, Truck, AlertTriangle, Navigation } from 'lucide-react';

export default function EvidenceMap() {
  return (
    <div className="h-screen bg-slate-100 flex flex-col">
      {/* MAP HEADER */}
      <div className="bg-white p-6 border-b border-zinc-200 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 tracking-tight flex items-center gap-2">
            <MapIcon className="text-blue-600" /> Logistics Intelligence Map
          </h1>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Live Tracking: Bradford, UK</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-black flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            12 SENSORS ONLINE
          </div>
        </div>
      </div>

      {/* MAP VIEWPORT (Simulated) */}
      <div className="flex-1 relative bg-zinc-200 overflow-hidden">
        {/* Placeholder for actual Map Component */}
        <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i4044!3i2691!2m3!1e0!2sm!3i605151528!3m8!2sen!3suk!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!5f2')] bg-cover opacity-60 grayscale" />
        
        {/* FLOATING PINS */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 p-4 bg-white rounded-2xl shadow-2xl border border-blue-500 animate-bounce cursor-pointer group">
          <Shield size={24} className="text-blue-600" />
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-zinc-950 p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-[10px] font-black uppercase">Active Evidence Node</p>
            <p className="text-zinc-500 text-[9px] font-bold">Listerhills Rd Security</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/4 p-3 bg-white rounded-full shadow-xl border border-emerald-500 animate-pulse">
          <Truck size={20} className="text-emerald-600" />
        </div>

        {/* MAP OVERLAY LEGEND */}
        <div className="absolute bottom-10 left-10 space-y-3">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white max-w-xs">
            <h3 className="font-black text-zinc-900 mb-4 text-sm uppercase">Infrastructure Near You</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Shield size={16} /></div>
                <div>

http://googleusercontent.com/map_location_reference/1
                  <p className="text-xs font-black">[White Collar Security LTD](http://googleusercontent.com/map_location_reference/0)</p>
                  <p className="text-[10px] text-zinc-400 font-bold">Listerhills Rd</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Truck size={16} /></div>
                <div>

http://googleusercontent.com/map_location_reference/3
                  <p className="text-xs font-black">[Evri ParcelShop](http://googleusercontent.com/map_location_reference/2)</p>
                  <p className="text-[10px] text-zinc-400 font-bold">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}