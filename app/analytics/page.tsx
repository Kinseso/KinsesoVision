import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/card";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";
import { Textarea } from "../../src/components/ui/textarea";
export default function AnalyticsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-xl p-8 space-y-4">
        <h1 className="text-2xl font-bold">KinsesoVision Analytics</h1>
        <p className="text-gray-600">
          Upload or describe your fashion, lifestyle or service data and KinsesoVision
          will help you turn it into real insights for decision-making.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data / Brief
            </label>
            <Textarea
              className="w-full"
              rows={6}
              placeholder="Paste a data sample or describe the scenario you want to analyse..."
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              Generate Insights
            </Button>
          </div>
        </form>

        <p className="text-xs text-gray-400">
          This is the first version of the analytics workspace. We&apos;ll plug this into
          real datasets and AI models as we continue building the platform.
        </p>
      </div>
    </main>
  );
}
