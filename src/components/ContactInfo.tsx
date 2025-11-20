import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-24 bg-[hsl(var(--light-grey-bg))] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Свържете се с нас
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">Имате въпроси? Свържете се с екипа на EOS Matrix Bulgaria</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Email */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 group hover-lift">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Email</h3>
                  <a
                    href="mailto:marketing@eos-matrix.bg"
                    className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    marketing@eos-matrix.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 group hover-lift">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Телефон</h3>
                  <a 
                    href="tel:+35929760800" 
                    className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    +359 2 976 0800
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 group hover-lift">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Адрес</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    ул. "Рачо Петков Казанджията" № 6, ет.6<br />
                    Matrix Tower<br />
                    1766 София, България
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-border text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Работно време:</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
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
