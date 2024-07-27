import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qpxrtuuzkvrknsronwxu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFweHJ0dXV6a3Zya25zcm9ud3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5ODE2MjksImV4cCI6MjAzNzU1NzYyOX0.mVM1E7gvjhVjybtNBYSjBwxkz6PqtL3PVvQq3-95oQQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
