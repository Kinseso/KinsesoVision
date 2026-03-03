'use client'; // This tells Next.js this is a "Client Component" so buttons work!

import Link from 'next/link';
import { UserPlus, Check, X, User as UserIcon, ArrowLeft } from 'lucide-react';

export default function SocialHub() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <UserPlus className="text-pink-500" /> Social Connection Hub
          </h1>
          <p className="text-gray-600 mt-2">Manage your Kinseso-Vision network and collaborator requests.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserIcon size={40} className="text-gray-500" />
              </div>
              <h2 className="text-xl font-bold">Kinseso Founder</h2>
              <p className="text-sm text-gray-500">founder@kinseso.com</p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex justify-around">
                <div><p className="font-bold">1</p><p className="text-xs text-gray-400">Connection</p></div>
                <div><p className="font-bold">1</p><p className="text-xs text-gray-400">Pending</p></div>
              </div>
            </div>
          </div>

          {/* Pending Requests List */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Pending Requests</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Jenkins</p>
                    <p className="text-sm text-gray-500 italic">"I'd like to collaborate on your dashcam project!"</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* These buttons will now work because of 'use client' */}
                  <button 
                    onClick={() => alert('Connection Accepted!')}
                    className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    <Check size={20} />
                  </button>
                  <button 
                    onClick={() => alert('Connection Declined')}
                    className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}