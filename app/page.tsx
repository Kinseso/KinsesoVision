import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Page(){
  const links=[
    {href:"/analytics",t:"Decision Analytics",d:"CSV → KPIs, charts, forecast, AI insights, Decision Brief"},
    {href:"/marketplace",t:"Marketplace",d:"Curated + sustainable filter, trends, UGC, Buy/Resell, payments demo"},
    {href:"/insurance",t:"Insurance",d:"Brands ↔ insurers packages + quote requests"},
    {href:"/showcase",t:"Showcase & Voting",d:"Designer competition, public votes"},
    {href:"/forum",t:"Community Forum",d:"Threads & replies"},
    {href:"/social",t:"Social Network",d:"Feed, like/comment, follow, friend requests"},
    {href:"/tryon",t:"Virtual Try‑On",d:"Overlay demo + 3D placeholder"},
    {href:"/education",t:"Education Hub",d:"Tutorials & workshops"},
  ];
  return <main className="max-w-6xl mx-auto p-6">
    <h1 className="text-2xl font-semibold mb-4">Welcome to KinsesoVision</h1>
    <div className="grid md:grid-cols-2 gap-4">
      {links.map(l=> <Link key={l.href} href={l.href}><Card className="hover:shadow-md transition"><CardHeader><CardTitle>{l.t}</CardTitle></CardHeader><CardContent className="text-sm opacity-80">{l.d}</CardContent></Card></Link>)}
    </div>
  </main>;
}
