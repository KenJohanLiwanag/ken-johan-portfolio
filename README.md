# Ken Johan Liwanag: Portfolio

Personal portfolio built with Vite + React and plain CSS. It has a 3D rotating project carousel.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
npm run lint
```

## Edit your content

- `src/data/profile.js`: name, title, tagline, bio, skills, links
- `src/data/projects.js`: carousel projects (remove `placeholder: true` once a project is real)
- `src/data/certificates.js`: certificates (optional images go in `public/certificates/`)
- `index.html`: SEO / Open Graph tags (add your domain and OG image after deploying)

## Deploy (Vercel)

Push to GitHub, then on vercel.com choose **Add New → Project**, import the repo and deploy.
Vercel auto-detects Vite (build `npm run build`, output `dist`).
