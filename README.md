# Momin Arafa — Portfolio

Personal portfolio of Momin Arafa, R&D Software Engineer at ASAL Technologies (Cadence) working on static analysis and formal verification, ACPC 2022 finalist, and competitive programming coach.

**Live site:** https://Momen-G-Ar.github.io/my-portfolio

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite 6](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [react-icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com) for the contact form
- Deployed to GitHub Pages with [gh-pages](https://github.com/tschaub/gh-pages)

## Features

- Dark theme by default with a light toggle, remembered across visits
- Sections: hero, about, experience timeline, projects, competitive programming, community & certifications, skills, contact
- Active-section highlighting in the nav and scroll-in reveals (disabled for reduced-motion users)
- Contact form with sending / success / error states
- Responsive down to phone widths

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env.example .env   # then fill in your EmailJS IDs
npm start              # http://localhost:5173/my-portfolio/
```

### Environment variables

| Variable | Description |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID (expects `Name`, `Email` and `Message` fields) |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Updating content

All content lives in typed modules under [`src/data`](src/data), so updating the site doesn't require touching components:

| File | Content |
| --- | --- |
| `profile.ts` | Name, roles, summary, about text, quick facts, email, photo, social links |
| `experience.ts` | Work experience timeline |
| `projects.ts` | Project cards |
| `competitive.ts` | Contest results, problem setting and coaching |
| `community.ts` | Community roles and certifications |
| `skills.ts` | Grouped skills |

Shared types are in [`src/types.ts`](src/types.ts).

## Project structure

```
src/
├── components/
│   ├── sections/   # Page sections (header, hero, about, …, footer)
│   └── ui/         # Reusable pieces (section, tag, timeline, project card, theme toggle)
├── data/           # Site content
├── hooks/          # Theme, scroll reveal, active section, typewriter
├── assets/         # Images
└── index.css       # Tailwind import and theme tokens
```
