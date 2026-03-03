'use client';

import { useState } from 'react';
import { Cloud, Shield, Lock, FileText, Video, HardDrive, Download, Trash2, Plus, Search } from 'lucide-react';

export default function CloudHub() {
  const [files, setFiles] = useState([
    { id: 1, name: "Dashcam_001.mp4", size: "45 MB", type: "video", date: "2026-03-02" },
    { id: 2, name: "Visa_Evidence_Ltr.pdf", size: "1.2 MB", type: "doc", date: "2026-03-01" },
    { id: 3, name: "Site_CCTV_Entry.png", size: "3.4 MB", type: "img", date: "2026-02-28" }
  ]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-2 font-black uppercase tracking-widest text-xs">
              <Shield size={14} /> Encrypted Cloud Storage
            </div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Evidence Vault</h1>
          </div>
          <button className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200">
            <Plus size={20} /> Upload Evidence
          </button>
        </header>

        {/* STORAGE STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><HardDrive size={20} /></div>
              <span className="font-bold text-zinc-500 text-sm">Storage Used</span>
            </div>
            <p className="text-2xl font-black text-zinc-900">12.4 GB <span className="text-zinc-300 font-medium text-lg">/ 100 GB</span></p>
            <div className="w-full bg-zinc-100 h-2 rounded-full mt-4 overflow-hidden">
              <div className="bg-blue-600 h-full w-[12%] shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
            </div>
          </div>
          {/* Add more stats boxes if needed */}
        </div>

        {/* FILE EXPLORER */}
        <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-50 flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input placeholder="Search files..." className="w-full pl-10 pr-4 py-2 bg-zinc-50 border-none rounded-xl text-sm font-medium" />
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-50">
                <th className="px-8 py-4">File Name</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Size</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {files.map((file) => (
                <tr key={file.id} className="group hover:bg-zinc-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      {file.type === 'video' ? <Video size={18} className="text-blue-500" /> : <FileText size={18} className="text-zinc-400" />}
                      <span className="font-bold text-zinc-700 text-sm">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-zinc-500 font-medium">{file.date}</td>
                  <td className="px-8 py-5 text-sm text-zinc-500 font-medium">{file.size}</td>
                  <td className="px-8 py-5">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:text-blue-600"><Download size={18} /></button>
                      <button className="p-2 hover:text-red-600"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}