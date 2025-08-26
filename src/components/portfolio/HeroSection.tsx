import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Brain, Zap } from "lucide-react";
import profileImage from "@/assets/vishal-new-profile.jpg";

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
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark/30 backdrop-blur-md border border-primary/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground-dark">Available for opportunities</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-foreground-dark">Hey, I'm</span>
                <br />
                <span className="text-gradient">Vishal Kanaujiya</span>
                <br />
                <span className="text-foreground-dark/80 text-3xl lg:text-4xl font-medium">
                  AI & ML Developer
                </span>
              </h1>
              
              {/* Specialization Tags */}
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Deep Learning</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20">
                  <Code2 className="w-4 h-4 text-accent-purple" />
                  <span className="text-sm text-accent-purple font-medium">Computer Vision</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Python Expert</span>
                </div>
              </div>
            </div>

            {/* Bio Tagline */}
            <p className="text-lg text-muted-foreground-dark/90 max-w-lg leading-relaxed">
              Final-year B.Tech student building intelligent solutions with deep learning and computer vision. 
              Turning complex problems into elegant AI-driven applications.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center p-4 rounded-xl bg-card-dark/20 backdrop-blur-sm border border-primary/10">
                <div className="text-2xl font-bold text-gradient">94%</div>
                <div className="text-xs text-muted-foreground-dark">Model Accuracy</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card-dark/20 backdrop-blur-sm border border-accent-purple/10">
                <div className="text-2xl font-bold text-accent-purple">5+</div>
                <div className="text-xs text-muted-foreground-dark">AI Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card-dark/20 backdrop-blur-sm border border-primary/10">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-xs text-muted-foreground-dark">Graduate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="tech-button px-8 py-3 text-lg font-semibold rounded-full group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 text-lg font-semibold rounded-full border-primary/30 text-foreground-dark hover:bg-primary/10 backdrop-blur-sm"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/vishalkk098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
              >
                <Github className="h-5 w-5 text-muted-foreground-dark group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground-dark group-hover:text-primary">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/vishal-kanaujiya-390654291"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark/20 backdrop-blur-sm border border-accent-purple/10 hover:border-accent-purple/30 transition-all duration-300 hover:scale-105 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground-dark group-hover:text-accent-purple transition-colors" />
                <span className="text-sm text-muted-foreground-dark group-hover:text-accent-purple">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Profile Container */}
            <div className="relative">
              {/* Profile Image - Square Format */}
              <div className="relative z-20 animate-float">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent-purple/20 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-card-dark/50 to-card-dark/30 backdrop-blur-sm">
                    <img 
                      src={profileImage} 
                      alt="Vishal Kanaujiya - AI & ML Developer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Glowing Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 z-30">
                <div className="bg-card-dark/90 backdrop-blur-md rounded-2xl p-4 border border-primary/20 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">B.Tech</div>
                    <div className="text-xs text-muted-foreground-dark">Information Technology</div>
                    <div className="text-xs text-accent-purple">2025 Graduate</div>
                  </div>
                </div>
              </div>

              {/* Floating Skills Indicator */}
              <div className="absolute -bottom-6 -left-6 z-30">
                <div className="bg-card-dark/90 backdrop-blur-md rounded-2xl p-4 border border-accent-purple/20 shadow-xl animate-float" style={{animationDelay: '2s'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent-purple/20 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground-dark">Python</div>
                      <div className="text-xs text-muted-foreground-dark">5+ Projects</div>
                    </div>
                  </div>
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