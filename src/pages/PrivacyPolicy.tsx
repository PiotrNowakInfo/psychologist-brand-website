import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { openCookieSettings } from '@/lib/cookie-consent';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const policy = language === 'pl'
    ? {
        back: 'Wróć do strony głównej',
        badge: 'Prywatność i cookies',
        title: 'Polityka prywatności oraz plików cookies',
        intro:
          'Ta strona została przygotowana dla gabinetu psychologiczno-psychoterapeutycznego Katarzyny Gostkowskiej-Kraczkowskiej. Dokument opisuje, jak wykorzystywane są dane przekazywane przez formularz kontaktowy służący do umawiania wizyt oraz jak działa mechanizm cookies.',
        updated: 'Ostatnia aktualizacja: 26 kwietnia 2026 r.',
        sections: [
          {
            title: '1. Administrator danych',
            paragraphs: [
              'Administratorem danych osobowych przekazywanych za pośrednictwem strony jest Katarzyna Gostkowska-Kraczkowska, prowadząca praktykę psychologiczną i psychoterapeutyczną w Malborku.',
              'Kontakt w sprawach dotyczących prywatności jest możliwy pod adresem e-mail: k.gostkowskakraczkowska@gmail.com lub telefonicznie: +48 508-212-085.',
            ],
          },
          {
            title: '2. Jakie dane mogą być przetwarzane',
            paragraphs: [
              'W formularzu kontaktowym mogą być przetwarzane dane podane przez użytkownika: imię i nazwisko, adres e-mail, numer telefonu oraz treść wiadomości.',
              'Formularz służy do pierwszego kontaktu i organizacji wizyty. Proszę nie wpisywać w nim szczegółowych informacji o stanie zdrowia, historii leczenia ani innych szczególnych kategorii danych, jeśli nie jest to niezbędne do organizacji kontaktu.',
            ],
          },
          {
            title: '3. Cele i podstawy przetwarzania',
            paragraphs: [
              'Dane z formularza są przetwarzane w celu odpowiedzi na wiadomość, kontaktu w sprawie wizyty oraz podjęcia działań przed zawarciem umowy dotyczącej udzielenia pomocy psychologicznej lub psychoterapeutycznej.',
              'Podstawą przetwarzania jest art. 6 ust. 1 lit. b RODO, czyli podjęcie działań na żądanie osoby przed zawarciem umowy, a w zakresie technicznego bezpieczeństwa strony oraz obsługi korespondencji także prawnie uzasadniony interes administratora, o którym mowa w art. 6 ust. 1 lit. f RODO.',
            ],
          },
          {
            title: '4. Odbiorcy danych i poufność',
            paragraphs: [
              'Dane nie są sprzedawane ani wykorzystywane do marketingu zewnętrznego. Mogą być powierzane wyłącznie podmiotom wspierającym utrzymanie poczty elektronicznej, hostingu lub infrastruktury strony, jeżeli jest to niezbędne do jej działania.',
              'Każdy taki podmiot powinien przetwarzać dane na podstawie odpowiednich zabezpieczeń i wyłącznie w zakresie koniecznym do świadczenia usługi.',
            ],
          },
          {
            title: '5. Okres przechowywania',
            paragraphs: [
              'Dane z wiadomości są przechowywane przez czas potrzebny do obsługi zapytania, kontaktu w sprawie wizyty oraz obrony przed ewentualnymi roszczeniami.',
              'Jeżeli po kontakcie dojdzie do rozpoczęcia współpracy, dalsze zasady przetwarzania danych są przekazywane odrębnie w relacji terapeutycznej lub przy rejestracji wizyty.',
            ],
          },
          {
            title: '6. Prawa osoby, której dane dotyczą',
            paragraphs: [
              'Masz prawo żądania dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie oraz przenoszenia danych w przypadkach przewidzianych przepisami.',
              'Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeżeli uznasz, że dane są przetwarzane niezgodnie z prawem.',
            ],
          },
          {
            title: '7. Pliki cookies',
            paragraphs: [
              'Strona wykorzystuje niezbędne pliki cookies potrzebne do prawidłowego działania serwisu oraz zapamiętania decyzji dotyczącej prywatności. Zgodnie z publicznie dostępnymi wyjaśnieniami serwisów administracji publicznej, takie pliki nie wymagają odrębnej zgody, gdy są konieczne do świadczenia usługi i działania strony.',
              'Opcjonalne cookies funkcjonalne lub analityczne są aktywowane wyłącznie po wyrażeniu zgody. Obecnie strona nie korzysta z narzędzi marketingowych.',
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
          'Treść polityki została przygotowana jako praktyczne wdrożenie informacyjne dla tej strony internetowej. Przed publikacją warto uzupełnić ją o dane rejestrowe działalności i zweryfikować z prawnikiem lub inspektorem ochrony danych, jeśli w praktyce przetwarzane są szersze dane medyczne.',
      }
    : {
        back: 'Back to home page',
        badge: 'Privacy and cookies',
        title: 'Privacy and cookie policy',
        intro:
          'This website was prepared for the psychological and psychotherapy practice of Katarzyna Gostkowska-Kraczkowska. The document explains how data submitted through the appointment contact form is used and how the cookie mechanism works.',
        updated: 'Last updated: April 26, 2026',
        sections: [
          {
            title: '1. Data controller',
            paragraphs: [
              'The controller of personal data submitted through this website is Katarzyna Gostkowska-Kraczkowska, running a psychological and psychotherapy practice in Malbork, Poland.',
              'For privacy-related matters, contact is available via e-mail at k.gostkowskakraczkowska@gmail.com or by phone at +48 508-212-085.',
            ],
          },
          {
            title: '2. What data may be processed',
            paragraphs: [
              'The contact form may process the data provided by the user: full name, e-mail address, phone number, and the content of the message.',
              'The form is intended for initial contact and appointment scheduling. Please do not include detailed health information, treatment history, or other special-category data unless it is necessary to arrange contact.',
            ],
          },
          {
            title: '3. Purposes and legal bases',
            paragraphs: [
              'Form data is processed to answer the message, contact you regarding an appointment, and take steps before entering into an agreement for psychological or psychotherapy support.',
              'The legal basis is Article 6(1)(b) GDPR, meaning steps taken at the request of the data subject before entering into a contract, and also Article 6(1)(f) GDPR for website security and correspondence handling where a legitimate interest applies.',
            ],
          },
          {
            title: '4. Recipients and confidentiality',
            paragraphs: [
              'Data is not sold and is not used for third-party marketing. It may only be entrusted to providers supporting e-mail, hosting, or website infrastructure where necessary for the site to operate.',
              'Any such provider should process the data under appropriate safeguards and only to the extent required to deliver its service.',
            ],
          },
          {
            title: '5. Retention period',
            paragraphs: [
              'Message data is kept for the time needed to handle the inquiry, arrange contact regarding an appointment, and defend against potential claims.',
              'If cooperation begins after the initial contact, further rules on personal data processing are provided separately within the therapeutic relationship or during appointment registration.',
            ],
          },
          {
            title: '6. Your rights',
            paragraphs: [
              'You have the right to request access to your data, rectification, erasure, restriction of processing, objection to processing based on legitimate interest, and data portability where provided by law.',
              'You also have the right to lodge a complaint with the President of the Personal Data Protection Office in Poland if you believe your data is processed unlawfully.',
            ],
          },
          {
            title: '7. Cookies',
            paragraphs: [
              'The website uses necessary cookies required for proper operation of the service and for remembering privacy choices. According to publicly available guidance used by Polish public administration websites, such cookies do not require separate consent when they are necessary for delivering the service and operating the website.',
              'Optional functionality or analytics cookies are enabled only after consent is given. The website currently does not use marketing tools.',
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
          'This policy was prepared as a practical privacy implementation for this website. Before publishing, it is worth adding full business registration details and reviewing the wording with legal counsel or a data protection specialist if broader medical data is processed in practice.',
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
