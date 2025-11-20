import heroCandles from "@/assets/hero-candles.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content on Pure White */}
          <div className="text-left lg:pr-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              23 години EOS в България
            </h1>
            
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-primary mb-8">
              Symphony of Time
            </p>
            
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Right: Candles Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"></div>
            <img 
              src={heroCandles} 
              alt="Празнични свещи за 23-та годишнина на EOS" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
