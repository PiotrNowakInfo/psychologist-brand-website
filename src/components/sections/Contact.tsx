import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message (backend can be added later)
    toast({
      title: t('contact.form.success'),
      description: 'Odpowiem najszybciej jak to możliwe.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.phone')}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                    <p className="text-foreground font-medium">+48 123 456 789</p>
                  </div>
                </a>
                <a
                  href="mailto:kontakt@psychoterapia.pl"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                    <p className="text-foreground font-medium">kontakt@psychoterapia.pl</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.info.address')}</p>
                    <p className="text-foreground font-medium">ul. Przykładowa 123, Warszawa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Booking */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {t('contact.booking.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('contact.booking.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://www.znanylekarz.pl" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('contact.booking.znanylekarz')}
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://www.doctorify.pl" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('contact.booking.doctorify')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
