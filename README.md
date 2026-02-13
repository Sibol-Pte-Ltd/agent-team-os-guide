# Agent Team OS — User Guide (Next.js)

A password-protected documentation site for Agent Team OS, built with Next.js and server-side authentication.

## Features

- **33 pages** of documentation covering agents, cadence, automation, troubleshooting, and more
- **Server-side authentication** — password verified via API route, never exposed to client code
- **HMAC-signed cookies** — auth tokens signed with a server secret, httpOnly and secure
- **Middleware protection** — all routes require authentication except `/login` and API endpoints
- **Responsive sidebar** — mobile hamburger menu with full navigation
- **Original styling preserved** — all CSS from the static site carried over

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env.local` and set your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
SITE_PASSWORD=your-password-here
AUTH_SECRET=generate-a-random-string-here
```

Generate a secure `AUTH_SECRET`:

```bash
openssl rand -hex 32
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and enter your password.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── (authenticated)/     # All protected pages (route group)
│   │   ├── page.tsx         # Home page
│   │   ├── agents/          # Agent pages (ember, scout, forge, architect, trust-levels)
│   │   ├── cadence/         # Cadence pages (morning, evening, weekly, monthly)
│   │   ├── automation/      # Automation pages (cron jobs, notifications)
│   │   ├── getting-started/ # Getting started pages
│   │   ├── implementation/  # Implementation tracking pages
│   │   ├── life-os/         # Life OS pages
│   │   ├── reference/       # Reference pages (commands, files, glossary, changelog)
│   │   ├── troubleshooting/ # Troubleshooting pages
│   │   └── layout.tsx       # Authenticated layout with sidebar
│   ├── api/auth/
│   │   ├── login/route.ts   # POST /api/auth/login — server-side password check
│   │   └── logout/route.ts  # POST /api/auth/logout — clear auth cookie
│   ├── components/
│   │   └── Sidebar.tsx      # Navigation sidebar (client component)
│   ├── login/
│   │   ├── page.tsx         # Login page (client component)
│   │   └── layout.tsx       # Login layout (no sidebar)
│   ├── globals.css          # All styles (from original static site + login styles)
│   └── layout.tsx           # Root layout
├── lib/
│   ├── auth.ts              # Server-side auth utilities (cookie management, password verification)
│   └── navigation.ts        # Navigation data structure
├── middleware.ts             # Route protection middleware
├── .env.example             # Environment variable template
├── .env.local               # Local environment (git-ignored)
├── vercel.json              # Vercel deployment config
└── scripts/
    └── convert.js           # Script used to convert static HTML to Next.js pages
```

## Authentication Architecture

### How it works

1. **Login**: User submits password → `POST /api/auth/login` → server checks against `SITE_PASSWORD` env var → if correct, sets an HMAC-signed httpOnly cookie
2. **Route protection**: Middleware checks for auth cookie on every request → redirects to `/login` if missing
3. **Cookie security**: The cookie value is `timestamp.hmac_signature`, signed with `AUTH_SECRET`. It's httpOnly (no JS access), SameSite=lax, and Secure in production
4. **Logout**: `POST /api/auth/logout` → server deletes the cookie

### What changed from the static site

| Aspect | Old (Static) | New (Next.js) |
|--------|-------------|---------------|
| Password location | Hardcoded in `login.html` JavaScript | Server-side `.env.local` file |
| Auth check | Client-side `sessionStorage` | Server-side middleware + HMAC cookie |
| Session persistence | Per-tab (sessionStorage) | Cross-tab, 7-day cookie |
| Password visibility | Viewable in page source | Never sent to client |

## Deploying to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Next.js migration"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Set environment variables:
   - `SITE_PASSWORD` — the password users need to enter
   - `AUTH_SECRET` — a random string for signing cookies (use `openssl rand -hex 32`)
4. Deploy

### 3. Custom domain (optional)

Configure your custom domain in Vercel project settings → Domains.

## Development Notes

- Built with **Next.js 15** (App Router)
- Uses **TypeScript** throughout
- Pages use `dangerouslySetInnerHTML` to render the original HTML content — this preserves all formatting, code blocks, and HTML comments without JSX conversion issues
- The `scripts/convert.js` tool was used to extract content from the original static HTML files and generate page components
- All internal links have been converted from `.html` extensions to clean URLs

## Running the conversion script

If you need to re-convert pages from the original static site:

```bash
node scripts/convert.js
```

This reads from the original static site directory and generates `page.tsx` files in `app/(authenticated)/`.
