import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  MapPin, 
  Smartphone, 
  TrendingUp, 
  Globe,
  BookOpen,
  Award
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Career Quiz",
      description: "Gamified aptitude assessment using Myers-Briggs personality analysis and adaptive ML algorithms for 30% more accurate career recommendations.",
      badge: "Smart AI",
      color: "primary"
    },
    {
      icon: <Database className="w-8 h-8 text-secondary" />,
      title: "Live Government Data",
      description: "Real-time integration with AISHE, NIRF, and Scholarships.gov.in for authentic college rankings, cutoffs, and admission deadlines.",
      badge: "Official APIs",
      color: "secondary"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Nearby College Finder",
      description: "Location-based college search with filters for fees, courses, and NAAC ratings. Perfect for students in rural and urban areas.",
      badge: "Location-Based",
      color: "accent"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Offline-First Design",
      description: "SQLite local database ensures access to essential information even without internet. Auto-syncs when connected.",
      badge: "Rural Ready",
      color: "primary"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Career Path Visualization",
      description: "Interactive flowcharts showing degree → exams → jobs → salary progression with real industry data and growth opportunities.",
      badge: "Visual Learning",
      color: "secondary"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Multi-Language Support",
      description: "Available in Hindi, Telugu, Tamil, and more regional languages to serve 80% of rural students effectively.",
      badge: "Inclusive",
      color: "accent"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Scholarship Recommendations",
      description: "ML-powered matching with NSP scholarships based on income, caste, and state. Never miss a deadline or opportunity.",
      badge: "Financial Aid",
      color: "primary"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Skill Gap Analysis",
      description: "Identifies learning gaps and recommends SWAYAM, NPTEL, and other government courses to bridge skill deficiencies.",
      badge: "Skill Building",
      color: "secondary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Comprehensive Career Guidance
            <span className="block text-primary">Powered by Real Data</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform integrates official government APIs to provide the most accurate and up-to-date 
            information for your educational journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-0 shadow-soft bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Government Integration Highlight */}
        <div className="mt-16 p-8 rounded-2xl gradient-primary text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">Trusted by Government</h3>
              <p className="opacity-90">
                Official integration with Ministry of Education APIs ensures 100% authentic data.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold">AISHE</p>
                <p className="text-sm opacity-80">College Database</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">NIRF</p>
                <p className="text-sm opacity-80">Rankings & Cutoffs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">NSP</p>
                <p className="text-sm opacity-80">Scholarships Portal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;