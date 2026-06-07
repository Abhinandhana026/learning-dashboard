import { createClient } from '@supabase/supabase-js'
import type { Course } from '@/types'

export type Database = {
  public: {
    Tables: {
      courses: {
        Row: Course
      }
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)