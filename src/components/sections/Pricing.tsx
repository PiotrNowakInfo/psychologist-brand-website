import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();

  const pricingItems = [
    {
      titleKey: 'pricing.first',
      durationKey: 'pricing.first.duration',
      priceKey: 'pricing.first.price',
      featured: false,
      features: ['Diagnoza wstępna', 'Omówienie celów terapii', 'Plan dalszej współpracy'],
    },
    {
      titleKey: 'pricing.individual',
      durationKey: 'pricing.individual.duration',
      priceKey: 'pricing.individual.price',
      featured: true,
      features: ['Terapia poznawczo-behawioralna', 'Indywidualne podejście', 'Regularne monitorowanie postępów'],
    },
    {
      titleKey: 'pricing.group',
      durationKey: 'pricing.group.duration',
      priceKey: 'pricing.group.price',
      featured: false,
      features: ['Wsparcie grupowe', 'Wymiana doświadczeń', 'Profesjonalne prowadzenie'],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingItems.map(({ titleKey, durationKey, priceKey, featured, features }) => (
            <div
              key={titleKey}
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
                {t(titleKey)}
              </h3>
              <p className={`text-sm mb-6 ${featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {t(durationKey)}
              </p>
              
              <p className={`text-4xl font-display font-bold mb-8 ${featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                {t(priceKey)}
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
                <a href="#contact">{t('hero.cta')}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          {t('pricing.note')}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
