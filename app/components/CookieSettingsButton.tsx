'use client';

import { clearConsent } from '../lib/analytics';

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => { clearConsent(); window.location.reload(); }}
      className="text-xs text-zinc-400 underline underline-offset-2 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
    >
      Cookie Settings
    </button>
  );
}
