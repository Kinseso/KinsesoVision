"use client";

import Link from "next/link";
import { Button } from "../src/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../src/components/ui/card";
import { Badge } from "../src/components/ui/badge";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* HERO */}
        <section className="pt-16 md:pt-24 grid gap-10 md:grid-cols-[3fr,2fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3">
              Built in the UK · Powered by AI
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              KinsesoVision — Life, Work &amp; Safety in One Intelligent App.
            </h1>
            <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl">
              AI-powered super-app with real-time cloud evidence, life services,
              market intelligence and community — designed to bring everything
              you do into one secure ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register">Get started</Link>
              </Button>
              <Button variant="secondary">
                <Link href="/services">Explore services</Link>
              </Button>
              <Button variant="ghost">
                <Link href="/showcase">Watch demo</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-300">
              <div>
                <p className="font-semibold text-emerald-300">
                  Secure evidence &amp; cloud recording
                </p>
                <p>Dashcams, CCTV, bodycams, CarPlay radios and more.</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-300">
                  Life, work &amp; services in one hub
                </p>
                <p>Care, cleaning, logistics, jobs, dating, finance, creators.</p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-sky-500/20 to-purple-500/30 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20 overflow-hidden flex items-center justify-center">
              <div className="space-y-3 text-xs md:text-sm px-4">
                <p className="font-semibold text-emerald-200">
                  Live evidence vault
                </p>
                <p className="text-slate-100">
                  Streams from vehicles, homes, workplaces and body-worn cameras
                  are captured in real time and encrypted into the Kinseso
                  cloud.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="green">Dashcam</Badge>
                  <Badge variant="green">CCTV</Badge>
                  <Badge variant="green">Bodycam</Badge>
                  <Badge variant="green">CarPlay / Radio</Badge>
                  <Badge variant="purple">AI incident detected</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE INNOVATION – KSEE */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="bg-slate-900/80 border-emerald-500/40">
            <CardHeader>
              <CardTitle>The Secure Evidence Engine</CardTitle>
              <CardDescription>
                Real-time automatic cloud recording so critical evidence is
                never lost — even when devices are destroyed or stolen.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ul className="list-disc list-inside space-y-1 text-slate-100">
                <li>Dashcams, CCTV, home cameras, doorbells and bodycams.</li>
                <li>CarPlay radios and in-car systems for synced audio/video.</li>
                <li>AI detection for break-ins, vandalism and road incidents.</li>
                <li>
                  Evidence packs with timelines, locations and exportable case
                  summaries.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Life Hub Summary */}
          <Card className="bg-slate-900/80">
            <CardHeader>
              <CardTitle>The Kinseso Life Hub</CardTitle>
              <CardDescription>
                One app where users discover services, connect with people and
                manage work, money, safety and lifestyle.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-xs md:text-sm">
              <Badge variant="secondary">Cleaning &amp; home services</Badge>
              <Badge variant="secondary">Care &amp; support</Badge>
              <Badge variant="secondary">Logistics &amp; delivery</Badge>
              <Badge variant="secondary">Fashion &amp; trends</Badge>
              <Badge variant="secondary">Dating &amp; relationships</Badge>
              <Badge variant="secondary">Jobs &amp; freelancing</Badge>
              <Badge variant="secondary">Creators &amp; marketplace</Badge>
              <Badge variant="secondary">Finance &amp; planning</Badge>
            </CardContent>
          </Card>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            How KinsesoVision works
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <Card className="bg-slate-900/70">
              <CardHeader>
                <CardTitle className="text-base">1. Onboard</CardTitle>
                <CardDescription>
                  Download the app, register once and create your secure
                  profile.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900/70">
              <CardHeader>
                <CardTitle className="text-base">
                  2. Connect devices &amp; services
                </CardTitle>
                <CardDescription>
                  Link dashcams, CCTV, bodycams, CarPlay radios and cloud
                  services into one account.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900/70">
              <CardHeader>
                <CardTitle className="text-base">3. Live &amp; grow</CardTitle>
                <CardDescription>
                  Use the Life Hub to book services, analyse trends, discover
                  jobs, connect with people and stay protected.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* WHY THIS MATTERS */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <Card className="bg-slate-900/80">
            <CardHeader>
              <CardTitle>Why this matters</CardTitle>
              <CardDescription>
                KinsesoVision is designed for a world that is fast, mobile,
                data-driven and safety-conscious.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-xs md:text-sm">
              <Badge variant="secondary">Safety &amp; evidence</Badge>
              <Badge variant="secondary">Convenience</Badge>
              <Badge variant="secondary">Innovation</Badge>
              <Badge variant="secondary">Economic opportunity</Badge>
              <Badge variant="secondary">Community</Badge>
              <Badge variant="secondary">Scalable platform</Badge>
            </CardContent>
          </Card>

          {/* AI Assistant Teaser */}
          <Card className="bg-slate-900/80">
            <CardHeader>
              <CardTitle>Kinseso AI Guide</CardTitle>
              <CardDescription>
                Built-in assistant for fashion analytics, safety insights,
                service discovery and lifestyle recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                Ask questions like:{" "}
                <span className="italic text-emerald-200">
                  “Show me London fashion trends for the next season”
                </span>{" "}
                or{" "}
                <span className="italic text-emerald-200">
                  “Summarise evidence from my last 24 hours of dashcam
                  recording.”
                </span>
              </p>
              <Button variant="secondary" size="sm">
                <Link href="/chat">Open AI assistant</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* BLOG & TRENDS */}
        <section className="mt-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Fashion, tech &amp; life trends
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            KinsesoVision connects fashion analytics, technology news and life
            services – ideal for founders, creators and professionals watching
            the UK and global market.
          </p>
          <Button variant="ghost" size="sm">
            <Link href="/blog">Explore the blog</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
