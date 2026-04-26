import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/lib/section-navigation";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <img
          src="/img2.png"
          alt="Hero image"
          className="w-full h-auto object-cover opacity-20"
        />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-primary-foreground/90 mb-6 animate-fade-in font-medium">
            {t("hero.subtitle")}
          </p>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight animate-slide-up text-glow">
            {t("hero.title")}
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-medium px-10 rounded-full shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
              onClick={() => scrollToSection('contact')}
            >
              {t("hero.cta")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10 font-medium px-8"
              onClick={() => scrollToSection('about')}
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
