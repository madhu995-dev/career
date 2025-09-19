import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Brain, Trophy, Bot, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Location-Based College Finder",
      description: "Discover nearby colleges and universities using your location. Get directions, view campus details, and explore admission requirements.",
      icon: MapPin,
      highlights: ["GPS Integration", "Offline Maps", "Campus Details", "Admission Info"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Gamified Aptitude Quiz",
      description: "Take our engaging AI-powered quiz to discover your strengths and get personalized career recommendations with clear roadmaps.",
      icon: Brain,
      highlights: ["AI-Powered", "Personalized Results", "Career Roadmaps", "Progress Tracking"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Offline Access",
      description: "Download content packs for your district or state. Access college information, scholarships, and resources even without internet.",
      icon: Wifi,
      highlights: ["Content Packs", "Offline Storage", "Auto Sync", "Rural Friendly"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Career Assistant",
      description: "Get instant answers to your career questions with our intelligent chatbot that understands your context and goals.",
      icon: Bot,
      highlights: ["24/7 Available", "Context Aware", "Personalized Advice", "Multi-language"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Scholarship Discovery",
      description: "Find scholarships you're eligible for using verified government data from scholarships.gov.in and other official sources.",
      icon: Trophy,
      highlights: ["Government Data", "Eligibility Matching", "Application Guidance", "Deadline Alerts"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Multi-language Support",
      description: "Access Career Path in English, Hindi, and regional languages with simple language switching and accessibility features.",
      icon: Globe,
      highlights: ["Regional Languages", "Accessibility", "Simple Interface", "Voice Support"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="features" className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Career Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform combines AI technology, government data, and offline capabilities 
            to provide reliable career guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:-translate-y-2 hover:scale-105 transition-transform duration-500 bg-card-gradient border-0 shadow-soft hover:shadow-xl"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs transform transition duration-300 group-hover:scale-105"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
