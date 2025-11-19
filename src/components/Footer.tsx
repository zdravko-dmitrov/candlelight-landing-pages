import { Flame } from "lucide-react";
import eosLogo from "@/assets/eos-logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img 
            src={eosLogo} 
            alt="EOS Logo" 
            className="h-12 opacity-90"
          />
          
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-candle-glow animate-flicker" />
            <p className="text-sm text-primary-foreground/80">
              EOS Matrix Bulgaria - Changing finances for the better
            </p>
            <Flame className="w-4 h-4 text-candle-glow animate-flicker" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
            <a 
              href="https://www.bg.eos-solutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              www.bg.eos-solutions.com
            </a>
            <span>•</span>
            <a 
              href="mailto:info@bg.eos-solutions.com"
              className="hover:text-primary transition-colors"
            >
              info@bg.eos-solutions.com
            </a>
          </div>

          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} EOS Matrix Bulgaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;