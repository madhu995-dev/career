import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Brain,
  Wifi,
  Bot,
  Trophy,
  Globe,
  Users,
  MessageSquare,
  Award,
  Map,
  TrendingUp,
  FileText,
  BookOpen,
  Target,
  Accessibility,
  Briefcase,
  GraduationCap,
  BarChart3,
  Laptop,
  BookMarked,
  Layers,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const storedName = localStorage.getItem("userName") || "User";

  // Format username
  let displayName = storedName.trim();
  if (displayName.includes(" ")) displayName = displayName.split(" ")[0];
  if (displayName.includes("@")) displayName = displayName.split("@")[0];
  displayName = displayName.replace(/[^a-zA-Z]/g, "");
  displayName =
    displayName.length > 0
      ? displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase()
      : "User";

  // Features list (merged all features)
  const features = [
    {
      icon: MapPin,
      title: "Location-Based College Finder",
      description:
        "Discover nearby colleges and universities using your location. Get directions, view campus details, and explore admission requirements.",
      highlights: ["GPS Integration", "Offline Maps", "Campus Details", "Admission Info"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Gamified Aptitude Quiz",
      description:
        "Take our engaging AI-powered quiz to discover your strengths and get personalized career recommendations with clear roadmaps.",
      highlights: ["AI-Powered", "Personalized Results", "Career Roadmaps", "Progress Tracking"],
      gradient: "from-purple-500 to-pink-500",
      route: "/quiz",
    },
    {
      icon: Wifi,
      title: "Offline Access",
      description:
        "Download content packs for your district or state. Access college information, scholarships, and resources even without internet.",
      highlights: ["Content Packs", "Offline Storage", "Auto Sync", "Rural Friendly"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Bot,
      title: "AI Career Assistant",
      description:
        "Get instant answers to your career questions with our intelligent chatbot that understands your context and goals.",
      highlights: ["24/7 Available", "Context Aware", "Personalized Advice", "Multi-language"],
      gradient: "from-orange-500 to-red-500",
      route: "/chat", // ✅ Step 2: Navigate to GeminiChat
    },
    {
      icon: Trophy,
      title: "Scholarship Discovery",
      description:
        "Find scholarships you're eligible for using verified government data from scholarships.gov.in and other official sources.",
      highlights: ["Government Data", "Eligibility Matching", "Application Guidance", "Deadline Alerts"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description:
        "Access Career Path in English, Hindi, and regional languages with simple language switching and accessibility features.",
      highlights: ["Regional Languages", "Accessibility", "Simple Interface", "Voice Support"],
      gradient: "from-indigo-500 to-purple-500",
    },

    // --- Extra Features ---
    {
      icon: Award,
      title: "Scholarship Finder",
      description: "Find thousands of scholarships tailored to your profile with focus on opportunities across India.",
      highlights: ["Scholarships", "Eligibility", "Guidance", "National Data"],
      gradient: "from-secondary to-accent",
    },
    {
      icon: MessageSquare,
      title: "AI Mentor Chat",
      description: "Get personalized career guidance, skill development advice, and industry insights from our AI mentor.",
      highlights: ["Personal Mentor", "Skill Guidance", "Career Advice", "24/7 AI"],
      gradient: "from-hero to-secondary",
    },
    {
      icon: Map,
      title: "Career Explorer",
      description: "Visualize different career paths in 3D and explore interactive career information.",
      highlights: ["3D Explorer", "Career Data", "Interactive", "Guidance"],
      gradient: "from-accent to-primary",
    },
    {
      icon: Users,
      title: "Collaboration Hub",
      description: "Connect with like-minded students, form teams, and collaborate on projects.",
      highlights: ["Team Projects", "Networking", "Peer Learning", "Community"],
      gradient: "from-success to-hero",
    },
    {
      icon: TrendingUp,
      title: "Placement Predictor",
      description: "Predict your career opportunities based on your skills and experience.",
      highlights: ["Job Prediction", "Analytics", "Skill-Based", "AI Model"],
      gradient: "from-secondary to-primary",
    },
    {
      icon: FileText,
      title: "Resume Generator",
      description: "Create professional resumes tailored to your career goals.",
      highlights: ["AI Resume", "Professional Format", "Quick Export", "ATS Friendly"],
      gradient: "from-hero to-success",
    },
    {
      icon: BookOpen,
      title: "Course Recommender",
      description: "Discover courses that align with your career aspirations.",
      highlights: ["Personalized Courses", "E-learning", "Guided Paths", "Skill Development"],
      gradient: "from-accent to-secondary",
    },
    {
      icon: Target,
      title: "Inner Orbit",
      description: "Helps users stabilize their mindset as they 'orbit' their goals.",
      highlights: ["Mindset Training", "Goal Tracking", "Wellbeing", "Focus"],
      gradient: "from-primary to-hero",
    },
    {
      icon: Accessibility,
      title: "BRAILLE-preter",
      description: "Integrated Braille support ensures accessibility for visually impaired users.",
      highlights: ["Braille", "Accessibility", "Inclusive", "Assistive Tech"],
      gradient: "from-success to-accent",
    },
    {
      icon: Briefcase,
      title: "Jobs & Internships",
      description: "Explore the latest job openings and internships tailored to your profile.",
      highlights: ["Jobs", "Internships", "Career Growth", "Industry Links"],
      gradient: "from-secondary to-hero",
    },
    {
      icon: GraduationCap,
      title: "Exam Prep Tools",
      description: "Access mock tests, quizzes, and preparation guides for competitive exams.",
      highlights: ["Mock Tests", "Exam Strategy", "Performance Analysis", "Guides"],
      gradient: "from-primary to-secondary",
    },
    {
      icon: BarChart3,
      title: "Skill Analytics",
      description: "Track your progress with AI-driven analytics to identify strengths and weaknesses.",
      highlights: ["Skill Tracking", "Analytics", "Progress Charts", "AI Insights"],
      gradient: "from-success to-primary",
    },
    {
      icon: Laptop,
      title: "Virtual Workshops",
      description: "Join live workshops, webinars, and career fairs hosted by experts.",
      highlights: ["Live Events", "Workshops", "Expert Talks", "Career Fairs"],
      gradient: "from-hero to-secondary",
    },
    {
      icon: BookMarked,
      title: "Learning Resources",
      description: "Access curated e-books, tutorials, and study material to boost knowledge.",
      highlights: ["E-books", "Study Material", "Tutorials", "Guides"],
      gradient: "from-primary to-success",
    },
    {
      icon: Layers,
      title: "Portfolio Builder",
      description: "Showcase your projects, skills, and achievements in a digital portfolio.",
      highlights: ["Projects", "Portfolio", "Skills Showcase", "Personal Brand"],
      gradient: "from-secondary to-accent",
    },
  ];

  const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
    <div
      key={index}
      className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => feature.route && navigate(feature.route)}
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-bounce`}>
        <feature.icon className="h-6 w-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {feature.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2">
        {feature.highlights.map((highlight: string, idx: number) => (
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
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-12 flex-1">
        {/* Welcome Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Welcome back,{" "}
            <span className="text-blue-600 dark:text-blue-400">{displayName}!</span>
            <br />
            Continue your{" "}
            <span className="text-blue-600 dark:text-blue-400">career journey</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to explore new opportunities? Discover scholarships, take
            career assessments, and connect with mentors to advance your educational journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              onClick={() => navigate("/quiz")}
            >
              Take Career Quiz →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 dark:text-gray-200"
            >
              Browse Scholarships
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
              onClick={() => navigate("/chat")} // ✅ Step 3: Direct button to chat
            >
              Open Career Assistant
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <section className="pt-20 lg:pt-28">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform combines AI technology, government data, and offline
              capabilities to provide reliable career guidance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
