import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network delay for feel
    setTimeout(() => {
      toast.success("Благодарим за вашето съобщение! Ще се свържем с вас скоро.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-light-bg relative overflow-hidden"
    >
      {/* Ambient Glow Effects */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow" />
      <div
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="text-shadow-glow">Свържете се с нас</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Имате въпроси? Свържете се с екипа на EOS Matrix Bulgaria
          </p>
        </div>

        {/* 50 / 50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

          {/* ── LEFT: Contact Information ────────────────────────────── */}
          <div
            className="flex flex-col gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {/* Email */}
            <div className="glass-card rounded-3xl p-7 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl border-border">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform shadow-md border border-primary/20 shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                  <a
                    href="mailto:marketing@eos-matrix.bg"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                  >
                    marketing@eos-matrix.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-3xl p-7 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl border-border">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform shadow-md border border-primary/20 shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Телефон</h3>
                  <a
                    href="tel:+35929760800"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                  >
                    +359 2 976 0800
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card rounded-3xl p-7 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl border-border">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform shadow-md border border-primary/20 shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Адрес</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    ул. „Рачо Петков Казанджията" № 6, ет.6<br />
                    Matrix Tower<br />
                    1766 София, България
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card rounded-3xl p-7 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl border-border">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform shadow-md border border-primary/20 shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Работно време</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Понеделник – Петък: 08:00 – 16:30 ч.<br />
                    Събота – Неделя: Затворено
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ───────────────────────────────────── */}
          <div
            className="glass-card rounded-3xl p-8 md:p-10 border-border animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-shadow-glow">
              Изпратете съобщение
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground font-medium">
                    Собствено име <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Иван"
                    className="rounded-xl border-border/60 focus:border-primary/50 bg-background/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground font-medium">
                    Фамилия <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Иванов"
                    className="rounded-xl border-border/60 focus:border-primary/50 bg-background/60"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ivan@example.com"
                  className="rounded-xl border-border/60 focus:border-primary/50 bg-background/60"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+359 88 888 8888"
                  className="rounded-xl border-border/60 focus:border-primary/50 bg-background/60"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Съобщение <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Вашето съобщение..."
                  rows={5}
                  className="rounded-xl border-border/60 focus:border-primary/50 bg-background/60 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-xl gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Send className={`w-5 h-5 transition-transform duration-300 ${isSubmitting ? "translate-x-1 opacity-60" : ""}`} />
                {isSubmitting ? "Изпращане..." : "Изпрати съобщение"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
