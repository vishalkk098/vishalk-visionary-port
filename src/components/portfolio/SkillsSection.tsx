import { Code, Brain, Database, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python (DSA, Problem-Solving)", "SQL", "Git/GitHub"],
      color: "primary"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: ["CNN & Deep Learning", "Transfer Learning", "Mask R-CNN", "Detectron2"],
      color: "accent-purple"
    },
    {
      title: "Data Science",
      icon: Database,
      skills: ["Data Preprocessing", "Model Training", "Model Evaluation", "Power BI (Basic)"],
      color: "primary"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["TensorFlow", "PyTorch", "Flask", "OpenCV"],
      color: "accent-purple"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build intelligent solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="skill-card p-8 rounded-2xl text-center">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${category.color}/10 mb-6`}>
                    <IconComponent className={`h-8 w-8 text-${category.color}`} />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Banner */}
          <div className="mt-16 text-center">
            <div className="glow-card p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Artificial Intelligence", "Computer Vision", "Medical Image Analysis",
                  "Neural Networks", "Data Analysis", "Problem Solving",
                  "Research & Development", "Algorithm Design"
                ].map((competency, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;