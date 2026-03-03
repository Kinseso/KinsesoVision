'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Shield, Zap } from 'lucide-react';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-[2.5rem] shadow-2xl border border-zinc-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* HEADER */}
          <div className="bg-zinc-900 p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles size={16} className="fill-white" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest">Kinseso AI</p>
                <p className="text-[10px] text-zinc-500 font-bold">Systems Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* CHAT BODY */}
          <div className="h-80 p-6 overflow-y-auto bg-zinc-50 space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-100 shadow-sm">
              <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                Welcome back, Founder. I've analyzed your **Visa Roadmap**. You are currently **85%** ready for endorsement. How can I assist with your logistics or marketplace today?
              </p>
            </div>
            
            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="p-3 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase hover:bg-blue-100 transition-colors flex items-center gap-2">
                <Shield size={12} /> Security Audit
              </button>
              <button className="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase hover:bg-emerald-100 transition-colors flex items-center gap-2">
                <Zap size={12} /> Traffic Map
              </button>
            </div>
          </div>

          {/* INPUT */}
          <div className="p-4 bg-white border-t border-zinc-100 flex items-center gap-2">
            <input 
              placeholder="Ask anything..." 
              className="flex-1 bg-zinc-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="p-2 bg-zinc-900 text-white rounded-xl hover:bg-blue-600 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${isOpen ? 'bg-zinc-900 rotate-90' : 'bg-blue-600 hover:bg-blue-500'}`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white fill-white" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full animate-pulse" />
        )}
      </button>
    </div>
  );
}