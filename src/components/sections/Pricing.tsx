import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { language } = useLanguage();

  const pricingContent = {
    pl: {
      title: 'Cennik',
      subtitle:
        'Przejrzyste stawki i stały czas trwania każdej sesji – wybierz formę wsparcia, której potrzebujesz.',
      cta: 'Umów spotkanie',
      note:
        'Stawki dotyczą sesji online. Jeśli potrzebujesz innej formy lub masz pytania organizacyjne, skontaktuj się – wspólnie znajdziemy najlepsze rozwiązanie.',
      items: [
        {
          title: 'Konsultacja indywidualna',
          duration: '50 minut',
          price: '150 zł',
          featured: false,
          features: [
            'Spotkanie wstępne ukierunkowane na Twoje potrzeby',
            'Możliwość zadania pytań i omówienia oczekiwań',
            'Rekomendacje co do dalszej ścieżki wsparcia',
          ],
        },
        {
          title: 'Sesja psychoterapii',
          duration: '50 minut',
          price: '150 zł',
          featured: true,
          features: [
            'Regularna psychoterapia w bezpiecznej atmosferze',
            'Praca nad celami terapeutycznymi z tygodnia na tydzień',
            'Monitorowanie postępów i dostosowanie metod pracy',
          ],
        },
        {
          title: 'Pomoc psychologiczna',
          duration: '50 minut',
          price: '150 zł',
          featured: false,
          features: [
            'Wsparcie w bieżących trudnościach i kryzysach',
            'Psychoedukacja oraz praktyczne narzędzia radzenia sobie',
            'Skupienie na poprawie samopoczucia i codziennego funkcjonowania',
          ],
        },
        {
          title: 'Konsultacja rodzinna',
          duration: '50 minut',
          price: '200 zł',
          featured: false,
          features: [
            'Wspólna praca nad komunikacją i budowaniem porozumienia',
            'Omówienie strategii wsparcia i roli każdego członka rodziny',
            'Plan działań pomagający wprowadzić trwałe zmiany',
          ],
        },
      ],
    },
    en: {
      title: 'Pricing',
      subtitle:
        'Clear rates and a fixed duration for every session—choose the support you need.',
      cta: 'Book a session',
      note:
        'Rates apply to online sessions. If you need another format or have scheduling questions, let’s talk and find the best option.',
      items: [
        {
          title: 'Individual Consultation',
          duration: '50 minutes',
          price: '150 PLN',
          featured: false,
          features: [
            'Introductory meeting focused on your needs',
            'Space for questions and clarifying expectations',
            'Recommendations for the next steps in support',
          ],
        },
        {
          title: 'Psychotherapy Session',
          duration: '50 minutes',
          price: '150 PLN',
          featured: true,
          features: [
            'Ongoing psychotherapy in a safe, supportive setting',
            'Work on therapeutic goals week by week',
            'Progress tracking and tailored methods',
          ],
        },
        {
          title: 'Psychological Support',
          duration: '50 minutes',
          price: '150 PLN',
          featured: false,
          features: [
            'Support for current challenges and crises',
            'Psychoeducation and practical coping tools',
            'Focus on well-being and daily functioning',
          ],
        },
        {
          title: 'Family Consultation',
          duration: '50 minutes',
          price: '200 PLN',
          featured: false,
          features: [
            'Joint work on communication and understanding',
            'Discussing support strategies and family roles',
            'Action plan to introduce lasting changes',
          ],
        },
      ],
    },
  };

  const { title, subtitle, note, cta, items } = pricingContent[language];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map(({ title, duration, price, featured, features }) => (
            <div
              key={title}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                featured
                  ? 'bg-primary text-primary-foreground scale-105 shadow-2xl'
                  : 'bg-card card-shadow hover:card-shadow-hover'
              }`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Popularne
                </div>
              )}
              
              <h3 className={`font-display text-xl font-semibold mb-2 ${featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                {title}
              </h3>
              <p className={`text-sm mb-6 ${featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {duration}
              </p>
              
              <p className={`text-4xl font-display font-bold mb-8 ${featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                {price}
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${featured ? 'text-primary-foreground' : 'text-accent'}`} />
                    <span className={`text-sm ${featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  featured
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
                asChild
              >
                <a href="#contact">{cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          {note}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
