import { GraduationCap, Briefcase, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">About</span> Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about artificial intelligence and its applications in solving real-world challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Personal Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Building the Future with AI
              </h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  I'm <span className="text-primary font-semibold">Vishal Kanaujiya</span>, a final-year B.Tech student passionate about 
                  Artificial Intelligence and Deep Learning. I specialize in developing intelligent solutions like 
                  brain tumor detection systems using CNNs, Mask R-CNN, and advanced ML models.
                </p>
                <p>
                  With strong skills in Python and problem-solving, my goal is to build impactful AI-driven 
                  applications and grow as a professional in the field of data science and AI research. 
                  I believe in the power of technology to transform lives and solve complex problems.
                </p>
                <p>
                  Currently focusing on computer vision applications in healthcare, I'm always eager to learn 
                  new technologies and take on challenging projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>

            {/* Education & Experience Cards */}
            <div className="space-y-6">
              
              {/* Education Card */}
              <div className="glow-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Education</h4>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">
                        B.Tech in Information Technology
                      </p>
                      <p className="text-muted-foreground">
                        Rajkiya Engineering College, Azamgarh
                      </p>
                      <p className="text-sm text-primary font-medium">
                        Batch of 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internship Card */}
              <div className="glow-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-purple/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Professional Experience</h4>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">
                        Python & Machine Learning Intern
                      </p>
                      <p className="text-muted-foreground">
                        Codesoft
                      </p>
                      <p className="text-sm text-accent-purple font-medium">
                        Hands-on ML Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialization Card */}
              <div className="glow-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Specializations</h4>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        • Computer Vision & Medical Imaging
                      </p>
                      <p className="text-muted-foreground">
                        • Deep Learning & Neural Networks
                      </p>
                      <p className="text-muted-foreground">
                        • Data Science & Analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;