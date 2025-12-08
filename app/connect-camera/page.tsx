"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ConnectCameraPage() {
  const [saved, setSaved] = useState(false);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-50">
      <Card className="bg-slate-900/80 border-slate-800">
        <CardHeader>
          <CardTitle className="text-lg text-emerald-200">
            Connect a New Camera or Recording Device
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-200/90">
          <p>
            This form is a UX placeholder for future integrations with dashcams,
            CCTV, body cameras, phones and in-car systems like CarPlay or
            Android Auto.
          </p>

          <div className="grid gap-4">
            <div>
              <label className="block mb-1 text-xs text-slate-300/80">
                Device name
              </label>
              <Input placeholder="e.g. Car – Front dashcam" />
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-300/80">
                Device type
              </label>
              <Input placeholder="Dashcam / CCTV / Doorbell / Bodycam / Phone…" />
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-300/80">
                Stream URL or connection ID
              </label>
              <Input placeholder="rtsp://, https://, or secure device ID" />
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-300/80">
                Notes / location
              </label>
              <Textarea placeholder="Where is this device installed? What does it cover?" />
            </div>
          </div>

          <Button
            className="mt-4 bg-emerald-500 text-slate-950 hover:bg-emerald-400"
            onClick={() => setSaved(true)}
          >
            Save device (design only)
          </Button>

          {saved && (
            <p className="text-xs text-emerald-300 mt-2">
              Device saved locally. In a full build this would call a secure API
              and start negotiation with the camera or recorder.
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
