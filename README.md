# katarzynagostkowska.pl / psycholog-online

[English](./README.md) | [Polski](./README_PL.md)

A modern website for the psychological and psychotherapy practice of Katarzyna Gostkowska-Kraczkowska, designed and implemented as an elegant, trustworthy, and lightweight web product.

The project combines a polished landing page, clear information architecture, a contact form, a privacy policy, and Google Analytics integration based on user consent.

## Preview

<img src="./docs/katarzynagostkowska-pl_cb.webp" alt="Homepage view of the project" width="1200" />

<img src="./docs/katarzynagostkowska-pl_polityka-prywatnosci.webp" alt="Privacy policy page view" width="1200" />

## Project Scope

- a landing page tailored to the psychology and therapy domain,
- sections for hero, about, services, pricing, testimonials, and contact,
- bilingual experience in `PL / EN`,
- a contact form with privacy-related communication,
- a dedicated privacy policy page,
- a cookie banner with analytics consent handling,
- Google Analytics enabled only after user consent,
- deployment that works correctly on static hosting.

## Key Project Decisions

- a calm, professional visual language built around a custom color palette and elegant typography,
- a clear separation between contact-form consent and analytics consent,
- `gtag.js` implemented in line with Google recommendations, with `analytics_storage: denied` by default,
- use of `HashRouter` to ensure reliable page refresh behavior without server-side rewrite rules.

## Technology Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- shadcn/ui
- Lucide React
- TanStack Query

## Local Development

```bash
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run build:dev
npm run lint
npm run preview
```

## Routing and Deployment

The project uses `HashRouter`, which makes it suitable for simple static hosting environments without access to `Apache` or `Nginx` rewrite rules.

Example routes:

- `/#/`
- `/#/polityka-prywatnosci`

## Privacy and Analytics

- Google `gtag.js` is embedded in line with Google recommendations,
- `analytics_storage` is denied by default,
- analytics is activated only after explicit user consent,
- cookie preferences can be updated from within the interface,
- the contact form includes a separate privacy-related checkbox.

## Repository Security

This repository does not contain classic technical secrets such as passwords, private tokens, or server-side API keys.

The codebase does include public project-related information, such as practice contact details and the Google Analytics measurement ID. These are not application secrets, but before publishing the repository it is worth confirming that all such details are current and intended for public exposure.

## Status

The project builds successfully in production mode:

```bash
npm run build
```
