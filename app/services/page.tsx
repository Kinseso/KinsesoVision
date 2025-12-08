"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Badge } from "../../src/components/ui/badge";

const services = [
  {
    id: "cleaning",
    title: "Home & Space Cleaning",
    description:
      "On-demand cleaners, deep cleans and regular maintenance for homes, studios and retail spaces.",
    tags: ["B2C", "Local services", "Recurring"],
  },
  {
    id: "care",
    title: "Care & Support",
    description:
      "Live-in carers, respite care and wellbeing support, with optional safety recording for vulnerable users.",
    tags: ["Care", "Safety", "Wellbeing"],
  },
  {
    id: "logistics",
    title: "Logistics & Delivery",
    description:
      "Pick-ups, deliveries and fashion logistics – integrated with live location and optional evidence tracking.",
    tags: ["Logistics", "Tracking"],
  },
  {
    id: "fashion",
    title: "Fashion & Market Analytics",
    description:
      "Trend analysis, demand signals and creator insights powered by user activity and external data feeds.",
    tags: ["Analytics", "Fashion", "Data"],
  },
  {
    id: "dating",
    title: "Relationships & Community",
    description:
      "Relationship, dating and communities – with optional verification and safety tools around real-world meetups.",
    tags: ["Community", "Trust"],
  },
  {
    id: "jobs",
    title: "Jobs & Freelance Work",
    description:
      "A light-weight opportunity board where users can connect to work offers, gigs, styling and consulting jobs.",
    tags: ["Employment", "Freelance"],
  },
  {
    id: "creators",
    title: "Creators & Marketplace",
    description:
      "Creators, stylists and professionals can showcase work, sell services and connect to clients.",
    tags: ["Creators", "Marketplace"],
  },
  {
    id: "finance",
    title: "Finance & Planning",
    description:
      "Personal and business finance tools, subscription management and high-level cash-flow views.",
    tags: ["Finance", "Planning"],
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <section>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Kinseso Life Hub – Services in One Place
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          The Kinseso Life Hub connects users to multiple verticals – cleaning, care,
          logistics, fashion analytics, dating, jobs, creators and finance – through
          a single, consistent interface. Businesses can plug in their services and
          benefit from discovery, data and trust.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id} className="bg-white/90 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2 text-xs">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="secondary" size="sm">
                Coming soon
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
