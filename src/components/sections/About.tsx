import { useLanguage } from '@/contexts/LanguageContext';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage(); 

  const credentials = [
    { key: 'about.credential.1', icon: Award },
    { key: 'about.credential.2', icon: Users },
    { key: 'about.credential.3', icon: BookOpen },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {t('about.title')}
          </h2> 
          <p className="text-muted-foreground text-lg">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Portrait / visual */}
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-foreground/10 bg-muted/40">
              <img
                src="/img3.png"
                alt={t('about.title')}
                className="w-full h-auto max-h-[640px] object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-10">
            {/* Bio Section */}
            <div className="space-y-6">
              <p className="text-foreground/90 text-lg leading-relaxed">
                {t('about.bio.1')}
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed">
                {t('about.bio.2')}
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed">
                {t('about.bio.3')}
              </p>

              {/* Therapeutic Approach */}
              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t('about.approach.title')}
                </h3>
                <p className="font-medium text-accent mb-2">
                  {t('about.approach.cbt')}
                </p>
                <p className="text-muted-foreground">
                  {t('about.approach.cbt.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Credentials Section - full width under image and bio */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
            {t('about.credentials')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="flex items-start gap-4 p-5 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium pt-2">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
