import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Видео от събитието
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Изживейте отново магията на нашата празнична вечер
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"></div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl border border-border">
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
      </div>
    </section>
  );
};

export default VideoSection;
