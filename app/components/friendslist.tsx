import React from 'react';

interface Friend {
  id: string;
  name: string | null;
  email: string;
}

export default function FriendsList({ friends }: { friends: Friend[] }) {
  return (
    <div className="mt-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 italic">
        Your Verified Circle ({friends.length})
      </h2>
      
      {friends.length === 0 ? (
        <div className="p-8 border border-dashed border-zinc-800 rounded-3xl text-center">
          <p className="text-zinc-600 text-sm italic">No verified connections yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {friends.map((friend) => (
            <div key={friend.id} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center font-bold text-xs">
                  {friend.name?.substring(0, 2).toUpperCase() || "U"}
                </div>
                <div>
                  <p className="text-sm font-bold">{friend.name || "Anonymous User"}</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-mono">{friend.id.substring(0, 8)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-zinc-400">ENCRYPTED</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}