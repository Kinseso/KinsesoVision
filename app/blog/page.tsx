import { Card } from "../../src/components/ui/card";
import { Badge } from "../../src/components/ui/badge";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { Textarea } from "../../src/components/ui/textarea";

const mockPosts = [
  {
    id: 1,
    title: "UK FashionTech & AI: How KinsesoVision Helps Brands Decide Faster",
    tag: "FashionTech",
    intro:
      "Exploring how UK and global fashion brands can turn fragmented data into clear, visual decision support.",
  },
  {
    id: 2,
    title: "From Dashcams to Smart Evidence: Always-On Safety with the Cloud",
    tag: "Safety",
    intro:
      "Why real-time off-device recording matters for road safety, logistics and personal protection.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto py-12 px-4 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">KinsesoVision Insights</h1>
          <p className="text-gray-600">
            Articles on fashion, safety, health, logistics and decision
            intelligence – all connected to the KinsesoVision ecosystem.
          </p>
        </header>

        <form className="flex flex-col md:flex-row gap-3">
          <Input
            placeholder="Search posts, e.g. 'fashion analytics', 'dashcam evidence'..."
            className="flex-1"
          />
          <Button type="submit">Search</Button>
        </form>

        <div className="grid gap-4 md:grid-cols-2">
          {mockPosts.map((post) => (
            <Card key={post.id} className="space-y-3">
              <Badge>{post.tag}</Badge>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.intro}</p>
              <Button variant="outline" type="button">
                Read more
              </Button>
            </Card>
          ))}
        </div>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">
            Share a topic you&apos;d like us to cover
          </h2>
          <Textarea
            rows={4}
            placeholder="Tell us what topics matter most to you – fashion data, safety, care, finance, etc."
          />
          <div className="flex justify-end">
            <Button type="button">Send suggestion</Button>
          </div>
        </section>
      </section>
    </main>
  );
}
