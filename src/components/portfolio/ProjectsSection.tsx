import { ExternalLink, Github, Brain, Microscope, Database, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import selfDrivingCarImage from "@/assets/self-driving-car-project.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Self Driving Car with Computer Vision",
      description: "Autonomous vehicle system using advanced computer vision algorithms for real-time object detection, lane recognition, and path planning. Features deep learning models for safe navigation and decision-making.",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "Computer Vision", "Deep Learning"],
      icon: Car,
      color: "accent-purple",
      image: selfDrivingCarImage,
      features: [
        "Real-time object detection",
        "Lane detection & tracking",
        "Traffic sign recognition",
        "Autonomous path planning",
        "Collision avoidance system"
      ]
    },
    {
      title: "Brain Tumor Detection System",
      description: "Advanced deep learning model using CNN and Flask for accurate brain tumor detection from MRI scans. Features real-time analysis and user-friendly web interface.",
      technologies: ["Python", "TensorFlow", "CNN", "Flask", "OpenCV"],
      icon: Brain,
      color: "primary",
      features: [
        "High accuracy tumor detection",
        "Real-time MRI analysis",
        "Web-based interface",
        "Medical image preprocessing"
      ]
    },
    {
      title: "Brain Tumor Segmentation",
      description: "Sophisticated segmentation system using Mask R-CNN with Detectron2 for precise tumor boundary identification and analysis in medical imaging.",
      technologies: ["Python", "Detectron2", "Mask R-CNN", "PyTorch"],
      icon: Microscope,
      color: "accent-purple",
      features: [
        "Precise tumor segmentation",
        "Multiple tumor type detection",
        "Advanced preprocessing",
        "Clinical-grade accuracy"
      ]
    },
    {
      title: "Machine Learning Portfolio",
      description: "Collection of diverse ML projects including classification, prediction, and transfer learning applications on real-world datasets with comprehensive analysis.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      icon: Database,
      color: "primary",
      features: [
        "Multiple ML algorithms",
        "Data visualization",
        "Model comparison",
        "Performance metrics"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative AI and machine learning solutions that solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  
                  {/* Project Info */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-${project.color}/10 rounded-xl`}>
                        <IconComponent className={`h-8 w-8 text-${project.color}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm font-medium rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </Button>
                      <Button 
                        className="tech-button flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project Features Card */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="glow-card p-8 rounded-2xl">
                      <h4 className="text-xl font-semibold text-foreground mb-6">Key Features</h4>
                      <div className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-2 h-2 bg-${project.color} rounded-full`}></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Visual Element */}
                      <div className="mt-8 h-32 bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-xl flex items-center justify-center overflow-hidden">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        ) : (
                          <IconComponent className={`h-16 w-16 text-${project.color}/30`} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="mt-16 text-center">
            <div className="glow-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects and contributions to the AI and ML community.
              </p>
              <Button 
                variant="outline"
                className="px-8 py-3"
                onClick={() => window.open('https://github.com/vishalkk098', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Visit GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;