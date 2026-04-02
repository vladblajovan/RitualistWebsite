# Website Content Update — Design Spec

**Date:** 2026-04-02
**Goal:** Update the Ritualist marketing website to reflect all current app features, fix outdated privacy claims, and improve SEO.

## Context

The app has evolved significantly since the website was last updated. Major features (Apple Health, timed habits, widgets, snapshots, multi-language) are not mentioned. Privacy claims ("zero data collection", "no third-party analytics") are now inaccurate after PostHog integration.

## Guiding Principles

- **Do not emphasize tracking.** Privacy is a core value. PostHog is anonymous and lightweight — no need to mention it on marketing pages. The privacy policy (legal page) handles disclosure.
- **Low cognitive load language.** Simple, benefit-focused copy. No technical jargon.
- **Honest privacy claims.** Soften "zero data collection" to "your data stays yours" / "your data never leaves your device" — true for habit data, honest about the overall picture.

## Changes by File

### 1. Landing Page (`app/page.tsx`)

#### Hero Section
- Soften privacy claim from "zero data collection" to "your data stays yours"

#### "How Ritualist is different" (3 pillars — keep 3)
- **Intelligence:** Add Health insights mention alongside personality
- **Transformation:** Add fasting/breathing as transformation tools
- **Privacy:** Change "zero data collection" to "your data never leaves your device"

#### "How it works" (3 steps)
- Step 2: Mention timed habits alongside tap-to-track

#### 6 Main Feature Cards (2 replaced, 2 new)

| # | Card | Status | Screenshot |
|---|------|--------|-----------|
| 1 | Personality Insights | Keep | `/screenshots/personality.png` |
| 2 | Inspiring Insights (renamed from "Beautiful Analytics") | Update copy | `/screenshots/analytics.png` |
| 3 | Smart Triggers (expanded from "Smart Location Triggers") | Update copy — include timed reminders, Live Activities | `/screenshots/location.png` |
| 4 | Apple Health | NEW | Placeholder — `/screenshots/health.png` |
| 5 | Fasting & Breathing | NEW | Placeholder — `/screenshots/timed.png` |
| 6 | Privacy (moved to last position) | Update copy — soften claims | `/screenshots/privacy.png` |

Removed from main cards: Customization, iCloud Sync (moved to compact grid).

#### New Compact Feature Grid (after main cards)

Responsive grid of 7 items, each with an icon/emoji and a short 1-line description:

| Feature | Description |
|---------|-------------|
| iCloud Sync | Seamless sync across all your Apple devices |
| Customization | Custom colors, emojis, and flexible categories |
| Shareable Snapshot Cards | Share streak milestones, perfect days, and weekly recaps |
| Widgets | Track habits from your Home Screen |
| Live Activities | Real-time fasting and breathing progress on your Lock Screen |
| Inspiration Cards | Personalized motivational messages that adapt to your progress |
| 5 Languages | Available in English, German, Spanish, French, and Romanian |

#### FAQ Section
- **Update:** Privacy FAQ — remove "zero data collection", use "your data stays on your device"
- **Add:** "Does Ritualist work with Apple Health?" — yes, read/write, mindful minutes, steps, water, etc.
- **Add:** "What are timed habits?" — fasting protocols, guided breathing, mood tracking
- **Add:** "Which languages does Ritualist support?" — EN, DE, ES, FR, RO

#### Pricing Section
- **Add to premium features list:** Apple Health integration, timed habits (fasting & breathing), widgets, shareable snapshot cards

### 2. Support Page (`app/support/page.tsx`)

- **Update:** Privacy FAQ — soften "zero data collection"
- **Add FAQ:** How does Apple Health integration work?
- **Add FAQ:** What are timed habits (fasting & breathing)?
- **Add FAQ:** Which languages does Ritualist support?
- **Add FAQ:** Can I share my achievements?

### 3. Layout & SEO (`app/layout.tsx`)

- **Update meta description** to mention health integration and timed habits
- **Add keywords:** "health", "wellness", "fasting", "breathing", "Apple Health", "meditation", "mindful minutes"

### 4. No Changes

- `app/roadmap/page.tsx` — no changes
- `app/roadmap/SuggestFeatureForm.tsx` — no changes
- `app/components/ConsentBanner.tsx` — no changes

## Screenshots

New feature cards reference placeholder screenshot paths:
- `/public/screenshots/health.png` — Apple Health integration
- `/public/screenshots/timed.png` — Fasting & breathing session

These files won't exist yet. The feature cards should render gracefully without them (text-only until images are provided).

## Out of Scope

- Website redesign or layout changes
- New pages
- Language switcher / i18n for the website itself
- Video content or interactive demos
- Testimonials section
- Google/Yandex verification TODOs
