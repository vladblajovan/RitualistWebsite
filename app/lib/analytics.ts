type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function getConsent(): 'granted' | 'denied' | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('analytics-consent') as 'granted' | 'denied' | null;
}

export function setConsent(value: 'granted' | 'denied') {
  if (typeof window === 'undefined') return;
  localStorage.setItem('analytics-consent', value);
}

export function clearConsent() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('analytics-consent');
}

export function removeGACookies() {
  if (typeof document === 'undefined') return;
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const name = cookie.split('=')[0].trim();
    if (name === '_ga' || name.startsWith('_ga_')) {
      // Clear cookie on all possible paths and domains
      const domain = window.location.hostname;
      for (const path of ['/', '/RitualistApp', '/RitualistApp/']) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=.${domain}`;
      }
    }
  }
}
