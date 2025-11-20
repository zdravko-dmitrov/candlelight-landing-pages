import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Play className="w-8 h-8 text-primary animate-glow" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Видео от събитието</h2>
            </div>
            <p className="text-muted-foreground text-lg">Изживейте отново магията на нашата празнична вечер</p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-border/50 animate-fade-in">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/m0gKN13KdIU"
              title="EOS 23rd Anniversary - Symphony of Time"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
