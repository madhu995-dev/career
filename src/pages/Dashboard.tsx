import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const storedName = localStorage.getItem("userName") || "User";

  // Process name
  let displayName = storedName.trim();
  if (displayName.includes(" ")) displayName = displayName.split(" ")[0];
  if (displayName.includes("@")) displayName = displayName.split("@")[0];
  displayName = displayName.replace(/[^a-zA-Z]/g, "");
  displayName =
    displayName.length > 0
      ? displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase()
      : "User";

  const features = [
    {
      title: "Location-Based College Finder",
      description:
        "Discover nearby colleges and universities using your location. Get directions, view campus details, and explore admission requirements.",
      icon: MapPin,
      highlights: [
        "GPS Integration",
        "Offline Maps",
        "Campus Details",
        "Admission Info",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Gamified Aptitude Quiz",
      description:
        "Take our engaging AI-powered quiz to discover your strengths and get personalized career recommendations with clear roadmaps.",
      icon: Brain,
      highlights: [
        "AI-Powered",
        "Personalized Results",
        "Career Roadmaps",
        "Progress Tracking",
      ],
      gradient: "from-purple-500 to-pink-500",
      route: "/quiz", // 👈 added route for navigation
    },
    {
      title: "Offline Access",
      description:
        "Download content packs for your district or state. Access college information, scholarships, and resources even without internet.",
      icon: Wifi,
      highlights: [
        "Content Packs",
        "Offline Storage",
        "Auto Sync",
        "Rural Friendly",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Career Assistant",
      description:
        "Get instant answers to your career questions with our intelligent chatbot that understands your context and goals.",
      icon: Bot,
      highlights: [
        "24/7 Available",
        "Context Aware",
        "Personalized Advice",
        "Multi-language",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Scholarship Discovery",
      description:
        "Find scholarships you're eligible for using verified government data from scholarships.gov.in and other official sources.",
      icon: Trophy,
      highlights: [
        "Government Data",
        "Eligibility Matching",
        "Application Guidance",
        "Deadline Alerts",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Multi-language Support",
      description:
        "Access Career Path in English, Hindi, and regional languages with simple language switching and accessibility features.",
      icon: Globe,
      highlights: [
        "Regional Languages",
        "Accessibility",
        "Simple Interface",
        "Voice Support",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-12 flex-1">
        {/* Welcome Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Welcome back,{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {displayName}!
            </span>
            <br />
            Continue your{" "}
            <span className="text-blue-600 dark:text-blue-400">
              career journey
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to explore new opportunities? Discover scholarships, take
            career assessments, and connect with mentors to advance your
            educational journey.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              onClick={() => navigate("/quiz")} // 👈 direct button to quiz
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
          </div>
        </div>

        {/* Extended Features Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  onClick={() => feature.route && navigate(feature.route)} // 👈 navigate if route exists
                  className="group relative overflow-hidden hover:-translate-y-2 hover:scale-105 transition-transform duration-500 bg-card-gradient border-0 shadow-soft hover:shadow-xl cursor-pointer"
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
        </section>
      </div>

      {/* ✅ Footer added for Dashboard */}
      <Footer />
    </div>
  );
};

export default Dashboard;
