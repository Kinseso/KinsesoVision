'use client';
import { Bell } from 'lucide-react';

export default function Notifications() {
  return (
    <div className="relative p-2 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer group">
      <Bell size={18} className="text-blue-500 group-hover:text-blue-400" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-zinc-950 animate-pulse"></span>
    </div>
  );
}