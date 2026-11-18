# YSSE Main Portal

A multi-page React portal for **YSSE (Youth Stage for Skills & Empowerment)** — "Stage of Innovation." Built as a structured, multi-page web application with client-side routing, reusable components, and animated, responsive UI.

## Project Description

The YSSE Main Portal showcases the organisation's mission, programs, and announcements across four main sections — **Home, About, Notices, and Programs** — plus a dynamic program details page and a contact/inquiry form. It uses React Router DOM for navigation, a shared layout with a floating glassmorphism navbar and footer, and Framer Motion for smooth page transitions and scroll animations.

## Technologies Used

- **React** (functional components + hooks)
- **Vite** — build tool & dev server
- **React Router DOM** — multi-page routing, `useParams`, `Outlet`
- **Framer Motion** — animations and page transitions
- **Regular CSS** — custom styling, no UI frameworks

## Features

- Multi-page navigation with a transparent, floating, animated navbar (active link highlighting + mobile hamburger menu)
- Shared `MainLayout` with `Outlet`-based page rendering and animated page transitions
- Dynamic program details route (`/programs/:id`) using `useParams`
- Notices and Programs pages with category filtering and `.map()`-based rendering
- Controlled contact form with validation (required fields + email format) and success feedback
- Conditional rendering for empty states, invalid routes, and form feedback
- Custom animated 404 page
- Fully responsive layout for desktop, tablet, and mobile

## Project Structure

```
src/
├── assets/          # Images (YSSE logo) and icons
├── components/      # Navbar, Footer, PageHeader, NoticeCard, ProgramCard, Button
├── pages/           # Home, About, Notices, Programs, ProgramDetails, Contact, NotFound
├── layouts/         # MainLayout (Navbar + Outlet + Footer)
├── data/            # notices.js, programs.js (sample content)
├── App.jsx          # Route definitions
└── main.jsx         # App entry point
```

## Installation & Running

```bash
npm install
npm run dev
```

The app runs by default at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

## Notes

- This is a frontend-only project — the contact form does not send data to any backend or database.
- Notice and program content is sample data for demonstration purposes.
