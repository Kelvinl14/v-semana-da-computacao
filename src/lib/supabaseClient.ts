import { createClient } from '@supabase/supabase-js';

// Regular client for browser
const supabase = createClient(
  'https://sknqmknkfalbsomojxox.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbnFta25rZmFsYnNvbW9qeG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTA3MTEsImV4cCI6MjA2MzA2NjcxMX0.thdJhdCuNj2Z23x14J3aAyRNKJi2K338Q-h9o5duYws'
);



export default supabase;