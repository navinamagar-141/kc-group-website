type Attachment = { filename: string; content: string };

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Attachment[];
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // In production a missing key must fail visibly, not look like success.
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not set");
    }
    console.log("[email] RESEND_API_KEY not set. Would send:", {
      to: params.to,
      subject: params.subject,
    });
    return;
  }

  // Works immediately with no DNS setup (delivers only to your Resend account email).
  // Later, once kc-group.com.au is verified in Resend, set EMAIL_FROM in Vercel,
  // e.g. KC Group <notifications@kc-group.com.au>. No code change needed.
  const from = process.env.EMAIL_FROM || "KC Group Website <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: params.to,
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
      attachments: params.attachments,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend responded ${res.status}: ${detail}`);
  }
}