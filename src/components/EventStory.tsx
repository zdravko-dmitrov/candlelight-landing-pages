import { Music, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventStory = () => {
  return (
    <section id="story" className="py-24 bg-[hsl(var(--light-grey-bg))] relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Една незабравима вечер
          </h2>
        </div>

        {/* Event Details Cards - Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Card className="bg-white shadow-lg hover:shadow-xl border-border hover:border-primary/30 transition-all duration-300 group hover-lift h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <Calendar className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Дата</h3>
              <p className="text-gray-600">26 юни 2025</p>
            </div>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl border-border hover:border-primary/30 transition-all duration-300 group hover-lift h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <MapPin className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Локация</h3>
              <p className="text-gray-600">Гранд Хотел София</p>
            </div>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl border-border hover:border-primary/30 transition-all duration-300 group hover-lift h-full">
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <Music className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Музика</h3>
              <p className="text-gray-600">Струнен квартет</p>
            </div>
          </Card>
        </div>

        {/* Story Content with Asymmetric Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Opening Quote */}
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="border-l-4 border-primary pl-8">
              <p className="text-xl md:text-2xl leading-relaxed font-bold text-gray-800 italic">
                Рожденият ден е празник. Рожденият ден е равносметка. Ден за пожелания и поглед към бъдещето. Ден за спомен какво е било.
              </p>
            </div>
          </div>

          {/* Main Story Text */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-gray-700 mb-6">
              С радост си припомняме вечерта на 26.06.25г., когато времето забави своя ход, а светлината на хиляди свещи изпълни с блясък градината на Гранд Хотел София по звуците на струнен квартет, който със звуците на класически и съвременен аранжимент сля традиция и съвременност.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-gray-700 mb-6">
              Вечерта пренесе всички ни в епохи, сбирайки заедно минало, настояще и бъдеще. Така се случи, че един период от време, от рождението на EOS в България, стана "Symphony of Time", смесвайки различни стилове от световната класика и джаз с акценти на модерна музика.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-gray-700">
              <span className="font-semibold">До нови срещи! До нови 23 и още много години!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventStory;