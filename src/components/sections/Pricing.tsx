import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { scrollToSection } from '@/lib/section-navigation';

const Pricing = () => {
  const { language } = useLanguage();

  const pricingContent = {
    pl: {
      title: 'Cennik',
      subtitle:
        'Aktualne stawki za konsultacje i psychoterapię.',
      cta: 'Umów spotkanie',
      note:
        'Pierwsze spotkanie jest płatne z góry jako forma rezerwacji terminu. Konsultację można odwołać lub przełożyć do 24 godzin przed wizytą.',
      details: [
        'Ze względu na specyfikę pracy nie zawsze mogę odebrać telefon, dlatego najlepiej skontaktować się wiadomością SMS.',
        'Pracuję wyłącznie z osobami dorosłymi i nie prowadzę terapii rodzin ani bliskich swoich Klientów.',
        'Kilka pierwszych spotkań służy wzajemnemu poznaniu, określeniu problemów do pracy i ustaleniu planu terapii.',
        'Terapia indywidualna odbywa się zazwyczaj raz w tygodniu, a terapia par raz na dwa tygodnie. W uzasadnionych przypadkach częstotliwość może zostać ustalona indywidualnie.',
        'Proszę o punktualne przybywanie na sesje. Spóźnienie nie wydłuża czasu trwania spotkania.',
      ],
      items: [
        {
          title: 'Konsultacja psychologiczna',
          duration: '50 minut',
          price: '180 zł',
          featured: false,
          features: [
            '1 do 3 spotkań pomagających rozpoznać trudność',
            'Omówienie aktualnej sytuacji i potrzeb',
            'Ustalenie wstępnego planu wsparcia',
          ],
        },
        {
          title: 'Psychoterapia indywidualna',
          duration: '50 minut',
          price: '180 zł',
          featured: true,
          features: [
            'Regularna praca terapeutyczna w bezpiecznej atmosferze',
            'Podejście CBT z elementami terapii schematu i DBT',
            'Wsparcie także w formule online',
          ],
        },
        {
          title: 'Psychoterapia par',
          duration: '50 minut',
          price: '250 zł',
          featured: false,
          features: [
            'Praca nad poprawą komunikacji i rozumienia siebie nawzajem',
            'Wsparcie w sytuacjach napięcia i kryzysu w relacji',
            'Wypracowanie bardziej pomocnych sposobów bycia razem',
          ],
        },
      ],
    },
    en: {
      title: 'Pricing',
      subtitle:
        'Current rates for consultations and psychotherapy.',
      cta: 'Book a session',
      note:
        'The first appointment is paid in advance to reserve the time slot. Appointments can be cancelled or rescheduled up to 24 hours before the session.',
      details: [
        'Because of the nature of my work, I may not always be able to answer the phone, so SMS is the preferred contact method.',
        'I work exclusively with adults and I do not work with the family members or loved ones of my own clients.',
        'The first few meetings are meant to get to know each other, define the main difficulties, and agree on a therapy plan.',
        'Individual therapy usually takes place once a week, while couples therapy usually takes place every two weeks. In justified cases, frequency can be arranged individually.',
        'Please arrive on time for sessions. Being late does not extend the appointment time.',
      ],
      items: [
        {
          title: 'Psychological Consultation',
          duration: '50 minutes',
          price: '180 PLN',
          featured: false,
          features: [
            '1 to 3 meetings focused on understanding the difficulty',
            'Discussion of your current situation and needs',
            'An initial support plan tailored to your case',
          ],
        },
        {
          title: 'Individual Psychotherapy',
          duration: '50 minutes',
          price: '180 PLN',
          featured: true,
          features: [
            'Regular therapeutic work in a safe atmosphere',
            'CBT approach with schema therapy and DBT elements',
            'Available also in an online format',
          ],
        },
        {
          title: 'Couples Psychotherapy',
          duration: '50 minutes',
          price: '250 PLN',
          featured: false,
          features: [
            'Work on improving communication and mutual understanding',
            'Support during relationship strain and crisis',
            'Developing healthier ways of being together',
          ],
        },
      ],
    },
  };

  const { title, subtitle, note, cta, items, details } = pricingContent[language];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              
              <p className={`text-4xl font-display font-bold mb-8 ${featured ? 'text-white' : 'text-primary'}`}>
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
                onClick={() => scrollToSection('contact')}
              >
                {cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          {note}
        </p>
        <div className="max-w-4xl mx-auto mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <h3 className="font-display text-2xl font-semibold text-primary mb-6">
            {language === 'pl' ? 'Informacje dotyczące współpracy' : 'Important Information'}
          </h3>
          <ul className="space-y-4 text-muted-foreground">
            {details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
