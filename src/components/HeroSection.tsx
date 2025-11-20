import heroCandles from "@/assets/hero-candles.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroCandles})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/80 to-dark-bg" />
      </div>

      {/* Ambient Glow Effects - Candlelight Simulation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30 animate-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-20 animate-glow" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Title with Glow Effect */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight tracking-tight" style={{ animationDelay: "0.2s" }}>
          <span className="text-shadow-glow">23 години EOS в България</span>
        </h1>

        {/* Subtitle with Italic Style */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-primary mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Symphony of Time
        </p>

        {/* Decorative Candlelight Lines */}
        <div className="mt-16 flex justify-center gap-6 opacity-50">
          <div className="w-0.5 h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-glow" />
          <div className="w-0.5 h-28 bg-gradient-to-b from-transparent via-primary to-transparent animate-glow" style={{ animationDelay: "1s" }} />
          <div className="w-0.5 h-24 bg-gradient-to-b from-transparent via-primary to-transparent animate-glow" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
