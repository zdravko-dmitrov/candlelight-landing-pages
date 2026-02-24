import { Music, Calendar, MapPin, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventStory = () => {
  return (
    <section id="story" className="py-24 bg-light-section relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30 animate-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30 animate-glow" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title with Glow */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-shadow-glow">Една незабравима вечер</span>
          </h2>
        </div>

        {/* Event Details Cards - Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Card className="glass-card ambient-glow border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <Calendar className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Дата</h3>
              <p className="text-muted-foreground">26 юни 2025</p>
            </div>
          </Card>

          <Card className="glass-card ambient-glow border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <MapPin className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Локация</h3>
              <p className="text-muted-foreground">Гранд Хотел София</p>
            </div>
          </Card>

          <Card className="glass-card ambient-glow border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <Music className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Музика</h3>
              <p className="text-muted-foreground">Струнен квартет</p>
            </div>
          </Card>

          <Card className="glass-card ambient-glow border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <PartyPopper className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Юбилей</h3>
              <p className="text-muted-foreground">23 години ЕОС</p>
            </div>
          </Card>
        </div>

        {/* Story Content with Asymmetric Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Opening Quote */}
          <div className="glass-card p-10 md:p-12 rounded-3xl border-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="border-l-4 border-primary pl-8">
              <p className="text-xl md:text-2xl leading-relaxed font-bold text-foreground italic">
                Рожденият ден е празник. Рожденият ден е равносметка. Ден за пожелания и поглед към бъдещето. Ден за спомен какво е било.
              </p>
            </div>
          </div>

          {/* Main Story Text */}
          <div className="glass-card p-8 md:p-10 rounded-3xl border-border animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-foreground mb-6">
              С радост си припомняме вечерта на 26.06.25г., когато времето забави своя ход, а светлината на хиляди свещи изпълни с блясък градината на Гранд Хотел София по звуците на струнен квартет, който със звуците на класически и съвременен аранжимент сля традиция и съвременност.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-foreground mb-6">
              Благодарим на всички клиенти и партньори на EOS, които бяха част от празничната вечер и всички, които са били с нас през годините.
            </p>
            <p className="text-base md:text-lg font-bold text-primary">
              С нетърпение чакаме бъдещи срещи с Вас и много нови поводи за празнуване!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventStory;