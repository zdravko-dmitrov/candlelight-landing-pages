import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import gallery1 from "@/assets/gallery/DSC1197.jpg";
import gallery2 from "@/assets/gallery/DSC1244.jpg";
import gallery3 from "@/assets/gallery/DSC1260.jpg";
import gallery4 from "@/assets/gallery/DSC1265.jpg";
import gallery5 from "@/assets/gallery/DSC1266.jpg";
import gallery6 from "@/assets/gallery/DSC1270.jpg";
import gallery7 from "@/assets/gallery/DSC1271.jpg";

const galleryImages = [
  { src: gallery1, alt: "Candles arrangement at EOS event" },
  { src: gallery2, alt: "EOS branded gift bags" },
  { src: gallery3, alt: "Event guests conversation" },
  { src: gallery4, alt: "Formal greeting at entrance" },
  { src: gallery5, alt: "Guests at the event" },
  { src: gallery6, alt: "Celebration moments" },
  { src: gallery7, alt: "Group photo at EOS anniversary" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-primary animate-glow" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Галерия
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Моменти от нашето незабравимо празненство
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-dark-bg/95 flex items-center justify-center p-4 animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-foreground bg-background/10 px-4 py-2 rounded-full backdrop-blur-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
