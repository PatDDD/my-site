# Kunsheng Du — personal website

Custom Astro portfolio covering analytics, data science, and engineering. Source copy is adapted from the owner's April 2026 resume and requires final accuracy/publication review. No original resume or private working materials are included.

## Run locally

Requires Node >=22.23.4 and npm >=9.6.5 (developed with Node 26.12.1).

```sh
npm ci
npm run dev
```

Open the URL printed by Astro. In a restricted environment, prefix Astro commands with `ASTRO_TELEMETRY_DISABLED=1` to avoid writing user preferences.

```sh
npm test
npm run check
npm run build
npm run preview
```

## Editing

- Profile and skills: `src/data/profile.ts`.
- Career and education: `src/pages/about.astro`.
- Projects: `src/content/work/*.md`; include title, summary, tags, draft, featured.
- Writing: `src/content/thoughts/*.md`; include title, summary, tags, date, draft.
- Filenames become unique route slugs. Draft defaults to true. Use `draft: false` only for reviewed content.
- The writing template is intentionally excluded from output. Add an actual authored post to populate Thoughts; no post is required to render the page.

## Publishing

No site is deployed yet. GitHub Pages is the proposed target. Set `SITE_URL=https://patddd.github.io` and `BASE_PATH=/my-site/` for that target; use a different origin/base for another host. Never publish a build with the default localhost origin.

The included workflow is manual (`workflow_dispatch`) and deploys only from `main`. After approving content and source visibility, create the remote repository, push the reviewed source, enable Pages with GitHub Actions, and manually run the workflow. Then verify home, nested case studies, navigation, metadata, and 404 on the actual URL.

Only publish this frontend folder. Keep parent `materials-used/`, legacy Quarto output, local design sessions, and audit documentation outside the public source tree.
