import { useLanguage } from '@/contexts/LanguageContext';
import { User, Users, Heart, HeartHandshake, Brain, AlertCircle } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { titleKey: 'services.individual.title', descKey: 'services.individual.desc', icon: User },
    { titleKey: 'services.group.title', descKey: 'services.group.desc', icon: Users },
    { titleKey: 'services.addiction.title', descKey: 'services.addiction.desc', icon: Heart },
    { titleKey: 'services.family.title', descKey: 'services.family.desc', icon: HeartHandshake },
    { titleKey: 'services.mood.title', descKey: 'services.mood.desc', icon: Brain },
    { titleKey: 'services.crisis.title', descKey: 'services.crisis.desc', icon: AlertCircle },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ titleKey, descKey, icon: Icon }) => (
            <div
              key={titleKey}
              className="group p-8 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {t(titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
