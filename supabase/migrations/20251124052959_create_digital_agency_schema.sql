/*
  # Digital Agency Website Schema

  ## Overview
  This migration creates the database schema for a dynamic digital marketing agency website
  with support for blog posts, portfolio items, team members, testimonials, and contact form submissions.

  ## New Tables

  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short description
  - `content` (text) - Full blog post content
  - `category` (text) - Post category
  - `author` (text) - Author name
  - `read_time` (text) - Estimated reading time
  - `published_at` (timestamptz) - Publication date
  - `featured` (boolean) - Featured post flag
  - `created_at` (timestamptz) - Creation timestamp

  ### `portfolio_items`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project title
  - `description` (text) - Project description
  - `category` (text) - Project category
  - `results` (jsonb) - Array of key results
  - `image_url` (text) - Project image URL
  - `created_at` (timestamptz) - Creation timestamp

  ### `team_members`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Team member name
  - `role` (text) - Job title
  - `bio` (text) - Short biography
  - `image_url` (text) - Profile image URL
  - `linkedin_url` (text) - LinkedIn profile URL
  - `email` (text) - Email address
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### `testimonials`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Client name
  - `company` (text) - Company name
  - `content` (text) - Testimonial content
  - `rating` (integer) - Rating (1-5)
  - `created_at` (timestamptz) - Creation timestamp

  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `phone` (text) - Phone number
  - `company` (text) - Company name
  - `service` (text) - Service interested in
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for blog posts, portfolio, team members, and testimonials
  - Authenticated users can insert contact submissions
  - Only service role can manage content
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  author text NOT NULL,
  read_time text NOT NULL DEFAULT '5 min read',
  published_at timestamptz DEFAULT now(),
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  results jsonb DEFAULT '[]'::jsonb,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image_url text,
  linkedin_url text,
  email text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT rating_range CHECK (rating >= 1 AND rating <= 5)
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view portfolio items"
  ON portfolio_items FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_category ON portfolio_items(category);
CREATE INDEX IF NOT EXISTS idx_team_members_display_order ON team_members(display_order);
