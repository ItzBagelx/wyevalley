import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

type SubmissionData = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  industry?: unknown;
  goal?: unknown;
  currentWebsite?: unknown;
  notes?: unknown;
  website?: unknown;
};

const maxLengths = {
  name: 120,
  business: 160,
  email: 254,
  phone: 50,
  industry: 100,
  goal: 140,
  currentWebsite: 500,
  notes: 3000,
};

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

async function getResendApiKey() {
  if (process.env.RESEND_API_KEY) {
    return process.env.RESEND_API_KEY;
  }

  const { env } = await getCloudflareContext({ async: true });
  return (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;
}

export async function POST(request: Request) {
  try {
    const input = (await request.json()) as SubmissionData;
    const data = {
      name: readText(input.name, maxLengths.name),
      business: readText(input.business, maxLengths.business),
      email: readText(input.email, maxLengths.email),
      phone: readText(input.phone, maxLengths.phone),
      industry: readText(input.industry, maxLengths.industry),
      goal: readText(input.goal, maxLengths.goal),
      currentWebsite: readText(input.currentWebsite, maxLengths.currentWebsite),
      notes: readText(input.notes, maxLengths.notes),
      website: readText(input.website, 200),
    };

    if (data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!data.name || !data.business || !data.email || !data.industry || !data.goal) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const resendApiKey = await getResendApiKey();

    if (!resendApiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const safe = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
    ) as Record<keyof typeof data, string>;

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; border-bottom: 2px solid #5a4fcf; padding-bottom: 20px; margin-bottom: 25px;">
          <h2 style="color: #1a1a1a; margin: 0; font-family: Georgia, serif; font-style: italic;">Wye Design</h2>
          <p style="color: #666; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px;">New Project Proposal Request</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h3 style="color: #333; border-left: 4px solid #5a4fcf; padding-left: 10px; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 14px; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: bold; font-size: 15px;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 14px;">Business:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">${safe.business}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 14px;">Email:</td>
              <td style="padding: 8px 0; color: #5a4fcf; font-weight: bold; font-size: 15px;"><a href="mailto:${safe.email}" style="color: #5a4fcf; text-decoration: none;">${safe.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 14px;">Phone:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">${safe.phone || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 20px; background-color: #f9f9fb; padding: 20px; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0; margin-bottom: 15px; font-size: 16px;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eaeaea;">
              <td style="padding: 10px 0; color: #666; font-size: 14px; width: 150px;">Industry:</td>
              <td style="padding: 10px 0; color: #1a1a1a; font-weight: 500; font-size: 14px;">${safe.industry}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eaeaea;">
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Website Goal:</td>
              <td style="padding: 10px 0; color: #1a1a1a; font-weight: 500; font-size: 14px;">${safe.goal}</td>
            </tr>
            <tr style="${safe.notes ? 'border-bottom: 1px solid #eaeaea;' : ''}">
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Existing Website:</td>
              <td style="padding: 10px 0; color: #1a1a1a; font-weight: 500; font-size: 14px;">${safe.currentWebsite || 'Not provided'}</td>
            </tr>
            ${safe.notes ? `
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Additional Details:</td>
              <td style="padding: 10px 0; color: #1a1a1a; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${safe.notes}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="text-align: center; color: #888; font-size: 11px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
          This notification was generated automatically from the Wye Design website.
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
        "User-Agent": "Wye-Design-Website/1.0"
      },
      body: JSON.stringify({
        from: "Wye Design <hello@wyedesign.co.uk>",
        to: "hello@wyedesign.co.uk",
        subject: `New website lead: ${data.name} (${data.business})`,
        html: htmlBody,
        reply_to: data.email
      })
    });

    const resData = await response.json() as any;

    if (!response.ok) {
      console.error("Resend API Error:", resData);
      return NextResponse.json({ error: "We could not send your request just now. Please email us instead." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: resData.id }, { status: 200 });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "We could not send your request just now. Please email us instead." }, { status: 500 });
  }
}
