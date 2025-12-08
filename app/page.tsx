"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            v12 · Visa-ready fashion innovation OS
          </p>
          <h1 className="bg-gradient-to-br from-emerald-300 via-sky-300 to-fuchsia-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Turn fashion ideas into a{" "}
            <span className="underline decoration-emerald-400/70">
              fundable, visa-ready venture
            </span>
            .
          </h1>
          <p className="mt-5 max-w-xl text-sm text-slate-300 sm:text-base">
            KinsesoVision centralises your market data, IP, cloud docs, and
            video portfolio so founders, lawyers and caseworkers all see the
            same story – clearly structured for Innovator / Founder visa routes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => router.push("/onboarding")}
              className="bg-emerald-500 text-slate-900 hover:bg-emerald-400"
            >
              Start visa onboarding
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/showcase")}
            >
              View demo portfolio
            </Button>
          </div>

          <dl className="mt-8 grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
            <div>
              <dt className="font-semibold text-emerald-300">
                Evidence categories
              </dt>
              <dd>Market validation, IP, governance, impact, traction.</dd>
            </div>
            <div>
              <dt className="font-semibold text-emerald-300">
                Built for fashion
              </dt>
              <dd>Trend analytics, lookbooks, fittings, retail pilots.</dd>
            </div>
            <div>
              <dt className="font-semibold text-emerald-300">
                Stakeholder ready
              </dt>
              <dd>Exportable packs for investors and immigration lawyers.</dd>
            </div>
          </dl>
        </div>

        {/* HERO VIDEO CARD */}
        <Card className="border-emerald-500/30 bg-slate-900/60 shadow-xl shadow-emerald-500/10">
          <CardHeader>
            <CardTitle className="text-sm text-slate-100">
              90-second overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              {/* Replace src with your real promo video path or HLS player */}
              <video
                src="/videos/kinsesovision-demo.mp4"
                controls
                className="aspect-video w-full rounded-xl"
                poster="/images/hero-poster.jpg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-xs text-slate-400">
              This demo shows how a founder moves from idea to evidence pack,
              including analytics, cloud storage, and video case studies.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* THREE PILLARS */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="bg-slate-900/60 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-300">
              Cloud evidence workspace
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>
              Organise all the documents that caseworkers expect: pitch decks,
              financials, IP registrations, contracts and employment records.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/60 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm text-sky-300">
              Data & innovation story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>
              Link your analytics, experiments and market pilots directly to
              each visa criteria to show innovation and scalability.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/60 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm text-fuchsia-300">
              Investor-grade portfolio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>
              Curate a video-first portfolio that explains the product, runway,
              partnerships and impact across the fashion ecosystem.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
