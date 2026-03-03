"use client";
import React from 'react';

export default function CloudPage() {
  const backups = [
    { id: '1', camera: 'Front Entrance', size: '1.2 GB', status: 'Synced' },
    { id: '2', camera: 'Loading Dock', size: '850 MB', status: 'Uploading' },
  ];

  const handleShare = (camera: string) => {
    // This simulates the logic of linking a File to a Friend ID
    alert(`Syncing ${camera} footage with your Security Circle database...`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto pt-10">
        <h1 className="text-3xl font-bold mb-10">Cloud Storage Hub</h1>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          {backups.map((item) => (
            <div key={item.id} className="p-6 flex items-center justify-between border-b border-zinc-800 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
                <p className="font-medium">{item.camera}</p>
              </div>
              <button 
                onClick={() => handleShare(item.camera)}
                className="text-[10px] font-bold uppercase tracking-tighter border border-zinc-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Share with Circle 📤
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}