import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Play, 
  Clock, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const QuizCTA = () => {
  const benefits = [
    {
      icon: <Target className="w-5 h-5 text-primary" />,
      text: "Personalized career recommendations"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-secondary" />,
      text: "College & course matching"
    },
    {
      icon: <Users className="w-5 h-5 text-accent" />,
      text: "Scholarship opportunities"
    }
  ];

  const stats = [
    { value: "92%", label: "Accuracy Rate" },
    { value: "15 min", label: "Quick Assessment" },
    { value: "50+", label: "Career Paths" }
  ];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="border-0 shadow-strong bg-gradient-to-r from-card to-card/95 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Badge variant="secondary" className="inline-flex items-center gap-2">
                      <Play className="w-3 h-3" />
                      Start Your Journey
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                      Discover Your Perfect
                      <span className="block gradient-hero bg-clip-text text-transparent">
                        Career Path
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Take our AI-powered aptitude quiz to get personalized recommendations 
                      based on your interests, skills, and goals.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <span className="text-sm font-medium">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quiz Info */}
                  <div className="flex items-center gap-6 p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium">15 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="font-medium">10,000+ completed</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/career-quiz">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto animate-pulse-glow">
                      Start Career Quiz
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Right Content - Stats */}
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-background/80 rounded-xl shadow-soft">
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Sample Questions Preview */}
                  <div className="p-6 bg-background/80 rounded-xl shadow-soft">
                    <h4 className="font-semibold mb-4">Sample Question:</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        "What motivates you most in your ideal career?"
                      </p>
                      <div className="space-y-2">
                        {["Solving complex problems", "Helping others", "Creative expression", "Leadership opportunities"].map((option, index) => (
                          <Button 
                            key={index} 
                            variant="quiz" 
                            size="sm" 
                            className="w-full justify-start text-xs"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Your quiz results will include personalized college recommendations, scholarship matches, 
              and detailed career pathway visualizations powered by real government data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizCTA;