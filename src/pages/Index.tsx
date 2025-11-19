import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EventStory from "@/components/EventStory";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EventStory />
      <VideoSection />
      <Gallery />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;