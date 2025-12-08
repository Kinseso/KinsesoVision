"use client";

import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";

// ⬇️ adjust the path if needed, but for your structure this should be right
import { supabase, getCurrentUser } from "../../src/lib/supabaseClient";

// ⬇️ adjust this path only if your UI components live somewhere else
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../src/components/ui/card";

export default function LoginPage() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    // 1. get current user once
    (async () => {
      const u = await getCurrentUser();
      if (!isMounted) return;
      setUser(u);
      setReady(true);
    })();

    // 2. listen for auth state changes
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      setUser(session?.user ?? null);
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  // Loading state
  if (!ready) {
    return (
      <main className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Loading…</CardTitle>
          </CardHeader>
        </Card>
      </main>
    );
  }

  // Already signed in
  if (user) {
    return (
      <main className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>You're signed in</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{user.email}</p>
          </CardContent>
        </Card>
      </main>
    );
  }

  // Auth UI
  return (
    <main className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <Auth
  supabaseClient={supabase}
  providers={["google"]}
/>

        </CardContent>
      </Card>
    </main>
  );
}
