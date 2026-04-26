import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { applyConsentPreferences } from '@/lib/analytics';
import {
  COOKIE_BANNER_VISIBILITY_EVENT,
  COOKIE_CONSENT_VERSION,
  OPEN_COOKIE_SETTINGS_EVENT,
  allCookiePreferences,
  defaultCookiePreferences,
  notifyCookieBannerVisibility,
  readCookiePreferences,
  saveCookiePreferences,
} from '@/lib/cookie-consent';

const CookieConsentBanner = () => {
  const { t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // States for the preferences dialog
  const [functionalityEnabled, setFunctionalityEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const storedPreferences = readCookiePreferences();
    if (storedPreferences) {
      applyConsentPreferences(storedPreferences);
      setFunctionalityEnabled(storedPreferences.functionality);
      setAnalyticsEnabled(storedPreferences.analytics);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    notifyCookieBannerVisibility(isVisible || isDialogOpen);
  }, [isMounted, isVisible, isDialogOpen]);

  useEffect(() => {
    if (!isMounted) return;

    const handleOpenSettings = () => {
      const prefs = readCookiePreferences() || defaultCookiePreferences();
      setFunctionalityEnabled(prefs.functionality);
      setAnalyticsEnabled(prefs.analytics);
      setIsDialogOpen(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
    };
  }, [isMounted]);

  const handleAcceptAll = () => {
    const preferences = allCookiePreferences();
    saveCookiePreferences(preferences);
    applyConsentPreferences(preferences);
    setIsVisible(false);
    setIsDialogOpen(false);
  };

  const handleRejectOptional = () => {
    const preferences = defaultCookiePreferences();
    saveCookiePreferences(preferences);
    applyConsentPreferences(preferences);
    setFunctionalityEnabled(false);
    setAnalyticsEnabled(false);
    setIsVisible(false);
    setIsDialogOpen(false);
  };

  const handleSaveSelected = () => {
    const preferences = {
      necessary: true as const,
      functionality: functionalityEnabled,
      analytics: analyticsEnabled,
      consentedAt: new Date().toISOString(),
      version: COOKIE_CONSENT_VERSION,
    };
    saveCookiePreferences(preferences);
    applyConsentPreferences(preferences);
    setIsVisible(false);
    setIsDialogOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl rounded-3xl border-border bg-background p-0 shadow-2xl">
          <div className="rounded-3xl bg-gradient-to-br from-background via-background to-secondary/10 p-6 sm:p-8">
            <DialogHeader className="text-left">
              <DialogTitle className="font-display text-3xl text-primary">
                {t('cookies.dialog.title')}
              </DialogTitle>
              <DialogDescription className="text-base leading-7 text-muted-foreground">
                {t('cookies.dialog.description')}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5 card-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t('cookies.category.necessary.title')}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t('cookies.category.necessary.description')}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                    {t('cookies.alwaysActive')}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 card-shadow">
                <div className="flex items-start gap-4">
                  <Checkbox
                    id="cookie-functionality"
                    checked={functionalityEnabled}
                    onCheckedChange={(checked) => setFunctionalityEnabled(checked === true)}
                    className="mt-1 h-5 w-5 rounded border-primary"
                  />
                  <div>
                    <label
                      htmlFor="cookie-functionality"
                      className="text-lg font-semibold text-foreground"
                    >
                      {t('cookies.category.functionality.title')}
                    </label>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t('cookies.category.functionality.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 card-shadow">
                <div className="flex items-start gap-4">
                  <Checkbox
                    id="cookie-analytics"
                    checked={analyticsEnabled}
                    onCheckedChange={(checked) => setAnalyticsEnabled(checked === true)}
                    className="mt-1 h-5 w-5 rounded border-primary"
                  />
                  <div>
                    <label htmlFor="cookie-analytics" className="text-lg font-semibold text-foreground">
                      {t('cookies.category.analytics.title')}
                    </label>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t('cookies.category.analytics.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              {t('cookies.dialog.more')}{' '}
              <Link
                to="/polityka-prywatnosci"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {t('footer.privacy')}
              </Link>
              .
            </p>

            <DialogFooter className="mt-8 flex-col gap-3 sm:flex-row sm:justify-between sm:space-x-0">
              <Button
                type="button"
                variant="outline"
                onClick={handleRejectOptional}
                className="rounded-full border-primary/20"
              >
                {t('cookies.reject')}
              </Button>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleSaveSelected}
                  className="rounded-full"
                >
                  {t('cookies.save')}
                </Button>
                <Button type="button" onClick={handleAcceptAll} className="rounded-full text-white">
                  {t('cookies.acceptAll')}
                </Button>
              </div>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/10 bg-background/95 shadow-[0_24px_80px_-24px_rgba(13,31,54,0.45)] backdrop-blur-xl">
            <div className="bg-gradient-to-r from-primary via-primary to-secondary/90 p-[1px]">
              <div className="rounded-[calc(2rem-1px)] bg-background/95 px-6 py-5 sm:px-8 sm:py-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                      {t('cookies.badge')}
                    </p>
                    <h2 className="mt-2 font-display text-3xl leading-tight text-primary">
                      {t('cookies.title')}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {t('cookies.description')}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      <Link
                        to="/polityka-prywatnosci"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {t('footer.privacy')}
                      </Link>{' '}
                      {t('cookies.readMore')}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleRejectOptional}
                      className="rounded-full border-primary/20"
                    >
                      {t('cookies.reject')}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setIsDialogOpen(true)}
                      className="rounded-full"
                    >
                      {t('cookies.settings')}
                    </Button>
                    <Button type="button" onClick={handleAcceptAll} className="rounded-full text-white">
                      {t('cookies.acceptAll')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
