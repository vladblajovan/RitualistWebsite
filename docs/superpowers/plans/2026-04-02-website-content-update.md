# Website Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Ritualist marketing website to reflect all current app features, fix outdated privacy claims, and improve SEO.

**Architecture:** Content-only changes across 3 existing files (`page.tsx`, `support/page.tsx`, `layout.tsx`). No new pages or components. Follow existing patterns for feature cards, FAQ items, and styling.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion

---

### Task 1: Update Hero, Comparison Pillars, and How It Works

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Soften privacy claim in hero subtitle**

On line 448, change the subtitle copy. Find:
```tsx
— understand your personality, spot patterns that hold you back, and build rituals that actually stick.
```
Replace with:
```tsx
— understand your personality, connect with Apple Health, and build rituals that actually stick.
```

- [ ] **Step 2: Update "How it works" step 2 to mention timed habits**

On line 619, in the "How it works" array, change step 02 desc from:
```tsx
{ step: '02', icon: '👆', title: 'One tap to track', desc: 'Finished your workout? Just tap the checkmark. Ritualist automatically logs the time, builds your streak, and updates your analytics.' },
```
to:
```tsx
{ step: '02', icon: '👆', title: 'One tap to track', desc: 'Tap a checkmark, start a fasting timer, or begin a breathing session. Ritualist logs everything, builds your streak, and updates your insights.' },
```

- [ ] **Step 3: Update comparison pillar 1 (Intelligence)**

On line 552, change the paragraph text from:
```tsx
On-device machine learning reveals your personality patterns and behavior insights, helping you choose habits that match who you are—rather than fighting against your nature.
```
to:
```tsx
On-device machine learning reveals your personality patterns, connects with Apple Health, and delivers insights that help you choose habits matching who you are—rather than fighting against your nature.
```

- [ ] **Step 4: Update comparison pillar 2 (Transformation)**

On line 570, change the paragraph text from:
```tsx
Designed around streaks, rituals, and identity-level change. Every feature helps you build sustainable habits that become part of who you are—not temporary to-do lists.
```
to:
```tsx
Designed around streaks, fasting protocols, breathing exercises, and identity-level change. Every feature helps you build sustainable habits that become part of who you are—not temporary to-do lists.
```

- [ ] **Step 5: Update comparison pillar 3 (Privacy)**

