import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";

// Dynamically import all images from the gallery folder
const galleryModules = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true });

// Convert the imported modules to an array of image objects
const galleryImages = Object.entries(galleryModules)
  .map(([path, module]: [string, any]) => ({
    src: module.default,
    alt: "Снимка от събитието Symphony of Time",
    // Extract filename for sorting if needed
    filename: path.split('/').pop() || ''
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename)); // Sort alphabetically by filename

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
  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

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
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: document.getElementById("gallery")?.offsetTop, behavior: "smooth" });
    }
  };

  // Generate pagination numbers with ellipsis - max 3 visible pages
  const getPaginationRange = () => {
    const maxVisible = 3; // Always show max 3 pages
    const pages: (number | string)[] = [];
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    if (currentPage <= 2) {
      // Near the start
      pages.push(2);
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 1) {
      // Near the end
      pages.push('...');
      pages.push(totalPages - 1);
      pages.push(totalPages);
    } else {
      // In the middle - show current page only
      pages.push('...');
      pages.push(currentPage);
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section id="gallery" className="py-24 bg-light-section relative overflow-hidden">
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow" />
      <div
        className="absolute bottom-20 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20 animate-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="text-shadow-glow">Снимки от събитието</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">Моменти от нашата празнична вечер</p>
        </div>

        <div
          key={currentPage}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 animate-fade-in"
        >
          {currentImages.map((image, index) => (
            <div
              key={startIndex + index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group glass-card border-border"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {/* First Page Button */}
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-xl transition-all duration-300 glass-card text-foreground border-border hover:border-primary/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Първа страница"
          >
            <ChevronsLeft className="w-5 h-5" />
          </button>

          {/* Previous Page Button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-xl transition-all duration-300 glass-card text-foreground border-border hover:border-primary/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Предишна страница"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          {getPaginationRange().map((page, index) => (
            typeof page === 'number' ? (
              <button
                key={`page-${page}`}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all duration-300 font-medium ${
                  currentPage === page
                    ? "bg-primary text-white shadow-glow scale-105 hover:-translate-y-0.5"
                    : "glass-card text-foreground border-border hover:border-primary/30 hover:scale-105 hover:-translate-y-0.5"
                }`}
              >
                {page}
              </button>
            ) : (
              <span
                key={`ellipsis-${index}`}
                className="px-1 py-2 text-muted-foreground text-sm"
              >
                {page}
              </span>
            )
          ))}

          {/* Next Page Button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl transition-all duration-300 glass-card text-foreground border-border hover:border-primary/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Следваща страница"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Last Page Button */}
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl transition-all duration-300 glass-card text-foreground border-border hover:border-primary/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Последна страница"
          >
            <ChevronsRight className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer with Glassmorphism */}
        <div className="mt-4 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card max-w-2xl mx-auto p-6 rounded-2xl border-border">
            <p className="text-sm text-muted-foreground">
              За персонални снимки от празненството, моля, обърнете се към{" "}
              <a
                href="mailto:marketing@eos-matrix.bg"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                marketing@eos-matrix.bg
              </a>
            </p>
          </div>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeLightbox()}>
          <DialogOverlay className="bg-black/90 backdrop-blur-md" />
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent shadow-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors p-3 rounded-full bg-black/50 backdrop-blur-md hover:scale-110 hover:bg-black/70"
                aria-label="Затвори галерия"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 z-50 text-white hover:text-primary transition-colors p-3 rounded-full bg-black/50 backdrop-blur-md hover:scale-110 hover:bg-black/70"
                aria-label="Предишна снимка"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 z-50 text-white hover:text-primary transition-colors p-3 rounded-full bg-black/50 backdrop-blur-md hover:scale-110 hover:bg-black/70"
                aria-label="Следваща снимка"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              {selectedImage !== null && (
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
                />
              )}

              {/* Image Counter */}
              {selectedImage !== null && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 backdrop-blur-md px-6 py-3 rounded-full font-medium">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
