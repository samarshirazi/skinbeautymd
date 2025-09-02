SkinBeauty MD – Next.js (SEO-first)

Overview

This is a Next.js App Router project optimized for SEO: rich metadata, file-based routing, server components, and generated sitemap/robots. It ports the static prototype into a production-ready structure.

Quick start

1) cd web
2) npm install
3) npm run dev

Key SEO features

- App Router metadata in layout and per-page titles/descriptions
- Open Graph + Twitter tags
- JSON-LD (MedicalBusiness) in the root layout
- Robots and sitemap routes (`/robots.txt`, `/sitemap.xml`)
- Clean URLs with file-based routing
- Lazy images and small client bundles via Server Components

Structure

- app/layout.tsx – global metadata + JSON-LD
- app/page.tsx – homepage
- app/(pages)/* – subpages (treatments, providers, results, etc.)
- app/components/* – header, footer, before/after slider
- app/sitemap.ts – sitemap generation
- app/robots.ts – robots configuration
- app/globals.css – design system
- next.config.mjs – remote image domains

Notes

- Replace placeholder content and images with brand assets.
- For blog, `/blog/[slug]` is ready for CMS integration.
- Set canonical domain in `app/layout.tsx`.

