'use client';

import { useState } from 'react';
import { Users, UserPlus, Check, X, MessageSquare, Globe, Search } from 'lucide-react';

export default function SocialHub() {
  const [requests, setRequests] = useState([
    { id: 1, name: "Jordan Tech", role: "3D Designer", mutuals: 12, img: "JT" },
    { id: 2, name: "Sarah Logistics", role: "Supply Chain", mutuals: 5, img: "SL" }
  ]);

  const [friends, setFriends] = useState([
    { id: 10, name: "Alex Kinseso", role: "Beta Tester", status: "Online" }
  ]);

  const acceptRequest = (id: number) => {
    const person = requests.find(r => r.id === id);
    if (person) {
      setFriends([...friends, { id: person.id, name: person.name, role: person.role, status: "Online" }]);
      setRequests(requests.filter(r => r.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 mb-2 font-black uppercase tracking-widest text-sm">
            <Users size={18} /> Social Network
          </div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Connections</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* REQUESTS COLUMN */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Pending Requests ({requests.length})</h3>
            {requests.map((req) => (
              <div key={req.id} className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-6 flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white font-bold">{req.img}</div>
                  <div>
                    <p className="font-bold text-zinc-900">{req.name}</p>
                    <p className="text-xs text-zinc-500">{req.role} • {req.mutuals} mutuals</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => acceptRequest(req.id)} className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    <Check size={18} />
                  </button>
                  <button className="p-3 bg-zinc-200 text-zinc-600 rounded-xl hover:bg-zinc-300">
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}

            {requests.length === 0 && (
              <div className="text-center py-12 bg-zinc-50 rounded-[2rem] border border-dashed border-zinc-200">
                <Globe className="mx-auto text-zinc-300 mb-2" />
                <p className="text-zinc-500 font-medium">No new requests. Go global!</p>
              </div>
            )}
          </div>

          {/* FRIENDS LIST */}
          <div className="bg-zinc-950 rounded-[2.5rem] p-8 text-white h-fit">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">Active Friends</h3>
            <div className="space-y-6">
              {friends.map((f) => (
                <div key={f.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-zinc-800 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] font-bold">User</div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950"></div>
                    </div>
                    <div>
                      <p className="text-xs font-bold">{f.name}</p>
                      <p className="text-[10px] text-zinc-500">{f.role}</p>
                    </div>
                  </div>
                  <MessageSquare size={14} className="text-zinc-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}