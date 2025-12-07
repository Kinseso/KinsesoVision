"use client";
import { useState } from "react";
import { Card } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Badge } from "../../src/components/ui/badge";
export default function Page(){
  const [entries,setEntries]=useState([{id:1,title:"Aurora Dress",img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",votes:12},{id:2,title:"Neo Denim Set",img:"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",votes:8}]);
  const [title,setTitle]=useState(""); const [img,setImg]=useState("");
  const submit=()=>{ if(!title||!img) return; setEntries(e=>[{id:Date.now(),title,img,votes:0},...e]); };
  const vote=(id:number)=> setEntries(e=>e.map(x=> x.id===id? {...x, votes:x.votes+1}:x));
  return <main className="max-w-6xl mx-auto p-4 space-y-4">
    <Card className="p-4">
      <CardTitle className="mb-2">Enter the competition</CardTitle>
      <div className="grid sm:grid-cols-3 gap-2"><Input placeholder="Design title" value={title} onChange={e=>setTitle(e.target.value)}/><Input placeholder="Image URL" value={img} onChange={e=>setImg(e.target.value)}/><Button onClick={submit}>Submit</Button></div>
    </Card>
    <Card className="p-4">
      <CardTitle className="mb-2">Showcase & Votes</CardTitle>
      <div className="grid md:grid-cols-3 gap-3">{entries.map(en=>(<div key={en.id} className="border rounded-2xl overflow-hidden">
        <img src={en.img} className="h-40 w-full object-cover"/>
        <div className="p-3 flex items-center justify-between"><div className="text-sm font-medium">{en.title}</div><div><Badge>{en.votes} votes</Badge> <Button size="sm" onClick={()=>vote(en.id)}>Vote</Button></div></div>
      </div>))}</div>
    </Card>
  </main>;
}
