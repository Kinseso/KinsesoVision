"use client";

import { useRouter } from "next/navigation";
import { Button } from "../src/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../src/components/ui/card";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="px-6 py-16 md:px-12 lg:px-24 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-4">
            Kinseso Vision – v12.0
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            AI-driven fashion, traction metrics and cloud evidence for
            <span className="text-emerald-400"> Innovator Founder Visa</span>.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
            Kinseso Vision unifies trend analytics, creator campaigns, marketplace
            pilots and investor-ready evidence into one workspace. Designed so
            founders can clearly demonstrate innovation, traction and scalability
            to Home Office and investors.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              className="px-6"
              onClick={() => router.push("/login")}
            >
              Launch workspace
            </Button>
            <Button 
  variant="ghost"
  className="px-6 border border-emerald-500 text-emerald-300 hover:bg-emerald-950/40"
  onClick={() => router.push("/about")}
>
  Learn More
</Button>
          </div>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Central evidence locker for deals, contracts and market tests</li>
            <li>• Analytics for ads, influencers, marketplace and chat feedback</li>
            <li>• Clear story for pitch decks and Innovator Founder Visa dossiers</li>
          </ul>
        </div>

        {/* Video / visual card */}
        <Card className="bg-slate-900/60 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">
              90-second overview – Kinseso Vision for Innovator Founders
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Replace /demo-visa.mp4 with your real file in /public */}
            <div className="aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 mb-3">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/visa-poster.png" // optional thumbnail in /public
              >
                <source src="/demo-visa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-xs text-slate-400">
              This video should show how Kinseso Vision tracks innovation experiments,
              traction and revenue streams in one place for your visa and investor
              applications.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Three pillars section */}
      <section className="px-6 pb-16 md:px-12 lg:px-24 grid gap-6 md:grid-cols-3">
        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm">1. Evidence of innovation</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-slate-300 space-y-2">
            <p>
              Capture product experiments, fashion tech prototypes, AI tools and
              partnerships. Each entry can be backed with files, images and notes,
              ready to export into visa dossiers.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm">2. Evidence of traction</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-slate-300 space-y-2">
            <p>
              Pull in data from ads, influencers, marketplace tests and chat
              interactions so you can show early demand, revenue tests and
              commercial response by segment.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm">3. Evidence of scalability</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-slate-300 space-y-2">
            <p>
              Use your cloud locker to store contracts, LOIs, investor interest,
              tech architecture and operating model so assessors can see how the
              business can grow in the UK.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
