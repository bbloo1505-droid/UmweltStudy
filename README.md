# Umwelt Interview Study Hub

Mobile-first study web app for preparing for the role **“Ecologist (Restoration), QLD”** at **Umwelt**.

## What’s inside

- Dashboard with due items + streak
- Glossary flashcards (flip/quiz/type) with confidence rating + spaced repetition (localStorage)
- Legislation / policy / framework library + drill mode
- Interview question bank + mock interview mode
- Scenario drills
- Desktop review workflow simulator
- Why Umwelt, consultant language lab, story bank, resources, last-minute cram

Seed content is sourced from:
- Your PDFs (SEQ Restoration Framework Manual + your workbook/notes)
- Official sources linked in `src/data/sources.ts`

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/`).

## Build

```bash
npm run build
npm run preview
```

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- Radix primitives (shadcn-style components)
- Framer Motion
- Local-first storage (localStorage)

## Notes

- `node_modules/` and `dist/` are gitignored.
- In dev mode, a small “Debug” banner shows how many items are loaded per dataset.
