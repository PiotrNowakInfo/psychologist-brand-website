import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import LocationMap from './LocationMap';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      toast({
        title: t('contact.form.privacyError'),
        variant: 'destructive',
      });
      return;
    }

    // For now, just show success message (backend can be added later)
    toast({
      title: t('contact.form.success'),
      description: 'Odpowiem najszybciej jak to możliwe.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setPrivacyAccepted(false);
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
              <div className="rounded-2xl border border-border bg-card/80 p-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  {t('contact.form.privacyNotice')}
                </p>
                <div className="mt-4 flex items-start gap-3">
                  <Checkbox
                    id="privacy-consent"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                    className="mt-1"
                  />
                  <label htmlFor="privacy-consent" className="text-sm leading-6 text-foreground">
                    {t('contact.form.privacyConsent')}{' '}
                    <Link
                      to="/polityka-prywatnosci"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {t('footer.privacy')}
                    </Link>
                    .
                  </label>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20">
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
                  href="tel:+48508212085"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                    <p className="text-foreground font-medium">+48 508-212-085</p>
                  </div>
                </a>
                <a
                  href="mailto:k.gostkowskakraczkowska@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                    <p className="text-foreground font-medium">k.gostkowskakraczkowska@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.info.address')}</p>
                    <p className="text-foreground font-medium">ul. Westerplatte 36-38, 82-200 Malbork</p>
                  </div>
                </div>
              </div>
              
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
