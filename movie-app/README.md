# Movie App

A small, responsive movie browsing UI built with React and Vite. This project demonstrates component composition, responsive layout, and integration-ready structure for adding an external movie API (e.g. TMDB).

## Quick summary

- Purpose: A lightweight front-end demo for displaying movie posters, metadata and filtering.
- Audience: Front-end learners, portfolio reviewers, and anyone who wants a starter movie UI to extend.

## Features

- Responsive movie grid and card components
- Loader and empty states
- Reusable components (Header, Footer, MovieCard, Loader)
- Mobile-first layout using CSS Grid / Flexbox

## Tech stack

- React (functional components)
- Vite (dev server and build)
- Plain CSS (project stylesheet in `src/`)

## Prerequisites

- Node.js v16+ (recommended)
- npm (or Yarn) installed

## Getting started

1. Install dependencies

```bash
cd movie-app
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open the URL shown by Vite (usually `http://localhost:5173`)

## Build for production

```bash
npm run build
npm run preview
```

## Environment & API notes

This project ships as a static UI. To integrate a movie API such as TMDB, create a `.env` file in the `movie-app` folder with a Vite environment variable, for example:

```
VITE_TMDB_API_KEY=your_api_key_here
```

Then update the API wrapper in `src/` to read `import.meta.env.VITE_TMDB_API_KEY`.

## Project structure (key files)

- `index.html` — Vite entry
- `package.json` — scripts and dependencies
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — Top-level app component
- `src/components/` — Reusable components
  - `Loader.jsx` — Small loading spinner / placeholder used across the app
  - `MovieCard.jsx` — Card layout for each movie
  - `Header.jsx` / `Footer.jsx` — Layout components

## Notes & next steps

- Add TMDB (or other) API integration to fetch real movie data.
- Add unit tests for key components (Jest / React Testing Library).
- Optimize images and use lazy loading for better performance.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a pull request

## License

This project is provided as-is for learning and portfolio purposes. Add a LICENSE file if you plan to publish or share widely.
