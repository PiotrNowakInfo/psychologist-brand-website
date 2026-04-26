import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pl: {
    // Navigation
    'nav.about': 'O mnie',
    'nav.services': 'Usługi',
    'nav.pricing': 'Cennik',
    'nav.testimonials': 'Opinie',
    'nav.contact': 'Kontakt',
    'nav.backHome': 'Strona główna',
    
    // Hero
    'hero.title': 'Katarzyna Gostkowska-Kraczkowska',
    'hero.subtitle': 'Psychoterapeuta, psycholog, specjalista psychoterapii uzależnień',
    'hero.description': 'Wspieram osoby zmagające się z kryzysami psychicznymi, zaburzeniami nastroju, zaburzeniami osobowości i uzależnieniem. Oferuję profesjonalną pomoc w bezpiecznej, pełnej zrozumienia atmosferze.',
    'hero.cta': 'Umów wizytę',
    'hero.cta.secondary': 'Poznaj mnie',
    
    // About
    'about.title': 'O mnie',
    'about.subtitle': 'Wykształcenie i doświadczenie',
    'about.bio.1': 'Nazywam się Katarzyna Gostkowska-Kraczkowska. Jestem psychologiem, terapeutką poznawczo-behawioralną (certyfikat PTTPB nr 2430) i certyfikowanym specjalistą psychoterapii uzależnień.',
    'about.bio.2': 'Ukończyłam szkolenie DBT Comprehensive i jestem członkinią Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej. Od kilku lat pracuję indywidualnie i grupowo z osobami z problemem uzależnienia, ich bliskimi, osobami z zaburzeniami nastroju, zaburzeniami osobowości oraz w kryzysach psychicznych.',
    'about.bio.3': 'Pracuję w nurcie poznawczo-behawioralnym, wykorzystując elementy terapii schematu i terapii dialektyczno-behawioralnej. Stale rozwijam swoje kompetencje, uczestnicząc w szkoleniach, stażach i konferencjach, a swoją pracę poddaję regularnej superwizji.',
    'about.approach.title': 'Podejście terapeutyczne',
    'about.approach.cbt': 'Terapia poznawczo-behawioralna (CBT)',
    'about.approach.cbt.desc': 'Pracuję w nurcie CBT, korzystając także z elementów terapii schematu i DBT, aby lepiej dopasować proces do potrzeb konkretnej osoby.',
    'about.credentials': 'Certyfikaty i członkostwa',
    'about.credential.1': 'Certyfikowany specjalista psychoterapii uzależnień',
    'about.credential.2': 'Terapeutka poznawczo-behawioralna, certyfikat PTTPB nr 2430',
    'about.credential.3': 'Szkolenie DBT Comprehensive i regularna superwizja kliniczna',
    
    // Services
    'services.title': 'Oferta usług',
    'services.subtitle': 'Formy wsparcia dopasowane do rodzaju trudności i etapu, na którym jesteś.',
    'services.individual.title': 'Terapia indywidualna',
    'services.individual.desc': 'Sesje terapeutyczne, także online, dostosowane do indywidualnych potrzeb i celów. Dla osób w kryzysach, z zaburzeniami psychicznymi i zaburzeniami nastroju.',
    'services.group.title': 'Konsultacje psychologiczne',
    'services.group.desc': 'Zazwyczaj od 1 do 3 spotkań dla osób przeżywających kryzys, stres lub trudności w relacjach. Wspólnie diagnozujemy problem i ustalamy plan wsparcia.',
    'services.addiction.title': 'Terapia uzależnień',
    'services.addiction.desc': 'Specjalistyczna pomoc dla osób zmagających się z różnymi formami uzależnień.',
    'services.family.title': 'Wsparcie dla bliskich',
    'services.family.desc': 'Pomoc dla rodzin i bliskich osób w kryzysach psychicznych oraz osób uzależnionych w radzeniu sobie z trudną sytuacją.',
    'services.mood.title': 'Terapia par',
    'services.mood.desc': 'Spotkania dla osób mierzących się z trudnościami w relacji, ukierunkowane na poprawę komunikacji, wzajemnego rozumienia i wsparcie w kryzysie.',
    'services.crisis.title': 'Obszary wsparcia',
    'services.crisis.desc': 'Depresja, zaburzenia lękowe, ADHD, uzależnienia, zaburzenia osobowości, przewlekły stres oraz trudności w relacjach.',
    
    // Pricing
    'pricing.title': 'Cennik',
    'pricing.subtitle': 'Aktualne stawki za konsultacje i psychoterapię.',
    'pricing.individual': 'Psychoterapia indywidualna',
    'pricing.individual.duration': '50 minut',
    'pricing.individual.price': '180 zł',
    'pricing.group': 'Psychoterapia par',
    'pricing.group.duration': '50 minut',
    'pricing.group.price': '250 zł',
    'pricing.first': 'Konsultacja psychologiczna',
    'pricing.first.duration': '50 minut',
    'pricing.first.price': '180 zł',
    'pricing.note': 'Pierwsze spotkanie jest płatne z góry jako forma rezerwacji terminu. Konsultację można odwołać lub przełożyć do 24 godzin przed wizytą.',
    
    // Testimonials
    'testimonials.title': 'Opinie klientów',
    'testimonials.subtitle': 'Co mówią osoby, którym pomogłem',
    'testimonials.1.text': 'Z całego serca mogę polecić Panią Kasię jako psychoterapeutę, zaangażowanie, indywidualnie dobrana ścieżka terapii ... ',
    'testimonials.1.author': 'Pacjent',
    'testimonials.2.text': 'Polecam Panią Katarzynę. Dzięki niej zaczęłam zmieniać mój mały świat. Nabrałam siły wiary w siebie, przestałam się ... ',
    'testimonials.2.author': 'Iza.W',
    'testimonials.3.text': 'Chciałabym gorąco polecić panią Kasię każdemu kto czuje, że chciałby skorzystać z pomocy psychoterapeutycznej ale ... ',
    'testimonials.3.author': 'Pacjent',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Umów się na wizytę',
    'contact.form.name': 'Imię i nazwisko',
    'contact.form.email': 'Adres e-mail',
    'contact.form.phone': 'Numer telefonu',
    'contact.form.message': 'Wiadomość',
    'contact.form.submit': 'Wyślij wiadomość',
    'contact.form.success': 'Wiadomość została wysłana!',
    'contact.form.privacyNotice': 'W formularzu podaj tylko dane potrzebne do kontaktu i umówienia wizyty. Dla ochrony prywatności nie wpisuj szczegółowych informacji o stanie zdrowia w pierwszej wiadomości.',
    'contact.form.privacyConsent': 'Potwierdzam, że zapoznałem/am się z polityką prywatności i zasadami przetwarzania danych.',
    'contact.form.privacyError': 'Aby wysłać formularz, potwierdź zapoznanie się z polityką prywatności.',
    'contact.info.title': 'Dane kontaktowe',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-mail',
    'contact.info.address': 'Adres gabinetu',
    'contact.map.open': 'Otwórz w Mapach',
    'contact.map.hint': 'Znajdź mnie na mapie',
    // Footer
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',
    'footer.cookies': 'Ustawienia cookies',

    // Cookies
    'cookies.badge': 'Prywatność',
    'cookies.title': 'Szanuję Twoją prywatność',
    'cookies.description': 'Ta strona używa niezbędnych plików cookies do prawidłowego działania oraz może zapisywać opcjonalne ustawienia funkcjonalne i statystyczne tylko po Twojej zgodzie. Formularz kontaktowy służy do pierwszego kontaktu i umawiania wizyt.',
    'cookies.readMore': 'i sprawdź, jak przetwarzane są dane przekazywane w formularzu.',
    'cookies.acceptAll': 'Akceptuj wszystkie',
    'cookies.reject': 'Tylko niezbędne',
    'cookies.settings': 'Dostosuj',
    'cookies.save': 'Zapisz wybór',
    'cookies.alwaysActive': 'zawsze aktywne',
    'cookies.dialog.title': 'Ustawienia prywatności',
    'cookies.dialog.description': 'Możesz zdecydować, które opcjonalne pliki cookies mają być aktywne. Niezbędne cookies odpowiadają za bezpieczeństwo strony i zapamiętanie Twojej decyzji.',
    'cookies.dialog.more': 'Więcej informacji znajdziesz w',
    'cookies.category.necessary.title': 'Niezbędne',
    'cookies.category.necessary.description': 'Są wymagane do prawidłowego działania strony, zapisania decyzji o cookies i utrzymania podstawowych funkcji serwisu.',
    'cookies.category.functionality.title': 'Funkcjonalne',
    'cookies.category.functionality.description': 'Pozwalają zapamiętać dodatkowe ustawienia użytkownika, np. preferencje strony, jeśli zostaną uruchomione.',
    'cookies.category.analytics.title': 'Analityczne',
    'cookies.category.analytics.description': 'Pomagają mierzyć sposób korzystania ze strony i rozwijać serwis. Pozostają wyłączone, dopóki nie wyrazisz zgody.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.backHome': 'Home',
    
    // Hero
    'hero.title': 'Katarzyna Gostkowska-Kraczkowska',
    'hero.subtitle': 'Psychotherapist, psychologist, addiction psychotherapy specialist',
    'hero.description': 'I support people experiencing mental health crises, mood disorders, personality disorders, and addiction. I offer professional help in a safe, understanding atmosphere.',
    'hero.cta': 'Book Appointment',
    'hero.cta.secondary': 'Learn More',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Education and Experience',
    'about.bio.1': 'My name is Katarzyna Gostkowska-Kraczkowska. I am a psychologist, a cognitive-behavioral therapist (PTTPB certificate no. 2430), and a certified addiction psychotherapy specialist.',
    'about.bio.2': 'I completed DBT Comprehensive training and I am a member of the Polish Society for Cognitive and Behavioral Therapy. For several years, I have worked individually and in groups with people struggling with addiction, their loved ones, mood disorders, personality disorders, and mental health crises.',
    'about.bio.3': 'I work in the cognitive-behavioral approach, incorporating elements of schema therapy and dialectical behavior therapy. I continue to develop my competencies through training, internships, and conferences, and my work is regularly supervised.',
    'about.approach.title': 'Therapeutic Approach',
    'about.approach.cbt': 'Cognitive Behavioral Therapy (CBT)',
    'about.approach.cbt.desc': 'I work primarily in the CBT approach, also drawing on schema therapy and DBT elements to better match the therapeutic process to each person.',
    'about.credentials': 'Certifications & Memberships',
    'about.credential.1': 'Certified Addiction Therapy Specialist',
    'about.credential.2': 'Cognitive-behavioral therapist, PTTPB certificate no. 2430',
    'about.credential.3': 'DBT Comprehensive training and regular clinical supervision',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Forms of support tailored to the type of difficulty you are experiencing and the stage you are at.',
    'services.individual.title': 'Individual Therapy',
    'services.individual.desc': 'Therapy sessions, also available online, tailored to individual needs and goals. For people facing crises, mental health difficulties, and mood disorders.',
    'services.group.title': 'Psychological Consultations',
    'services.group.desc': 'Usually 1 to 3 meetings for people facing crisis, stress, grief, breakup, job loss, or relationship difficulties. Together we identify the problem and plan support.',
    'services.addiction.title': 'Addiction Therapy',
    'services.addiction.desc': 'Specialized help for individuals struggling with various forms of addiction.',
    'services.family.title': 'Family Support',
    'services.family.desc': 'Support for family members and loved ones of people experiencing mental health crises or addiction who are trying to cope with a difficult situation.',
    'services.mood.title': 'Couples Therapy',
    'services.mood.desc': 'Meetings for couples facing relationship difficulties, focused on improving communication, strengthening mutual understanding, and navigating crisis situations.',
    'services.crisis.title': 'Areas of Support',
    'services.crisis.desc': 'Depression, anxiety disorders, ADHD, addictions, personality disorders, chronic stress, and relationship difficulties.',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Current rates for consultations and psychotherapy.',
    'pricing.individual': 'Individual Psychotherapy',
    'pricing.individual.duration': '50 minutes',
    'pricing.individual.price': '180 PLN',
    'pricing.group': 'Couples Psychotherapy',
    'pricing.group.duration': '50 minutes',
    'pricing.group.price': '250 PLN',
    'pricing.first': 'Psychological Consultation',
    'pricing.first.duration': '50 minutes',
    'pricing.first.price': '180 PLN',
    'pricing.note': 'The first appointment is paid in advance to reserve the time slot. Appointments can be cancelled or rescheduled up to 24 hours before the session.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What people I\'ve helped say',
    'testimonials.1.text': 'I can recommend Ms. Kasia as a psychotherapist with all my heart; her commitment and individually tailored therapy path ...',
    'testimonials.1.author': 'Patient',
    'testimonials.2.text': 'I recommend Ms. Katarzyna. Thanks to her, I started to change my small world. I gained strength and self-belief, I stopped ...',
    'testimonials.2.author': 'Iza.W',
    'testimonials.3.text': 'I would like to warmly recommend Ms. Kasia to anyone who feels they would like to use psychotherapeutic help but ...',
    'testimonials.3.author': 'Patient',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Book an Appointment',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.privacyNotice': 'Please provide only the data needed for contact and appointment booking. To protect your privacy, do not include detailed health information in the first message.',
    'contact.form.privacyConsent': 'I confirm that I have read the privacy policy and the data processing rules.',
    'contact.form.privacyError': 'Please confirm that you have read the privacy policy before sending the form.',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Office Address',
    'contact.map.open': 'Open in Maps',
    'contact.map.hint': 'Find me on the map',
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Settings',

    // Cookies
    'cookies.badge': 'Privacy',
    'cookies.title': 'Your privacy matters here',
    'cookies.description': 'This website uses necessary cookies for proper operation and may store optional functionality or analytics settings only with your consent. The contact form is intended for first contact and appointment booking.',
    'cookies.readMore': 'to learn how data submitted through the form is processed.',
    'cookies.acceptAll': 'Accept all',
    'cookies.reject': 'Necessary only',
    'cookies.settings': 'Customize',
    'cookies.save': 'Save choices',
    'cookies.alwaysActive': 'always active',
    'cookies.dialog.title': 'Privacy settings',
    'cookies.dialog.description': 'You can decide which optional cookies may be active. Necessary cookies handle website security and remember your privacy choice.',
    'cookies.dialog.more': 'You can find more details in the',
    'cookies.category.necessary.title': 'Necessary',
    'cookies.category.necessary.description': 'They are required for the website to work properly, remember your cookie decision, and maintain basic service features.',
    'cookies.category.functionality.title': 'Functionality',
    'cookies.category.functionality.description': 'They allow the website to remember extra user preferences if such features are enabled in the future.',
    'cookies.category.analytics.title': 'Analytics',
    'cookies.category.analytics.description': 'They help measure how the website is used and improve the service. They stay disabled until you consent.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
