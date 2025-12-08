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

type StepId = 0 | 1 | 2 | 3;

export default function OnboardingPage() {
  const [step, setStep] = useState<StepId>(0);

  const next = () => setStep((s) => (s < 3 ? ((s + 1) as StepId) : s));
  const prev = () => setStep((s) => (s > 0 ? ((s - 1) as StepId) : s));

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Onboarding
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Innovator / Founder visa preparation
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          This guided flow helps you collect the key information that endorsing
          bodies, investors and immigration partners expect. Complete it once,
          then reuse the data across multiple evidence packs.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr,0.9fr]">
        <Card className="border-emerald-500/50 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-sm text-slate-100">
              Step {step + 1} of 4
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-slate-200">
            <ProgressBar step={step} />

            {step === 0 && <FounderStep />}
            {step === 1 && <VentureStep />}
            {step === 2 && <TractionStep />}
            {step === 3 && <ReviewStep />}

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                size="sm"
                disabled={step === 0}
                onClick={prev}
              >
                Back
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    alert(
                      "This will eventually save a draft to your backend. For now it is a front-end demo."
                    )
                  }
                >
                  Save draft
                </Button>
                {step < 3 ? (
                  <Button size="sm" onClick={next}>
                    Continue
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={() =>
                      alert(
                        "In production, this would generate a structured evidence summary you can export."
                      )
                    }
                  >
                    Generate summary
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/70">
          <CardHeader>
            <CardTitle className="text-sm text-emerald-300">
              How this supports your visa case
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-300">
            <p>
              Each step is mapped to common sections in Innovator Founder visa
              guidance and investor questionnaires.
            </p>
            <ul className="list-disc space-y-2 pl-4">
              <li>
                <span className="font-semibold text-slate-100">
                  Step 1 – Founder profile
                </span>{" "}
                shows experience and credibility.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Step 2 – Venture model
                </span>{" "}
                covers innovation and scalability.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Step 3 – Traction & evidence
                </span>{" "}
                connects your data room and video portfolio.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Step 4 – Summary
                </span>{" "}
                is what you export to your advisors and endorsing body.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ProgressBar({ step }: { step: StepId }) {
  const pct = ((step + 1) / 4) * 100;
  return (
    <div className="space-y-1 text-xs text-slate-300">
      <div className="flex justify-between">
        <span>Progress</span>
        <span>{pct.toFixed(0)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* --- STEP COMPONENTS (pure UI, no own state – wire to form library later) */

function FounderStep() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-100">
        Founder details
      </h2>
      <Input placeholder="Full name" />
      <Input placeholder="Current role / title" />
      <Input placeholder="LinkedIn or professional profile URL" />
      <Textarea placeholder="Short bio and relevant fashion / tech experience" />
    </div>
  );
}

function VentureStep() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-100">
        Venture overview
      </h2>
      <Input placeholder="Venture name" />
      <Input placeholder="Website or product URL" />
      <Textarea placeholder="What is innovative about your product in the fashion ecosystem?" />
      <Textarea placeholder="How will the business scale internationally over the next 3–5 years?" />
    </div>
  );
}

function TractionStep() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-100">
        Traction & evidence
      </h2>
      <Textarea placeholder="Key pilots, customers or partnerships so far" />
      <Textarea placeholder="Revenue, waitlists or other demand signals (include dates and metrics)" />
      <Textarea placeholder="Links to key evidence in the Cloud workspace (pitch deck, contracts, IP, ESG etc.)" />
      <Textarea placeholder="Links to the most important videos in your portfolio" />
    </div>
  );
}

function ReviewStep() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-100">
        Review & next steps
      </h2>
      <p className="text-xs text-slate-300">
        Once you generate a summary, KinsesoVision will assemble a concise
        narrative covering:
      </p>
      <ul className="list-disc space-y-2 pl-4 text-xs text-slate-300">
        <li>Who you are and why you are credible to execute this venture.</li>
        <li>What the product is and why it is genuinely innovative.</li>
        <li>How the business will create jobs and impact in the UK.</li>
        <li>Which documents and videos back up each claim.</li>
      </ul>
      <p className="text-xs text-slate-400">
        For now this is a demo – but the structure is already optimised for
        founder / innovator visa routes and early-stage investors.
      </p>
    </div>
  );
}
