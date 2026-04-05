'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getConsent } from '../lib/analytics';
import ConsentBanner from './ConsentBanner';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function AnalyticsProvider() {
  const [loadGA, setLoadGA] = useState(false);
  const pathname = usePathname();
  const gaInitialized = useRef(false);
  const consentDefaultSet = useRef(false);

  // Set Consent Mode v2 defaults before anything else
  useEffect(() => {
    if (!GA_ID || consentDefaultSet.current) return;
    consentDefaultSet.current = true;

    const defaultScript = document.createElement('script');
    defaultScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500
      });
    `;
    document.head.appendChild(defaultScript);
  }, []);

  useEffect(() => {
    if (getConsent() === 'granted') {
      setLoadGA(true);
    }
  }, []);

  // Inject GA scripts via DOM when consent is granted
  useEffect(() => {
    if (!loadGA || !GA_ID || gaInitialized.current) return;
    gaInitialized.current = true;

    // Update consent state to granted
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }

    // Inject Google's exact gtag snippet via inline script
    const inline = document.createElement('script');
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'update', { analytics_storage: 'granted' });
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(inline);

    // Load the gtag.js script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);
  }, [loadGA]);

  // Track client-side page navigations
  useEffect(() => {
    if (loadGA && window.gtag && GA_ID) {
      window.gtag('config', GA_ID, { page_path: pathname });
    }
  }, [pathname, loadGA]);

  const handleConsent = useCallback((granted: boolean) => {
    if (granted) {
      setLoadGA(true);
    }
  }, []);

  return <ConsentBanner onConsent={handleConsent} />;
}
