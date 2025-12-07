'use client'; import { Auth } from '@supabase/auth-ui-react'; import { ThemeSupa } from '@supabase/auth-ui-shared'; import { supabase,getCurrentUser } from '../../src/lib/supabaseClient'; import { useEffect, useState } from 'react';

export default function Page(){ const [ready,setReady]=useState(false); const [user,setUser]=useState<any>(null); useEffect(()=>{(async()=>{ const u = await getCurrentUser(); setUser(u); setReady(true); })(); const sub = supabase.auth.onAuthStateChange((_e,session)=>{ if(session?.user) setUser(session.user); }); return ()=>{ sub.subscription.unsubscribe(); }; },[]);

 if(!ready) return <main className='p-6'>Loading…</main>;
 if(user) return <main className='p-6'><h2>You are signed in</h2><div>{user.email}</div></main>;

 const redirectTo = typeof window !== 'undefined'? window.location.origin : undefined;
 return (<main className='p-6'><h2>Login</h2><Auth supabaseClient={supabase} appearance={{theme:ThemeSupa}} view='magic_link' redirectTo={redirectTo} providers={[]}/></main>);
}