On line 588, change the paragraph text from:
```tsx
Your journey is yours alone. Everything runs on-device with zero data collection, so you can focus on genuine growth—without the pressure of social validation.
```
to:
```tsx
Your journey is yours alone. Your habit data stays on your device and in your personal iCloud account, so you can focus on genuine growth—without the pressure of social validation.
```

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "content: update hero, pillars, and how-it-works with new features"
```

---

### Task 2: Replace Feature Cards 2 and 3 (Analytics and Location)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Rename Feature 2 from "Beautiful Analytics" to "Inspiring Insights"**

Find the Feature 2 heading (around line 706-708):
```tsx
<span className="text-2xl md:text-4xl">📊</span>
Beautiful Analytics
```
Replace with:
```tsx
<span className="text-2xl md:text-4xl">💡</span>
Inspiring Insights
```

Update the description (around line 709-711):
```tsx
See your progress come to life. Track your streaks, completion rates, and trends with stunning visualizations. The analytics dashboard makes it easy to understand your habits at a glance.
```
Replace with:
```tsx
See your progress come to life. Track your streaks, spot patterns, and get personalized motivational messages that adapt to your journey. Insights that inspire you to keep going.
```

Update the bullet points (around lines 712-716):
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Current and best streak tracking</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Completion rate analytics</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Weekly and monthly trends</li>
```
Replace with:
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Streak tracking and completion trends</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Personalized motivation cards</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Weekly recaps and pattern detection</li>
```

- [ ] **Step 2: Rename Feature 3 from "Smart Location Triggers" to "Smart Triggers"**

Find the Feature 4 heading (around line 794-796). Note: Feature 4 in the current code is the location card — it's the 4th `<div className="mb-24">` block:
```tsx
<span className="text-2xl md:text-4xl">📍</span>
Smart Location Triggers
```
Replace with:
```tsx
<span className="text-2xl md:text-4xl">📍</span>
Smart Triggers
```

Update the description (around line 798-799):
```tsx
Never miss a habit again. Ritualist uses intelligent geofencing to remind you at the right place and time. Hit the gym? Log your workout. Arrive home? Time for evening meditation.
```
Replace with:
```tsx
Never miss a habit again. Location-based reminders trigger when you arrive at the gym or get home. Timed sessions track your fasting and breathing with live progress on your Lock Screen.
```

Update the bullet points (around lines 801-805):
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Custom locations for each habit</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Smart notifications at the right moment</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> No annoying time-based reminders</li>
```
Replace with:
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Location-based geofencing reminders</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Live Activities on your Lock Screen</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Smart timers for fasting and breathing</li>
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "content: rename analytics and location feature cards"
```

---

### Task 3: Replace Feature Cards 4 and 5 (Customization and iCloud become Apple Health and Fasting)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace Feature 3 (Customization) with Apple Health**

Find the Feature 3 block — the `{/* Feature 3: Customization */}` comment (around line 740). Replace the entire feature content.

Change the heading from:
```tsx
<span className="text-2xl md:text-4xl">🎨</span>
Make It Yours
```
to:
```tsx
<span className="text-2xl md:text-4xl">❤️</span>
Apple Health
```

Change the screenshot `src` from `"/screenshots/customization.png"` to `"/screenshots/health.png"`.
Change the screenshot `alt` to `"Apple Health integration showing mindful minutes and activity data"`.
Change the border color from `border-amber-200` / `dark:border-amber-800` / `shadow-amber-500` to `border-rose-200` / `dark:border-rose-800` / `shadow-rose-500`.

Change the description from:
```tsx
Personalize every detail. Choose from custom colors, emojis, and categories to make your habit tracker uniquely yours. Beautiful design meets powerful functionality.
```
to:
```tsx
Connect your habits to Apple Health. Sync mindful minutes from breathing sessions, track steps, water intake, and more. Your health data stays on your device — always.
```

Change the bullet points to:
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Read and write to Apple Health</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Auto-complete habits from health data</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Mindful minutes, steps, water, and more</li>
```

- [ ] **Step 2: Replace Feature 5 (iCloud Sync) with Fasting & Breathing**

Find the Feature 5 block — the `{/* Feature 5: iCloud Sync */}` comment (around line 829). Replace the entire feature content.

Change the heading from:
```tsx
<span className="text-2xl md:text-4xl">☁️</span>
Seamless Everywhere
```
to:
```tsx
<span className="text-2xl md:text-4xl">🫁</span>
Fasting & Breathing
```

Change the screenshot `src` from `"/screenshots/sync.png"` to `"/screenshots/timed.png"`.
Change the screenshot `alt` to `"Timed habits showing fasting protocols and guided breathing sessions"`.
Change the border color from `border-violet-200` / `dark:border-violet-800` / `shadow-violet-500` to `border-teal-200` / `dark:border-teal-800` / `shadow-teal-500`.

Change the description from:
```tsx
Your habits follow you. iCloud sync keeps your data up-to-date across all your Apple devices. Start on iPhone, continue on iPad.
```
to:
```tsx
Track intermittent fasting with built-in protocols like 16:8 and 20:4. Practice guided breathing with customizable patterns. Log your mood and watch your wellness journey unfold.
```

Change the bullet points to:
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Fasting protocols with smart timers</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Guided breathing with haptic feedback</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Mood tracking during sessions</li>
```

- [ ] **Step 3: Move Feature 6 (Privacy) — it stays as the last feature card**

The Privacy card is already at position 6. Update its copy.

Find line 888:
```tsx
Everything runs on your device. Your habit data, personality insights, and personal information never leave your control. No tracking, no data collection, no compromises.
```
Replace with:
```tsx
Your habit data stays on your device and in your personal iCloud account. Personality insights are processed locally. Your journey is yours alone.
```

Find the bullet points (around lines 890-894):
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> 100% on-device processing</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Zero data collection</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> You own your data completely</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> No third-party tracking</li>
```
Replace with:
```tsx
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> On-device ML processing</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Your data stays yours</li>
<li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> No ads, no social pressure</li>
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "content: replace customization and iCloud cards with Apple Health and Fasting"
```

