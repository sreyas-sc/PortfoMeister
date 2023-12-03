
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tozsyavblkkrehjbwhvu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvenN5YXZibGtrcmVoamJ3aHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1NDY2MzAsImV4cCI6MjAxNzEyMjYzMH0.yfgp4_yeULOwDvirGEbS4EdFSKeoONWnhcZFNCAe8OQ'
export const supabase = createClient(supabaseUrl, supabaseKey)