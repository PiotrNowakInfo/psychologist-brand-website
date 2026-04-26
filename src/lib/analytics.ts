import { CookieConsentPreferences } from '@/lib/cookie-consent';

const GA_MEASUREMENT_ID = 'G-09EJSX653Y';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const getGtag = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  return window.gtag;
};

const setAnalyticsDisabled = (disabled: boolean) => {
  if (typeof window === 'undefined') {
    return;
  }

  const analyticsWindow = window as Window & Record<string, boolean>;
  analyticsWindow[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
};

const clearGoogleAnalyticsCookies = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const hostParts = window.location.hostname.split('.');
  const domains = [window.location.hostname];

  if (hostParts.length > 2) {
    domains.push(`.${hostParts.slice(-2).join('.')}`);
  }

  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => name.startsWith('_ga'));

  cookieNames.forEach((name) => {
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    });

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
};

export const enableAnalytics = () => {
  if (typeof window === 'undefined') {
    return;
  }

  setAnalyticsDisabled(false);
  const gtag = getGtag();
  gtag('consent', 'update', {
    analytics_storage: 'granted',
  });
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
  });
};

export const disableAnalytics = () => {
  if (typeof window === 'undefined') {
    return;
  }

  setAnalyticsDisabled(true);
  clearGoogleAnalyticsCookies();
  getGtag()('consent', 'update', {
    analytics_storage: 'denied',
  });
};

export const applyConsentPreferences = (preferences: CookieConsentPreferences | null) => {
  if (preferences?.analytics) {
    enableAnalytics();
    return;
  }

  disableAnalytics();
};
