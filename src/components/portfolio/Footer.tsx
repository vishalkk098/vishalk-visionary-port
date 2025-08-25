import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-6">
            
            {/* Name & Title */}
            <div>
              <h3 className="text-2xl font-bold">
                <span className="text-gradient">Vishal</span>{" "}
                <span className="text-foreground">Kanaujiya</span>
              </h3>
              <p className="text-muted-foreground mt-2">
                AI & ML Enthusiast | Building the Future with Intelligence
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/vishalkk098"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/vishal-kanaujiya-390654291"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:vishalkannaujiya144@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Quote */}
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground italic">
                "Technology is best when it brings people together and solves real problems. 
                I'm passionate about using AI to create meaningful impact in the world."
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border/50 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* Copyright */}
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Vishal Kanaujiya. All rights reserved.
                </p>

                {/* Made with Love */}
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> for the AI community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;