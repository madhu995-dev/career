import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/pic2.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Powered by Government APIs
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Smart Path to
                <span className="block gradient-hero bg-clip-text text-transparent">
                  Career Success
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Get personalized career guidance with real-time data from AISHE, NIRF, and Scholarships.gov.in. 
                Make informed decisions about your education and future.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">10,000+</p>
                  <p className="text-xs text-muted-foreground">Students Guided</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">3,000+</p>
                  <p className="text-xs text-muted-foreground">Verified Colleges</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">500+</p>
                  <p className="text-xs text-muted-foreground">Scholarships</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/career-quiz">
                <Button variant="hero" size="lg" className="animate-pulse-glow">
                  Take Career Quiz
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/colleges">
                <Button variant="outline" size="lg">
                  Explore Colleges
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Live Government Data
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