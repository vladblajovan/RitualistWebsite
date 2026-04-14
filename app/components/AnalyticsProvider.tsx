'use client';

import { useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getConsent } from '../lib/analytics';
import ConsentBanner from './ConsentBanner';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const initialized = useRef(false);

  // Initialize gtag.js immediately with Consent Mode v2 defaults.
  // gtag.js must load BEFORE consent so Google receives anonymized
  // "cookieless pings" — this is what makes GA4 consider the tag active.
  // Cookies are only enabled after the user grants consent via the banner.
  useEffect(() => {
    if (!GA_ID || initialized.current) return;
    initialized.current = true;

    // 1. Set Consent Mode v2 defaults BEFORE gtag.js loads. The initial
    //    `config` call suppresses the automatic pageview — the pathname
    //    effect below owns pageview tracking so we don't double-count.
    const bootstrap = document.createElement('script');
    bootstrap.textContent = `
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(){ window.dataLayer.push(arguments); };
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500
      });
      gtag('set', 'ads_data_redaction', true);
      gtag('set', 'url_passthrough', true);
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { send_page_view: false });
    `;
    document.head.appendChild(bootstrap);

    // 2. Load gtag.js immediately. Done before the consent lookup so a
    //    localStorage exception (e.g. Safari private mode) can't prevent
    //    gtag.js from loading.
    const gtagScript = document.createElement('script');
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    // 3. Upgrade consent if the user previously accepted the banner.
    try {
      if (getConsent() === 'granted') {
        window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      }
    } catch {
      // localStorage unavailable — treat as no prior consent.
    }
  }, []);

  // Track client-side page navigations.
  useEffect(() => {
    if (window.gtag && GA_ID) {
      window.gtag('config', GA_ID, { page_path: pathname });
    }
  }, [pathname]);

  const handleConsent = useCallback((granted: boolean) => {
    window.gtag?.('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    });
  }, []);

  return <ConsentBanner onConsent={handleConsent} />;
}
