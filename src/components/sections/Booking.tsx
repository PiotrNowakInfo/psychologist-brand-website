import { InlineWidget, PopupWidget } from "react-calendly";
import { useLanguage } from "@/contexts/LanguageContext";

const Booking = () => {
    const { t } = useLanguage();

    return (
        <section id="booking" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
                        {t('booking.title') || "Umów wizytę"}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t('booking.subtitle') || "Wybierz dogodny termin w kalendarzu poniżej."}
                    </p>
                </div>

                <div className="w-full h-[700px] rounded-2xl overflow-hidden bg-card card-shadow">

                    <InlineWidget
                        url="https://calendly.com/surgerycode/katarzyna_gostkowska?month=2026-02" // Zmień 'typ-zdarzenia' na konkretny typ spotkania (np. 'konsultacja-online')
                        styles={{
                            height: '100%',
                            width: '100%'
                        }}
                    />
                </div>

                <div className="mt-12 text-center">
                    <PopupWidget
                        url="https://calendly.com/surgerycode/katarzyna_gostkowska?month=2026-02" // Zmień 'typ-zdarzenia' na konkretny typ spotkania
                        rootElement={document.getElementById("root")!}
                        text="Umów wizytę"
                        textColor="#ffffff"
                        color="#0069ff"
                    />
                </div>
            </div>
        </section>
    );
};

export default Booking;
