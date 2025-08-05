import { Shield, Zap, Gamepad2, Eye, Settings, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "fast i think",
      description: "so big fast"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "safe to use for medieval warriors",
      description: "fanfare and play minecraft"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "gaming",
      description: "made for game and ing"
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "spyware free",
      description: "evil microfort will not do the catch you today1!!11"
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "customizable-ish",
      description: "at least 1 setting and option to make the client truly yours."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "inactive community",
      description: "community? never heard of 'er!"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Why Choose Penguin?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Minecraft like never before with our cutting-edge features and optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
