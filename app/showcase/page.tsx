"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../src/components/ui/card";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";

type Entry = {
  id: number;
  title: string;
  img: string;
  votes: number;
};

const initialEntries: Entry[] = [
  {
    id: 1,
    title: "AI-styled Metallic Jacket",
    img: "/images/demo-look-1.jpg",
    votes: 5,
  },
  {
    id: 2,
    title: "Smart Fabric Streetwear",
    img: "/images/demo-look-2.jpg",
    votes: 3,
  },
];

export default function ShowcasePage() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [entries, setEntries] = useState<Entry[]>(initialEntries);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !img) return;

    setEntries((prev) => [
      ...prev,
      { id: Date.now(), title, img, votes: 0 },
    ]);

    setTitle("");
    setImg("");
  };

  const handleVote = (id: number) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, votes: entry.votes + 1 } : entry
      )
    );
  };

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Enter your design into the showcase</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-3 gap-2 items-end"
          >
            <div className="sm:col-span-1 space-y-2">
              <label className="text-sm font-medium">Design title</label>
              <Input
                placeholder="Metallic streetwear set"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="sm:col-span-1 space-y-2">
              <label className="text-sm font-medium">Image URL</label>
              <Input
                placeholder="https://example.com/look.jpg"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <Button type="submit" className="mt-2 sm:mt-5">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Showcase & Votes</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {entries.length === 0 && (
            <p className="text-sm text-gray-500">
              No entries yet. Be the first to submit a look.
            </p>
          )}

          {entries.map((en) => (
            <div
              key={en.id}
              className="border rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {/* placeholder image area – real app would render the URL */}
                <span className="text-xs text-gray-500">image</span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{en.title}</span>
                  <span className="text-xs opacity-70">
                    {en.votes} vote{en.votes === 1 ? "" : "s"}
                  </span>
                </div>
                <Button
                  size="sm"
                  type="button"
                  onClick={() => handleVote(en.id)}
                >
                  Vote
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
