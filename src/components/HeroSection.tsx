import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import heroCandles from "@/assets/hero-candles.jpg";
import eosLogo from "@/assets/eos-logo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCandles})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg/90" />
      </div>

      {/* Animated Candle Glow Effects */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-candle-glow rounded-full blur-3xl opacity-20 animate-glow" />
      <div className="absolute bottom-40 right-32 w-40 h-40 bg-candle-glow rounded-full blur-3xl opacity-20 animate-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-candle-glow rounded-full blur-3xl opacity-20 animate-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src={eosLogo} 
            alt="EOS Logo" 
            className="h-16 md:h-20 mx-auto mb-8"
          />
        </div>

        <div className="flex justify-center items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Flame className="w-8 h-8 text-candle-glow animate-flicker" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
            Symphony of Time
          </h1>
          <Flame className="w-8 h-8 text-candle-glow animate-flicker" style={{ animationDelay: "2s" }} />
        </div>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          23 години EOS в България
        </p>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Благодарим на всички клиенти и партньори на EOS, които бяха част от празничната вечер
        </p>

        <Button 
          variant="hero" 
          size="lg" 
          onClick={scrollToContact}
          className="animate-fade-in text-lg px-8 py-6 h-auto"
          style={{ animationDelay: "0.8s" }}
        >
          Свържете се с нас
        </Button>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-4 opacity-40">
          <div className="w-1 h-24 bg-gradient-to-b from-transparent via-candle-glow to-transparent animate-glow" />
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-candle-glow to-transparent animate-glow" style={{ animationDelay: "1s" }} />
          <div className="w-1 h-24 bg-gradient-to-b from-transparent via-candle-glow to-transparent animate-glow" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;