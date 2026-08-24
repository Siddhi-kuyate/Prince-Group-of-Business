// Supabase Edge Function: send-enquiry-email
// Reads: RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL from Supabase Secrets.
// NEVER put secrets in frontend code.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

/* ─── HTML escaping ─────────────────────────────────────────── */

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ─── Email HTML template ───────────────────────────────────── */

function buildEmailHtml(params: {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const { name, companyName, email, phone, message } = params;

  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(companyName || "—");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Enquiry - ${safeName}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f6f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                Prince Group of Business
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">
                Crowning Success, Building Legacies.
              </p>
            </td>
          </tr>

          <!-- Title bar -->
          <tr>
            <td style="background:#f0f7ff;padding:16px 40px;border-bottom:1px solid #e2ecf7;">
              <p style="margin:0;font-size:14px;font-weight:600;color:#1e3a5f;text-transform:uppercase;letter-spacing:0.06em;">
                🔔 New Website Enquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 28px;color:#374151;font-size:15px;line-height:1.6;">
                You have received a new enquiry through the Prince Group of Business website.
                Please respond to the customer at your earliest convenience.
              </p>

              <!-- Details table -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
                     style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9fafb;">
                  <td style="padding:14px 18px;width:130px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #e5e7eb;">
                    Name
                  </td>
                  <td style="padding:14px 18px;font-size:15px;color:#111827;font-weight:600;border-bottom:1px solid #e5e7eb;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #e5e7eb;">
                    Company
                  </td>
                  <td style="padding:14px 18px;font-size:15px;color:#374151;border-bottom:1px solid #e5e7eb;">
                    ${safeCompany}
                  </td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:14px 18px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #e5e7eb;">
                    Email
                  </td>
                  <td style="padding:14px 18px;font-size:15px;color:#374151;border-bottom:1px solid #e5e7eb;">
                    <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #e5e7eb;">
                    Phone
                  </td>
                  <td style="padding:14px 18px;font-size:15px;color:#374151;border-bottom:1px solid #e5e7eb;">
                    <a href="tel:${safePhone}" style="color:#2563eb;text-decoration:none;">${safePhone}</a>
                  </td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:14px 18px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;">
                    Message
                  </td>
                  <td style="padding:14px 18px;font-size:15px;color:#374151;line-height:1.7;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <div style="margin-top:32px;text-align:center;">
                <a href="mailto:${safeEmail}?subject=Re: Your enquiry - Prince Group of Business"
                   style="display:inline-block;background:linear-gradient(135deg,#1e3a5f,#2d5a8e);color:#ffffff;font-size:14px;font-weight:600;padding:13px 28px;border-radius:50px;text-decoration:none;">
                  Reply to ${safeName}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                This email was generated automatically from the contact form on the<br>
                <strong style="color:#6b7280;">Prince Group of Business</strong> website.<br>
                B-304, 3rd Floor, Jai Ganesh Vardhasht Society, Gandhi Nagar Road, Pimpri, Pune, Maharashtra, India
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ─── Main handler ──────────────────────────────────────────── */

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  try {
    // ── Read secrets ──────────────────────────────────────────
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    // RESEND_FROM_EMAIL: configure this once a verified domain is set up in
    // the Resend dashboard. E.g. "Prince Group of Business <no-reply@your-domain.com>"
    // Until then, use the Resend onboarding address for testing.
    const RESEND_FROM_EMAIL =
      Deno.env.get("RESEND_FROM_EMAIL") ??
      "Prince Group of Business <onboarding@resend.dev>";

    // The destination enquiry email
    const RESEND_TO_EMAIL =
      Deno.env.get("RESEND_TO_EMAIL") ?? "sales.pgbusiness@gmail.com";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in Supabase Secrets.");
      return new Response(
        JSON.stringify({ error: "Email service is not configured." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ── Parse body ────────────────────────────────────────────
    let body: {
      name?: string;
      companyName?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const { name, companyName = "", email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, phone, message." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ── Build & send email ────────────────────────────────────
    const htmlBody = buildEmailHtml({ name, companyName, email, phone, message });

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [RESEND_TO_EMAIL],
        subject: `New Website Enquiry - ${name}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return new Response(
        JSON.stringify({ error: "Failed to send email notification.", details: resendData }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    console.log("Email sent successfully:", resendData?.id);

    return new Response(
      JSON.stringify({ success: true, id: resendData?.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("Unexpected error in send-enquiry-email:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
