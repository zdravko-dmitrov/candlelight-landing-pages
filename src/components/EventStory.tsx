import { Music, Calendar, MapPin, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventStory = () => {
  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Една незабравима вечер
          </h2>
          <div className="flex justify-center gap-2 mb-12">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <Sparkles className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <Sparkles className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Дата</h3>
              <p className="text-muted-foreground">26 юни 2025</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Локация</h3>
              <p className="text-muted-foreground">Гранд Хотел София</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Music className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Музика</h3>
              <p className="text-muted-foreground">Струнен квартет</p>
            </Card>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 font-bold text-black">
              Рожденият ден е празник. 
              Рожденият ден е равносметка. Ден за пожелания и поглед към бъдещето. Ден за спомен какво е било.
            </p>

            <Card className="p-8 bg-muted/50 border-l-4 border-primary">
              <p className="text-lg leading-relaxed text-foreground italic">
                С радост си припомняме вечерта на 26.06.25г., когато времето забави своя ход, 
                а светлината на хиляди свещи изпълни с блясък градината на Гранд Хотел София по 
                звуците на струнен квартет, който със звуците на класически и съвременен аранжимент 
                сля традиция и съвременност.
              </p>
            </Card>

            <p className="text-lg leading-relaxed text-foreground mt-8 text-center">
              Благодарим на всички клиенти и партньори на EOS, които бяха част от празничната вечер 
              и всички, които са били с нас през годините.
            </p>

            <p className="text-lg leading-relaxed text-foreground text-center font-semibold text-primary">
              С нетърпение чакаме бъдещи срещи с Вас и много нови поводи за празнуване!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventStory;