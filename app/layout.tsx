import "./globals.css"
import Link from "next/link"
import * as Icons from "lucide-react"

export const metadata = {
  title: "Kinseso Vision",
  description: "AI DashCam Cloud Platform"
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){

return(

<html lang="en">

<body className="bg-[#020617] text-white">

<header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* LOGO */}

<Link
href="/"
className="text-2xl font-black italic bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text"
>
Kinseso Vision
</Link>


{/* MAIN NAVIGATION */}

<nav className="hidden md:flex items-center gap-6 text-sm flex-wrap">

<Link href="/devices" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Camera size={16}/> Devices
</Link>

<Link href="/cloud/files" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Cloud size={16}/> Cloud
</Link>

<Link href="/social/feed" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Share2 size={16}/> Social
</Link>

{/* Dating Module */}

<Link href="/dating" className="flex items-center gap-1 hover:text-pink-400">
<Icons.Heart size={16}/> Dating
</Link>

<Link href="/dating/profiles" className="flex items-center gap-1 hover:text-pink-400">
<Icons.Users size={16}/> Profiles
</Link>

<Link href="/dating/matches" className="flex items-center gap-1 hover:text-pink-400">
<Icons.UserCheck size={16}/> Matches
</Link>

<Link href="/dating/messages" className="flex items-center gap-1 hover:text-pink-400">
<Icons.MessageCircle size={16}/> Messages
</Link>

{/* Community */}

<Link href="/feed" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Globe size={16}/> Community
</Link>

<Link href="/blog" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Newspaper size={16}/> Blog
</Link>

{/* Services */}

<Link href="/browser" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Search size={16}/> Browser
</Link>

<Link href="/crypto" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Coins size={16}/> Crypto
</Link>

<Link href="/health" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Activity size={16}/> Health
</Link>

<Link href="/food" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Utensils size={16}/> Food
</Link>

<Link href="/beauty" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Scissors size={16}/> Beauty
</Link>

<Link href="/fashion" className="flex items-center gap-1 hover:text-blue-400">
<Icons.ShoppingBag size={16}/> Fashion
</Link>

<Link href="/marketplace" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Store size={16}/> Marketplace
</Link>

<Link href="/vault" className="flex items-center gap-1 hover:text-blue-400">
<Icons.ShieldCheck size={16}/> Evidence
</Link>

<Link href="/ai/device/list" className="flex items-center gap-1 hover:text-blue-400">
<Icons.Brain size={16}/> AI Intelligence
</Link>

</nav>


{/* AUTH BUTTONS */}

<div className="flex gap-3">

<Link
href="/login"
className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800"
>
Login
</Link>

<Link
href="/register"
className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
>
Register
</Link>

</div>

</div>

</header>


<main className="min-h-screen">
{children}
</main>


<footer className="border-t border-zinc-800 mt-20">

<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-sm">

<div>

<h3 className="font-bold mb-3">Platform</h3>

<ul className="space-y-2 text-zinc-400">

<li><Link href="/devices">DashCam Devices</Link></li>
<li><Link href="/cloud/files">Cloud Storage</Link></li>
<li><Link href="/social/feed">Community Feed</Link></li>
<li><Link href="/dating">Dating Platform</Link></li>

</ul>

</div>


<div>

<h3 className="font-bold mb-3">Services</h3>

<ul className="space-y-2 text-zinc-400">

<li><Link href="/marketplace">Marketplace</Link></li>
<li><Link href="/crypto">Crypto</Link></li>
<li><Link href="/health">Health</Link></li>
<li><Link href="/beauty">Beauty</Link></li>
<li><Link href="/fashion">Fashion</Link></li>

</ul>

</div>


<div>

<h3 className="font-bold mb-3">Technology</h3>

<ul className="space-y-2 text-zinc-400">

<li><Link href="/vault">Evidence Vault</Link></li>
<li><Link href="/ai/device/list">AI Intelligence</Link></li>
<li><Link href="/browser">Web Browser</Link></li>

</ul>

</div>

</div>

</footer>

</body>

</html>

)

}