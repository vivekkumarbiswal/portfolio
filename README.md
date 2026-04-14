# Dev Portfolio — Angular 17 + Google AI Studio

A dark-minimal, production-ready developer portfolio built with **Angular 17 standalone components**, featuring a **Gemini-powered AI chat assistant** that answers questions about your work.

---

## ✦ Features

| Feature | Details |
|---|---|
| **AI Chat** | Floating Gemini assistant trained on your resume & projects |
| **Hero** | Animated particle canvas, typing effect, availability badge |
| **Projects** | Filterable grid (all / fullstack / frontend / backend / AI / devops) |
| **Skills** | Animated progress bars, grouped by category |
| **Resume** | PDF inline viewer + structured timeline view + one-click download |
| **Navigation** | Sticky header, mobile hamburger, smooth scroll |
| **Animations** | IntersectionObserver scroll reveals, CSS micro-interactions |
| **Scalable** | Lazy-loaded routes, standalone components, path aliases |

---

## ⚡ Quick Start

### 1. Prerequisites
```bash
node -v   # 18+
npm -v    # 9+
```

### 2. Install Angular CLI & dependencies
```bash
npm install -g @angular/cli@17
cd portfolio
npm install
```

### 3. Add your Google AI Studio API key

1. Go to [aistudio.google.com](https://aistudio.google.com) → **Get API key**
2. Open `src/environments/environment.ts`
3. Replace the placeholder:
```ts
geminiApiKey: 'YOUR_GOOGLE_AI_STUDIO_API_KEY',
```

### 4. Add your resume PDF
```bash
# Drop your resume PDF here:
src/assets/resume/resume.pdf
```

### 5. Run locally
```bash
ng serve
# → http://localhost:4200
```

### 6. Build for production
```bash
ng build --configuration production
# Output: dist/dev-portfolio/
```

---

## 🎨 Personalisation Checklist

All your personal data lives in **one file**:

### `src/app/core/services/portfolio-data.service.ts`

```ts
readonly personal = {
  name: 'Alex Chen',           // ← Your name
  title: 'Full-Stack Developer',
  tagline: '...',
  bio: '...',
  location: 'Bengaluru, India',
  email: 'hello@yourname.dev',
  available: true,             // ← toggles green badge
};
```

Update the `projects` array and `skillGroups` array in the same file.

### `src/environments/environment.ts`
```ts
geminiApiKey: 'YOUR_KEY',
github: 'https://github.com/yourusername',
linkedin: 'https://linkedin.com/in/yourusername',
```

### `src/app/features/resume/resume.component.ts`
Update the `experience` and `education` arrays for the Timeline view.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # TypeScript interfaces
│   │   └── services/
│   │       ├── portfolio-data.service.ts   # ← Edit your info here
│   │       └── gemini.service.ts           # Gemini AI integration
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   └── ai-chat/     # Floating AI chat widget
│   │   └── directives/
│   │       └── reveal.ts    # Scroll-reveal animations
│   │
│   ├── features/
│   │   ├── home/            # Home page shell
│   │   ├── hero/            # Hero section
│   │   ├── skills/          # Skills / tech stack
│   │   ├── projects-preview/# Featured projects (homepage)
│   │   ├── projects/        # Full projects page
│   │   └── resume/          # Resume page (viewer + timeline)
│   │
│   ├── layout/
│   │   ├── shell/           # App shell (header + footer wrapper)
│   │   ├── header/          # Sticky nav
│   │   └── footer/          # Footer
│   │
│   ├── app.routes.ts        # Lazy-loaded routes
│   └── app.config.ts        # App providers
│
├── environments/
│   ├── environment.ts       # ← API keys & config
│   └── environment.prod.ts
│
├── styles/
│   └── main.scss            # Global design tokens & utilities
│
└── assets/
    └── resume/
        └── resume.pdf       # ← Drop your PDF here
```

---

## 🔒 Security Note

**Never commit your API key to git.** Use environment variables in CI/CD:

```bash
# For Vercel / Netlify
GEMINI_API_KEY=your_key_here
```

For production, proxy Gemini calls through a backend (NestJS/Edge Function) so the key is never exposed in the browser bundle.

---

## 🚀 Deploy

### Vercel (recommended)
```bash
npm i -g vercel
ng build --configuration production
vercel dist/dev-portfolio
```

### Netlify
```bash
ng build --configuration production
# Drag dist/dev-portfolio to netlify.com/drop
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting   # set public dir to dist/dev-portfolio
ng build --configuration production
firebase deploy
```

---

## ➕ Adding a New Section (Scalability)

1. Create `src/app/features/my-section/my-section.component.ts`
2. Add a lazy route in `app.routes.ts`
3. Add the nav link in `header.component.ts`
4. Done — zero changes needed elsewhere.

---

## 🧩 Tech Stack

- **Angular 17** — Standalone components, Signals, View Transitions API
- **Google Gemini API** — via Google AI Studio (`gemini-1.5-flash`)
- **RxJS** — Reactive streams
- **SCSS** — CSS custom properties, responsive grid
- **TypeScript strict** — End-to-end type safety
