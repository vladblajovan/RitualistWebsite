'use client';

import { FaGithub, FaApple, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdRocketLaunch } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const taglines = [
  "Master your habits. Master yourself. 💪",
  "Your habits shape who you become 🌱",
  "Build habits that build you 🔨",
  "Track habits. Unlock potential. 🚀",
  "Every habit tells a story. What's yours? 📖",
  "Smart habits for a smarter you 🧠",
  "Your habits. Your insights. Your transformation. ✨",
  "Build rituals, not just habits 🕯️",
  "Where habits meet intelligence 💡"
];

export default function Home() {
  const [tagline, setTagline] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get the last used index from localStorage
    const lastIndex = parseInt(localStorage.getItem('lastTaglineIndex') || '-1');

    // Generate a new random index that's different from the last one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * taglines.length);
    } while (newIndex === lastIndex && taglines.length > 1);

    // Save the new index for next time
    localStorage.setItem('lastTaglineIndex', newIndex.toString());

    setTagline(taglines[newIndex]);
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold text-black dark:text-white">
            Ritualist
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white md:block"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white md:block"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Pricing
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-white px-6 py-20 pt-32 dark:from-black dark:to-zinc-950">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-7xl font-bold tracking-tight text-black dark:text-white md:text-8xl lg:text-9xl">
            Ritualist
          </h1>
          <p className="mb-4 text-2xl font-medium text-zinc-600 dark:text-zinc-400 md:text-3xl lg:text-4xl">
            The only habit tracker that <span className="text-black dark:text-white">knows you</span>
          </p>
          <p className="mb-12 text-lg italic text-zinc-500 dark:text-zinc-500 md:text-xl">
            {mounted ? tagline : '\u00A0'}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <FaApple className="h-6 w-6" />
              App Store
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-full border-2 border-black px-8 py-4 text-lg font-medium text-black transition-all hover:scale-105 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <MdRocketLaunch className="h-5 w-5" />
              TestFlight
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-6 py-32 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-24 text-center text-5xl font-bold text-black dark:text-white md:text-6xl">
            Designed for real life
          </h2>

          {/* Feature 1: Personality Insights */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-2 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <div className="w-full max-w-[120px] md:max-w-[280px]">
                  <img
                    src="/screenshots/personality.png"
                    alt="AI personality insights based on your habits"
                    className="h-auto w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <div className="mb-2 hidden text-3xl md:mb-4 md:block md:text-5xl">🧠</div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:text-4xl">
                  Know Yourself Better
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Your habits reveal who you are. Ritualist uses machine learning to analyze your behavior patterns and generate insights about your Big Five personality traits. Discover patterns you never knew existed.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• ML-powered personality analysis</li>
                  <li>• Big Five trait breakdown</li>
                  <li>• Behavioral pattern recognition</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature 2: Analytics */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-2 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 md:text-right"
              >
                <div className="mb-2 hidden text-3xl md:mb-4 md:block md:text-5xl">📊</div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:text-4xl">
                  Beautiful Analytics
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  See your progress come to life. Track your streaks, completion rates, and trends with stunning visualizations. The analytics dashboard makes it easy to understand your habits at a glance.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Current and best streak tracking</li>
                  <li>• Completion rate analytics</li>
                  <li>• Weekly and monthly trends</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="w-full max-w-[120px] md:max-w-[280px] md:ml-auto">
                  <img
                    src="/screenshots/analytics.png"
                    alt="Beautiful analytics dashboard with insights and trends"
                    className="h-auto w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature 3: Customization */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-2 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <div className="w-full max-w-[120px] md:max-w-[280px]">
                  <img
                    src="/screenshots/customization.png"
                    alt="Customize habits with colors, emojis, and categories"
                    className="h-auto w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <div className="mb-2 hidden text-3xl md:mb-4 md:block md:text-5xl">🎨</div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:text-4xl">
                  Make It Yours
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Personalize every detail. Choose from custom colors, emojis, and categories to make your habit tracker uniquely yours. Beautiful design meets powerful functionality.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Custom colors for each habit</li>
                  <li>• Emoji support</li>
                  <li>• Flexible categories</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature 4: Location-based */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-2 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 md:text-right"
              >
                <div className="mb-2 hidden text-3xl md:mb-4 md:block md:text-5xl">📍</div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:text-4xl">
                  Smart Location Triggers
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Never miss a habit again. Ritualist uses intelligent geofencing to remind you about your habits when you arrive at specific locations. Hit the gym? Get reminded to log your workout. Arrive home? Time for your evening meditation.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Set custom locations for each habit</li>
                  <li>• Smart notifications at the right moment</li>
                  <li>• No annoying time-based reminders</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="w-full max-w-[120px] md:max-w-[280px] md:ml-auto">
                  <img
                    src="/screenshots/location.png"
                    alt="Location-based habit reminders with geofencing"
                    className="h-auto w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature 5: iCloud Sync */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-2 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <div className="w-full max-w-[120px] md:max-w-[280px]">
                  <img
                    src="/screenshots/sync.png"
                    alt="Seamless iCloud sync across all your devices"
                    className="h-auto w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <div className="mb-2 hidden text-3xl md:mb-4 md:block md:text-5xl">☁️</div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:text-4xl">
                  Seamless Everywhere
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Your habits follow you. iCloud sync keeps your data up-to-date across all your Apple devices. Start on iPhone, continue on iPad, check on Mac.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Automatic iCloud synchronization</li>
                  <li>• Real-time updates across devices</li>
                  <li>• Your data stays private</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature 6: Privacy First */}
          <div className="mb-20">
            <div className="grid grid-cols-2 gap-2 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 md:text-right"
              >
                <div className="mb-2 hidden text-3xl md:mb-4 md:block md:text-5xl">🔒</div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:text-4xl">
                  Your Privacy, Protected
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Everything runs on your device. Your habit data, personality insights, and personal information never leave your control. No tracking, no data collection, no compromises.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• 100% on-device processing</li>
                  <li>• Zero data collection</li>
                  <li>• You own your data completely</li>
                  <li>• No third-party tracking</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="w-full max-w-[120px] md:max-w-[280px] md:ml-auto">
                  <img
                    src="/screenshots/privacy.png"
                    alt="Your privacy protected with on-device processing"
                    className="h-auto w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Testimonials Section */}
      <section id="testimonials" className="bg-zinc-50 px-6 py-32 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Trusted & loved by users worldwide
          </motion.h2>

          {/* Stats */}
          <div className="mb-20 grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-black dark:text-white">5K+</div>
              <div className="text-lg text-zinc-600 dark:text-zinc-400">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-black dark:text-white">4.8★</div>
              <div className="text-lg text-zinc-600 dark:text-zinc-400">Average Rating</div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {'★'.repeat(5)}
              </div>
              <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                "Finally, a habit tracker that actually understands me. The personality insights are mind-blowing!"
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Sarah M.</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {'★'.repeat(5)}
              </div>
              <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                "The location-based reminders changed everything. I never forget my gym routine anymore."
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Mike T.</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Fitness Enthusiast</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {'★'.repeat(5)}
              </div>
              <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                "Beautiful design and privacy-focused. Exactly what I needed for tracking my daily rituals."
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Emma L.</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Entrepreneur</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-y border-zinc-200 bg-white px-6 py-32 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Frequently asked questions
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Is Ritualist free to use?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ritualist offers a free version with core features. Premium features like advanced analytics and unlimited habits are available through a subscription.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Which devices are supported?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ritualist is available for iPhone, iPad, and Mac. Your data syncs seamlessly across all devices via iCloud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                How does the personality analysis work?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Our on-device ML model analyzes your habit patterns to generate insights about your Big Five personality traits. All processing happens locally on your device for complete privacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Is my data private?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Absolutely. Everything runs on your device and your data is stored in your personal iCloud account. We never collect, track, or have access to your information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Can I export my data?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Yes! You can export all your habit data, analytics, and insights at any time in standard formats like CSV and JSON.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-zinc-50 px-6 py-32 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-16 text-center text-xl text-zinc-600 dark:text-zinc-400"
          >
            Start free, upgrade to unlock premium features
          </motion.p>

          {/* Free vs Premium Comparison */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border-2 border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">Free</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-black dark:text-white">$0</span>
              </div>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Perfect for getting started with habit tracking
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Up to 5 habits</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Streak tracking</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>iCloud sync</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-600">
                  <span>✗</span>
                  <span>Location-based reminders</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-600">
                  <span>✗</span>
                  <span>AI personality insights</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-600">
                  <span>✗</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <a
                href="#"
                className="block w-full rounded-full border-2 border-black px-8 py-4 text-center text-lg font-medium text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Download Free
              </a>
            </motion.div>

            {/* Premium Features Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl border-2 border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">Premium</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-black dark:text-white">Flexible pricing options</span>
              </div>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                All premium plans include the same features
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>Unlimited habits</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>Location-based reminders</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>AI personality insights</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>Advanced analytics</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Custom categories & colors</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Export data (CSV, JSON)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Premium Pricing Options */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl font-bold text-black dark:text-white"
          >
            Choose your plan
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Weekly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h4 className="mb-3 text-lg font-bold text-black dark:text-white">Weekly</h4>
              <div className="mb-4">
                <span className="text-4xl font-bold text-black dark:text-white">$2.99</span>
                <span className="text-zinc-600 dark:text-zinc-400">/week</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Try premium features short-term
              </p>
            </motion.div>

            {/* Monthly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border-2 border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h4 className="mb-3 text-lg font-bold text-black dark:text-white">Monthly</h4>
              <div className="mb-4">
                <span className="text-4xl font-bold text-black dark:text-white">$9.99</span>
                <span className="text-zinc-600 dark:text-zinc-400">/month</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Most flexible option
              </p>
            </motion.div>

            {/* Annual - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl border-2 border-black bg-black p-6 dark:border-white dark:bg-white"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
              <h4 className="mb-3 text-lg font-bold text-white dark:text-black">Annual</h4>
              <div className="mb-1">
                <span className="text-4xl font-bold text-white dark:text-black">$49.99</span>
                <span className="text-zinc-400 dark:text-zinc-600">/year</span>
              </div>
              <p className="mb-3 text-xs text-zinc-400 dark:text-zinc-600">Save 68% vs weekly</p>
              <p className="text-sm text-zinc-300 dark:text-zinc-700">
                Best value with free trial
              </p>
            </motion.div>

            {/* Lifetime - Best Value */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-400 dark:from-purple-950/50 dark:to-pink-950/50"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-medium text-white">
                Best Value
              </div>
              <h4 className="mb-3 text-lg font-bold text-black dark:text-white">Lifetime</h4>
              <div className="mb-1">
                <span className="text-4xl font-bold text-black dark:text-white">$100</span>
              </div>
              <p className="mb-3 text-xs text-zinc-600 dark:text-zinc-400">One-time payment</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Pay once, own forever
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-50 px-6 py-32 dark:bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold text-black dark:text-white md:text-6xl">
            Ready to build better habits?
          </h2>
          <p className="mb-12 text-xl text-zinc-600 dark:text-zinc-400">
            Download Ritualist for iOS or explore the source code on GitHub.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-12 py-5 text-xl font-medium text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <FaApple className="h-7 w-7" />
              Download on App Store
            </a>
            <a
              href="https://github.com/vladblajovan/Ritualist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-zinc-300 px-12 py-5 text-xl font-medium text-zinc-700 transition-all hover:scale-105 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <FaGithub className="h-6 w-6" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Ritualist</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                A modern iOS habit tracker built with SwiftUI and Clean Architecture.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vladblajovan/Ritualist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaTiktok className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#stats" className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/vladblajovan/Ritualist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vladblajovan/Ritualist/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    Report Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vladblajovan/Ritualist/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            © 2025 Ritualist. Built with ❤️ by Vlad Blajovan
          </div>
        </div>
      </footer>
    </div>
  );
}
