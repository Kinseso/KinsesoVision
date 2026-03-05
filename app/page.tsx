"use client"

import Link from "next/link"
import * as Icons from "lucide-react"

export default function LandingPage(){

return(

<div className="max-w-7xl mx-auto px-6 py-10 space-y-14">


{/* PLATFORM MENU GRID */}

<section>

<h2 className="text-3xl font-bold text-center mb-8">
Platform Menu
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<Link href="/feed" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Globe size={20}/> Community Feed
</Link>

<Link href="/blog" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Newspaper size={20}/> News & Blog
</Link>

<Link href="/crypto" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Coins size={20}/> Crypto Market
</Link>

<Link href="/health" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Activity size={20}/> Health Hub
</Link>

<Link href="/beauty" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Scissors size={20}/> Beauty Hub
</Link>

<Link href="/food" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Utensils size={20}/> Food Hub
</Link>

<Link href="/vault" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Cloud size={20}/> Evidence Vault
</Link>

<Link href="/devices" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Camera size={20}/> DashCam Devices
</Link>

<Link href="/cloud" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.HardDrive size={20}/> Cloud Storage
</Link>

<Link href="/marketplace" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Store size={20}/> Marketplace
</Link>

<Link href="/fashion" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.ShoppingBag size={20}/> Fashion
</Link>

<Link href="/community" className="bg-zinc-900 p-5 rounded-xl flex items-center gap-3 hover:bg-zinc-800">
<Icons.Users size={20}/> Creator Community
</Link>

</div>

</section>



{/* HERO SECTION */}

<section className="text-center space-y-6">

<h1 className="text-4xl font-black">
AI DashCam Cloud Platform
</h1>

<p className="text-zinc-400 max-w-xl mx-auto">
Connect your dash cameras and automatically record driving evidence.
AI analyzes incidents and securely stores recordings in the cloud.
</p>


{/* VERY SMALL IMAGE */}

<img
src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
className="mx-auto rounded-xl object-cover"
style={{
width:"420px",
height:"120px"
}}
/>


<div className="flex justify-center gap-4">

<Link
href="/devices"
className="bg-blue-600 px-6 py-3 rounded-lg"
>
Connect Camera
</Link>

<Link
href="/register"
className="border border-zinc-600 px-6 py-3 rounded-lg"
>
Create Account
</Link>

</div>

</section>



{/* AI SYSTEM */}

<section className="grid md:grid-cols-2 gap-10 items-center">

<img
src="https://images.unsplash.com/photo-1614064548237-096f735f344f"
style={{
width:"100%",
height:"160px",
objectFit:"cover"
}}
className="rounded-xl"
/>

<div>

<h2 className="text-3xl font-bold">
AI Smart Driving Intelligence
</h2>

<ul className="mt-5 space-y-2 text-zinc-400">

<li>Real-time accident detection</li>
<li>Driver behaviour analysis</li>
<li>Speed violation detection</li>
<li>Lane departure alerts</li>
<li>Driver fatigue detection</li>
<li>Automatic emergency reporting</li>

</ul>

</div>

</section>


</div>

)

}