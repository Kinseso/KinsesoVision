import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockVault = [
  { label: "Vehicle streams", size: "120 GB", retention: "30 days" },
  { label: "Home & doorbell", size: "80 GB", retention: "60 days" },
  { label: "Workplace CCTV", size: "200 GB", retention: "90 days" },
  { label: "Mobile / bodycam", size: "40 GB", retention: "30 days" },
];

export default function CloudVaultPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-slate-50 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Evidence Cloud Vault</h1>
        <p className="text-sm text-slate-300/80 max-w-2xl">
          High-level overview of how much secure recording each group of devices
          is storing. In production this would link directly to object storage,
          lifecycle policies and export tools.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {mockVault.map((item) => (
          <Card
            key={item.label}
            className="bg-slate-900/80 border-slate-800 hover:border-emerald-400/60 transition-all"
          >
            <CardHeader>
              <CardTitle className="text-sm text-emerald-200">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-slate-300/80">
              <p>
                Storage in use:{" "}
                <span className="font-semibold text-slate-50">
                  {item.size}
                </span>
              </p>
              <p>Retention policy: {item.retention}</p>
              <Badge className="bg-emerald-600/20 text-emerald-200 border-emerald-500/60">
                Encrypted at rest (design)
              </Badge>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
