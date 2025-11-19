import HeroSection from "@/components/HeroSection";
import EventStory from "@/components/EventStory";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventStory />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;