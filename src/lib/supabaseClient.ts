import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://tfhcrcbkkliqfjdoonct.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmaGNyY2Jra2xpcWZqZG9vbmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMjI5MjYsImV4cCI6MjA1OTc5ODkyNn0.3kA9iL0J60npqlwnpB495fiLJ-pl16VT6iUgiPND4bs',
);
