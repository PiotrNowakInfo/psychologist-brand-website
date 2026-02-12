import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PopupModal } from "react-calendly";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const calendlyUrls = {
      pl: "https://calendly.com/surgerycode/katarzyna_gostkowska?month=2026-02",
      en: "https://calendly.com/surgerycode/katarzyna_gostkowska?month=2026-02"
  };

  const currentCalendlyUrl = calendlyUrls[language] || calendlyUrls.pl;

  const navItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-semibold text-foreground">
          Katarzyna Gostkowska
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage('pl')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === 'pl'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                PL
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
            <Button onClick={() => setIsCalendlyOpen(true)}>
              {t('booking.title')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setLanguage('pl')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    language === 'pl'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  PL
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>
              <Button className="flex-1" onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCalendlyOpen(true);
              }}>
                {t('booking.title')}
              </Button>
            </div>
          </div>
        )}

        <PopupModal
            url={currentCalendlyUrl}
            onModalClose={() => setIsCalendlyOpen(false)}
            open={isCalendlyOpen}
            rootElement={document.getElementById("root")!}
        />
      </div>
    </header>
  );
};

export default Header;
