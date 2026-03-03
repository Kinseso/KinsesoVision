'use client';
import { UserPlus, MessageSquare, Send, Heart, Share2, MoreHorizontal } from 'lucide-react';

export default function SocialFeed() {
  const requests = [
    { name: "Dr. Sarah Chen", role: "Health Tech Investor", img: "S" },
    { name: "Marcus Vane", role: "Logistics Partner", img: "M" }
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* MAIN FEED */}
      <div className="lg:col-span-2 space-y-6">
        <div className="glass p-6 rounded-3xl">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black">A</div>
            <input type="text" placeholder="What's happening in your sector?" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-blue-500 transition-all" />
            <button className="bg-blue-600 px-6 py-2 rounded-xl font-black uppercase text-xs">Post</button>
          </div>
        </div>

        {[1, 2].map((post) => (
          <div key={post} className="glass p-8 rounded-[2.5rem] space-y-4">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg" />
                <div>
                  <div className="text-sm font-black uppercase italic">Kinseso Global Update</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase">2 hours ago</div>
                </div>
              </div>
              <MoreHorizontal className="text-zinc-600" />
            </div>
            <p className="text-zinc-300 leading-relaxed">The Bradford Logistics Node is now processing 40% more throughput using our new Vision AI. #Logistics #Innovation</p>
            <div className="h-64 bg-zinc-950 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
               <div className="text-zinc-800 font-black text-4xl italic uppercase opacity-20">Media Preview</div>
            </div>
            <div className="flex gap-6 pt-4 border-t border-white/5">
              <button className="flex items-center gap-2 text-zinc-500 hover:text-rose-500 transition-colors text-xs font-bold"><Heart size={16} /> 1.2k</button>
              <button className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors text-xs font-bold"><MessageSquare size={16} /> 48 Comments</button>
              <button className="flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors text-xs font-bold"><Share2 size={16} /> Share</button>
            </div>
          </div>
        ))}
      </div>

      {/* SIDEBAR: REQUESTS & MESSAGES */}
      <div className="space-y-6">
        <div className="glass p-8 rounded-[2.5rem]">
          <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Connection Requests</h3>
          <div className="space-y-6">
            {requests.map((req, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-black text-xs">{req.img}</div>
                  <div>
                    <div className="text-xs font-black text-white">{req.name}</div>
                    <div className="text-[9px] text-zinc-500 uppercase">{req.role}</div>
                  </div>
                </div>
                <button className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                  <UserPlus size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-[2.5rem]">
          <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-6">Direct Messages</h3>
          <div className="space-y-4">
             <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3 italic text-zinc-400 text-xs">
               <Send size={14} /> Select a contact to message
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}