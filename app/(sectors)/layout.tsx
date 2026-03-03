'use client';
import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function SectorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sectorName = pathname?.split('/').pop()?.toUpperCase() || "SECTOR";

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* SECTOR TOP BAR */}
      <nav className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <Icons.ChevronLeft size={16} /> Exit to Dashboard
          </Link>
          <div className="h-4 w-[1px] bg-white/10" />
          <div className="flex items-center gap-3">
             <span className="text-blue-500 animate-pulse">●</span>
             <h2 className="text-sm font-black italic uppercase tracking-tighter">Active: {sectorName}</h2>
          </div>
        </div>
        
        <Icons.ShieldCheck className="text-zinc-600" size={18} />
      </nav>

      {/* SECTOR CONTENT */}
      <main className="relative p-8 max-w-7xl mx-auto z-10">
        {children}
      </main>
    </div>
  );
}