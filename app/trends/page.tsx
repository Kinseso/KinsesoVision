"use client";
import { useMemo, useState } from "react";
import { Card } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Badge } from "../../src/components/ui/badge";
export default function Page(){
  const trends=[{tag:"metallic"},{tag:"denim"},{tag:"quiet luxury"},{tag:"eco‑knit"},{tag:"y2k"}];
  const [q,setQ]=useState("");
  const f=useMemo(()=>trends.filter(t=>t.tag.toLowerCase().includes(q.toLowerCase())),[q]);
  return <main className="max-w-3xl mx-auto p-4 space-y-3">
    <Card className="p-4"><CardTitle className="mb-2">Search Trends</CardTitle><Input placeholder="Type a trend…" value={q} onChange={e=>setQ(e.target.value)}/><div className="mt-3 flex flex-wrap gap-2">{f.map(t=> <Badge key={t.tag}>{t.tag}</Badge>)}</div></Card>
  </main>;
}
