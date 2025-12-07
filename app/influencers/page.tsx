"use client";
import { Card } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Badge } from "../../src/components/ui/badge";
export default function Page(){
  const partners=[{name:"@luna.styles", reach:"120k", niche:"Handbags"},{name:"@edenwear", reach:"85k", niche:"Sustainable"}];
  return <main className="max-w-4xl mx-auto p-4 space-y-3">
    <Card className="p-4"><CardTitle>Influencer Partnerships</CardTitle>{partners.map(p=> (<div key={p.name} className="border rounded-xl p-3 mt-2 flex items-center justify-between"><div><div className="font-medium">{p.name}</div><div className="text-xs opacity-70">Reach {p.reach} — {p.niche}</div></div><Button>Propose collaboration</Button></div>))}</Card>
    <Card className="p-4"><CardTitle>Exclusive Deals</CardTitle><div className="text-sm opacity-70">Deals will auto-apply on eligible products (demo).</div></Card>
  </main>;
}
