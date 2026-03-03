'use client';

import Link from 'next/link';
import { Truck, Package, MapPin, ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';

export default function LogisticsPage() {
  const shipments = [
    { id: "KV-9921", item: "Smart Dashcam Pro", status: "In Transit", location: "London Hub", date: "Estimated: March 5" },
    { id: "KV-8840", item: "Personal Shopping: Groceries", status: "Delivered", location: "Bradford, UK", date: "Completed: Feb 28" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        
        <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600">
          <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Truck className="text-green-600" /> Logistics & Shopping Tracker
          </h1>
          <p className="text-slate-600 mt-2">Global supply chain and local delivery management.</p>
        </header>

        <div className="grid gap-6">
          {shipments.map((ship, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap md:flex-nowrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                  <Package size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{ship.item}</h3>
                  <p className="text-sm text-slate-500">Tracking ID: {ship.id}</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Status</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    ship.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {ship.status === 'Delivered' ? '● ' : '○ '} {ship.status}
                  </span>
                </div>

                <div className="hidden md:block">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Current Location</p>
                  <p className="text-sm font-medium flex items-center gap-1">
                    <MapPin size={14} /> {ship.location}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Timeline</p>
                  <p className="text-sm font-medium">{ship.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need an Agent?</h2>
            <p className="text-blue-100">Hire a Kinseso-Vision personal shopper for local pick-ups.</p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
            Request Shopper
          </button>
        </div>

      </div>
    </div>
  );
}