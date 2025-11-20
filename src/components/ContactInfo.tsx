import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Свържете се с нас</h2>
            <p className="text-muted-foreground text-lg">Имате въпроси? Свържете се с екипа на EOS Matrix Bulgaria</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:marketing@eos-matrix.bg"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    marketing@eos-matrix.bg
                  </a>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <a 
                    href="tel:+35929760800" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +359 2 976 0800
                  </a>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    ул. "Рачо Петков Казанджията" № 6, ет.6<br />
                    Matrix Tower<br />
                    1766 София, България
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Business Hours Card */}
          <Card className="p-6 bg-primary/5 border-primary/20 mt-8 text-center">
            <h3 className="font-semibold mb-2">Работно време</h3>
            <p className="text-muted-foreground">
              Понеделник - Петък: 9:00 - 18:00
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
