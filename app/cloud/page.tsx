"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";

type LocalFile = {
  id: string;
  name: string;
  size: number;
};

export default function CloudLockerPage() {
  const [files, setFiles] = useState<LocalFile[]>([]);
  const [pending, setPending] = useState(false);

  const handleLocalAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // For now we only simulate upload and keep in memory
    const newItem: LocalFile = {
      id: `${Date.now()}-${file.name}`,
      name: file.name,
      size: file.size,
    };
    setFiles((prev) => [newItem, ...prev]);
    event.target.value = "";
  };

  const handleSimulatedUpload = async () => {
    setPending(true);
    // Here is where Supabase Storage integration will go in the next step.
    await new Promise((res) => setTimeout(res, 700));
    setPending(false);
    alert(
      "This is the v12 UI placeholder. In the next iteration we will connect this to Supabase Storage so files are persisted in the cloud."
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-16 md:px-12 lg:px-24">
      <section className="max-w-5xl mx-auto space-y-10">
        <header>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">
            Cloud evidence locker
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Store visa and investor evidence in one secure workspace.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Use the cloud locker to organise documents that prove innovation,
            traction and scalability: product specs, contracts, investor emails,
            tests, research and screenshots from the rest of Kinseso Vision.
          </p>
        </header>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-base">Upload evidence (UI demo)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <Input
                type="file"
                className="bg-slate-950 border-slate-700 text-sm"
                onChange={handleLocalAdd}
              />
              <Button
                className="w-full md:w-auto"
                disabled={pending || files.length === 0}
                onClick={handleSimulatedUpload}
              >
                {pending ? "Simulating upload..." : "Save to cloud (demo)"}
              </Button>
            </div>
            <p className="text-xs text-slate-400">
              In the live version this button will push your files into Supabase Storage
              under your user ID so they are available on the web app and for export
              into visa packs.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-base">Recent files (session only)</CardTitle>
          </CardHeader>
          <CardContent>
            {files.length === 0 ? (
              <p className="text-sm text-slate-400">
                No files added in this session yet. Use the picker above to add some
                sample evidence files – pitch decks, pilots, contracts, etc.
              </p>
            ) : (
              <ul className="divide-y divide-slate-800 text-sm">
                {files.map((f) => (
                  <li
                    key={f.id}
                    className="flex justify-between items-center py-2 text-slate-200"
                  >
                    <span className="truncate max-w-xs md:max-w-md">{f.name}</span>
                    <span className="text-xs text-slate-500">
                      {(f.size / 1024).toFixed(1)} KB
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
