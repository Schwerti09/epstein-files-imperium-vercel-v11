# Deploy to Vercel (GitHub ZIP)

## 1) Push to GitHub
- Create a new repo
- Upload all files from this ZIP
- Commit to `main`

## 2) Deploy on Vercel
- Vercel → New Project → Import the repo
- Framework: Next.js (auto)
- Build Command: `npm run build` (default)
- Output: auto

## 3) Environment variables (required for paid features)
Set these in Vercel → Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL` = `https://YOUR-DOMAIN`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_VAULT` (price_...)
- `DATABASE_URL` (Postgres)

Optional:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## 4) Stripe Webhook
In Stripe dashboard → Developers → Webhooks
- Endpoint: `https://YOUR-DOMAIN/api/stripe/webhook`
- Events:
  - `checkout.session.completed`
  - `invoice.paid`
  - `invoice.payment_failed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

## 5) DB
- Run migrations locally or via CI:
  - `npx prisma migrate deploy`
  - `npx prisma db seed` (optional)


## Netlify (optional)
- Build: `npm run build`
- Publish: `.next`
- Add plugin: `@netlify/plugin-nextjs`
