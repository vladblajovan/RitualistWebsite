type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
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
