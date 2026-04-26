export const COOKIE_CONSENT_STORAGE_KEY = 'kgk-cookie-consent';
export const COOKIE_CONSENT_VERSION = '2026-04-26';
export const OPEN_COOKIE_SETTINGS_EVENT = 'kgk:open-cookie-settings';

export type CookieConsentPreferences = {
  necessary: true;
  functionality: boolean;
  analytics: boolean;
  consentedAt: string;
  version: string;
};

export const defaultCookiePreferences = (): CookieConsentPreferences => ({
  necessary: true,
  functionality: false,
  analytics: false,
  consentedAt: new Date().toISOString(),
  version: COOKIE_CONSENT_VERSION,
});

export const allCookiePreferences = (): CookieConsentPreferences => ({
  necessary: true,
  functionality: true,
  analytics: true,
  consentedAt: new Date().toISOString(),
  version: COOKIE_CONSENT_VERSION,
});

export const readCookiePreferences = (): CookieConsentPreferences | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<CookieConsentPreferences>;

    if (
      parsed.necessary !== true ||
      typeof parsed.functionality !== 'boolean' ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.consentedAt !== 'string' ||
      parsed.version !== COOKIE_CONSENT_VERSION
    ) {
      return null;
    }

    return parsed as CookieConsentPreferences;
  } catch {
    return null;
  }
};

export const saveCookiePreferences = (preferences: CookieConsentPreferences) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(preferences));
};

export const openCookieSettings = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
};
