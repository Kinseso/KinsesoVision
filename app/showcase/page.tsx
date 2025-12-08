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
import { Textarea } from "@/components/ui/textarea";

type VideoEntry = {
  id: number;
  title: string;
  url: string;
  description: string;
  votes: number;
};

const starterEntries: VideoEntry[] = [
  {
    id: 1,
    title: "Studio walkthrough & material library",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A quick tour of the studio, fabrics library and digital sampling workflow.",
    votes: 14,
  },
  {
    id: 2,
    title: "Retail pilot – smart fitting room trial",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Highlights from the pilot with an independent London retailer.",
    votes: 9,
  },
];

export default function ShowcasePage() {
  const [entries, setEntries] = useState<VideoEntry[]>(starterEntries);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title || !url) return;
    const next: VideoEntry = {
      id: Date.now(),
      title,
      url,
      description,
      votes: 0,
    };
    setEntries((prev) => [next, ...prev]);
    setTitle("");
    setUrl("");
    setDescription("");
  };

  const vote = (id: number) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, votes: e.votes + 1 } : e))
    );
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Video portfolio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Showcase the venture in motion
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          Curate short clips that show your technology, customers and partners.
          Use them in pitch meetings and visa interviews to bring the business
          to life.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,1fr]">
        {/* VIDEO GRID */}
        <Card className="border-slate-800 bg-slate-900/70">
          <CardHeader>
            <CardTitle className="text-sm text-slate-100">
              Portfolio entries
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {entries.map((en) => (
              <div
                key={en.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60"
              >
                <div className="aspect-video w-full bg-slate-900">
                  {/* If it's a YouTube embed link, we render an iframe; otherwise a simple video */}
                  {en.url.includes("youtube.com/embed") ? (
                    <iframe
                      src={en.url}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={en.title}
                    />
                  ) : (
                    <video
                      src={en.url}
                      controls
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between p-3 text-xs text-slate-200">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-slate-50">
                      {en.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {en.description || "No description yet."}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => vote(en.id)}
                    >
                      Vote · {en.votes}
                    </Button>
                    <span className="text-[10px] text-slate-500">
                      For internal scoring only
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {entries.length === 0 && (
              <p className="text-xs text-slate-400">
                No videos yet. Add your first clip using the form on the right.
              </p>
            )}
          </CardContent>
        </Card>

        {/* CREATE ENTRY */}
        <Card className="border-emerald-500/40 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-300">
              Add a new clip
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-300">
            <p>
              Paste either a YouTube embed URL ({" "}
              <code className="rounded bg-slate-800 px-1">
                https://www.youtube.com/embed/…
              </code>{" "}
              ) or a direct <code>.mp4</code> link.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Title – e.g. Retail pilot highlights"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Video URL (YouTube embed or .mp4)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Textarea
                placeholder="Short description – what does this clip prove?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button onClick={submit} className="w-full">
                Save to portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
