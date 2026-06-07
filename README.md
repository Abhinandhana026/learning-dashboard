# LearnSpace — Next-Gen Learning Dashboard

A high-fidelity student dashboard built for the Frontend Intern Challenge, featuring live Supabase data, Framer Motion animations, and a fully responsive Bento Grid layout.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Features

- Bento Grid layout with staggered entrance animations
- Live course data fetched from Supabase via Server Components
- Animated progress bars per course card
- Collapsible sidebar with `layoutId` micro-interactions
- Contribution-style activity graph
- Skeleton loaders via React Suspense
- Fully responsive — desktop, tablet, and mobile

## Architecture

### Server / Client split

Data fetching happens exclusively in Server Components. `CoursesGrid` in `app/page.tsx` is an async Server Component that calls Supabase using `createServerClient` from `@supabase/ssr` — this runs only on the server, keeping credentials secure and enabling streaming via React Suspense.

All interactive UI (sidebar collapse, animations, hover states) lives in Client Components marked with `'use client'`. The boundary is deliberate: serv