// src/lib/supabaseClient.ts
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";

// Try both public and server-side env names
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing Supabase URL. Set SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL.");
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing Supabase anon key. Set SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

// Single shared client – safe for both client and server usage
export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
);

// Small helper used in your login page and anywhere else
export async function getCurrentUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error getting current user from Supabase:", error.message);
    return null;
  }

  return data.user ?? null;
}
