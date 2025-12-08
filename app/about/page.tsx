// /app/about/page.tsx
"use client";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          KinsesoVision – The Intelligent Super-App for Life, Work, Safety & Innovation
        </h1>
        <p className="text-lg text-slate-700">
          KinsesoVision is a groundbreaking super-platform designed to transform how people
          live, work, connect, stay safe, and access essential services.
        </p>
        <p className="text-slate-700">
          It is built on one powerful vision:{" "}
          <span className="font-semibold">
            a single app that brings your entire life together — powered by AI,
            real-time data intelligence, instant cloud safety, and seamless access to all
            the services you need.
          </span>
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">What users can do with KinsesoVision</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Secure homes, vehicles, and workplaces with real-time automatic evidence backup.</li>
            <li>Access care, cleaning, logistics, relationship, and lifestyle services from one hub.</li>
            <li>Connect with creators, professionals, and communities.</li>
            <li>Explore trends, markets, and opportunities across fashion and tech.</li>
            <li>Shop, learn, earn, publish, analyse, and grow — all inside one intelligent app.</li>
            <li>Preserve CCTV and camera footage even when the device is stolen or destroyed.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Built for today&apos;s world</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Fast, connected, mobile-first experience.</li>
            <li>Data-driven decision support and analytics.</li>
            <li>Safety-conscious design with secure cloud evidence.</li>
            <li>Flexible enough for individuals, families, and businesses.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">A UK-built innovation</h2>
        <p className="text-slate-700">
          From booking a live-in carer or cleaner, to ordering logistics pickup, to analysing
          fashion market data, to accessing relationship or wellness support, to preserving
          camera footage after an incident — KinsesoVision becomes a private, secure,
          intelligent ecosystem for modern life.
        </p>
        <p className="text-slate-700">
          A super-app designed for global citizens. Built in the UK. Powered by AI.
          Engineered for innovation.
        </p>
        <p className="font-semibold text-slate-800">
          This is KinsesoVision — life, inside one app.
        </p>
      </section>
    </main>
  );
}
