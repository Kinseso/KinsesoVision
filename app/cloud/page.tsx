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
  status: "Streaming" | "Stored" | "Flagged";
  createdAt: string;
};

const evidenceFilters: EvidenceSource[] = [
  "All",
  "Dashcam",
  "CCTV",
  "Bodycam",
  "Doorbell",
  "CarPlayRadio",
  "Other",
];

const demoEvidence: EvidenceItem[] = [
  {
    id: 1,
    source: "Dashcam",
    title: "Vehicle incident – high street",
    location: "London, UK",
    status: "Streaming",
    createdAt: "Just now",
  },
  {
    id: 2,
    source: "CCTV",
    title: "Store front security feed",
    location: "Manchester, UK",
    status: "Stored",
    createdAt: "5 min ago",
  },
  {
    id: 3,
    source: "Bodycam",
    title: "On-site inspection footage",
    location: "Birmingham, UK",
    status: "Flagged",
    createdAt: "12 min ago",
  },
  {
    id: 4,
    source: "CarPlayRadio",
    title: "In-car audio + dashcam sync",
    location: "Leeds, UK",
    status: "Streaming",
    createdAt: "30 sec ago",
  },
];

export default function CloudPage() {
  const [filter, setFilter] = useState<EvidenceSource>("All");

  const filteredEvidence =
    filter === "All"
      ? demoEvidence
      : demoEvidence.filter((item) => item.source === filter);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Top summary card */}
      <Card className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-sky-500 text-white">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            Kinseso Secure Evidence Engine (KSEE)
          </CardTitle>
          <CardDescription className="text-emerald-50">
            Real-time cloud recording from dashcams, CCTV, bodycams, CarPlay
            radios and every connected camera – so evidence is safe even when
            devices are lost, stolen or destroyed.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm md:text-base">
          <div>
            <p className="font-semibold">Live streams</p>
            <p className="text-emerald-50">
              Vehicles, homes, workplaces and body-worn devices streaming
              directly into the secure cloud vault.
            </p>
          </div>
          <div>
            <p className="font-semibold">AI event detection</p>
            <p className="text-emerald-50">
              Break-ins, vandalism, road accidents, abuse in care homes and
              more – automatically highlighted for review.
            </p>
          </div>
          <div>
            <p className="font-semibold">Evidence packs</p>
            <p className="text-emerald-50">
              Timelines, locations and exportable case files ready for police,
              insurers and compliance teams.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Filters + list */}
      <Card className="bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle>Evidence streams</CardTitle>
          <CardDescription>
            Filter recordings by source type and review the latest captured
            events across your cameras.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filter badges */}
          <div className="flex flex-wrap gap-2 text-xs md:text-sm">
            {evidenceFilters.map((type) => {
              const isActive = filter === type;
              const label =
                type === "CarPlayRadio"
                  ? "CarPlay / Radio"
                  : type === "All"
                  ? "All sources"
                  : type;

              return (
                <Badge
                  key={type}
                  variant={isActive ? "green" : "secondary"}
                  className="cursor-pointer px-3 py-1"
                  onClick={() => setFilter(type)}
                >
                  {label}
                </Badge>
              );
            })}
          </div>

          {/* Evidence cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredEvidence.map((item) => (
              <Card
                key={item.id}
                className="border border-emerald-100 shadow-sm hover:shadow-md transition"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base md:text-lg">
                      {item.title}
                    </CardTitle>
                    <Badge
                      variant={
                        item.status === "Streaming"
                          ? "green"
                          : item.status === "Flagged"
                          ? "purple"
                          : "secondary"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex justify-between text-xs md:text-sm">
                    <span>{item.location}</span>
                    <span>{item.createdAt}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between pt-0 text-xs md:text-sm">
                  <div className="space-y-1">
                    <p className="font-medium">
                      Source:{" "}
                      {item.source === "CarPlayRadio"
                        ? "CarPlay / Radio + dashcam"
                        : item.source}
                    </p>
                    <p className="text-muted-foreground">
                      Encrypted at rest. Redundant multi-region storage for
                      critical evidence.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="secondary"
                      className="text-xs md:text-sm"
                    >
                      View timeline
                    </Button>
                    <Button
                      variant="default"
                      className="text-xs md:text-sm bg-emerald-600 hover:bg-emerald-700"
                    >
                      Generate AI evidence pack
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvidence.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No evidence streams match this filter yet.
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
