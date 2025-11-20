import { Flame } from "lucide-react";
import eosLogo from "@/assets/eos-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img 
            src={eosLogo} 
            alt="EOS Logo" 
            className="h-12"
          />
          
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-primary animate-flicker" />
            <p className="text-sm text-muted-foreground">
              EOS Matrix Bulgaria - Changing finances for the better
            </p>
            <Flame className="w-4 h-4 text-primary animate-flicker" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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
              href="mailto:marketing@eos-matrix.bg"
              className="hover:text-primary transition-colors"
            >
              marketing@eos-matrix.bg
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} EOS Matrix Bulgaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;