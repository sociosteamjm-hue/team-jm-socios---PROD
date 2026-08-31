// Fill these values with the public Supabase project URL and anon/publishable key.
// Leave both empty to keep using local browser storage.
const SUPABASE_URL = 'https://lhnizfxwsyrydtucgyej.supabase.co';
const SUPABASE_KEY = 'A_SUA_PUBLISHABLE_KEY';
window.teamJmSupabase = SUPABASE_URL && SUPABASE_KEY
  ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;