# Lumina | Premium Learning Dashboard

A high-performance, futuristic learning dashboard built for the modern student. This project was developed as a Frontend Intern Challenge submission, focusing on premium aesthetics, advanced motion design, and production-grade architecture.

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🏛️ Architecture Decisions

### Server vs Client Components
- **Server Components:** Used for all data fetching (fetching courses from Supabase) to reduce client-side JavaScript and improve SEO and performance.
- **Client Components:** Used only where interactivity is required (Framer Motion animations, collapsible sidebar, mobile navigation, and the activity chart).

### Bento Grid Layout
The dashboard uses a responsive 12-column Bento Grid system that adapts seamlessly across devices:
- **Desktop:** 12-column grid with a fixed collapsible sidebar.
- **Tablet:** 4-column adaptive grid with icon-only sidebar.
- **Mobile:** Single-column stack with a persistent bottom navigation bar.

### Performance Optimizations
- **Streaming UI:** Leverages Next.js `loading.tsx` and React `Suspense` for granular loading states.
- **GPU Acceleration:** All animations use hardware-accelerated properties (`transform`, `opacity`) to ensure 60fps performance.
- **Strict Typing:** End-to-end type safety from Supabase database schemas to frontend component props.

## 🎨 Design System

- **Theme:** Dark mode only (#050505 background).
- **Aesthetic:** Modern AI-product style inspired by Linear and Vercel.
- **Visuals:** Glassmorphism surfaces, subtle noise texture, radial ambient glows, and premium spring-based animations.

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js 18.x or later
- A Supabase account and project

### 2. Environment Variables
Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup
Run the following SQL in your Supabase SQL Editor to create the `courses` table:
```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer default 0,
  icon_name text default 'BookOpen',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Seed data
insert into courses (title, progress, icon_name)
values 
  ('Advanced React Patterns', 85, 'Zap'),
  ('Next.js 15 Masterclass', 40, 'Sparkles'),
  ('Motion Design Fundamentals', 65, 'Activity');
```

### 4. Installation & Development
```bash
npm install
npm run dev
```

## 🚢 Deployment
This project is optimized for deployment on [Vercel](https://vercel.com). Simply connect your GitHub repository and set the environment variables in the Vercel dashboard.
