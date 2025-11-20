import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-20 animate-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full animate-float">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-shadow-glow">Видео от събитието</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl">
              Изживейте отново магията на нашата празнична вечер
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m0gKN13KdIU"
                title="EOS 23rd Anniversary - Symphony of Time"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
