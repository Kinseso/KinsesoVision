"use client";
import { useState } from "react";
import { Badge } from "../../src/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";
import { Textarea } from "../../src/components/ui/textarea";;
export default function Page(){
  const [msgs,setMsgs]=useState([{role:"bot",text:"Hi! I’m the KinsesoVision assistant. Ask me about analytics, pricing, inventory, trends, deployment, or payments."}] as {role:"bot"|"you",text:string}[]);
  const [text,setText]=useState("");
  const reply=(q:string)=>{const s=q.toLowerCase(); let a="Upload data in Analytics, then ask me for insights."; if(/price|pricing|markdown|discount/.test(s)) a="Pricing: protect hero SKUs, A/B ladders; targeted markdowns when sell-through < 40% by week 6."; if(/inventory|stock|sell.?through|otb|open to buy/.test(s)) a="Inventory: 70–80% sell-through target; rebalance weekly; 12-week rolling forecast."; if(/trend|forecast|demand/.test(s)) a="Demand: use 3‑month moving average; watch MoM variance >20%."; if(/marketing|campaign|roi|roas/.test(s)) a="Marketing: shift to channels with positive RoAS; try creator whitelisting."; if(/deployment|domain|vercel/.test(s)) a="Go live: push to GitHub, deploy on Vercel, connect your domain."; if(/payments|stripe|crypto/.test(s)) a="Payments: Stripe Checkout for cards; Coinbase Commerce/WalletConnect for crypto."; return a;};
  const send=()=>{ if(!text.trim()) return; const q=text.trim(); setMsgs(m=>[...m,{role:"you",text:q},{role:"bot",text:reply(q)}]); setText("");};
  return <main className="max-w-3xl mx-auto p-4">
    <Card className="p-4">
      <CardTitle className="mb-2">Chat Assistant</CardTitle>
      <div className="h-80 overflow-y-auto border rounded-xl p-3 bg-gray-50 space-y-2">{msgs.map((m,i)=>(<div key={i} className={m.role==='bot'?"":"text-right"}><span className={`inline-block px-3 py-2 rounded-2xl text-sm ${m.role==='bot'?'bg-white':'bg-black text-white'}`}>{m.text}</span></div>))}</div>
      <div className="mt-3 flex gap-2"><Input placeholder="Type your question…" value={text} onChange={e=>setText(e.target.value)}/><Button onClick={send}>Send</Button></div>
      <div className="text-xs opacity-70 mt-2">Demo assistant (no external AI calls yet).</div>
    </Card>
  </main>;
}
