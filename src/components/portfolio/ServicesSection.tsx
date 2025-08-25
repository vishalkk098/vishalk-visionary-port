import { Bot, BarChart3, Eye, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI & ML Model Development",
      description: "Building custom deep learning and machine learning models tailored to specific business needs and research applications.",
      features: ["Custom Neural Networks", "Transfer Learning", "Model Optimization", "Performance Tuning"]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Extracting meaningful insights from complex datasets using Python, SQL, and visualization tools like Power BI.",
      features: ["Statistical Analysis", "Data Preprocessing", "Interactive Dashboards", "Trend Analysis"]
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Developing advanced computer vision applications including medical image analysis, object detection, and segmentation.",
      features: ["Medical Imaging", "Object Detection", "Image Segmentation", "Pattern Recognition"]
    },
    {
      icon: Globe,
      title: "Web App Integration",
      description: "Deploying machine learning models as web applications using Flask and modern web technologies for easy access.",
      features: ["Model Deployment", "API Development", "User Interface Design", "Cloud Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Services</span> I Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI and data science solutions to help bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="glow-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                >
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glow-card p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate on your next AI project. I'm always excited to work on innovative solutions 
                that make a real impact.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="tech-button px-8 py-3 text-lg font-semibold rounded-full"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;