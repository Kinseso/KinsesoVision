import { redirect } from 'next/navigation';

export default function Home() {
  // This tells Next.js: "Don't render anything here, just send them to the feed"
  redirect('/feed');
}