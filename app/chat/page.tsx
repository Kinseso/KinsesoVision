'use client';

import { Send, Search, MoreVertical, Shield, User, Circle } from 'lucide-react';
import { useState } from 'react';

export default function ChatHub() {
  const contacts = [
    { id: 1, name: "Agent Alpha", status: "Online", lastMsg: "Vault upload complete." },
    { id: 2, name: "Shopper Bravo", status: "Offline", lastMsg: "Item picked up from Marketplace." },
    { id: 3, name: "Logistics HQ", status: "Online", lastMsg: "Route 4 is now clear." }
  ];

  const [activeChat, setActiveChat] = useState(contacts[0]);

  return (
    <div className="h-screen bg-zinc-50 flex overflow-hidden">
      {/* Sidebar - Contacts */}
      <div className="w-80 bg-white border-r border-zinc-200 flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-black text-zinc-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="w-full bg-zinc-100 border-none rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              onClick={() => setActiveChat(contact)}
              className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${activeChat.id === contact.id ? 'bg-zinc-100 border-r-4 border-blue-600' : 'hover:bg-zinc-50'}`}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center">
                  <User size={20} className="text-zinc-500" />
                </div>
                {contact.status === "Online" && (
                  <Circle className="absolute bottom-0 right-0 text-emerald-500 fill-emerald-500 border-2 border-white" size={10} />
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="font-bold text-sm text-zinc-900">{contact.name}</p>
                <p className="text-xs text-zinc-500 truncate">{contact.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <header className="p-4 border-b border-zinc-100 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <p className="font-bold text-zinc-900">{activeChat.name}</p>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md font-bold uppercase tracking-widest">
              Encrypted
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <Shield size={18} className="hover:text-blue-500 cursor-pointer" />
            <MoreVertical size={18} className="cursor-pointer" />
          </div>
        </header>

        {/* Messages Placeholder */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
          <div className="flex justify-center">
            <span className="text-[10px] bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full uppercase font-bold tracking-widest">Today</span>
          </div>
          
          <div className="flex flex-col items-start max-w-[70%]">
            <div className="bg-zinc-100 p-4 rounded-2xl rounded-tl-none text-sm text-zinc-800">
              {activeChat.lastMsg}
            </div>
            <span className="text-[9px] text-zinc-400 mt-1 ml-1">10:24 AM</span>
          </div>

          <div className="flex flex-col items-end ml-auto max-w-[70%]">
            <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-sm text-white">
              Acknowledged. Monitoring the feed via the Operations Map now.
            </div>
            <span className="text-[9px] text-zinc-400 mt-1 mr-1 text-right">10:25 AM</span>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-zinc-100">
          <div className="flex gap-3 bg-zinc-50 p-2 rounded-2xl border border-zinc-200">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none outline-none text-sm px-2 py-1"
            />
            <button className="bg-zinc-950 text-white p-2 rounded-xl hover:bg-blue-600 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}