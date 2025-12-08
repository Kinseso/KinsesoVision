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

type EvidenceItem = {
  id: number;
  source: string;
  title: string;
  status: "Recording" | "Synced" | "Alert" | "Archived";
  time: string;
  location: string;
  size: string;
  risk: "Low" | "Medium" | "High";
};

const SAMPLE_EVIDENCE: EvidenceItem[] = [
  {
    id: 1,
    source: "Dashcam",
    title: "Vehicle break-in on residential street",
    status: "Alert",
    time: "Today · 02:14",
    location: "Peckham, London",
    size: "412 MB",
    risk: "High",
  },
  {
    id: 2,
    source: "CCTV",
    title: "Shop front vandalism – glass impact detected",
    status: "Synced",
    time: "Yesterday · 23:51",
    location: "Brixton, London",
    size: "268 MB",
    risk: "Medium",
  },
  {
    id: 3,
    source: "Bodycam",
    title: "Home-care visit – wellbeing check completed",
    status: "Recording",
    time: "Live",
    location: "Lewisham, London",
    size: "1.2 GB",
    risk: "Low",
  },
  {
    id: 4,
    source: "Doorbell",
    title: "Package drop-off confirmation",
    status: "Synced",
    time: "Today · 09:05",
    location: "Croydon, London",
    size: "96 MB",
    risk: "Low",
  },
  {
    id: 5,
    source: "CarPlayRadio",
    title: "Hands-free call during near-miss event",
    status: "Archived",
    time: "Last week",
    location: "A23, Surrey",
    size: "55 MB",
    risk: "Medium",
  },
];

const SOURCES = [
  "All",
  "Dashcam",
  "CCTV",
  "Bodycam",
  "Doorbell",
  "CarPlayRadio",
  "Other",
];

export default function CloudEvidencePage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const visibleEvidence = SAMPLE_EVIDENCE.filter(
    (item) => filter === "All" || item.source === filter,
  );

  const selected =
    visibleEvidence.find((e) => e.id === selectedId) || visibleEvidence[0];

  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        {/* Header */}
        <section className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-300 uppercase">
            KSEE · Cloud Evidence Vault
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Real-time recording from your cameras, safely stored in the cloud.
          </h1>
          <p className="text-sm text-slate-200 max-w-3xl">
            Connect dashcams, CCTV, bodycams, phones, doorbells and CarPlay or
            in-car systems. KinsesoVision automatically streams and protects your
            recordings so you can recover evidence even if devices are stolen or
            destroyed.
          </p>
        </section>

        {/* Filters */}
            <section className="space-y-3">
          <p className="text-xs text-slate-300">Filter by evidence source</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {SOURCES.map((s) => (
              <Badge
                key={s}
                variant={filter === s ? "green" : "secondary"}
                className={
                  filter === s
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-600"
                }
                onClick={() => setFilter(s)}
              >
                {s === "CarPlayRadio" ? "CarPlay / Radio" : s}
              </Badge>
            ))}
          </div>
        </section>

        {/* Main layout */}
        <section className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
          {/* Evidence list */}
          <Card className="bg-slate-900/80 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-base">
                  Evidence timeline ({visibleEvidence.length})
                </CardTitle>
                <CardDescription>
                  Ordered by event time – newest first.
                </CardDescription>
              </div>
              <Button size="sm" variant="outline" className="border-slate-600">
                Connect new device
              </Button>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-slate-200">
              {visibleEvidence.length === 0 && (
                <div className="text-slate-400 py-10 text-center text-xs">
                  No evidence yet for this source. Connect a device or adjust
                  the filter above.
                </div>
              )}

              <ul className="space-y-3">
                {visibleEvidence.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`w-full text-left rounded-2xl border px-3 py-3 flex flex-col gap-1 transition-all duration-150 ${
                        selected && selected.id === item.id
                          ? "border-emerald-400/80 bg-slate-900"
                          : "border-slate-700 bg-slate-900/40 hover:border-emerald-400/60 hover:bg-slate-900/70"
                      }`}
                      onClick={() => setSelectedId(item.id)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-slate-50 text-[13px]">
                          {item.title}
                        </span>
                        <StatusPill status={item.status} />
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-300">
                        <span>{item.time}</span>
                        <span>· {item.location}</span>
                        <span>· Source: {item.source}</span>
                        <span>· Size: {item.size}</span>
                        <span>· Risk: {item.risk}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Selected evidence details */}
          <Card className="bg-slate-900/90 border-emerald-500/60">
            <CardHeader>
              <CardTitle className="text-base">
                {selected ? selected.title : "Evidence details"}
              </CardTitle>
              <CardDescription className="text-xs">
                Preview of the AI evidence pack KSEE can generate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-xs text-slate-200">
              {/* Video placeholder */}
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-black/80 aspect-video flex items-center justify-center text-[11px] text-slate-200">
                Live / playback window – attach your actual player here when
                devices are integrated.
              </div>

              {selected && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <InfoRow label="Source" value={selected.source} />
                    <InfoRow label="Status" value={selected.status} />
                    <InfoRow label="Time" value={selected.time} />
                    <InfoRow label="Location" value={selected.location} />
                    <InfoRow label="File size" value={selected.size} />
                    <InfoRow label="Risk level" value={selected.risk} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-[13px]">
                      AI-generated pack (concept)
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-[11px]">
                      <li>Continuous video sequence for the event window.</li>
                      <li>Timeline of key frames and detected events.</li>
                      <li>Approximate location and geo-time logs.</li>
                      <li>
                        Abstracted description of persons / vehicles without
                        revealing sensitive details by default.
                      </li>
                      <li>PDF summary export for authorities and insurers.</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Generate evidence pack</Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600"
                    >
                      Download secure copy
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-slate-300"
                    >
                      Share with trusted contact
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

function StatusPill({ status }: { status: EvidenceItem["status"] }) {
  let color =
    "bg-slate-800 text-slate-100 border border-slate-600 text-[10px] px-2 py-0.5 rounded-full";
  if (status === "Recording")
    color =
      "bg-emerald-500/20 text-emerald-300 border border-emerald-500/60 text-[10px] px-2 py-0.5 rounded-full";
  if (status === "Alert")
    color =
      "bg-red-500/20 text-red-300 border border-red-500/70 text-[10px] px-2 py-0.5 rounded-full";
  if (status === "Synced")
    color =
      "bg-sky-500/20 text-sky-300 border border-sky-500/70 text-[10px] px-2 py-0.5 rounded-full";

  return <span className={color}>{status}</span>;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-0.5">
      <p className="text-[10px] text-slate-400 uppercase tracking-wide">
        {label}
      </p>
      <p className="text-[12px] text-slate-100">{value}</p>
    </div>
  );
}
