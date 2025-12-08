"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    category: "Home & Lifestyle",
    items: ["Cleaning", "Home organisation", "Repairs", "Live-in support"],
  },
  {
    category: "Care & Wellbeing",
    items: ["Domiciliary care", "Wellness coaching", "Remote check-ins"],
  },
  {
    category: "Logistics & Mobility",
    items: ["Parcel pickup", "Fashion returns", "Same-day delivery"],
  },
  {
    category: "Fashion & Creators",
    items: ["Styling", "Content creators", "Market analytics", "Brand collabs"],
  },
  {
    category: "Finance & Opportunities",
    items: ["Financing partners", "Savings tools", "Gig & job listings"],
  },
  {
    category: "Relationships & Community",
    items: ["Connections", "Events", "Community groups"],
  },
];

export default function LifeHubPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-slate-50 space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold">Kinseso Life Hub</h1>
        <p className="text-sm text-slate-300/80 max-w-3xl">
          A curated hub where partners can plug in services across life, work,
          fashion, finance and wellbeing. Users interact through a single
          experience, while providers gain access to a connected customer base
          and rich analytics.
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((block) => (
          <Card
            key={block.category}
            className="bg-slate-900/80 border-slate-800 hover:border-emerald-400/60 hover:-translate-y-1 transition-all"
          >
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                {block.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-slate-300/80">
              <ul className="space-y-1">
                {block.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-3 w-full border-emerald-400/60 text-emerald-200 hover:bg-emerald-500/10"
              >
                View partner options
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
