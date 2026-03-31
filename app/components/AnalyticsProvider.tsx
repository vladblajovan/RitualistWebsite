'use client';

import { useEffect, useState, useCallback } from 'react';
import Script from 'next/script';
import { getConsent } from '../lib/analytics';
import ConsentBanner from './ConsentBanner';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function AnalyticsProvider() {
  const [loadGA, setLoadGA] = useState(false);

  useEffect(() => {
    if (getConsent() === 'granted') {
      setLoadGA(true);
    }
  }, []);

  const handleConsent = useCallback((granted: boolean) => {
    if (granted) {
      setLoadGA(true);
    }
  }, []);

  return (
    <>
      {GA_ID && loadGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
      <ConsentBanner onConsent={handleConsent} />
    </>
  );
}
