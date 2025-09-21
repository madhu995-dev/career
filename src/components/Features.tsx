import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen,
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
      gradient: "from-blue-500 to-blue-400",
      button: "bg-blue-500 hover:bg-blue-600",
      features: ["Stream Selection", "Course Options", "Career Preview", "College Prep"],
    },
    {
      id: "after-12th",
      title: "After 12th — What's Next?",
      description: "Discover colleges, entrance exams, professional courses, and career opportunities.",
      icon: GraduationCap,
      gradient: "from-green-500 to-green-400",
      button: "bg-green-500 hover:bg-green-600",
      features: ["College Finder", "Entrance Exams", "Professional Courses", "Scholarships"],
    },
    {
      id: "pursuing",
      title: "I am pursuing...",
      description: "Get guidance on your current academic path, internships, and career planning.",
      icon: Briefcase,
      gradient: "from-orange-500 to-orange-400",
      button: "bg-orange-500 hover:bg-orange-600",
      features: ["Career Planning", "Internships", "Skill Development", "Job Preparation"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Are You in Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your current stage to get personalized guidance and resources tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card
                key={module.id}
                className="relative overflow-hidden rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon with gradient */}
                <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${module.gradient} mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {module.description}
                </p>

                {/* Features */}
                <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {module.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient} mr-2 animate-pulse`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${module.button} text-white font-semibold transform transition duration-300 hover:scale-105`}
                >
                  Explore Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
