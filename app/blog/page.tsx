"use client";
import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
type Post = { id:number, title:string, category:"National"|"Tech"|"Fashion", teaser:string, body:string, link?:string, date:string };
export default function Page(){
  const [posts,setPosts]=useState<Post[]>([]);
  const [title,setTitle]=useState(""); const [cat,setCat]=useState<Post["category"]>("National"); const [teaser,setTeaser]=useState(""); const [body,setBody]=useState(""); const [link,setLink]=useState("");
  const add=()=>{ if(!title.trim()) return; const p: Post = { id: Date.now(), title: title.trim(), category: cat, teaser: teaser.trim(), body: body.trim(), link: link.trim()||undefined, date: new Date().toISOString().slice(0,10) }; setPosts(ps=>[p, ...ps]); setTitle(""); setTeaser(""); setBody(""); setLink(""); };
  return <main className="max-w-6xl mx-auto p-4 space-y-4">
    <div className="border rounded-2xl p-4">
      <CardTitle className="mb-2">Blog — National • Tech • Fashion</CardTitle>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <Input placeholder="Post title" value={title} onChange={e=>setTitle(e.target.value)}/>
          <select className="border rounded-xl px-3 py-2" value={cat} onChange={e=>setCat(e.target.value as any)}>
            <option>National</option><option>Tech</option><option>Fashion</option>
          </select>
          <Input placeholder="Optional source link (paste URL)" value={link} onChange={e=>setLink(e.target.value)}/>
          <Textarea placeholder="Short teaser..." value={teaser} onChange={e=>setTeaser(e.target.value)}/>
          <Textarea placeholder="Body..." value={body} onChange={e=>setBody(e.target.value)}/>
          <Button onClick={add}>Publish</Button>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-3">
      {posts.map(p=>(<div key={p.id} className="border rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2"><CardTitle>{p.title}</CardTitle><Badge>{p.category}</Badge></div>
        <div className="text-xs opacity-60 mb-2">{p.date}</div>
        <div className="text-sm mb-2">{p.teaser}</div>
        <div className="text-sm opacity-80 whitespace-pre-wrap">{p.body}</div>
        {p.link && <a className="text-sm underline mt-2 inline-block" href={p.link} target="_blank">Read source</a>}
      </div>))}
    </div>
  </main>;
}
