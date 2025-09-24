"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../src/lib/supabaseClient";

export default function Page() {
  const redirectTo =
    typeof window !== "undefined" ? window.location.origin : undefined;

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-semibold mb-3">Login / Sign up</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        redirectTo={redirectTo}
      />
      <p className="text-xs opacity-70 mt-2">
        Use the email OTP. After login, refresh the page you were on.
      </p>
    </main>
  );
}