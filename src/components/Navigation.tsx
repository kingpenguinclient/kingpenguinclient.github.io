import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useState } from "react";
import penguinLogo from "@/assets/penguin-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src={penguinLogo} alt="Penguin Client" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Penguin Client
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#download" className="text-foreground hover:text-primary transition-colors">
              Download
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button 
              variant="gaming" 
              size="sm"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://files.catbox.moe/e73ora.mrpack';
                link.download = 'penguin-client.mrpack';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Features
              </a>
              <a href="#download" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Download
              </a>
              <a href="#docs" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Documentation
              </a>
              <a href="#support" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Support
              </a>
              <div className="pt-2">
                <Button 
                  variant="gaming" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://files.catbox.moe/e73ora.mrpack';
                    link.download = 'penguin-client.mrpack';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
