"use client";
import { useState } from "react";
import { Card } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Badge } from "../../src/components/ui/badge";;
export default function Page(){
  const profiles=[{id:1,handle:"@you",name:"You",isCompany:false},{id:2,handle:"@novastudio",name:"NovaStudio",isCompany:true},{id:3,handle:"@aya",name:"Aya M.",isCompany:false},{id:4,handle:"@restitch",name:"ReStitch",isCompany:true}];
  const current=1;
  const [friends,setFriends]=useState({1:[3],3:[1]} as {[k:number]:number[]});
  const [requests,setRequests]=useState([{fromId:1,toId:2}] as {fromId:number,toId:number}[]);
  const [follows,setFollows]=useState({1:[2,3]} as {[k:number]:number[]});
  const [posts,setPosts]=useState([{id:1,authorId:3,text:"New AR try‑on for metallic micro‑bags!",likes:4,comments:[{authorId:2,text:"Amazing!"}]}]);
  const [comment,setComment]=useState({} as any);
  const [newPost,setNewPost]=useState("");
  const name=(id:number)=>profiles.find(p=>p.id===id)?.name||"User";
  const like=(pid:number)=>setPosts(p=>p.map(x=>x.id===pid?{...x,likes:x.likes+1}:x));
  const addC=(pid:number)=>{const t=(comment[pid]||"").trim(); if(!t) return; setPosts(p=>p.map(x=>x.id===pid?{...x,comments:[...x.comments,{authorId:current,text:t}]}:x)); setComment((m:any)=>({...m,[pid]:""}));};
  const publish=()=>{ if(!newPost.trim()) return; setPosts(p=>[{id:Date.now(),authorId:current,text:newPost.trim(),likes:0,comments:[]},...p]); setNewPost("");};
  return <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-4">
    <div className="md:col-span-2 space-y-3">
      <Card className="p-4">
        <CardTitle className="mb-2">Social feed</CardTitle>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-6 sm:col-span-5"><Textarea placeholder="Share a design, job, or idea…" value={newPost} onChange={e=>setNewPost(e.target.value)} /></div>
          <div className="col-span-6 sm:col-span-1 flex items-end"><Button onClick={publish}>Publish</Button></div>
        </div>
        {posts.map(p=> (<div key={p.id} className="border rounded-xl p-3 mt-3 space-y-2">
          <div className="text-sm"><strong>{name(p.authorId)}</strong> — {p.text}</div>
          <div className="flex gap-2 items-center"><Button variant="ghost" onClick={()=>like(p.id)}>👍 <span className="ml-1 text-sm">{p.likes}</span></Button></div>
          <div className="space-y-1">{p.comments.map((c,i)=><div key={i} className="text-xs"><strong>{name(c.authorId)}:</strong> {c.text}</div>)}</div>
          <div className="flex gap-2"><Input placeholder="Write a comment…" value={comment[p.id]||""} onChange={e=>setComment((x:any)=>({...x,[p.id]:e.target.value}))} /><Button variant="secondary" onClick={()=>addC(p.id)}>💬</Button></div>
        </div>))}
      </Card>
    </div>
    <div className="space-y-3">
      <Card className="p-4">
        <CardTitle className="mb-2">People</CardTitle>
        {profiles.filter(p=>p.id!==current).map(p=>(<div key={p.id} className="p-3 rounded-xl border mb-2">
          <div className="text-sm font-medium">{p.name} <span className="opacity-60 text-xs">{p.handle}</span> {p.isCompany && <Badge className="ml-1">Company</Badge>}</div>
          <div className="flex gap-2 mt-2">
            <Button size="sm" variant="secondary" onClick={()=>{const mine=(follows[current]||[]); const on=mine.includes(p.id); const next=on?mine.filter(x=>x!==p.id):[...mine,p.id]; setFollows(prev=>({...prev,[current]:next}));}}>{(follows[current]||[]).includes(p.id)? 'Unfollow':'Follow'}</Button>
            <Button size="sm" onClick={()=>{if(requests.some(r=>r.fromId===current&&r.toId===p.id)) return; setRequests(prev=>[...prev,{fromId:current,toId:p.id}]);}}>Add friend</Button>
          </div>
        </div>))}
      </Card>
      <Card className="p-4">
        <CardTitle className="mb-2">Friend requests</CardTitle>
        {requests.filter(r=>r.toId===current).length===0 && <div className="text-xs opacity-70">No pending requests.</div>}
      </Card>
    </div>
  </main>;
}
