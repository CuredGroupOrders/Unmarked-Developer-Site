# Unmarked Goods Website

Marketing website for Unmarked Goods built with Next.js and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Included pages

- Home, Services, Work, About, Contact
- Contact success page
- Privacy Policy, Terms of Service, Data Protection, Cookie Policy

## Contact form setup (Netlify Forms)

The contact form is implemented in `src/app/contact/page.tsx` and includes:

- `data-netlify="true"`
- hidden `form-name` field (`contact`)
- honeypot field (`bot-field`)
- consent checkbox (`consentAccepted`)

After first deploy:

1. Open Netlify project dashboard.
2. Go to **Project configuration** -> **Notifications** -> **Emails and webhooks**.
3. Add a **Form submission notification** to `simonmuflier@gmail.com`.
4. Submit a test form on production and confirm email delivery.

## Netlify deployment steps

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Netlify, select **Add new site** -> **Import an existing project**.
3. Connect your repo and deploy with default Next.js settings.
4. Confirm deploy success and page rendering.

## GoDaddy domain connection

1. In Netlify: **Domain management** -> **Add a domain**.
2. Add both `yourdomain.com` and `www.yourdomain.com`.
3. In GoDaddy DNS, configure records exactly as Netlify instructs:
   - Apex `@` record target from Netlify domain setup.
   - `www` CNAME to your Netlify site hostname.
4. Wait for DNS propagation, then verify SSL certificate issuance in Netlify.
5. Set primary domain and enforce canonical redirect (`www` or apex).

## Compliance notes

The site includes baseline global-friendly legal pages. Before public launch, have your legal counsel review:

- Privacy Policy
- Terms of Service
- Data Protection
- Cookie Policy

## Quality checks

```bash
npm run lint
npm run build
```

Both commands should pass before production deployment.
