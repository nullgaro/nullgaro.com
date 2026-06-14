# nullgaro — Portfolio v2

> A stunning personal portfolio built from scratch with Astro 5 and Tailwind CSS, featuring an interactive experience constellation, bilingual content, and a cohesive developer brand identity.

## Features

- **Interactive Experience Constellation** — A radial bubble network showing companies you've worked with, with L1→L2 subhire relationships visualized as branching connections
- **Animated Constellation Background** — Subtle particle network canvas that ties into the brand motif
- **Bilingual (ES/EN)** — Full i18n with data-driven content in both Spanish and English
- **Dark / Light Mode** — Smooth theme switching with `prefers-color-scheme` detection
- **View Transitions** — Smooth page transitions using Astro's built-in View Transitions API
- **Scroll Animations** — Elements fade in as you scroll, with staggered delays
- **Typing Effect** — Rotating role titles in the hero section
- **Skills Visualization** — Animated gradient progress bars that fill on scroll
- **Copy Email** — One-click email copy in the contact section
- **SEO Optimized** — Full meta tags, sitemap, semantic HTML
- **Accessibility** — `prefers-reduced-motion` support, keyboard navigation, ARIA labels
- **Responsive** — Mobile-first with custom breakpoints (xxs, xs)

## Tech Stack

- [Astro 5](https://astro.build) — Static site generation
- [Tailwind CSS 3.4](https://tailwindcss.com) — Utility-first styling
- [TypeScript](https://www.typescriptlang.org) — Type safety
- Custom fonts: Clash Display, General Sans, JetBrains Mono

## Getting Started

```bash
# Clone the repository
git clone https://github.com/nullgaro/portfolio-web.git
cd portfolio-web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro              # Base shell + View Transitions + constellation canvas
├── components/
│   ├── global/
│   │   ├── Header.astro           # Frosted-glass sticky nav + mobile menu
│   │   ├── ThemeToggle.astro      # Sun/moon toggle
│   │   └── Footer.astro           # Social links + credit
│   ├── hero/
│   │   └── Hero.astro             # Gradient name, typing effect, CTAs, avatar
│   ├── experience/
│   │   └── ExperienceConstellation.astro  # Interactive bubble network
│   ├── projects/
│   │   └── Projects.astro         # Bento grid with featured project
│   ├── about/
│   │   └── AboutMe.astro          # Bento cards + animated skill bars
│   └── contact/
│       └── Contact.astro          # CTA section with email copy
├── pages/
│   ├── index.astro                # Spanish (default)
│   └── en/index.astro             # English
├── data/
│   ├── es.json                    # All content in Spanish
│   └── en.json                    # All content in English
└── styles/
    └── global.css                 # Design tokens, animations, components
```

## Customization

All content is in `src/data/es.json` and `src/data/en.json`. Edit those files to update your information, experience, projects, and skills.

### Adding a new company to the constellation

Add an entry to the `experience.companies` array in both JSON files:

```json
{
  "id": "company-id",
  "name": "Company Name",
  "initials": "CN",
  "role": "Your Role",
  "dates": "2024 — Present",
  "description": "What you did there.",
  "tech": ["Python", "Docker"],
  "color": "#7F77DD",
  "subhiredTo": []
}
```

For L1→L2 subhire relationships, add entries to the `subhiredTo` array of the parent company.

## Design System

| Token | Light | Dark |
|-------|-------|------|
| Accent (violet) | `#7F77DD` | `#AFA9EC` |
| Emerald | `#1D9E75` | `#5DCAA5` |
| Warm (coral) | `#D85A30` | `#F0997B` |
| Background | `#FAFAF8` | `#0C0C0F` |
| Card | `#FFFFFF` | `#13121A` |

## License

MIT

## Credits

Inspired by [midudev's portfolio](https://github.com/midudev/porfolio.dev), rebuilt from scratch with a unique design language.
