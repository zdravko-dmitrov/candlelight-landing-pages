import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery/DSC1197.jpg";
import gallery2 from "@/assets/gallery/DSC1244.jpg";
import gallery3 from "@/assets/gallery/DSC1260.jpg";
import gallery4 from "@/assets/gallery/DSC1265.jpg";
import gallery5 from "@/assets/gallery/DSC1266.jpg";
import gallery6 from "@/assets/gallery/DSC1270.jpg";
import gallery7 from "@/assets/gallery/DSC1271.jpg";
import gallery8 from "@/assets/gallery/DSC1194.jpg";
import gallery9 from "@/assets/gallery/DSC1271-2.jpg";
import gallery10 from "@/assets/gallery/DSC1279.jpg";
import gallery11 from "@/assets/gallery/DSC1284.jpg";
import gallery12 from "@/assets/gallery/DSC1304.jpg";
import gallery13 from "@/assets/gallery/DSC1305.jpg";
import gallery14 from "@/assets/gallery/DSC1319.jpg";
import gallery15 from "@/assets/gallery/DSC1331.jpg";
import gallery16 from "@/assets/gallery/DSC1333.jpg";
import gallery17 from "@/assets/gallery/DSC1335.jpg";
import gallery18 from "@/assets/gallery/DSC1347.jpg";
import gallery19 from "@/assets/gallery/DSC1350.jpg";
import gallery20 from "@/assets/gallery/DSC1355.jpg";
import gallery21 from "@/assets/gallery/DSC1359.jpg";
import gallery22 from "@/assets/gallery/DSC1375.jpg";
import gallery23 from "@/assets/gallery/DSC1378.jpg";
import gallery24 from "@/assets/gallery/DSC1382.jpg";
import gallery25 from "@/assets/gallery/DSC1384.jpg";
import gallery26 from "@/assets/gallery/DSC1388.jpg";
import gallery27 from "@/assets/gallery/DSC1396.jpg";

const galleryImages = [
  { src: gallery8, alt: "EOS лого с декоративни свещи" },
  { src: gallery9, alt: "Екип на събитието" },
  { src: gallery10, alt: "Разговор между гости" },
  { src: gallery11, alt: "Бизнес срещи на събитието" },
  { src: gallery12, alt: "Групова снимка на екипа" },
  { src: gallery13, alt: "Групова снимка на екипа" },
  { src: gallery14, alt: "Споделяне на моменти" },
  { src: gallery15, alt: "Лидери на EOS" },
  { src: gallery16, alt: "Symphony of Time събития" },
  { src: gallery17, alt: "Приветствия и поздравления" },
  { src: gallery18, alt: "Поздравления с цветя" },
  { src: gallery19, alt: "Празнични букети" },
  { src: gallery20, alt: "Топла среща" },
  { src: gallery21, alt: "Приятелски разговори" },
  { src: gallery22, alt: "Гости на събитието" },
  { src: gallery23, alt: "Екипна снимка" },
  { src: gallery24, alt: "Колеги на EOS" },
  { src: gallery25, alt: "Сърдечни поздрави" },
  { src: gallery26, alt: "Бизнес партньори" },
  { src: gallery27, alt: "Празнична атмосфера" },
  { src: gallery1, alt: "Композиция от свещи на събитието на EOS" },
  { src: gallery2, alt: "Подаръчни торби с брандинг на EOS" },
  { src: gallery3, alt: "Разговор между гости на събитието" },
  { src: gallery4, alt: "Официално посрещане на входа" },
  { src: gallery5, alt: "Гости на събитието" },
  { src: gallery6, alt: "Празнични моменти" },
  { src: gallery7, alt: "Групова снимка на 23-та годишнина на EOS" },
];

// Pagination settings per device
const ITEMS_PER_PAGE = {
  desktop: 12,
  tablet: 9,
  mobile: 4,
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1024) return ITEMS_PER_PAGE.desktop;
    if (window.innerWidth >= 768) return ITEMS_PER_PAGE.tablet;
    return ITEMS_PER_PAGE.mobile;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update items per page on window resize
  useState(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const openLightbox = (index: number) => {
    setSelectedImage(startIndex + index);
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
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById("gallery")?.offsetTop, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 bg-dark-section relative overflow-hidden">
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow" />
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow" style={{ animationDelay: "2s" }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-shadow-glow">Снимки от събитието</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl">Моменти от нашата незабравима празнична вечер</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {currentImages.map((image, index) => (
            <div
              key={startIndex + index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group glass-card border-white/10"
              onClick={() => openLightbox(startIndex + index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/0 to-dark-bg/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mb-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                currentPage === i
                  ? "bg-primary text-white shadow-glow scale-105 hover:-translate-y-0.5"
                  : "glass-card text-white/70 hover:text-white border-white/10 hover:border-primary/30 hover:scale-105 hover:-translate-y-0.5"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Disclaimer with Glassmorphism */}
        <div className="mt-4 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card max-w-2xl mx-auto p-6 rounded-2xl border-white/10">
            <p className="text-sm text-white/70">
              За персонални снимки от празненството, моля, обърнете се към{" "}
              <a href="mailto:marketing@eos-matrix.bg" className="text-primary hover:text-primary/80 transition-colors underline">
                marketing@eos-matrix.bg
              </a>
            </p>
          </div>
        </div>

        {/* Lightbox Modal with Enhanced Dark Theme */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-dark-bg/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 rounded-full glass-card hover:scale-110"
              aria-label="Затвори галерия"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-primary transition-colors p-2 rounded-full glass-card hover:scale-110"
              aria-label="Предишна снимка"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-primary transition-colors p-2 rounded-full glass-card hover:scale-110"
              aria-label="Следваща снимка"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in shadow-glow"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white glass-card px-6 py-3 rounded-full backdrop-blur-md">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
