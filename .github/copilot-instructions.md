# Copilot Instructions for JustinIrawanPorto

## Project Overview
- **Type:** React single-page portfolio app, built with [Vite](https://vitejs.dev/).
- **Entry Point:** `src/main.jsx` renders `App` into `#root` in `index.html`.
- **Styling:** Uses TailwindCSS (via CDN in `index.html`) and custom CSS in `src/App.css` and `src/index.css`.
- **UI Libraries:** Uses `framer-motion` for animation, `lucide-react` and `react-icons` for icons.
- **Linting:** ESLint is configured in `eslint.config.js` with React, React Hooks, and Vite-specific plugins. Custom rule: variables starting with uppercase or underscore are ignored for `no-unused-vars`.

## Key Files & Structure
- `src/App.jsx`: Main component, contains all sections (navbar, hero, skills, projects, contact, footer). Uses carousel logic for skills/projects.
- `public/`: Static assets (images, SVGs) referenced in components.
- `vite.config.js`: Vite config, enables React plugin.
- `package.json`: Scripts and dependencies.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint`

## Patterns & Conventions
- **Component Structure:** All logic is in `App.jsx` (no subcomponents by default). Add new sections as functions or inline in `App.jsx`.
- **Section Navigation:** Navbar links use anchor tags with `href="#section"` and scroll detection to highlight the active section.
- **Carousels:** Skills and projects use a custom carousel pattern with animated transitions (see `renderCarousel` in `App.jsx`).
- **Styling:** Prefer Tailwind utility classes for layout and color. Use custom CSS for animations or global styles.
- **Assets:** Reference images from `/public` using root-relative paths (e.g., `/justin1.jpg`).

## Integration & External Dependencies
- **TailwindCSS:** Loaded via CDN in `index.html` (not via PostCSS pipeline).
- **No backend:** All data (skills, projects) is hardcoded in `App.jsx`.
- **No routing:** Single-page, all navigation is anchor-based.

## Tips for AI Agents
- When adding new sections, follow the pattern in `App.jsx` (add to `navItems`, create a `<section id="...">`).
- For new animations, use `framer-motion` as in the carousel.
- For new icons, use `lucide-react` or `react-icons`.
- When adding new dependencies, update `package.json` and install with npm.
- Keep all user-facing text and data in `App.jsx` for easy editing.

## References
- See `README.md` for Vite/React basics and ESLint expansion tips.
- See `eslint.config.js` for linting rules and conventions.
- See `vite.config.js` for build config.
