-- ==========================================================
-- Prince Group of Business — Supabase Schema Reference
-- ==========================================================
-- Run this in the Supabase SQL Editor to set up the database.
-- DO NOT run if the table already exists — check first.
-- ==========================================================

-- 1. Create the customer_enquiries table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.customer_enquiries (
  id          uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text          NOT NULL,
  company_name text,
  email       text          NOT NULL,
  phone       text          NOT NULL,
  message     text          NOT NULL,
  status      text          NOT NULL DEFAULT 'new',
  created_at  timestamptz   NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE public.customer_enquiries ENABLE ROW LEVEL SECURITY;

-- 3. Allow the public (anon) role to INSERT enquiries (website contact form)
--    The anon key is safe to expose in the frontend because INSERT is all it allows.
CREATE POLICY "Allow public to submit enquiries"
  ON public.customer_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. Only the service_role (Edge Functions, server) can SELECT/UPDATE/DELETE
--    This prevents visitors from reading other people's enquiries.
CREATE POLICY "Service role full access"
  ON public.customer_enquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ==========================================================
-- NOTES:
-- • The RESEND_API_KEY must be stored in Supabase Edge Function
--   Secrets (Dashboard → Functions → send-enquiry-email → Secrets).
-- • RESEND_FROM_EMAIL: add once you have a verified sending domain.
--   Until then, use "Prince Group of Business <onboarding@resend.dev>"
--   which only sends to the Resend account owner's email (testing mode).
-- • RESEND_TO_EMAIL: set to "sales.pgbusiness@gmail.com"
-- • The Supabase publishable (anon) key is safe to use in the frontend.
--   Never use the service_role key in any frontend code.
-- ==========================================================
