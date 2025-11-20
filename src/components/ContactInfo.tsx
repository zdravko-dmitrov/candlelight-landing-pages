import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-shadow-glow">Свържете се с нас</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl">Имате въпроси? Свържете се с екипа на EOS Matrix Bulgaria</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Email */}
            <div className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 border-white/10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">Email</h3>
                  <a
                    href="mailto:marketing@eos-matrix.bg"
                    className="text-white/70 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    marketing@eos-matrix.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 border-white/10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">Телефон</h3>
                  <a 
                    href="tel:+35929760800" 
                    className="text-white/70 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    +359 2 976 0800
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 border-white/10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">Адрес</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    ул. "Рачо Петков Казанджията" № 6, ет.6<br />
                    Matrix Tower<br />
                    1766 София, България
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="glass-card rounded-3xl p-8 border-white/10 text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-bold text-xl mb-4 text-white">Работно време:</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Понеделник - Петък: 08:00 ч. - 16:30 ч.<br />
              Събота - Неделя: Затворено
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
