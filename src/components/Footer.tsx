import { Flame } from "lucide-react";
import eosLogo from "@/assets/eos-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16 border-t border-gray-200 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <img 
            src={eosLogo} 
            alt="EOS Logo" 
            className="h-14"
          />
          
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-primary" />
            <p className="text-base text-gray-600 font-medium">
              EOS Matrix Bulgaria - Changing finances for the better
            </p>
            <Flame className="w-5 h-5 text-primary" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <a 
              href="https://www.bg.eos-solutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              www.bg.eos-solutions.com
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="mailto:marketing@eos-matrix.bg"
              className="hover:text-primary transition-colors"
            >
              marketing@eos-matrix.bg
            </a>
          </div>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-200 w-full max-w-md text-center">
            © {new Date().getFullYear()} EOS Matrix Bulgaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;