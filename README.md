# Unnati Joshi — Portfolio

Personal portfolio built with React, Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- **Profile, experience, skills, education:** `src/data/portfolio.js`
- **Personal projects:** `src/data/projects.js`. Add an object to the list. Remove `placeholder: true` cards once you have real ones. Put screenshots in `public/projects/` and set `image: 'projects/name.png'`.
- **Resume:** replace `public/Unnati_Joshi_Resume.pdf`.
- **Contact form:** create a free form at https://formspree.io and paste its ID into `FORMSPREE_ID` in `src/data/portfolio.js`. Until then the form opens the visitor's email app.

## Deploy (GitHub Pages)

1. Create a GitHub repo (name it `kd3-80148.github.io` for the URL `https://kd3-80148.github.io`, or any name for `https://kd3-80148.github.io/<repo>/`).
2. Push this project to the `main` branch.
3. In the repo, go to **Settings → Pages → Source** and pick **GitHub Actions**.

Every push to `main` rebuilds and deploys the site.
