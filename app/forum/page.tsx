"use client";
import { useState } from "react";
import { Badge } from "../../src/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";
import { Textarea } from "../../src/components/ui/textarea";;
export default function Page(){
  const [threads,setThreads]=useState([{id:1,title:"How to price limited drops?",body:"What frameworks do you use for scarcity without hurting brand?",replies:["Use ladder pricing + controlled restock."]}]);
  const [title,setTitle]=useState(""); const [body,setBody]=useState(""); const [reply,setReply]=useState({} as any);
  const post=()=>{ if(!title||!body) return; setThreads(t=>[{id:Date.now(),title,body,replies:[]},...t]); setTitle(""); setBody(""); };
  const add=(id:number)=>{ if(!reply[id]) return; setThreads(t=>t.map(th=> th.id===id? {...th, replies:[...th.replies, reply[id]]}:th)); setReply((r:any)=>({...r,[id]:""})); };
  return <main className="max-w-5xl mx_auto p-4 space-y-4">
    <Card className="p-4"><CardTitle className="mb-2">Start a thread</CardTitle><Input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/><Textarea placeholder="Say something…" value={body} onChange={e=>setBody(e.target.value)}/><Button onClick={post} className="mt-2">Post</Button></Card>
    {threads.map(th=>(<Card key={th.id} className="p-4 space-y-2"><CardTitle>{th.title}</CardTitle><div className="text-sm opacity-80">{th.body}</div><div className="space-y-1 text-sm">{th.replies.map((r,i)=>(<div key={i}>• {r}</div>))}</div><div className="flex gap-2 mt-2"><Input placeholder="Reply…" value={reply[th.id]||""} onChange={e=>setReply((x:any)=>({...x,[th.id]:e.target.value}))}/><Button onClick={()=>add(th.id)}>Reply</Button></div></Card>))}
  </main>;
}
