"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* gradient + video overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-indigo-700/30" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* placeholder for future video background */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero-demo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
              Built in the UK • AI & Cloud First
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              KinsesoVision —{" "}
              <span className="text-emerald-300">
                Life, Work &amp; Safety in One Intelligent App.
              </span>
            </h1>

            <p className="text-slate-200/90 max-w-xl text-sm sm:text-base">
              AI-powered super-app with real-time cloud evidence, life services,
              and data intelligence. One secure platform where people can
              connect, trade, work, stay safe, and manage everyday life.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => router.push("/register")}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950"
              >
                Get Started
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-emerald-400/60 text-emerald-200 hover:bg-emerald-500/10"
                onClick={() => router.push("/hub")}
              >
                Explore Services
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-slate-100 hover:bg-slate-800"
                onClick={() =>
                  document
                    .getElementById("demo-video")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300/70">
              <span>Real-time cloud evidence</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>Life, work &amp; safety services</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>Analytics for fashion & markets</span>
            </div>
          </div>

          <div className="flex-1">
            <Card className="bg-slate-900/70 border-slate-700 shadow-2xl shadow-emerald-500/15">
              <CardHeader>
                <CardTitle className="text-emerald-200 text-lg">
                  Kinseso Secure Evidence Engine (KSEE)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-200/90">
                <p>
                  Real-time cloud recording for dashcams, CCTV, phones, body
                  cameras and more. If a device is stolen or destroyed, the
                  evidence is already safe in your encrypted cloud vault.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-xs">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Dashcams &amp; vehicle cameras
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Home &amp; workplace CCTV
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Phones &amp; bodycams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    AI event detection &amp; alerts
                  </li>
                </ul>
                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  onClick={() => router.push("/evidence")}
                >
                  Open Evidence Console
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 2 – CORE INNOVATION */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">
              The Secure Evidence Engine
            </h2>
            <p className="text-sm text-slate-300/80 max-w-xl mt-2">
              KSEE continuously streams recordings from dashcams, CCTV, home
              cameras, doorbells, phones, bodycams and vehicles straight into
              a secure cloud vault, with AI that detects high-risk events.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap text-xs">
            <Badge className="bg-emerald-600/20 text-emerald-200 border-emerald-500/50">
              Real-time streaming
            </Badge>
            <Badge className="bg-indigo-600/20 text-indigo-200 border-indigo-500/50">
              AI incident detection
            </Badge>
            <Badge className="bg-sky-600/20 text-sky-200 border-sky-500/50">
              Cloud evidence vault
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/70 border-slate-800">
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                Dashcam & CCTV to Cloud
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300/80 space-y-2">
              <p>
                Vehicles, shops, homes and workplaces stream directly into
                KinsesoVision. Devices can be replaced – evidence cannot.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-800">
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                AI Event Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300/80 space-y-2">
              <p>
                Detects break-ins, vandalism, road incidents, abuse in care
                settings, workplace accidents and more – in near real time.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-800">
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                Evidence Pack Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300/80 space-y-2">
              <p>
                Builds structured evidence packs with video, timeline, location,
                detected events and exportable reports for insurers or
                authorities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 3 – LIFE HUB */}
      <section
        id="hub"
        className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800/60"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">
              The Kinseso Life Hub
            </h2>
            <p className="text-sm text-slate-300/80 max-w-xl mt-2">
              One place to discover trusted services – from life at home to
              fashion, work, finance and wellbeing. Service providers can plug
              into the platform; users access everything from a single app.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-emerald-400/60 text-emerald-200 hover:bg-emerald-500/10"
            onClick={() => router.push("/hub")}
          >
            Open Life Hub
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            "Cleaning & Home Services",
            "Care & Support",
            "Logistics & Delivery",
            "Dating & Relationships",
            "Finance & Banking",
            "Creators & Marketplace",
            "Consulting & Coaching",
            "Health & Wellbeing",
            "Jobs & Opportunities",
          ].map((label) => (
            <Card
              key={label}
              className="bg-slate-900/60 border-slate-800 hover:border-emerald-400/60 hover:-translate-y-1 transition-all"
            >
              <CardContent className="py-6 text-sm text-slate-100">
                {label}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 4 – HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-semibold text-slate-50 mb-6">
          How KinsesoVision Works
        </h2>
        <ol className="grid md:grid-cols-3 gap-6 text-sm text-slate-300/80">
          {[
            "Download the app or sign in via the web portal.",
            "Create your account and verify your details.",
            "Connect cameras, devices and life services.",
            "Stream evidence to the cloud automatically.",
            "Access services, insights and analytics in one place.",
            "Secure your life, work and projects with intelligent tools.",
          ].map((step, i) => (
            <li
              key={i}
              className="bg-slate-900/70 border border-slate-800 rounded-lg p-4 flex gap-3"
            >
              <span className="h-7 w-7 flex items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs font-semibold">
                {i + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SECTION 5 – WHY THIS MATTERS */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-semibold text-slate-50 mb-4">
          Why KinsesoVision Matters
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300/80">
          {[
            ["Safety", "Evidence that survives theft, damage and device loss."],
            [
              "Convenience",
              "One app instead of dozens – services, analytics and records in one place.",
            ],
            [
              "Innovation",
              "AI-native platform built around real problems: safety, employment, services and markets.",
            ],
            [
              "Economic Impact",
              "Supports creators, SMEs and service providers through a connected marketplace.",
            ],
            [
              "Community",
              "Tools for collaboration, forums, showcases and events around fashion and tech.",
            ],
            [
              "UK-first Solution",
              "Designed and engineered in the UK with a focus on security, ethics and scale.",
            ],
          ].map(([title, text]) => (
            <Card
              key={title}
              className="bg-slate-900/70 border-slate-800 hover:border-emerald-400/60 transition-all"
            >
              <CardHeader>
                <CardTitle className="text-sm text-emerald-200">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs">{text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 6 – DEMO & AI ASSISTANT */}
      <section
        id="demo-video"
        className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800/60"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900/70 border-slate-800">
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                Product Demo (coming soon)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300/80">
              <p>
                This space will host a short demo video showing how KinsesoVision
                handles live recording, service discovery and analytics in one
                experience.
              </p>
              <div className="aspect-video rounded-lg bg-slate-800/80 flex items-center justify-center text-xs text-slate-500 border border-dashed border-slate-700">
                Upload /demo.mp4 later and connect here.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-800">
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                Kinseso AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300/80">
              <p>
                The integrated AI assistant will support users with fashion
                analytics, safety recommendations, care insights and lifestyle
                guidance, powered by the data already flowing through the app.
              </p>
              <p className="text-xs text-slate-400">
                In future versions, this will become a full conversational
                interface connected to evidence, services and user profiles –
                designed for secure, auditable decision support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
