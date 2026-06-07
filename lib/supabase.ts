import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
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

export async function createSupabaseServerClient() {
  const cookieStore = await cookies()
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )
}