-- Create the courses table
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert mock data
INSERT INTO courses (title, progress, icon_name)
VALUES 
  ('Advanced React Patterns', 75, 'Code2'),
  ('Framer Motion Masterclass', 40, 'Zap'),
  ('Next.js Architecture', 90, 'Layout'),
  ('Database Design with Supabase', 20, 'Database');
