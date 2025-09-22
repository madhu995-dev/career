import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Edit, Users, Building, Star, Calendar, Trophy, Target, BookOpen, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const userStats = [
    { icon: Users, title: "Students Guided", value: "10,000+", color: "text-blue-400" },
    { icon: Building, title: "Verified Colleges", value: "3,000+", color: "text-green-400" },
    { icon: Star, title: "Scholarships", value: "500+", color: "text-yellow-400" }
  ];

  const quickTools = [
    { icon: Calendar, title: "Study Planner", description: "Plan your academic schedule" },
    { icon: Target, title: "Career Quiz", description: "Discover your ideal path" },
    { icon: Users, title: "Study Groups", description: "Connect with peers" }
  ];

  const achievements = [
    { icon: Trophy, title: "Career Path Explorer", color: "text-yellow-400" },
    { icon: Star, title: "Quiz Master", color: "text-purple-400" },
    { icon: Target, title: "Goal Achiever", color: "text-green-400" }
  ];

  const progressData = [
    { title: "Career Quiz Progress", percentage: 75 },
    { title: "Personal Skills", percentage: 60 },
    { title: "Academic Journey", percentage: 90 }
  ];

  const quizResults = [
    { 
      title: "Personality Test", 
      description: "You scored 90% in this test", 
      color: "bg-green-400",
      status: "Excellent" 
    },
    { 
      title: "Career Assessment", 
      description: "Science stream recommended", 
      color: "bg-blue-400",
      status: "Complete" 
    },
    { 
      title: "Skills Evaluation", 
      description: "Strong analytical abilities", 
      color: "bg-purple-400",
      status: "Good" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Back to Dashboard */}
        <Link 
          to="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Profile Header Card */}
        <Card className="mb-8 overflow-hidden bg-gradient-to-r from-primary/90 to-purple-600 text-primary-foreground border-0 shadow-glow">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-0 right-0 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                onClick={() => console.log('Edit profile clicked')}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>

              <Avatar className="w-24 h-24 mb-4 border-4 border-white/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-white/20 text-primary-foreground text-2xl">
                  <User className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>

              <h2 className="text-3xl font-bold mb-2">Student Name</h2>
              <p className="text-lg opacity-90 mb-8">Class 10 Student</p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {userStats.map((stat, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 text-primary-foreground backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                      <p className="text-2xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm opacity-80">{stat.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Quick Tools */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Quick Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickTools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => console.log(`Opening ${tool.title}`)}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <tool.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{tool.title}</h4>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Achievements */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  My Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    <span className="font-medium">{achievement.title}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* My Progress */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  My Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {progressData.map((progress, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{progress.title}</span>
                      <span className="text-muted-foreground">{progress.percentage}%</span>
                    </div>
                    <Progress value={progress.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quiz Results */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Quiz Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{result.title}</h4>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${result.color}`}></div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => console.log(`Viewing ${result.title} details`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;