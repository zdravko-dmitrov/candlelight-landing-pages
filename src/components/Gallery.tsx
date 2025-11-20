import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-primary animate-glow" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Галерия</h2>
          </div>
          <p className="text-muted-foreground text-lg">Моменти от нашето празненство</p>
        </div>

        {/* Gallery Grid - Responsive columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {currentImages.map((image, index) => (
            <div
              key={startIndex + index}
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => goToPage(page)}
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          За персонални снимки от празненството, моля, обърнете се към{" "}
          <a 
            href="mailto:marketing@eos-matrix.bg"
            className="text-primary hover:underline transition-all"
          >
            marketing@eos-matrix.bg
          </a>
        </p>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-dark-bg/95 flex items-center justify-center p-4 animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
              aria-label="Затвори галерия"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
              aria-label="Предишна снимка"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 text-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
              aria-label="Следваща снимка"
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
