"use client"

import { useEffect, useState } from "react"
import * as Icons from "lucide-react"

export default function Devices(){

const [devices,setDevices] = useState<any[]>([])
const [name,setName] = useState("")
const [vehicle,setVehicle] = useState("")

async function loadDevices(){
const res = await fetch("/api/device/list")
const data = await res.json()
setDevices(data)
}

useEffect(()=>{
loadDevices()
},[])

async function registerDevice(e:any){

e.preventDefault()

await fetch("/api/device/register",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
name,
vehicle
})
})

setName("")
setVehicle("")

loadDevices()
}

return(

<div className="max-w-7xl mx-auto px-6 py-10 space-y-10">


<h1 className="text-4xl font-black flex items-center gap-3">
<Icons.Camera/> DashCam Device Dashboard
</h1>


{/* CONNECT CAMERA */}

<div className="bg-zinc-900 p-6 rounded-xl space-y-4">

<h2 className="font-bold text-lg">
Connect New Camera
</h2>

<form
onSubmit={registerDevice}
className="flex flex-col md:flex-row gap-4"
>

<input
placeholder="Camera name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="bg-zinc-800 px-3 py-2 rounded"
/>

<input
placeholder="Vehicle"
value={vehicle}
onChange={(e)=>setVehicle(e.target.value)}
className="bg-zinc-800 px-3 py-2 rounded"
/>

<button
className="bg-blue-600 px-4 py-2 rounded"
>
Connect Device
</button>

</form>

</div>


{/* DEVICE LIST */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{devices.map((d)=>{

return(

<div
key={d.id}
className="bg-zinc-900 p-6 rounded-xl space-y-3"
>

<h3 className="font-bold text-lg">
{d.name}
</h3>

<p className="text-zinc-400">
Vehicle: {d.vehicle}
</p>

<p className="flex items-center gap-2 text-sm">

{d.status==="online" ? (
<span className="text-green-400 flex items-center gap-1">
<Icons.Circle size={10}/> Online
</span>
):(
<span className="text-red-400 flex items-center gap-1">
<Icons.Circle size={10}/> Offline
</span>
)}

</p>

<div className="flex gap-2">

<button className="bg-zinc-800 px-3 py-1 rounded text-sm">
View Recordings
</button>

<button className="bg-green-600 px-3 py-1 rounded text-sm">
Start Recording
</button>

</div>

</div>

)

})}

</div>


{/* LIVE CAMERA DEMO */}

<div className="bg-zinc-900 p-6 rounded-xl">

<h2 className="font-bold mb-4 flex items-center gap-2">
<Icons.Video/> Live Camera Feed
</h2>

<video
controls
autoPlay
className="rounded-xl w-full max-w-lg"
>

<source
src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
type="video/mp4"
/>

</video>

<p className="text-sm text-zinc-400 mt-3">
Live stream preview from connected dash camera
</p>

</div>


</div>

)

}