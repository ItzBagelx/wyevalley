/// <reference types="@cloudflare/workers-types" />
export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle form submissions
    if (url.pathname === "/api/submit" && request.method === "POST") {
      try {
        const data = await request.json() as {
          industry: string;
          goal: string;
          status: string;
          notes: string;
          name: string;
          email: string;
          phone?: string;
        };

        // Basic validation
        if (!data.name || !data.email) {
          return new Response(JSON.stringify({ error: "Missing name or email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        if (!env.RESEND_API_KEY) {
          return new Response(JSON.stringify({ error: "Email service not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
          });
        }

        // Email layout
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
                  <td style="padding: 8px 0; color: #1a1a1a; font-weight: bold; font-size: 15px;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;">Email:</td>
                  <td style="padding: 8px 0; color: #5a4fcf; font-weight: bold; font-size: 15px;"><a href="mailto:${data.email}" style="color: #5a4fcf; text-decoration: none;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;">Phone:</td>
                  <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px;">${data.phone || 'Not provided'}</td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 20px; background-color: #f9f9fb; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 15px; font-size: 16px;">Project Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eaeaea;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px; width: 150px;">Industry:</td>
                  <td style="padding: 10px 0; color: #1a1a1a; font-weight: 500; font-size: 14px;">${data.industry}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eaeaea;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px;">Website Goal:</td>
                  <td style="padding: 10px 0; color: #1a1a1a; font-weight: 500; font-size: 14px;">${data.goal}</td>
                </tr>
                <tr style="${data.notes ? 'border-bottom: 1px solid #eaeaea;' : ''}">
                  <td style="padding: 10px 0; color: #666; font-size: 14px;">Has Current Site?</td>
                  <td style="padding: 10px 0; color: #1a1a1a; font-weight: 500; font-size: 14px;">${data.status}</td>
                </tr>
                ${data.notes ? `
                <tr>
                  <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Additional Details:</td>
                  <td style="padding: 10px 0; color: #1a1a1a; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${data.notes}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="text-align: center; color: #888; font-size: 11px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
              This notification was generated automatically from the Wye Design website.
            </div>
          </div>
        `;

        // Submit to Resend
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: "Wye Design Leads <onboarding@resend.dev>",
            to: "wyevalleydesign@gmail.com",
            subject: `✨ New Lead: ${data.name} (${data.industry})`,
            html: htmlBody,
            reply_to: data.email
          })
        });

        const resData = await response.json() as any;

        if (!response.ok) {
          console.error("Resend API Error:", resData);
          return new Response(JSON.stringify({ error: "Failed to send email", details: resData }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
          });
        }

        return new Response(JSON.stringify({ success: true, id: resData.id }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });

      } catch (err: any) {
        console.error("Worker Error:", err);
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // Default: Fallback to serving static assets
    return env.ASSETS.fetch(request);
  }
};
