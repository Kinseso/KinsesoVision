"use client"

import { useEffect,useState } from "react"

export default function DeviceRecordings({params}:any){

const [files,setFiles] = useState<any[]>([])

useEffect(()=>{

fetch(`/api/device-recordings?id=${params.id}`)
.then(r=>r.json())
.then(setFiles)

},[])

return(

<div className="max-w-5xl mx-auto p-10 space-y-6">

<h1 className="text-3xl font-bold">
Device Recordings
</h1>

<div className="grid md:grid-cols-3 gap-6">

{files.map((file)=>{

return(

<video
key={file.id}
controls
src={file.path}
className="rounded-xl"
/>

)

})}

</div>

</div>

)

}