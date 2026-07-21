# Wye Design

The Wye Design website is a Next.js app deployed as a Cloudflare Worker with the OpenNext adapter. The contact form sends enquiries through Resend from the server-side `/api/submit` route.

## Local development

Prerequisites: Node.js 20.9 or later and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add a Resend API key to `.env.local` to test form delivery locally. Never commit that file.

## First Cloudflare deployment

1. Log in to Cloudflare:

   ```bash
   npx wrangler login
   ```

2. Store the Resend key as an encrypted Worker secret:

   ```bash
   npx wrangler secret put RESEND_API_KEY
   ```

3. Create the production Worker and deploy it:

   ```bash
   npm run deploy
   ```

4. In the Cloudflare dashboard, open **Workers & Pages > wyevalley > Settings > Domains & Routes** and attach `wyedesign.co.uk` (and `www` if required).

5. In Resend, verify `wyedesign.co.uk`. The app sends from `Wye Design Leads <leads@wyedesign.co.uk>` and delivers enquiries to `hello@wyedesign.co.uk`.

## GitHub deployment flow

Push changes to GitHub as usual. To have Cloudflare deploy every push automatically, create a Cloudflare Workers build integration for this repository and use:

| Setting | Value |
| --- | --- |
| Build command | `npx @opennextjs/cloudflare build` |
| Deploy command | `npx @opennextjs/cloudflare deploy` |
| Production branch | `main` |

Keep `RESEND_API_KEY` configured as a Worker secret in Cloudflare; do not add it to the repository or build settings. Alternatively, deploy manually after each push with `npm run deploy`.

## Production preview

Build and run the Worker locally:

```bash
npm run preview
```
