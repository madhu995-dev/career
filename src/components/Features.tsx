import {
  MessageCircle,
  GraduationCap,
  Globe,
  Users,
  MapPin,
  Briefcase,
  Star,
  Heart,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = ({ handleFeatureClick }: { handleFeatureClick: (feature: string) => void }) => {
  // 🔹 Stage-based modules (After 10th / 12th / Pursuing)
  const modules = [
    {
      id: "after-10th",
      title: "After 10th — What's Next?",
      description:
        "Explore stream options, course selections, and career paths after completing your 10th grade.",
      icon: BookOpen,
      gradient: "from-blue-500 to-blue-400",
      button: "bg-blue-500 hover:bg-blue-600",
      features: ["Stream Selection", "Course Options", "Career Preview", "College Prep"],
    },
    {
      id: "after-12th",
      title: "After 12th — What's Next?",
      description:
        "Discover colleges, entrance exams, professional courses, and career opportunities.",
      icon: GraduationCap,
      gradient: "from-green-500 to-green-400",
      button: "bg-green-500 hover:bg-green-600",
      features: ["College Finder", "Entrance Exams", "Professional Courses", "Scholarships"],
    },
    {
      id: "pursuing",
      title: "I am pursuing...",
      description:
        "Get guidance on your current academic path, internships, and career planning.",
      icon: Briefcase,
      gradient: "from-orange-500 to-orange-400",
      button: "bg-orange-500 hover:bg-orange-600",
      features: ["Career Planning", "Internships", "Skill Development", "Job Preparation"],
    },
  ];

  // 🔹 Original features (AI Quiz, Scholarships, etc.)
  const features = [
    {
      icon: MessageCircle,
      title: "AI Career Quiz",
      description:
        "Take our intelligent assessment to discover your perfect career path based on your personality, skills, and interests.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Finder",
      description:
        "Find thousands of scholarships tailored to your profile with special focus on Jammu & Kashmir and opportunities across India.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: MessageCircle,
      title: "AI Mentor Chat",
      description:
        "Get personalized career guidance, skill development advice, and industry insights from our AI-powered mentor available 24/7.",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Globe,
      title: "Career Explorer",
      description:
        "Visualize different career paths in 3D and explore what each profession looks like with interactive career information.",
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: Users,
      title: "Collaboration Hub",
      description:
        "Connect with like-minded students, form teams, and collaborate on innovative projects that match your skills.",
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      icon: MapPin,
      title: "Smart Location Search",
      description:
        "Find schools and colleges near you with our intelligent location-based search and interactive map.",
      gradient: "from-teal-500 to-cyan-400",
    },
    {
      icon: Briefcase,
      title: "Placement Predictor",
      description: "Predict your career opportunities based on your skills and experience.",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      icon: Star,
      title: "Resume Generator",
      description: "Create professional resumes tailored to your career goals.",
      gradient: "from-pink-500 to-rose-400",
    },
    {
      icon: Heart,
      title: "Course Recommender",
      description: "Discover courses that align with your career aspirations.",
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  return (
    <>
      {/* 🎯 Stage-based Guidance Section */}
      <section id="features" className="py-20 bg-muted/30 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where Are You in Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your current stage to get personalized guidance and resources tailored to your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Card
                  key={module.id}
                  className="relative overflow-hidden rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${module.gradient} mb-6`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    {module.description}
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient} mr-2 animate-pulse`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
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

      {/* 🚀 Platform Features Section */}
      <section id="platform-features" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Everything You Need for Your Career Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform combines AI-powered insights, real-time data, and community
              collaboration to guide you towards success in your chosen career path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card/50 backdrop-blur"
                onClick={() => handleFeatureClick(feature.title)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
