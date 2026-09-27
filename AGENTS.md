# AGENTS.md

## Project Overview
Personal portfolio website for Arpita Acharya, built with React + Vite. Dark theme with purple/blue/cyan accents, glassmorphism, and smooth animations.

## Commands
- `npm run dev` — start dev server (port 5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Architecture
- **Stack**: React 19 + Vite 8 + lucide-react (icons)
- **Styling**: Single `src/index.css` with CSS custom properties (no CSS framework, no Tailwind)
- **Components**: Functional components in `src/components/`, each with co-located styles in `index.css` via section comments
- **State**: Local `useState`/`useEffect` only — no state library needed

## Key Conventions
- CSS variables defined in `:root` (colors, spacing, radii, transitions) — always use `var(--token)` for consistency
- Reusable classes: `.container`, `.section`, `.glass-card`, `.btn-primary`, `.btn-secondary`, `.gradient-text`, `.reveal`
- Scroll-triggered animations use IntersectionObserver in `App.jsx` — add `.reveal` / `.reveal-left` / `.reveal-right` class to elements
- Custom cursor (`CustomCursor.jsx`) only renders on `pointer: fine` devices — no touch support needed

## Customization Points
- **Personal info**: Edit `Hero.jsx` (name, intro), `About.jsx` (bio paragraphs), `Contact.jsx` (email, social links)
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Skills**: Edit `skillCategories` and `additionalSkills` arrays in `Skills.jsx`
- **Contact form**: Currently client-side only. To wire up Formspree, add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"` to the `<form>` in `Contact.jsx`

## Gotchas
- **Brand icons**: `Github` and `Linkedin` are NOT exported by current lucide-react. Use `GithubIcon` / `LinkedinIcon` from `src/components/BrandIcons.jsx` instead.
- **No Tailwind**: Do not add Tailwind or any CSS framework. Keep using the existing CSS variable system.
- **No test suite**: This project has no tests configured. Manual visual verification is the norm.
- **Single CSS file**: All styles live in `src/index.css`. Do not create per-component CSS files.
