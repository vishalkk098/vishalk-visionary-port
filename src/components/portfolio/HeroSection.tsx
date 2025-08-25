import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/vishal-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="particle-bg opacity-20"></div>
      
      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="space-y-8 text-left">
            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-foreground-dark">Vishal</span>{" "}
                <span className="text-foreground-dark">Kanaujiya,</span>
                <br />
                <span className="text-gradient">AI & ML</span>
                <br />
                <span className="text-foreground-dark">Enthusiast</span>
              </h1>
            </div>

            {/* Bio Tagline */}
            <p className="text-lg text-muted-foreground-dark/90 max-w-lg leading-relaxed">
              A final-year B.Tech student passionate about building intelligent solutions 
              with deep learning and computer vision. Turning ideas into impactful AI-driven applications.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="tech-button px-8 py-3 text-lg font-semibold rounded-full"
              >
                HOW I WORK
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/vishalkk098"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="h-6 w-6 text-muted-foreground-dark group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/vishal-kanaujiya-390654291"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground-dark group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:vishalkannaujiya144@gmail.com"
                className="p-3 rounded-full bg-card/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-6 w-6 text-muted-foreground-dark group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile & Floating Elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Profile Image */}
            <div className="relative z-20">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent-purple/20 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Vishal Kanaujiya - AI & ML Enthusiast"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            {/* Analytics Card */}
            <div className="absolute top-16 -right-4 lg:right-12 z-10 animate-float">
              <div className="bg-card-dark/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-2xl w-48">
                <div className="text-sm text-muted-foreground-dark mb-2">Model Accuracy</div>
                <div className="text-2xl font-bold text-primary mb-1">94.7%</div>
                <div className="text-xs text-accent-purple">+2.3% from last model</div>
                <div className="mt-3 h-2 bg-muted-dark rounded-full overflow-hidden">
                  <div className="h-full w-[94.7%] bg-gradient-to-r from-primary to-accent-purple rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Code Snippet Card */}
            <div className="absolute top-48 -left-8 lg:-left-16 z-10 animate-float" style={{animationDelay: '1s'}}>
              <div className="bg-card-dark/90 backdrop-blur-sm rounded-xl p-4 border border-accent-purple/20 shadow-2xl w-56">
                <div className="text-xs text-accent-purple mb-2">model.py</div>
                <div className="font-mono text-xs text-muted-foreground-dark space-y-1">
                  <div>import tensorflow as tf</div>
                  <div>from keras import layers</div>
                  <div className="text-primary">model = Sequential([</div>
                  <div className="pl-2">layers.Conv2D(32...)</div>
                  <div>])</div>
                </div>
              </div>
            </div>

            {/* Skills Badge */}
            <div className="absolute bottom-20 -right-8 lg:right-8 z-10 animate-float" style={{animationDelay: '2s'}}>
              <div className="bg-card-dark/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-2xl">
                <div className="text-sm text-muted-foreground-dark mb-2">Top Skills</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Python</span>
                  <span className="px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full">CNN</span>
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Flask</span>
                </div>
              </div>
            </div>

            {/* Brain Visualization */}
            <div className="absolute bottom-8 -left-12 lg:-left-20 z-10 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="bg-card-dark/90 backdrop-blur-sm rounded-xl p-4 border border-accent-purple/20 shadow-2xl w-40">
                <div className="text-xs text-accent-purple mb-2">Detection</div>
                <div className="text-sm font-semibold text-foreground-dark mb-2">Brain Tumor</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs text-green-400">Detected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;