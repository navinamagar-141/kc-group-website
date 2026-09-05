// Shared, pluggable transactional email sender. No credentials live in
// frontend code — everything reads from environment variables. Without
// RESEND_API_KEY set, emails are logged to the console instead of sent, so
// nothing is silently lost during local development or setup.

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
    console.log("[email] Provider not configured. Would send:", {
      to: params.to,
      subject: params.subject,
    });
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "KC Group Website <notifications@kcgroup.com.au>",
      to: params.to,
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
      attachments: params.attachments,
    }),
  });

  if (!res.ok) {
    throw new Error(`Email provider responded with ${res.status}`);
  }
}
