export default function Page(){ 
  return (<main style={{padding:'24px',maxWidth:960,margin:'auto'}}>
    <h1>KinsesoVision v12 — Web + Mobile (scaffold)</h1>
    <p>This scaffold includes:</p>
    <ul>
      <li>Secure Evidence Engine placeholders</li>
      <li>Service modules: Cleaning, Care, Logistics, Creators, Consulting</li>
      <li>Blog and Social placeholders</li>
      <li>Supabase auth + magic link ready</li>
      <li>Stripe checkout route placeholder</li>
      <li>Mobile Expo app stub in /mobile</li>
    </ul>
    <p>Follow README to deploy. Replace env vars in Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, STRIPE keys, SITE_URL.</p>
  </main>);
}
