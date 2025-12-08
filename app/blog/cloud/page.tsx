"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type EvidenceType =
  | "Business Plan"
  | "Financials"
  | "IP"
  | "Contracts"
  | "Impact"
  | "Team";

type DocumentMeta = {
  id: number;
  name: string;
  category: EvidenceType;
  updated: string;
  size: string;
};

const seedDocs: DocumentMeta[] = [
  {
    id: 1,
    name: "KinsesoVision Pitch Deck v3.pdf",
    category: "Business Plan",
    updated: "2025-11-30",
    size: "4.2 MB",
  },
  {
    id: 2,
    name: "Fashion Pilot MoU – London Retailer.docx",
    category: "Contracts",
    updated: "2025-11-12",
    size: "380 KB",
  },
  {
    id: 3,
    name: "Trademark filing – KINSESOVISION.png",
    category: "IP",
    updated: "2025-10-05",
    size: "640 KB",
  },
  {
    id: 4,
    name: "Revenue & Runway Forecast.xlsx",
    category: "Financials",
    updated: "2025-09-20",
    size: "820 KB",
  },
  {
    id: 5,
    name: "Carbon Impact Model.pdf",
    category: "Impact",
    updated: "2025-09-10",
    size: "1.8 MB",
  },
];

export default function CloudPage() {
  const [query, setQuery] = useState("");
  const [docs] = useState<DocumentMeta[]>(seedDocs);
  const [filter, setFilter] = useState<string>("All");

  const filtered = docs.filter((doc) => {
    const q = query.toLowerCase();
    const matchesText =
      doc.name.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q);
    const matchesFilter = filter === "All" || doc.category === filter;
    return matchesText && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Cloud storage
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Visa evidence workspace
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          Use this view as the control centre for all documents that support an
          Innovator Founder application: from pitch decks and forecasts to IP
          filings and letters of support.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card className="border-slate-800 bg-slate-900/70">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-sm text-slate-100">
                Documents
              </CardTitle>
              <p className="text-xs text-slate-400">
                Store files by evidence category and quickly export a bundle for
                lawyers or endorsing bodies.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Search name or category…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-9 w-40 bg-slate-950/60 text-xs sm:w-56"
              />
              <Button
                size="sm"
                onClick={() =>
                  alert(
                    "This is a UI demo. Wire this button to your real upload flow."
                  )
                }
              >
                Upload
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 text-xs">
  <Badge
    variant={filter === "All" ? "green" : "secondary"}
    className="cursor-pointer"
    onClick={() => setFilter("All")}
  >
    All
  </Badge>

  <Badge
    variant={filter === "Dashcams" ? "green" : "secondary"}
    className="cursor-pointer"
    onClick={() => setFilter("Dashcams")}
  >
    Dashcams
  </Badge>

  <Badge
    variant={filter === "CCTV" ? "green" : "secondary"}
    className="cursor-pointer"
    onClick={() => setFilter("CCTV")}
  >
    CCTV
  </Badge>

  <Badge
    variant={filter === "Home" ? "green" : "secondary"}
    className="cursor-pointer"
    onClick={() => setFilter("Home")}
  >
    Home cameras
  </Badge>

  <Badge
    variant={filter === "Bodycam" ? "green" : "secondary"}
    className="cursor-pointer"
    onClick={() => setFilter("Bodycam")}
  >
    Bodycams
  </Badge>

  <Badge
    variant={filter === "Vehicle" ? "green" : "secondary"}
    className="cursor-pointer"
    onClick={() => setFilter("Vehicle")}
  >
    Vehicle cameras
  </Badge>
</div>

            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950/40">
              <table className="w-full text-left text-xs text-slate-200 sm:text-sm">
                <thead className="bg-slate-900/70 text-slate-400">
                  <tr>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2 hidden sm:table-cell">
                      Category
                    </th>
                    <th className="px-3 py-2 hidden sm:table-cell">
                      Updated
                    </th>
                    <th className="px-3 py-2 text-right">Size</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((doc) => (
                    <tr
                      key={doc.id}
                      className="border-t border-slate-800/80 hover:bg-slate-900/60"
                    >
                      <td className="px-3 py-2">
                        <span className="block truncate">{doc.name}</span>
                        <span className="mt-1 block text-[10px] text-slate-500 sm:hidden">
                          {doc.category} · {doc.updated}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-xs text-slate-300 hidden sm:table-cell">
                        {doc.category}
                      </td>
                      <td className="px-3 py-2 text-xs text-slate-300 hidden sm:table-cell">
                        {doc.updated}
                      </td>
                      <td className="px-3 py-2 text-right text-xs text-slate-300">
                        {doc.size}
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-3 py-6 text-center text-xs text-slate-500"
                      >
                        No documents match your filters yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-500/40 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-300">
              Evidence checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-300">
            <p>
              Use these categories to mirror how endorsing bodies and lawyers
              review applications.
            </p>
            <ul className="list-disc space-y-2 pl-4">
              <li>Innovation: prototypes, pilot reports, design IP.</li>
              <li>Viability: forecasts, cap table, governance documents.</li>
              <li>Scalability: partnerships, recruitment, international plans.</li>
              <li>
                Impact: sustainability metrics, social impact statements, ESG.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
