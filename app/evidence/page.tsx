"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockEvents = [
  {
    id: "EV-10231",
    source: "Car dashcam – Front",
    risk: "High",
    type: "Suspected vandalism",
    status: "Analysing",
    time: "Today • 07:21",
  },
  {
    id: "EV-10212",
    source: "Shop CCTV – Entrance",
    risk: "Medium",
    type: "Crowd + unusual motion",
    status: "Stored",
    time: "Yesterday • 19:04",
  },
  {
    id: "EV-10188",
    source: "Home doorbell",
    risk: "Low",
    type: "Delivery / package",
    status: "Archived",
    time: "2 days ago",
  },
];

export default function EvidencePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-8 text-slate-50">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Secure Evidence Console</h1>
        <p className="text-sm text-slate-300/80 max-w-2xl">
          Monitor live recordings, AI-detected events and evidence packs from all
          connected cameras and devices. This UI is the foundation for future
          integrations with dashcams, CCTV, bodycams and mobile apps.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-200">
              Connected Devices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-300/80">
            <p>• 2 Vehicles</p>
            <p>• 3 Home / doorbell cameras</p>
            <p>• 2 Workplace CCTV streams</p>
            <p>• 1 Bodycam / mobile stream</p>
            <Button
              variant="outline"
              className="mt-3 w-full border-emerald-400/60 text-emerald-200 hover:bg-emerald-500/10"
            >
              Manage connections
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-200">
              Live Stream Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-300/80">
            <p>• 7/8 streams healthy</p>
            <p>• 1 stream intermittent (vehicle offline)</p>
            <p>• Average latency: &lt; 3 seconds</p>
            <p>• Encryption: end-to-end (design placeholder)</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-200">
              Evidence Packs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-300/80">
            <p>• 4 active cases</p>
            <p>• 23 closed / archived packs</p>
            <p>• Export formats: MP4, JSON, PDF (planned)</p>
            <Button className="mt-3 w-full bg-emerald-500 text-slate-950 hover:bg-emerald-400">
              View all evidence packs
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Recent AI-detected events</h2>
          <div className="flex gap-2 text-xs">
            <Badge className="bg-red-600/30 text-red-200 border-red-500/60">
              High
            </Badge>
            <Badge className="bg-amber-600/30 text-amber-200 border-amber-500/60">
              Medium
            </Badge>
            <Badge className="bg-slate-700/80 text-slate-100 border-slate-500/60">
              Low
            </Badge>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="text-left px-4 py-2">ID</th>
                <th className="text-left px-4 py-2">Source</th>
                <th className="text-left px-4 py-2">Type</th>
                <th className="text-left px-4 py-2">Risk</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockEvents.map((e) => (
                <tr
                  key={e.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/60"
                >
                  <td className="px-4 py-2 font-mono">{e.id}</td>
                  <td className="px-4 py-2">{e.source}</td>
                  <td className="px-4 py-2">{e.type}</td>
                  <td className="px-4 py-2">
                    {e.risk === "High" && (
                      <Badge className="bg-red-600/30 text-red-200 border-red-500/60">
                        High
                      </Badge>
                    )}
                    {e.risk === "Medium" && (
                      <Badge className="bg-amber-600/30 text-amber-200 border-amber-500/60">
                        Medium
                      </Badge>
                    )}
                    {e.risk === "Low" && (
                      <Badge className="bg-slate-700/80 text-slate-100 border-slate-500/60">
                        Low
                      </Badge>
                    )}
                  </td>
                  <td className="px-4 py-2">{e.status}</td>
                  <td className="px-4 py-2 text-slate-400">{e.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
