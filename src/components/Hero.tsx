import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/pic1.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 pt-8 lg:pt-16 pb-20 lg:pb-28 scroll-mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-7 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-cyan-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  The Right Career Starts with Right Guidance
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the right courses, careers, and colleges — guided by
                verified insights, smart planning, and trusted support.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Information
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Offline Support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Multi-language
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="Students using Career_path for career guidance"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-accent rounded-full opacity-15 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
