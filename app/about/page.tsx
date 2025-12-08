import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            KinsesoVision – The Intelligent Super-App for Life, Work, Safety &amp; Innovation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base text-slate-800">
          <p>
            Welcome to KinsesoVision, a groundbreaking super-platform designed to transform how
            people live, work, connect, stay safe and access essential services.
          </p>
          <p>
            KinsesoVision is built on one powerful vision:{" "}
            <strong>
              a single app that brings your entire life together — powered by AI, real-time data
              intelligence, instant cloud safety and seamless access to the services you need.
            </strong>
          </p>
          <p>For the first time, users can:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Secure their homes, vehicles and workplaces with real-time automatic evidence backup.
            </li>
            <li>
              Access care, cleaning, logistics, relationship and lifestyle services from one hub.
            </li>
            <li>Connect with creators, professionals and communities.</li>
            <li>Explore trends, markets and opportunities.</li>
            <li>Shop, learn, earn, publish, analyse and grow — all in one intelligent app.</li>
          </ul>
          <p>
            KinsesoVision is built for the world we live in today: fast, connected, digital, mobile,
            data-driven and safety-conscious.
          </p>
          <p>
            From booking a live-in carer, to requesting a cleaner, to ordering logistics pickup, to
            analysing fashion market data, to accessing relationship or wellness support, to
            preserving CCTV footage even when your camera is stolen —{" "}
            <strong>KinsesoVision becomes your private, secure, intelligent ecosystem.</strong>
          </p>
          <p>
            It is a super-app designed for global citizens. Built in the UK. Powered by AI.
            Engineered for innovation.
          </p>
          <p className="font-semibold">This is KinsesoVision — life, inside one app.</p>
        </CardContent>
      </Card>
    </main>
  );
}
