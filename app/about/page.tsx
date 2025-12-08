"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-16 md:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto space-y-8">
        <header>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">
            About Kinseso Vision v12.0
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            A single workspace for fashion-tech founders and Innovator Founder Visa
            evidence.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Kinseso Vision is built to help founders move from idea to proof-of-concept
            and into the UK through the Innovator Founder Visa route. The app
            combines creative experimentation, market validation and investor-grade
            documentation in one place.
          </p>
        </header>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-base">What the app does</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-3">
            <p>
              • <strong>Trend lab:</strong> capture and track fashion and culture trends,
              test concepts and cluster insights from the analytics module.
            </p>
            <p>
              • <strong>Campaigns and creators:</strong> log collaborations with creators,
              influencers and early brand partners. Track performance and learnings.
            </p>
            <p>
              • <strong>Marketplace pilots:</strong> document capsule drops, pre-orders,
              resale or rental pilots and connect them to real metrics such as
              revenue, conversion and retention.
            </p>
            <p>
              • <strong>Evidence locker:</strong> store key documents – pitch decks,
              MOUs, supplier contracts, investor interest, technology documentation –
              inside the cloud storage area.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-base">
              Why it matters for Innovator Founder Visa
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-3">
            <p>
              Assessors and endorsing bodies want clear evidence that your concept is{" "}
              innovative, viable and scalable. Kinseso Vision helps you:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Show your product roadmap and innovation experiments clearly.</li>
              <li>Demonstrate proof-of-market with structured analytics.</li>
              <li>Bundle all supporting documents into a single digital dossier.</li>
              <li>Export key views and screenshots into visa templates and pitch decks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-base">Roadmap for v12.x</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            <p>Planned features after this release include:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Deeper Supabase storage integration for structured evidence folders.</li>
              <li>One-click export of evidence packs for endorsing bodies.</li>
              <li>Simple dashboards for monthly traction and funding updates.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
