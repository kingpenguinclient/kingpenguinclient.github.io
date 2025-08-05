import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            PENGUIN
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            CLIENT
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          The ultimate Minecraft client with cutting-edge features, smooth performance, 
          and an ice-cool gaming experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="gaming" 
            size="lg" 
            className="text-lg px-8 py-6 animate-glow-pulse"
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://files.catbox.moe/e73ora.mrpack';
              link.download = 'penguin-client.mrpack';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="w-6 h-6" />
            Download Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-card rounded-lg p-6 border border-border/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">at least 1</div>
            <div className="text-muted-foreground">Active User</div>
          </div>
          <div className="bg-gradient-card rounded-lg p-6 border border-border/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent mb-2">0%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="bg-gradient-card rounded-lg p-6 border border-border/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">unsupportive</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
