import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/vishal-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="particle-bg opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground-dark">
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <div className="mb-8 animate-float">
            <div className="relative inline-block">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Vishal Kanaujiya - AI & ML Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent-purple opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-6 space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Vishal</span>{" "}
              <span className="text-foreground-dark">Kanaujiya</span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-muted-foreground-dark">
              AI & ML Enthusiast | Data Science & Computer Vision Developer
            </h2>
          </div>

          {/* Bio Tagline */}
          <p className="text-lg lg:text-xl text-muted-foreground-dark/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Final-year B.Tech student building intelligent solutions with deep learning and computer vision. 
            Passionate about creating impactful AI-driven applications that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="tech-button px-8 py-3 text-lg font-semibold rounded-full"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 text-lg font-semibold rounded-full border-primary/30 text-foreground-dark hover:bg-primary/10"
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
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