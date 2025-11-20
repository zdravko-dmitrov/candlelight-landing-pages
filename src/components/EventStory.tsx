import { Music, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventStory = () => {
  return (
    <section id="story" className="py-24 bg-dark-section relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30 animate-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30 animate-glow" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title with Glow */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-shadow-glow">Една незабравима вечер</span>
          </h2>
        </div>

        {/* Event Details Cards - Bento Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Card className="glass-card ambient-glow border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2">
            <div className="flex flex-col items-center p-8 text-center">
              <Calendar className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-white">Дата</h3>
              <p className="text-white/70">21 ноември 2024</p>
            </div>
          </Card>

          <Card className="glass-card ambient-glow border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 md:mt-8">
            <div className="flex flex-col items-center p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-white">Локация</h3>
              <p className="text-white/70">София, България</p>
            </div>
          </Card>

          <Card className="glass-card ambient-glow border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2">
            <div className="flex flex-col items-center p-8 text-center">
              <Music className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-white">Музика</h3>
              <p className="text-white/70">Камерен оркестър</p>
            </div>
          </Card>
        </div>

        {/* Story Content with Asymmetric Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Opening Quote */}
          <div className="glass-card p-10 md:p-12 rounded-3xl border-white/10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="border-l-4 border-primary pl-8">
              <p className="text-xl md:text-2xl leading-relaxed font-bold text-white italic">
                Рожденият ден е празник, той е време за отчитане на достиженията и за оглеждане назад към преминатия път, не за да се върнем в миналото, а за да разберем по-добре настоящето.
              </p>
            </div>
          </div>

          {/* Main Story - Broken Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="md:col-span-7 glass-card p-8 md:p-10 rounded-3xl border-white/10">
              <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-white/90 mb-6">
                С радост си припомняме как на 21 ноември 2024 г. отбелязахме 23-тата годишнина от присъствието на EOS Solutions в България, като посрещнахме в нашата компания близки клиенти и партньори, с които сме изградили траен професионализъм и доверие през годините.
              </p>
              <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-white/90">
                Вечерта премина в приятна атмосфера, озвучена от изпълненията на Камерен състав Алегрето, които пресъздадоха любими мелодии – от класическа музика до модерни хитове.
              </p>
            </div>

            <div className="md:col-span-5 glass-card p-8 rounded-3xl border-white/10 md:mt-12 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed md:leading-[1.7] text-white/90 mb-4">
                  Благодарим на всички клиенти и партньори на EOS, които бяха част от празничната вечер!
                </p>
                <p className="text-base md:text-lg font-bold text-primary mt-4">
                  С нетърпение чакаме да продължим заедно да прилагаме нови технологии, да откриваме нови перспективи и да поставяме нови цели.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventStory;