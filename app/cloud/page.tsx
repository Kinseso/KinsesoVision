"use client";

import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../src/components/ui/card";

import { Badge } from "../../src/components/ui/badge";
import { Button } from "../../src/components/ui/button";

// -----------------------------
// TYPES
// -----------------------------

type EvidenceSource =
  | "All"
  | "Dashcam"
  | "CCTV"
  | "Bodycam"
  | "Doorbell"
  | "CarPlayRadio"
  | "Other";

type EvidenceItem = {
  id: number;
  source: EvidenceSource;
  title: string;
  location: string;
  time: string;
  risk: "low" | "medium" | "high";
};

// -----------------------------
// SAMPLE DATA
// -----------------------------

const evidenceData: EvidenceItem[] = [
  {
    id: 1,
    source: "Dashcam",
    title: "Vehicle Break-in Detected",
    location: "London, UK",
    time: "2024-11-28 02:14",
    risk: "high",
  },
  {
    id: 2,
    source: "CCTV",
    title: "Suspicious Activity",
    location: "Birmingham, UK",
    time: "2024-11-27 18:45",
    risk: "medium",
  },
  {
    id: 3,
    source: "Bodycam",
    title: "Workplace Incident",
    location: "Manchester, UK",
    time: "2024-11-26 09:32",
    risk: "low",
  },
];

// -----------------------------
// UI PAGE COMPONENT
// -----------------------------

export default function CloudEvidencePage() {
  const [filter, setFilter] = useState<EvidenceSource>("All");

  const filteredEvidence =
    filter === "All"
      ? evidenceData
      : evidenceData.filter((item) => item.source === filter);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Cloud Evidence Vault (KSEE System)
      </h1>
      <p className="text-slate-600 max-w-2xl mb-8">
        All your recordings from Dashcams, CCTV, Bodycams, Doorbells, and other
        devices are automatically synced here in real time — even if the device
        is destroyed or stolen.
      </p>

      {/* ----------------------------- */}
      {/* FILTER CONTROLS */}
      {/* ----------------------------- */}

      <div className="flex flex-wrap gap-2 mb-6 text-xs">

        <Badge
          variant={filter === "All" ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("All")}
        >
          All
        </Badge>

        <Badge
          variant={filter === "Dashcam" ? "green" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("Dashcam")}
        >
          Dashcam
        </Badge>

        <Badge
          variant={filter === "CCTV" ? "green" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("CCTV")}
        >
          CCTV
        </Badge>

        <Badge
          variant={filter === "Bodycam" ? "green" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("Bodycam")}
        >
          Bodycam
        </Badge>

        <Badge
          variant={filter === "Doorbell" ? "green" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("Doorbell")}
        >
          Doorbell
        </Badge>

        <Badge
          variant={filter === "CarPlayRadio" ? "green" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("CarPlayRadio")}
        >
          CarPlay Radio
        </Badge>

        <Badge
          variant={filter === "Other" ? "green" : "secondary"}
          className="cursor-pointer"
          onClick={() => setFilter("Other")}
        >
          Other
        </Badge>

      </div>

      {/* ----------------------------- */}
      {/* RESULTS LIST */}
      {/* ----------------------------- */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {filteredEvidence.map((item) => (
          <Card key={item.id} className="shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                Source: {item.source} • {item.location}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-slate-600 mb-3">Time: {item.time}</p>

              <Badge
                variant={
                  item.risk === "high"
                    ? "default"
                    : item.risk === "medium"
                    ? "green"
                    : "secondary"
                }
              >
                Risk: {item.risk.toUpperCase()}
              </Badge>

              <div className="mt-4 flex justify-end">
                <Button
                  variant="default"
                  onClick={() => alert("Open evidence viewer")}
                >
                  View Evidence
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredEvidence.length === 0 && (
          <p className="text-slate-500 text-center col-span-full mt-10">
            No evidence records match your filter.
          </p>
        )}
      </div>
    </main>
  );
}
