# The Hearth London

A mobile-first frontend prototype for **The Hearth London** — a social app that helps people, especially newcomers and expats, meet in real life through gallery tours, reading groups, supper clubs, walks and live events around London.

This is a **design and interaction prototype**. All data is local TypeScript fixtures; there is no backend, no API and no real authentication.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The layout is designed for a phone viewport (~390px) — use your browser's device toolbar.

## Screens

| Route | What it is |
| --- | --- |
| `/onboarding` | Welcome → name & photo → interests → done |
| `/login`, `/signup` | Auth mockups with WeChat / Apple SSO |
| `/events` | Poster-grid feed with search and category filters |
| `/events/[id]` | Poster, highlights, host, attendees, sticky join CTA |
| `/clubs`, `/clubs/[id]` | Club browse and detail with members and posts |
| `/chat`, `/chat/[id]` | Conversation list and threads, including event group chats |
| `/profile` | Stats, interests, joined events and clubs |

## How it is put together

- **Next.js 16 (App Router) + React 19 + TypeScript.** The four tab screens live in a `(tabs)` route group sharing a bottom-nav shell; onboarding and auth sit outside it.
- **Bilingual throughout.** An EN / 中文 toggle drives both UI labels ([`src/lib/i18n/strings.ts`](src/lib/i18n/strings.ts)) and fixture content, which is modelled as `LocalizedText { en, zh }`.
- **State** lives in a single React context ([`AppStateContext`](src/lib/context/AppStateContext.tsx)) covering language, joined events and clubs, interests, profile and sent messages. It persists to `localStorage` under a version stamp, so changing the fixtures invalidates stale saved state instead of merging over it.
- **Styling** is Tailwind v4 with a warm "hearth" palette and editorial gallery treatment — cream ground, ink text, gold-framed poster cards, Fraunces + Figtree with system CJK fallbacks.

## Structure

```
src/
  app/            routes: (tabs) shell, onboarding, login, signup
  components/     ui primitives, plus events / clubs / chat / onboarding
  lib/
    data/         mock events, clubs, users, conversations, interests
    types/        EventItem, Club, User, Conversation, LocalizedText
    context/      AppStateContext
    i18n/         EN + 中文 UI strings
```

## Prototype caveats

- Event and club posters are placeholders from `picsum.photos`; drop real artwork into `public/` and point the fixtures at it.
- SSO buttons do not contact WeChat or Apple — they sign in as the fixture user after a short simulated delay.
- Joining events, joining clubs and sending messages only affect local state.
