# Mohammed Batis CV Website

Academic CV website built with SvelteKit and exported as a static site for GitHub Pages.

## Why SvelteKit here

SvelteKit is a good fit for a CV site:

- It stays lightweight and fast for a mostly content-driven page.
- Static export works well for GitHub Pages.
- You still keep room to grow later into blog posts, publications pages, or project case studies.

For a personal academic site, this is a stronger long-term choice than plain HTML while still staying simple.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is written to `build/`.

## GitHub Pages deployment

This repo already includes [`.github/workflows/deploy.yml`](C:\Users\Mohammed Batis\Documents\cv_website\.github\workflows\deploy.yml), which deploys automatically when you push to `main`.

It handles both cases:

- User site: repo name is exactly `username.github.io`
- Project site: any other repo name, published under `https://username.github.io/repo-name/`

The site uses relative static asset paths, so it does not need a custom base-path build step for GitHub Pages.

## Content to customize later

- Add a real profile photo if you want to replace the `MB` monogram.
- Add links for Google Scholar, GitHub, LinkedIn, or personal email aliases if needed.
- Expand the publications list once you have final publication links.
