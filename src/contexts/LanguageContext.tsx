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
    
    // Hero
    'hero.title': 'Psycholog & Psychoterapeuta',
    'hero.subtitle': 'Specjalista psychoterapii uzależnień',
    'hero.description': 'Wspieram osoby zmagające się z uzależnieniami, zaburzeniami nastroju i kryzysami psychicznymi. Oferuję profesjonalną pomoc w bezpiecznej, pełnej zrozumienia przestrzeni.',
    'hero.cta': 'Umów wizytę',
    'hero.cta.secondary': 'Poznaj mnie',
    
    // About
    'about.title': 'O mnie',
    'about.subtitle': 'Wykształcenie i doświadczenie',
    'about.bio.1': 'Jestem psychologiem i certyfikowanym specjalistą psychoterapii uzależnień. Obecnie rozwijam swoje umiejętności w trakcie czteroletniego szkolenia psychoterapeutycznego w nurcie poznawczo-behawioralnym.',
    'about.bio.2': 'Od kilku lat pracuję indywidualnie i grupowo z osobami z problemem uzależnienia, ich bliskimi, osobami z zaburzeniami nastroju oraz w kryzysach psychicznych.',
    'about.bio.3': 'Staram się poszerzać swoje kompetencje uczestnicząc w szkoleniach, stażach i konferencjach. Jestem członkiem Polskiej Federacji Społeczności Terapeutycznych. Swoją pracę poddaję regularnej superwizji.',
    'about.approach.title': 'Podejście terapeutyczne',
    'about.approach.cbt': 'Terapia poznawczo-behawioralna (CBT)',
    'about.approach.cbt.desc': 'Sprawdzona naukowo metoda skupiająca się na związku między myślami, emocjami i zachowaniami.',
    'about.credentials': 'Certyfikaty i członkostwa',
    'about.credential.1': 'Certyfikowany specjalista psychoterapii uzależnień',
    'about.credential.2': 'Członek Polskiej Federacji Społeczności Terapeutycznych',
    'about.credential.3': 'Regularna superwizja kliniczna',
    
    // Services
    'services.title': 'Oferta usług',
    'services.subtitle': 'Kompleksowe wsparcie psychologiczne',
    'services.individual.title': 'Terapia indywidualna',
    'services.individual.desc': 'Indywidualne sesje terapeutyczne dostosowane do Twoich potrzeb i celów.',
    'services.group.title': 'Terapia grupowa',
    'services.group.desc': 'Wsparcie w grupie osób o podobnych doświadczeniach pod profesjonalnym prowadzeniem.',
    'services.addiction.title': 'Terapia uzależnień',
    'services.addiction.desc': 'Specjalistyczna pomoc dla osób zmagających się z różnymi formami uzależnień.',
    'services.family.title': 'Wsparcie dla bliskich',
    'services.family.desc': 'Pomoc dla rodzin i bliskich osób uzależnionych w radzeniu sobie z trudną sytuacją.',
    'services.mood.title': 'Zaburzenia nastroju',
    'services.mood.desc': 'Terapia depresji, stanów lękowych i innych zaburzeń nastroju.',
    'services.crisis.title': 'Interwencja kryzysowa',
    'services.crisis.desc': 'Natychmiastowe wsparcie w sytuacjach kryzysów psychicznych.',
    
    // Pricing
    'pricing.title': 'Cennik',
    'pricing.subtitle': 'Przejrzyste zasady współpracy',
    'pricing.individual': 'Sesja indywidualna',
    'pricing.individual.duration': '50 minut',
    'pricing.individual.price': '200 zł',
    'pricing.group': 'Sesja grupowa',
    'pricing.group.duration': '90 minut',
    'pricing.group.price': '80 zł',
    'pricing.first': 'Pierwsza konsultacja',
    'pricing.first.duration': '60 minut',
    'pricing.first.price': '150 zł',
    'pricing.note': 'Ceny mogą ulec zmianie. Skontaktuj się, aby uzyskać aktualne informacje.',
    
    // Testimonials
    'testimonials.title': 'Opinie klientów',
    'testimonials.subtitle': 'Co mówią osoby, którym pomogłem',
    'testimonials.1.text': 'Profesjonalne podejście i pełne zrozumienie. Dzięki terapii odzyskałem kontrolę nad swoim życiem.',
    'testimonials.1.author': 'Klient',
    'testimonials.2.text': 'Ciepła atmosfera i skuteczne metody. Polecam każdemu, kto szuka wsparcia.',
    'testimonials.2.author': 'Klientka',
    'testimonials.3.text': 'Wreszcie znalazłem specjalistę, który naprawdę rozumie problemy uzależnień.',
    'testimonials.3.author': 'Klient',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Umów się na wizytę',
    'contact.form.name': 'Imię i nazwisko',
    'contact.form.email': 'Adres e-mail',
    'contact.form.phone': 'Numer telefonu',
    'contact.form.message': 'Wiadomość',
    'contact.form.submit': 'Wyślij wiadomość',
    'contact.form.success': 'Wiadomość została wysłana!',
    'contact.info.title': 'Dane kontaktowe',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-mail',
    'contact.info.address': 'Adres gabinetu',
    'contact.booking.title': 'Rezerwacja online',
    'contact.booking.desc': 'Umów wizytę przez platformę:',
    'contact.booking.znanylekarz': 'ZnanyLekarz',
    'contact.booking.doctorify': 'Doctorify',
    
    // Booking
    'booking.title': 'Umów wizytę',
    'booking.subtitle': 'Wybierz dogodny termin w kalendarzu poniżej.',

    // Footer
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Psychologist & Psychotherapist',
    'hero.subtitle': 'Addiction Therapy Specialist',
    'hero.description': 'I support individuals struggling with addictions, mood disorders, and mental health crises. I offer professional help in a safe, understanding space.',
    'hero.cta': 'Book Appointment',
    'hero.cta.secondary': 'Learn More',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Education and Experience',
    'about.bio.1': 'I am a psychologist and certified addiction therapy specialist. Currently, I am developing my skills during a four-year psychotherapy training in the cognitive-behavioral approach.',
    'about.bio.2': 'For several years, I have been working individually and in groups with people struggling with addiction, their loved ones, individuals with mood disorders, and those in mental health crises.',
    'about.bio.3': 'I continuously expand my competencies by participating in trainings, internships, and conferences. I am a member of the Polish Federation of Therapeutic Communities. My work is subject to regular supervision.',
    'about.approach.title': 'Therapeutic Approach',
    'about.approach.cbt': 'Cognitive Behavioral Therapy (CBT)',
    'about.approach.cbt.desc': 'A scientifically proven method focusing on the relationship between thoughts, emotions, and behaviors.',
    'about.credentials': 'Certifications & Memberships',
    'about.credential.1': 'Certified Addiction Therapy Specialist',
    'about.credential.2': 'Member of Polish Federation of Therapeutic Communities',
    'about.credential.3': 'Regular Clinical Supervision',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Comprehensive Psychological Support',
    'services.individual.title': 'Individual Therapy',
    'services.individual.desc': 'Individual therapy sessions tailored to your needs and goals.',
    'services.group.title': 'Group Therapy',
    'services.group.desc': 'Support in a group of people with similar experiences under professional guidance.',
    'services.addiction.title': 'Addiction Therapy',
    'services.addiction.desc': 'Specialized help for individuals struggling with various forms of addiction.',
    'services.family.title': 'Family Support',
    'services.family.desc': 'Help for families and loved ones of addicted individuals in coping with difficult situations.',
    'services.mood.title': 'Mood Disorders',
    'services.mood.desc': 'Therapy for depression, anxiety, and other mood disorders.',
    'services.crisis.title': 'Crisis Intervention',
    'services.crisis.desc': 'Immediate support in mental health crisis situations.',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent Cooperation Terms',
    'pricing.individual': 'Individual Session',
    'pricing.individual.duration': '50 minutes',
    'pricing.individual.price': '200 PLN',
    'pricing.group': 'Group Session',
    'pricing.group.duration': '90 minutes',
    'pricing.group.price': '80 PLN',
    'pricing.first': 'First Consultation',
    'pricing.first.duration': '60 minutes',
    'pricing.first.price': '150 PLN',
    'pricing.note': 'Prices are subject to change. Contact for current information.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What people I\'ve helped say',
    'testimonials.1.text': 'Professional approach and full understanding. Thanks to therapy, I regained control over my life.',
    'testimonials.1.author': 'Client',
    'testimonials.2.text': 'Warm atmosphere and effective methods. I recommend to anyone looking for support.',
    'testimonials.2.author': 'Client',
    'testimonials.3.text': 'Finally found a specialist who truly understands addiction problems.',
    'testimonials.3.author': 'Client',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Book an Appointment',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Office Address',
    'contact.booking.title': 'Online Booking',
    'contact.booking.desc': 'Book an appointment via:',
    'contact.booking.znanylekarz': 'ZnanyLekarz',
    'contact.booking.doctorify': 'Doctorify',
    
    // Booking
    'booking.title': 'Book an Appointment',
    'booking.subtitle': 'Choose a convenient time in the calendar below.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
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
