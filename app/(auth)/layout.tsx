import './globals.css'
import Link from "next/link"
import * as Icons from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

  <html lang="en">
  <body className="bg-[#020617] text-white">

  <div className="flex min-h-screen">

  {/* SIDEBAR */}

  <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col">

  {/* LOGO */}

  <div className="mb-10">

  <Link
  href="/"
  className="text-2xl font-black tracking-tight italic bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text"
  >
  Kinseso Vision
  </Link>

  </div>


  {/* NAVIGATION */}

  <nav className="flex flex-col space-y-2 text-sm">


  <Link
  href="/dashboard"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.LayoutDashboard size={18}/>
  Dashboard
  </Link>


  <Link
  href="/cloud"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Cloud size={18}/>
  Cloud Storage
  </Link>


  <Link
  href="/feed"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Globe size={18}/>
  Community Feed
  </Link>


  <Link
  href="/blog"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Newspaper size={18}/>
  News & Blog
  </Link>


  <Link
  href="/crypto"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Coins size={18}/>
  Crypto Terminal
  </Link>


  <Link
  href="/health"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Activity size={18}/>
  Health Hub
  </Link>


  <Link
  href="/beauty"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Scissors size={18}/>
  Beauty Hub
  </Link>


  <Link
  href="/food"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Utensils size={18}/>
  Food Hub
  </Link>


  <Link
  href="/map"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Navigation size={18}/>
  Logistics Radar
  </Link>


  <Link
  href="/vault"
  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-900 transition"
  >
  <Icons.Shield size={18}/>
  Evidence Vault
  </Link>


  </nav>


  {/* AUTH LINKS */}

  <div className="mt-auto pt-10 space-y-2">


  <Link
  href="/login"
  className="block w-full text-center px-4 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800"
  >
  Login
  </Link>


  <Link
  href="/register"
  className="block w-full text-center px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500"
  >
  Create Account
  </Link>


  </div>

  </aside>



  {/* MAIN CONTENT */}

  <main className="flex-1 p-10">

  <div className="max-w-7xl mx-auto">

  {children}

  </div>

  </main>


  </div>

  </body>
  </html>

  )

}