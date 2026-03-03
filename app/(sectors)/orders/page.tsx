'use client';

import { ShoppingBag, CheckCircle, Clock, Truck, Hash, CreditCard } from 'lucide-react';

export default function PurchaseTracker() {
  const orders = [
    { id: "ORD-9921", item: "Kinseso Elite Hoodie", status: "In Transit", type: "Crypto (BTC)", price: "0.002 BTC", date: "Today" },
    { id: "ORD-8842", item: "3D Print Design Pack", status: "Delivered", type: "Card", price: "£45.00", date: "Yesterday" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 flex items-center gap-3">
              <ShoppingBag className="text-blue-600" /> Purchase Tracking
            </h1>
            <p className="text-zinc-500 mt-1">Real-time status of your marketplace transactions.</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Wallet Connected</span>
            <p className="font-mono text-sm text-blue-600">0x71C...8e42</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900">{order.item}</h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1">
                      <Hash size={12} /> {order.id} • {order.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Payment Method</p>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <CreditCard size={14} className="text-zinc-400" /> {order.type}
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Total</p>
                    <p className="text-sm font-bold text-zinc-900">{order.price}</p>
                  </div>

                  <div className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 ${
                    order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Truck size={14} className="animate-pulse" />}
                    {order.status}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Analytics Card */}
        <div className="mt-12 bg-zinc-950 p-8 rounded-[2.5rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Clock size={120} />
          </div>
          <h4 className="text-xl font-bold mb-2">Upcoming Deliveries</h4>
          <p className="text-zinc-400 text-sm mb-6">Our AI is currently optimizing 14 routes for your logistics agents.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
            View Logistics Map
          </button>
        </div>

      </div>
    </div>
  );
}