import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Squirrel, Smartphone, Globe } from "lucide-react";

const Download = () => {

  return (
    <section id="download" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Download Penguin Client
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Available for all major platforms. Get started in seconds with our easy installer.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-card rounded-xl p-8 border border-primary/50 ring-2 ring-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-card text-center">
            <div className="mb-6 flex justify-center">
              <Squirrel className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Penguin Client
            </h3>
            <p className="text-muted-foreground mb-6">needs modrinth app</p>
            
            <Button 
              variant="gaming" 
              className="w-full"
              size="lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://files.catbox.moe/e73ora.mrpack';
                link.download = 'penguin-client.mrpack';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <DownloadIcon className="w-5 h-5" />
              Download Modpack
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
