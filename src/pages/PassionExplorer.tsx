import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PassionExplorer = () => {
	const navigate = useNavigate();

  // Hardcoded passion data
  const passions = [
    {
      title: "Content Creation",
      opportunities: ["YouTuber", "Social Media Manager", "Podcaster", "Blogger / Vlogger", "Copywriter"],
      platforms: "YouTube, Instagram, TikTok, Medium, Substack",
      resources: "Canva, Adobe Creative Suite, TubeBuddy, Final Cut Pro"
    },
    {
      title: "Fitness & Wellness",
      opportunities: ["Fitness Trainer", "Yoga Instructor", "Dietitian", "Physical Therapist", "Sports Coach"],
      platforms: "Instagram, YouTube, ClassPass, Mindbody",
      resources: "Certifications (NASM, ACE)"
    },
    {
      title: "Culinary Arts",
      opportunities: ["Chef", "Food Blogger", "Restaurant Manager", "Caterer", "Recipe Developer"],
      platforms: "Instagram, YouTube, Food Network",
      resources: "Culinary schools, food photography courses"
    },
    {
      title: "Gaming & Esports",
      opportunities: ["Esports Player", "Streamer", "Game Developer", "Gaming Journalist", "Community Manager"],
      platforms: "Twitch, YouTube Gaming, Steam",
      resources: "Game development courses"
    },
    {
      title: "Animal Training",
      opportunities: ["Animal Trainer", "Veterinary Technician", "Groomer", "Shelter Manager", "Pet Sitter"],
      platforms: "APDT, IAABC",
      resources: "Certification programs"
    },
    {
      title: "AI & Technology",
      opportunities: ["AI Operator", "Prompt Engineer", "Data Scientist", "Machine Learning Engineer", "AI Ethicist"],
      platforms: "OpenAI, Hugging Face, Kaggle",
      resources: "Online courses (Coursera, edX)"
    },
    {
      title: "Voice Acting/Dubbing",
      opportunities: ["Voice-over Artist", "Audiobook Narrator", "Podcast Host", "Sound Engineer"],
      platforms: "ACX, Voice.com",
      resources: "Vocal coaching, home studio equipment"
    },
    {
      title: "Drone Piloting",
      opportunities: ["Drone Pilot", "Aerial Photographer", "Surveyor"],
      platforms: "FAA, DroneDeploy",
      resources: "FAA Part 107 certification"
    },
    {
      title: "Car & Bike Tuning",
      opportunities: ["Automotive Mechanic", "Performance Tuner", "Restoration Specialist"],
      platforms: "YouTube, automotive forums",
      resources: "Technical schools, ASE certification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Back Button */}
        <Link 
          to="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Explore Your Passions</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Find career opportunities and resources based on what you love to do
          </p>
        </div>

        {/* Passion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((passion, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => console.log(`Exploring ${passion.title}`)}
            >
              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {passion.title}
                </h3>
                
                {/* Opportunities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                    Career Opportunities
                  </h4>
                  <ul className="space-y-1">
                    {passion.opportunities.map((opportunity, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Platforms */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                    Platforms
                  </h4>
                  <p className="text-sm text-foreground">
                    {passion.platforms}
                  </p>
                </div>
                
                {/* Resources */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                    Resources
                  </h4>
                  <p className="text-sm text-foreground">
                    {passion.resources}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassionExplorer;