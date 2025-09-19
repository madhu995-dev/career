import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Database, 
  MapPin, 
  Smartphone, 
  TrendingUp, 
  Globe,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const modules = [
    {
      id: "after-10th",
      title: "After 10th — What's Next?",
      description: "Explore stream options, course selections, and career paths after completing your 10th grade.",
      icon: BookOpen,
      gradient: "from-primary to-primary-light",
      features: ["Stream Selection", "Course Options", "Career Preview", "College Prep"],
    },
    {
      id: "after-12th",
      title: "After 12th — What's Next?",
      description: "Discover colleges, entrance exams, professional courses, and career opportunities.",
      icon: GraduationCap,
      gradient: "from-secondary to-secondary-light",
      features: ["College Finder", "Entrance Exams", "Professional Courses", "Scholarships"],
    },
    {
      id: "pursuing",
      title: "I am pursuing...",
      description: "Get guidance on your current academic path, internships, and career planning.",
      icon: Briefcase,
      gradient: "from-accent to-accent-light",
      features: ["Career Planning", "Internships", "Skill Development", "Job Preparation"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Navigation Modules Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Are You in Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your current stage to get personalized guidance and resources tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className="transform transition duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <Card
                  className="relative overflow-hidden cursor-pointer group h-full bg-card-gradient border-0 shadow-soft hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-5 group-hover:opacity-10 transition-all`} />
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${module.gradient} mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {module.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {module.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient} mr-2 animate-pulse`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full bg-gradient-to-r ${module.gradient} hover:opacity-90 text-white font-semibold transform transition duration-300 hover:scale-105`}
                    >
                      Explore Path
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
