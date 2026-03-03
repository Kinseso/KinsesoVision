'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Hash, ShieldCheck, Users, MessageSquare, Cpu, Sparkles } from 'lucide-react';

export default function CommunityChat() {
  const [activeChannel, setActiveChannel] = useState('founder-circle');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState([
    { id: 1, user: 'System', text: 'Welcome to the Kinseso Founder Community.', time: '10:00 AM', isAi: false },
    { id: 2, user: 'Kinseso AI', text: 'Hello Founders! I am online. Ask me anything about your Visa roadmap or project stats.', time: '10:01 AM', isAi: true }
  ]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { id: Date.now(), user: 'You (Founder)', text: message, time: 'Now', isAi: false };
    setMessages(prev => [...prev, userMessage]);
    
    const input = message.toLowerCase();
    setMessage('');

    // AI "Jumping in" logic
    if (input.includes('ai') || input.includes('?') || input.includes('help')) {
      setIsTyping(true);
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          user: 'Kinseso AI',
          text: getAiResponse(input),
          time: 'Now',
          isAi: true
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const getAiResponse = (input: string) => {
    if (input.includes('visa')) return "Based on your current 'Founder Stats', you have completed 85% of the technical evidence required for the Innovator Founder Visa.";
    if (input.includes('stats')) return "Your user engagement is up 12% this week. I recommend updating the 'Marketplace' module to capture more leads.";
    return "I've analyzed that request. As your AI assistant, I suggest coordinating with the community to scale this module.";
  };

  return (
    <div className="flex h-screen bg-white">
      {/* SIDEBAR - COMMUNITIES */}
      <div className="w-80 bg-zinc-50 border-r border-zinc-100 flex flex-col">
        <div className="p-6 border-b border-zinc-100">
          <h2 className="text-xl font-black text-zinc-900 tracking-tighter">Communities</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Global Network Live</p>
          </div>
        </div>
        
        <div className="flex-1 p-4 space-y-2">
          <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-zinc-900 text-white shadow-xl shadow-zinc-200">
            <div className="flex items-center gap-3">
              <Hash size={18} className="text-blue-500" />
              <span className="font-bold text-sm">Founder Circle</span>
            </div>
            <Sparkles size={14} className="text-yellow-400" />
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-zinc-500 hover:bg-zinc-100 transition-all">
            <ShieldCheck size={18} />
            <span className="font-bold text-sm">Security Vault</span>
          </button>
        </div>
      </div>

      {/* CHAT WINDOW */}
      <div className="flex-1 flex flex-col">
        <header className="p-6 border-b border-zinc-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white">
              <Users size={20} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">#founder-circle</h3>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Direct AI Node Enabled</p>
            </div>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.user.includes('You') ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-2 mb-1">
                {msg.isAi && <Cpu size={12} className="text-blue-500" />}
                <span className={`text-[10px] font-black uppercase tracking-tighter ${msg.isAi ? 'text-blue-600' : 'text-zinc-400'}`}>
                  {msg.user}
                </span>
              </div>
              <div className={`max-w-md p-4 rounded-2xl text-sm leading-relaxed ${
                msg.user.includes('You') 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-100' 
                  : msg.isAi 
                    ? 'bg-zinc-900 text-zinc-100 rounded-tl-none border-l-4 border-blue-500'
                    : 'bg-zinc-100 text-zinc-800 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-zinc-400">
              <Cpu size={14} className="animate-spin" />
              <span className="text-[10px] font-bold animate-pulse">AI IS THINKING...</span>
            </div>
          )}
        </div>

        <form onSubmit={sendMessage} className="p-6 bg-white border-t border-zinc-100">
          <div className="flex items-center gap-4 bg-zinc-50 p-2 rounded-2xl border border-zinc-200 focus-within:border-blue-500 focus-within:bg-white transition-all">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type 'AI' or a question..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium px-4"
            />
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}