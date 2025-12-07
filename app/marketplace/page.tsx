"use client";
import { useMemo, useState } from "react";
import { Badge } from "../../src/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";
import { Textarea } from "../../src/components/ui/textarea";;
export default function Page(){
  const seed=[{id:1,name:"Luna Silver Micro‑Bag",price:59,eco:true,curated:true,image:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop",tags:["metallic","bag"]},{id:2,name:"Patchwork Denim Jacket",price:89,eco:false,curated:false,image:"https://images.unsplash.com/photo-1520974735194-3944a9a8b86b?q=80&w=1200&auto=format&fit=crop",tags:["denim","jacket"]}];
  const [items,setItems]=useState(seed as any[]);
  const [q,setQ]=useState("");
  const [eco,setEco]=useState(false);
  const [title,setTitle]=useState("");
  const [img,setImg]=useState("");
  const [price,setPrice]=useState("");
  const filtered=useMemo(()=>items.filter(p=>(eco?p.eco:true)&&(p.name.toLowerCase()+p.tags.join(",")).includes(q.toLowerCase())),[items,eco,q]);
  const add=()=>{ if(!title) return; const pr=Number(price||0)||0; setItems(i=>[{id:Date.now(),name:title,price:pr,eco:false,curated:false,image:img||"https://images.unsplash.com/photo-1520974735194-3944a9a8b86b?q=80&w=1200&auto=format&fit=crop",tags:[q||"ugc"],owner:"You"},...i]); setTitle(""); setImg(""); setPrice("");};
  const buy=(p:any)=>alert(`Demo checkout for ${p.name} (£${p.price})`);
  return <main className="max-w-7xl mx-auto p-4 space-y-4">
    <Card className="p-4 space-y-3">
      <CardTitle>Search & Filters</CardTitle>
      <div className="grid sm:grid-cols-3 gap-2">
        <Input placeholder="Search trend (e.g., metallic)" value={q} onChange={e=>setQ(e.target.value)}/>
        <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={eco} onChange={e=>setEco(e.target.checked)}/> Sustainable only</label>
        <div className="text-sm self-center">Curated items show a <Badge>Curated</Badge> tag</div>
      </div>
    </Card>
    <Card className="p-4">
      <CardTitle>Marketplace</CardTitle>
      <div className="grid md:grid-cols-3 gap-3 mt-3">
        {filtered.map(p=>(<div key={p.id} className="border rounded-2xl overflow-hidden">
          <img src={p.image} className="h-40 w-full object-cover"/>
          <div className="p-3 space-y-1">
            <div className="text-sm font-medium">{p.name} {p.curated && <Badge className="ml-2">Curated</Badge>} {p.eco && <Badge variant="green" className="ml-1">Eco</Badge>} {p.owner && <Badge className="ml-1">Seller: {p.owner}</Badge>}</div>
            <div className="text-sm">£{p.price}</div>
            <div className="flex gap-2">
              <Button onClick={()=>buy(p)}>Buy</Button>
              <Button variant="secondary" onClick={()=>alert("Stripe demo")}>Pay with Card</Button>
              <Button variant="secondary" onClick={()=>alert("Crypto demo")}>Pay with Crypto</Button>
            </div>
          </div>
        </div>))}
      </div>
    </Card>
    <Card className="p-4 space-y-2">
      <CardTitle>Resell / Publish your design</CardTitle>
      <div className="grid sm:grid-cols-3 gap-2">
        <Input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
        <Input placeholder="Image URL" value={img} onChange={e=>setImg(e.target.value)}/>
        <Input placeholder="Price (£)" value={price} onChange={e=>setPrice(e.target.value)}/>
      </div>
      <Button onClick={add}>Publish</Button>
    </Card>
  </main>;
}
