import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { textKey: 'testimonials.1.text', authorKey: 'testimonials.1.author' },
    { textKey: 'testimonials.2.text', authorKey: 'testimonials.2.author' },
    { textKey: 'testimonials.3.text', authorKey: 'testimonials.3.author' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map(({ textKey, authorKey }, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-xl card-shadow"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                "{t(textKey)}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {t(authorKey).charAt(0)}
                  </span>
                </div>
                <span className="text-muted-foreground font-medium">
                  {t(authorKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
