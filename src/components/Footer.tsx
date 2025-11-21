import eosLogo from "@/assets/eos-logo.png";

const Footer = () => {
  return (
    <footer className="bg-light-bg text-foreground py-16 border-t border-border relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <img 
            src={eosLogo} 
            alt="EOS Logo" 
            className="h-14 opacity-90"
          />
          
          <p className="text-base text-foreground font-medium text-center">
            EOS Matrix Bulgaria - Changing finances for the better
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground text-center">
            <a 
              href="https://www.bg.eos-solutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              www.bg.eos-solutions.com
            </a>
            <span className="text-border hidden md:inline">•</span>
            <a 
              href="mailto:marketing@eos-matrix.bg"
              className="hover:text-primary transition-colors"
            >
              marketing@eos-matrix.bg
            </a>
          </div>

          <p className="text-xs text-muted-foreground pt-4 border-t border-border w-full max-w-md text-center">
            © {new Date().getFullYear()} EOS Matrix Bulgaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;