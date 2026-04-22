import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, MapPin } from 'lucide-react';

const LocationMap = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-8 relative group rounded-2xl overflow-hidden card-shadow border border-white/20 transition-all duration-500 hover:card-shadow-hover animate-fade-in">
      {/* Map iframe with stylized filter */}
      <div className="h-[300px] w-full grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.657277636183!2d19.023242!3d54.0291095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470200569777df7f%3A0xe7f920258e7275d2!2sWesterplatte%2036%2C%2082-200%20Malbork!5e0!3m2!1spl!2spl!4v1713715000000!5m2!1spl!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Malbork"
          className="rounded-2xl"
        />
      </div>
      
      {/* Visual Overlay for context */}
      <div className="absolute top-4 left-4 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/40 shadow-sm flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground leading-none mb-1">
              {t('contact.info.address')}
            </p>
            <p className="text-sm font-semibold text-primary leading-none">
              ul. Westerplatte 36-38
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <a 
        href="https://maps.app.goo.gl/ce1AQF8BgRnNb95P6" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-primary text-white px-5 py-2.5 rounded-full shadow-2xl hover:bg-primary/90 transition-all flex items-center gap-2 group/btn hover:scale-105 active:scale-95"
      >
        <span className="text-sm font-semibold">{t('contact.map.open')}</span>
        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </a>
      
      {/* Decorative glass border */}
      <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-2xl" />
    </div>
  );
};

export default LocationMap;
