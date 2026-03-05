"use client"

import { useEffect, useState } from "react"
import * as Icons from "lucide-react"

export default function AIDashboard(){

const [events,setEvents] = useState<any[]>([])

async function load(){

const res = await fetch("/api/incidents")
const data = await res.json()

setEvents(data)

}

useEffect(()=>{
load()
},[])

return(

<div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

<h1 className="text-4xl font-black flex items-center gap-3">
<Icons.Brain/> AI Driving Intelligence
</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{events.map(e=>{

return(

<div
key={e.id}
className="bg-zinc-900 p-6 rounded-xl space-y-3"
>

<h3 className="font-bold text-lg">
{e.type}
</h3>

<p className="text-zinc-400">
{e.description}
</p>

<p className="text-sm text-zinc-500">
Severity: {e.severity}
</p>

</div>

)

})}

</div>

</div>

)

}"use client"

import { useEffect, useState } from "react"
import * as Icons from "lucide-react"

export default function AIDashboard(){

const [events,setEvents] = useState<any[]>([])

async function load(){

const res = await fetch("/api/incidents")
const data = await res.json()

setEvents(data)

}

useEffect(()=>{
load()
},[])

return(

<div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

<h1 className="text-4xl font-black flex items-center gap-3">
<Icons.Brain/> AI Driving Intelligence
</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{events.map(e=>{

return(

<div
key={e.id}
className="bg-zinc-900 p-6 rounded-xl space-y-3"
>

<h3 className="font-bold text-lg">
{e.type}
</h3>

<p className="text-zinc-400">
{e.description}
</p>

<p className="text-sm text-zinc-500">
Severity: {e.severity}
</p>

</div>

)

})}

</div>

</div>

)

}