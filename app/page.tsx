import { redirect } from 'next/navigation';

export default function Home() {
  // Now it sends them to the Dashboard where all menus are visible as big cards
  redirect('/dashboard');
}