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

  useEffect(() => {
    if (getConsent() === 'granted') {
      setLoadGA(true);
    }
  }, []);

  // Inject GA scripts via DOM when consent is granted
  useEffect(() => {
    if (!loadGA || !GA_ID || gaInitialized.current) return;
    gaInitialized.current = true;

    // Initialize dataLayer and gtag function immediately
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { page_path: window.location.pathname });

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
