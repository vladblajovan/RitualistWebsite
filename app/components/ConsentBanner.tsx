'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { getConsent, setConsent } from '../lib/analytics';

export default function ConsentBanner({ onConsent }: { onConsent: (granted: boolean) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setConsent('granted');
    setVisible(false);
    onConsent(true);
  }

  function handleDecline() {
    setConsent('denied');
    setVisible(false);
    onConsent(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-xl rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              We use cookies to understand how visitors interact with our site.
              No personal data is collected or shared.{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-black dark:hover:text-white">
                Privacy Policy
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
