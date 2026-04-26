import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  COOKIE_BANNER_VISIBILITY_EVENT,
  openCookieSettings,
  readCookiePreferences,
} from '@/lib/cookie-consent';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    setIsCookieBannerVisible(readCookiePreferences() === null);

    const handleCookieBannerVisibility = (event: Event) => {
      const customEvent = event as CustomEvent<{ visible?: boolean }>;
      setIsCookieBannerVisible(customEvent.detail?.visible === true);
    };

    window.addEventListener(COOKIE_BANNER_VISIBILITY_EVENT, handleCookieBannerVisibility);

    return () => {
      window.removeEventListener(COOKIE_BANNER_VISIBILITY_EVENT, handleCookieBannerVisibility);
    };
  }, []);

  const policy = language === 'pl'
    ? {
        back: 'Wróć do strony głównej',
        badge: 'Prywatność i cookies',
        title: 'Polityka prywatności oraz plików cookies',
        intro:
          'Ta strona internetowa służy do przedstawienia oferty gabinetu oraz umożliwia pierwszy kontakt i umawianie wizyt za pomocą formularza. Poniżej opisano zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies.',
        updated: 'Ostatnia aktualizacja: 26 kwietnia 2026 r.',
        sections: [
          {
            title: '1. Administrator danych',
            paragraphs: [
              'Administratorem danych osobowych przekazywanych za pośrednictwem strony jest Katarzyna Gostkowska-Kraczkowska, prowadząca praktykę psychologiczną i psychoterapeutyczną.',
              'Kontakt w sprawach związanych z prywatnością jest możliwy pod adresem e-mail: k.gostkowskakraczkowska@gmail.com oraz telefonicznie: +48 508-212-085.',
            ],
          },
          {
            title: '2. Zakres danych',
            paragraphs: [
              'Za pomocą formularza mogą być zbierane dane podane przez użytkownika: imię i nazwisko, adres e-mail, numer telefonu oraz treść wiadomości.',
              'Formularz służy do pierwszego kontaktu i organizacji wizyty. Dla ochrony prywatności zalecane jest, aby nie przekazywać w pierwszej wiadomości szczegółowych informacji o stanie zdrowia, historii leczenia lub innych danych szczególnej kategorii, jeśli nie są konieczne do nawiązania kontaktu.',
            ],
          },
          {
            title: '3. Cel i podstawa przetwarzania',
            paragraphs: [
              'Dane są przetwarzane w celu odpowiedzi na wiadomość, kontaktu w sprawie wizyty oraz podjęcia działań przed ewentualnym rozpoczęciem współpracy terapeutycznej.',
              'Podstawą przetwarzania jest art. 6 ust. 1 lit. b RODO, czyli działania podejmowane na żądanie osoby przed zawarciem umowy, a także art. 6 ust. 1 lit. f RODO w zakresie zapewnienia bezpieczeństwa strony i obsługi korespondencji.',
            ],
          },
          {
            title: '4. Odbiorcy danych',
            paragraphs: [
              'Dane mogą być powierzane wyłącznie podmiotom wspierającym obsługę strony, hostingu, poczty elektronicznej lub infrastruktury IT, jeśli jest to konieczne do działania serwisu i kontaktu z użytkownikiem.',
              'Dane nie są sprzedawane ani udostępniane podmiotom trzecim do celów marketingowych.',
            ],
          },
          {
            title: '5. Okres przechowywania',
            paragraphs: [
              'Dane z formularza są przechowywane przez okres niezbędny do obsługi zapytania, organizacji kontaktu oraz ochrony przed ewentualnymi roszczeniami.',
              'Jeżeli kontakt doprowadzi do rozpoczęcia współpracy, dalsze informacje o przetwarzaniu danych są przekazywane odrębnie w ramach procesu rejestracji lub relacji terapeutycznej.',
            ],
          },
          {
            title: '6. Prawa użytkownika',
            paragraphs: [
              'Osobie, której dane dotyczą, przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
            ],
          },
          {
            title: '7. Pliki cookies',
            paragraphs: [
              'Strona wykorzystuje pliki cookies niezbędne do prawidłowego działania serwisu, w tym do zapamiętania decyzji dotyczącej prywatności oraz utrzymania podstawowych funkcji technicznych.',
              'Po uzyskaniu zgody mogą być również wykorzystywane analityczne pliki cookies Google Analytics, które pomagają zrozumieć sposób korzystania ze strony i rozwijać serwis. Google Analytics uruchamia się dopiero po wyrażeniu zgody na analitykę.',
              'Zgodę na analityczne pliki cookies można w każdej chwili zmienić, korzystając z ustawień cookies dostępnych na stronie.',
            ],
          },
          {
            title: '8. Zarządzanie zgodą',
            paragraphs: [
              'Ustawienia cookies możesz zmienić w każdej chwili, korzystając z przycisku poniżej albo z ustawień swojej przeglądarki internetowej.',
            ],
          },
        ],
        cookieButton: 'Zmień ustawienia cookies',
        note:
          'Dokument opisuje aktualne zasady korzystania ze strony, formularza kontaktowego oraz analitycznych plików cookies Google Analytics.',
      }
    : {
        back: 'Back to home page',
        badge: 'Privacy and cookies',
        title: 'Privacy and cookie policy',
        intro:
          'This website presents the practice offer and allows first contact and appointment requests through the contact form. The information below explains how personal data is processed and how cookies are used.',
        updated: 'Last updated: April 26, 2026',
        sections: [
          {
            title: '1. Data controller',
            paragraphs: [
              'The controller of personal data submitted through this website is Katarzyna Gostkowska-Kraczkowska, running a psychological and psychotherapy practice.',
              'For privacy-related matters, contact is available via e-mail at k.gostkowskakraczkowska@gmail.com and by phone at +48 508-212-085.',
            ],
          },
          {
            title: '2. Scope of data',
            paragraphs: [
              'The form may collect the data provided by the user: full name, e-mail address, phone number, and message content.',
              'The form is intended for first contact and appointment arrangements. To protect privacy, users are advised not to include detailed health information, treatment history, or other special-category data in the first message unless necessary to establish contact.',
            ],
          },
          {
            title: '3. Purpose and legal basis',
            paragraphs: [
              'Data is processed to reply to the message, contact the user regarding an appointment, and take steps before a possible therapeutic relationship begins.',
              'The legal basis is Article 6(1)(b) GDPR for steps taken at the request of the data subject before entering into a contract, as well as Article 6(1)(f) GDPR regarding website security and correspondence handling.',
            ],
          },
          {
            title: '4. Data recipients',
            paragraphs: [
              'Data may be entrusted only to entities supporting website hosting, e-mail, or IT infrastructure when necessary for the website to operate and for user contact.',
              'Data is not sold and is not shared with third parties for marketing purposes.',
            ],
          },
          {
            title: '5. Retention period',
            paragraphs: [
              'Form data is stored for the time necessary to handle the inquiry, arrange contact, and protect against potential claims.',
              'If the contact leads to cooperation, further information about data processing is provided separately during registration or the therapeutic relationship.',
            ],
          },
          {
            title: '6. User rights',
            paragraphs: [
              'The data subject has the right to access, rectify, erase, restrict processing, object, and lodge a complaint with the Polish Personal Data Protection Office.',
            ],
          },
          {
            title: '7. Cookies',
            paragraphs: [
              'The website uses cookies necessary for the proper operation of the service, including remembering privacy decisions and maintaining core technical functionality.',
              'With user consent, Google Analytics cookies may also be used to understand how the website is used and to improve the service. Google Analytics is activated only after consent to analytics is granted.',
              'Consent for analytics cookies can be changed at any time using the cookie settings available on the website.',
            ],
          },
          {
            title: '8. Managing consent',
            paragraphs: [
              'You can change your cookie settings at any time using the button below or through your browser settings.',
            ],
          },
        ],
        cookieButton: 'Change cookie settings',
        note:
          'This document describes the current rules for using the website, the contact form, and Google Analytics cookies.',
      };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--secondary)/0.15),transparent_40%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.08),transparent_45%)]" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" />
                {policy.back}
              </Link>

              <div className="mt-8 rounded-[2rem] border border-border bg-background/90 p-8 shadow-[0_24px_80px_-32px_rgba(13,31,54,0.35)] backdrop-blur sm:p-12">
                <div className="flex items-center gap-3 text-secondary">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.3em]">
                    {policy.badge}
                  </span>
                </div>

                <h1 className="mt-6 font-display text-4xl leading-tight text-primary md:text-6xl">
                  {policy.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {policy.intro}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{policy.updated}</p>

                <div className="mt-12 space-y-8">
                  {policy.sections.map((section) => (
                    <section key={section.title} className="rounded-3xl border border-border bg-card p-6 card-shadow sm:p-8">
                      <h2 className="font-display text-3xl text-foreground">{section.title}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl border border-primary/10 bg-primary/5 p-6">
                  <Button
                    type="button"
                    onClick={openCookieSettings}
                    disabled={isCookieBannerVisible}
                    className="rounded-full text-white"
                  >
                    {policy.cookieButton}
                  </Button>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{policy.note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
