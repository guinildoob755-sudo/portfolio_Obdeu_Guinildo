# Portfolio — Guinildo Obdeu

Personal portfolio built with React, Vite, and Tailwind CSS. It showcases my projects, skills, and background in web development.

🔗 **Live site:** https://portfolio-41947.web.app/

## Overview

- Dark, modern design with an orange accent (`#FF8C00`)
- Smooth animations with Framer Motion
- Anchor-based navigation with smooth scrolling (`react-scroll`)
- Responsive mobile menu with animated overlay
- Custom cursor (desktop)
- Sections: Home, About, Skills, Projects, Contact

## Tech stack

- **[React](https://react.dev/)** — UI library
- **[Vite](https://vitejs.dev/)** — build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** — animations
- **[react-scroll](https://www.npmjs.com/package/react-scroll)** — smooth scroll navigation

## Installation

```bash
# Clone the repository
git clone https://github.com/guinildoob755-sudo/portfolio_Obdeu_Guinildo.git
cd portfolio_Obdeu_Guinildo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will then be available at `http://localhost:5173`.

## Available scripts

| Command           | Description                                |
|--------------------|--------------------------------------------|
| `npm run dev`      | Starts the development server              |
| `npm run build`    | Builds the production version (`dist/`)    |
| `npm run preview`  | Previews the production build locally      |
| `npm run lint`     | Lints the code with ESLint                 |

## Deployment

The site is deployed with **Firebase Hosting**.

```bash
npm run build
firebase deploy
```

## Project structure

```
src/
├── assets/          # Images, logos, fonts
├── components/      # Reusable components (Navbar, Cursor, NeonPulse...)
├── data/             # Static data (projects, skills...)
├── sections/         # Main page sections (Hero, About, Skills, Projects, Contact)
├── App.jsx
└── main.jsx
```

## Contact

- **Email:** guinildoob755@gmail.com
- **GitHub:** [@guinildoob755-sudo](https://github.com/guinildoob755-sudo)

---