---

### Task 4: Add Compact Feature Grid

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add compact grid section after the features section**

Find the closing `</section>` of the features section (around line 919, after the `{/* Feature 6: Privacy First */}` block's closing divs). Insert a new section immediately after it, before the commented-out Stats & Testimonials section:

```tsx
          {/* More Features Grid */}
          <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl"
              >
                And so much more
              </motion.h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                {[
                  { icon: '☁️', title: 'iCloud Sync', desc: 'Seamless sync across all your Apple devices' },
                  { icon: '🎨', title: 'Customization', desc: 'Custom colors, emojis, and flexible categories' },
                  { icon: '🏆', title: 'Shareable Cards', desc: 'Share streak milestones, perfect days, and weekly recaps' },
                  { icon: '📱', title: 'Widgets', desc: 'Track habits from your Home Screen' },
                  { icon: '🔴', title: 'Live Activities', desc: 'Real-time progress on your Lock Screen' },
                  { icon: '✨', title: 'Inspiration', desc: 'Personalized messages that adapt to your progress' },
                  { icon: '🌍', title: '5 Languages', desc: 'English, German, Spanish, French, and Romanian' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                    className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <div className="mb-2 text-2xl">{item.icon}</div>
                    <h3 className="mb-1 text-sm font-semibold text-black dark:text-white">{item.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "content: add compact feature grid with iCloud, widgets, snapshots, languages"
```

---

### Task 5: Update FAQ and Pricing

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update privacy FAQ**

Find the FAQ item at line 1025:
```tsx
answer="Absolutely. Everything runs on your device and your data is stored in your personal iCloud account. We never collect, track, or have access to your information."
```
Replace with:
```tsx
answer="Yes. Your habit data stays on your device and in your personal iCloud account. Personality insights are processed entirely on-device. We never have access to your information."
```

Also update the FAQ structured data (faqLd) at line 76:
```tsx
'Yes. Everything runs on your device and your data is stored in your personal iCloud account. We never collect, track, or have access to your information.',
```
Replace with:
```tsx
'Yes. Your habit data stays on your device and in your personal iCloud account. Personality insights are processed entirely on-device. We never have access to your information.',
```

- [ ] **Step 2: Add new FAQ items**

After the last `<FaqItem>` (line 1042, the "cancel subscription" one), add:

```tsx
                <FaqItem
                  index={7}
                  question="Does Ritualist work with Apple Health?"
                  answer="Yes! Ritualist can read and write health data like mindful minutes, steps, and water intake. Health integration is optional and your health data never leaves your device."
                />
                <FaqItem
                  index={8}
                  question="What are timed habits?"
                  answer="Timed habits let you track fasting and breathing exercises. Choose from built-in protocols like 16:8 fasting or box breathing, or create your own. Track mood, view session history, and monitor progress."
                />
                <FaqItem
                  index={9}
                  question="Which languages does Ritualist support?"
                  answer="Ritualist is available in English, German, Spanish, French, and Romanian."
                />
```

Also add these to the `faqLd` structured data array (after the last Question object around line 103):

```tsx
    {
      '@type': 'Question',
      name: 'Does Ritualist work with Apple Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Ritualist can read and write health data like mindful minutes, steps, and water intake. Health integration is optional and your health data never leaves your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are timed habits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timed habits let you track fasting and breathing exercises. Choose from built-in protocols like 16:8 fasting or box breathing, or create your own.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which languages does Ritualist support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ritualist is available in English, German, Spanish, French, and Romanian.',
      },
    },
```

- [ ] **Step 3: Update premium features list**

Find the premium features list (around lines 1141-1166). After the "Export data (CSV, JSON)" item, add:

```tsx
                    <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-500">✓</span>
                      <span>Apple Health integration</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-500">✓</span>
                      <span>Shareable snapshot cards</span>
                    </li>
```

Also add to the free tier's excluded features (after "Advanced analytics" around line 1122):

```tsx
                    <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-500">
                      <span>✗</span>
                      <span>Apple Health integration</span>
                    </li>
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "content: update FAQ with health and timed habits, update pricing features"
```

---

### Task 6: Update Support Page

**Files:**
- Modify: `app/support/page.tsx`

- [ ] **Step 1: Update privacy FAQ**

Find line 57:
```tsx
<p className="text-sm text-zinc-600 dark:text-zinc-400">Absolutely. Everything runs on your device and your data is stored in your personal iCloud account. We never collect, track, or have access to your information.</p>
```
Replace with:
```tsx
<p className="text-sm text-zinc-600 dark:text-zinc-400">Yes. Your habit data stays on your device and in your personal iCloud account. Personality insights are processed entirely on-device. We never have access to your information.</p>
```

- [ ] **Step 2: Add new FAQ items**

After the last FAQ div (the "cancel subscription" one ending around line 83), add:

```tsx

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Does Ritualist work with Apple Health?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes! Ritualist can read and write health data like mindful minutes, steps, and water intake. Health integration is optional, disabled by default, and your health data never leaves your device.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">What are timed habits?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Timed habits let you track fasting and breathing exercises with built-in protocols. Start a fasting timer, follow guided breathing patterns, log your mood during sessions, and view your history.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Which languages does Ritualist support?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Ritualist is available in English, German, Spanish, French, and Romanian.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Can I share my achievements?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes! Ritualist generates shareable snapshot cards for streak milestones, perfect days, and weekly recaps. Share them directly from the app to celebrate your progress.</p>
            </div>
```

- [ ] **Step 3: Commit**

```bash
git add app/support/page.tsx
git commit -m "content: update support FAQ with health, timed habits, languages, sharing"
```

---

### Task 7: Update Layout SEO

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update meta description**

Find line 20:
```tsx
description: "Transform your life with habits that actually stick. Get AI-powered insights, location reminders, and beautiful analytics. Privacy-first. No social pressure.",
```
Replace with:
```tsx
description: "Transform your life with habits that actually stick. Track fasting, breathing, and daily habits with AI insights, Apple Health integration, and privacy-first design.",
```

- [ ] **Step 2: Update keywords**

Find line 22:
```tsx
keywords: ["habit tracker", "iOS app", "productivity", "personality insights", "privacy-first", "location-based reminders", "iCloud sync", "machine learning"],
```
Replace with:
```tsx
keywords: ["habit tracker", "iOS app", "productivity", "personality insights", "privacy-first", "Apple Health", "fasting tracker", "breathing exercises", "wellness", "mindful minutes", "iCloud sync", "machine learning"],
```

- [ ] **Step 3: Update OpenGraph description**

Find line 42:
```tsx
description: "Build better habits with AI-powered personality insights, location-based reminders, and beautiful analytics. Privacy-first, on-device processing, iCloud sync.",
```
Replace with:
```tsx
description: "Build better habits with AI-powered insights, Apple Health integration, fasting and breathing tracking. Privacy-first, on-device processing, iCloud sync.",
```

- [ ] **Step 4: Update Twitter description**

Find line 56:
```tsx
description: "Build better habits with AI-powered personality insights, location-based reminders, and beautiful analytics.",
```
Replace with:
```tsx
description: "Build better habits with AI-powered insights, Apple Health integration, and fasting and breathing tracking. Privacy-first.",
```

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx
git commit -m "content: update SEO metadata with health, fasting, breathing keywords"
```

---

### Task 8: Verify and Deploy

- [ ] **Step 1: Run the dev server to verify**

```bash
cd /Users/vladblajovan/Developer/GitHub/RitualistApp && npm run dev
```

Open http://localhost:3000 and verify:
- Hero section copy updated
- 3 comparison pillars reflect new features
- How It Works step 2 mentions timed habits
- 6 feature cards: Personality, Inspiring Insights, Smart Triggers, Apple Health, Fasting & Breathing, Privacy
- Compact grid with 7 items visible
- FAQ has 10 items (7 original + 3 new)
- Pricing lists Apple Health and Snapshot cards
- No broken images (placeholder screenshots will show alt text)

- [ ] **Step 2: Build for production**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Push to deploy**

```bash
git push
```

GitHub Pages will auto-deploy.
