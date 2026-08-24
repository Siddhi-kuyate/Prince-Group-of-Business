import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hugzcfnkdkcdbiuutshz.supabase.co";

const supabasePublishableKey =
  "sb_publishable_eFTRPnsOcQ1XkTCpV6ERPg_4Ot46Ybj";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
);