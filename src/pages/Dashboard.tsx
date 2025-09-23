import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BookOpen,
  Users,
  MapPin,
  Calendar,
  User,
  GraduationCap,
  MessageCircle,
  Briefcase,
  Heart,
  Lightbulb,
  Target,
  Trophy,
  ArrowLeft,
  Microscope,
  Calculator,
  Palette,
  Globe,
  Code,
  BookOpenCheck,
  Building,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";

interface StreamData {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  courses: string[];
  careers: string[];
  color: string;
}

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showExploreView, setShowExploreView] = useState(false);

  // ✅ Firebase user state
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  // ✅ Name logic (from Firebase first, fallback localStorage)
  const storedName = localStorage.getItem("userName") || "Student";
  let displayName = user?.displayName || storedName || "Student";

  if (displayName.includes(" ")) displayName = displayName.split(" ")[0];
  if (displayName.includes("@")) displayName = displayName.split("@")[0];
  displayName = displayName.replace(/[^a-zA-Z]/g, "");
  displayName =
    displayName.length > 0
      ? displayName.charAt(0).toUpperCase() + displayName.slice(1)
      : "Student";

  // ✅ User info (fallback)
  const userInfo = location.state?.userInfo || {
    name: displayName,
    educationLevel: "10th Class",
  };

  const streams: StreamData[] = [
    {
      name: "Science Stream",
      icon: Microscope,
      description: "Explore the world of scientific research and technological innovation",
      courses: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
      careers: ["Medical Doctor", "Software Engineer", "Research Scientist", "Biotechnologist", "Data Scientist", "Aerospace Engineer"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Commerce Stream",
      icon: Calculator,
      description: "Master the art of business, finance, and entrepreneurship",
      courses: ["Accounting", "Economics", "Business Studies", "Mathematics", "Statistics"],
      careers: ["Chartered Accountant", "Investment Banker", "Business Analyst", "Marketing Manager", "Financial Advisor", "Entrepreneur"],
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Arts Stream",
      icon: Palette,
      description: "Unleash your creativity and explore humanities and social sciences",
      courses: ["History", "Geography", "Political Science", "Psychology", "Literature"],
      careers: ["Journalist", "Civil Services Officer", "Teacher/Professor", "Psychologist", "Lawyer", "Social Worker"],
      color: "from-purple-500 to-pink-400",
    },
  ];
  const handleFeatureClick = (featureName: string, path?: string) => {
  if (path) {
    navigate(path);
  } else {
    toast({
      title: `${featureName} clicked!`,
      description: "Feature coming soon..",
    });
  }
};

  const handleStreamAction = (streamName: string) => {
    toast({
      title: `Find ${streamName} Colleges`,
      description: "Redirecting to college search...",
    });
    navigate("/colleges", { state: { stream: streamName } });
  };

  // ✅ Proper Firebase logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userName");
      toast({
        title: "Logged out successfully",
        description: "Thank you for using Career Path!",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "❌ Logout failed",
        description: error.message,
      });
    }
  };

  // 🔽 Explore Careers view
  if (showExploreView) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        {/* Profile Summary */}
        <div className="container mx-auto px-4 mt-8">
          <Card className="border-0 shadow-md bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-900/20 dark:to-blue-900/20">
            <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  {userInfo.name.charAt(0)}
                </div>
                <div>
                  <CardTitle className="text-2xl">{userInfo.name}</CardTitle>
                  <CardDescription className="text-base">{userInfo.educationLevel}</CardDescription>
                </div>
              </div>
              <Button variant="outline" onClick={() => navigate("/profile")}>
                View Full Profile
              </Button>
            </CardHeader>
          </Card>
        </div>

        {/* ✅ Explore Careers Content */}
        <div className="container mx-auto px-4 py-8 flex-1">
          <div className="flex items-center space-x-4 mb-8">
            <Button variant="ghost" onClick={() => setShowExploreView(false)} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Career Streams</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your academic stream based on your interests and career goals. Each stream opens up unique opportunities and career paths.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${stream.color} p-4 mb-4`}>
                    <stream.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{stream.name}</CardTitle>
                  <CardDescription className="text-base">{stream.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Popular Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.courses.map((course, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Career Options</h4>
                    <ul className="space-y-2">
                      {stream.careers.map((career, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${stream.color} hover:opacity-90`} onClick={() => handleStreamAction(stream.name)}>
                    Find {stream.name.split(" ")[0]} Colleges
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 🔽 Main Dashboard view
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header />

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {userInfo.name}! 👋</h1>
          <p className="text-xl text-muted-foreground">
            {userInfo.educationLevel === "10th Class"
              ? "Based on your profile, here are your recommendations to continue your educational journey."
              : "Here are your career tools, opportunities, and learning resources."}
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Common Features (10th/12th/UG/PG) */}
          {[
			{
  icon: User,
  title: "Profile",
  description: "Manage your personal information and view your progress.",
  gradient: "from-indigo-500 to-blue-400",
  path: "/profile",
  highlights: ["Personal Info", "Progress", "Achievements"],
},
{
  icon: BookOpen,
  title: "Take Quiz",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Discover your ideal academic stream based on your interests and strengths."
      : "Discover your ideal career stream.",
  status: "Quiz pending – Get started now",
  gradient: "from-blue-500 to-cyan-400",
  path: userInfo.educationLevel === "10th Class" ? "/quiz/10th" : "/quiz/12th",
  highlights: ["Stream Selection", "Career Match", "Skill Check"],
},
{
  icon: Globe,
  title: "Explore Careers",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Browse career paths and opportunities in different fields."
      : "Browse career options across fields.",
  gradient: "from-purple-500 to-pink-400",
  path: "/careers",
  highlights: ["Fields", "Job Roles", "Future Trends"],
},
{
  icon: Building,
  title: "Find Colleges",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Search and discover government and private colleges in Jammu & Kashmir."
      : "Search top colleges nationwide.",
  gradient: "from-green-500 to-emerald-400",
  path: "/colleges",
  highlights: ["Govt Colleges", "Private Colleges", "Top Rankings"],
},
{
  icon: MessageCircle,
  title: "Mentorship",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Ask career questions, get skill guidance, and 24/7 AI mentoring."
      : "Get instant answers & career advice.",
  gradient: "from-violet-500 to-purple-400",
  path: "/mentorship",
  highlights: ["AI Mentor", "Career Guidance", "Skill Advice"],
},
{
  icon: Users,
  title: "Collaboration Hub",
  description: "Connect with peers, share projects, and collaborate.",
  gradient: "from-blue-600 to-indigo-500",
  path: "/collaboration",
  highlights: ["Group Projects", "Peer Network", "Discussions"],
},
{ 
  icon: Globe, 
  title: "Inner Orbit", 
  description: "Track your progress and learning milestones.", 
  gradient: "from-blue-600 to-cyan-500",
  path: "/inner-orbit",
  highlights: ["Progress Tracker", "Milestones", "Goals"],
},
{ 
  icon: Trophy, 
  title: "PrepIQ", 
  description: "Smart preparation tool for competitive exams.", 
  gradient: "from-red-600 to-pink-500",
  path: "/prepiq",
  highlights: ["JEE", "NEET", "UPSC"],
},
{
  icon: Calendar,
  title: "Timeline Tracker",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Stay updated with important academic dates and deadlines."
      : "Track important dates & exams.",
  gradient: "from-orange-500 to-red-400",
  path: "/timeline",
  highlights: ["Exams", "Deadlines", "Events"],
},
{
  icon: GraduationCap,
  title: "Browse Scholarships",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Find scholarships tailored to your academic level and region."
      : "Scholarships for higher education students.",
  gradient: "from-teal-500 to-cyan-400",
  path: "/scholarships",
  highlights: ["Merit-Based", "Need-Based", "Govt/Private"],
},
{
  icon: MessageCircle,
  title: "AI Mentor Chat",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Ask career questions, get skill guidance, and 24/7 AI mentoring."
      : "Get instant answers & career advice.",
  gradient: "from-violet-500 to-purple-400",
  path: "/mentor",
  highlights: ["24/7 Chat", "Career Tips", "Skill Growth"],
},
{
  icon: Briefcase,
  title: "Jobs & Internships",
  description:
    userInfo.educationLevel === "10th Class"
      ? "Discover jobs and internships matching your skills."
      : "Early work exposure opportunities.",
  gradient: "from-pink-500 to-rose-400",
  path: "/jobs",
  highlights: ["Jobs", "Internships", "Work Experience"],
},
{
  icon: Heart,
  title: "Passion Explorer",
  description: "Find activities, hobbies, and skill paths that align with your passions.",
  gradient: "from-amber-500 to-orange-400",
  path: "/passion",
  highlights: ["Hobbies", "Creativity", "Skill Paths"],
},


			{
  icon: MessageCircle,
  title: "Communication Skills",
  description: "Improve speaking, listening, and presentation with real practice tools.",
  highlights: ["JAM", "Fluency", "Grammar", "Pronunciation", "Listening"],
  gradient: "from-indigo-500 to-blue-400",
  path: "/communication",
},
{
  icon: Target,
  title: "Aptitude",
  description: "Sharpen problem-solving and reasoning skills with daily practice.",
  highlights: ["10th", "12th", "Streak Maintaining"],
  gradient: "from-green-500 to-emerald-400",
  path: "/aptitude",
},
{
  icon: BookOpen,
  title: "Previous Year Papers",
  description: "Practice with real exam questions to prepare effectively.",
  highlights: ["JEE", "NEET", "UPSC"],
  gradient: "from-yellow-500 to-orange-400",
  path: "/previous-papers",
},      
          ].map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
              onClick={() => handleFeatureClick(feature.title, feature.path)}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-2">{feature.description}</CardDescription>
				 {/* 👉 ADD THIS BLOCK HERE */}
      {feature.highlights && (
        <div className="flex flex-wrap gap-2 mt-3">
          {feature.highlights.map((item: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}
      {/* 👆 END */}
                {feature.status && <p className="text-sm text-orange-500 font-medium">{feature.status}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 12th Class Extra Features */}
        {userInfo.educationLevel === "12th Class" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Users,
                  title: "Collaboration Hub",
                  description: "Connect with peers, share projects, and collaborate.",
                  gradient: "from-blue-600 to-indigo-500",
                  path: "/collaboration",
                },
                {
                  icon: Target,
                  title: "Opportunities",
                  description: "Find jobs, internships, and volunteer roles curated for 12th students.",
                  gradient: "from-green-600 to-teal-500",
                  path: "/opportunities",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
                  onClick={() => handleFeatureClick(feature.title, feature.path)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tools */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Target, title: "AI Recommendation", description: "Personalized suggestions for career and academics.", gradient: "from-purple-600 to-indigo-500" },
                    { icon: Globe, title: "Inner Orbit", description: "Track your progress and learning milestones.", gradient: "from-blue-600 to-cyan-500" },
                    { icon: Lightbulb, title: "Future Prediction", description: "AI-powered career forecasting based on current skills.", gradient: "from-amber-600 to-orange-500" },
                    { icon: BookOpenCheck, title: "Resume Generator", description: "Build a professional resume with one click.", gradient: "from-green-600 to-emerald-500" },
                    { icon: Heart, title: "Braille-Pretor", description: "Accessibility tool for differently-abled students.", gradient: "from-pink-600 to-rose-500" },
                    { icon: Trophy, title: "PrepIQ", description: "Smart preparation tool for competitive exams.", gradient: "from-red-600 to-pink-500" },
                  ].map((tool, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0" onClick={() => handleFeatureClick(tool.title, tool.path)}>
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.gradient} p-3 mb-4`}>
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Undergraduate Section */}
        {userInfo.educationLevel === "Undergraduate" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Briefcase, title: "Internships", description: "Gain real-world experience with curated internships.", gradient: "from-blue-500 to-indigo-500", path: "/internships" },
                { icon: Target, title: "Career Guidance", description: "Explore career options aligned with your UG degree.", gradient: "from-green-500 to-emerald-400", path: "/career-guidance" },
                { icon: BookOpenCheck, title: "Skill Builder", description: "Upskill with certifications and online courses.", gradient: "from-purple-500 to-pink-400", path: "/skills" },
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0" onClick={() => handleFeatureClick(feature.title, feature.path)}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tools */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-center">UG Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Lightbulb, title: "Research Explorer", description: "Find UG research and project opportunities.", gradient: "from-yellow-500 to-orange-500" },
                    { icon: Globe, title: "Exchange Programs", description: "Explore student exchange and study abroad programs.", gradient: "from-blue-500 to-teal-500" },
                    { icon: Trophy, title: "Exam Prep", description: "Tools to prepare for competitive UG-level exams.", gradient: "from-red-500 to-pink-500" },
                  ].map((tool, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0" onClick={() => handleFeatureClick(tool.title)}>
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.gradient} p-3 mb-4`}>
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Postgraduate Section */}
        {userInfo.educationLevel === "Postgraduate" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Globe, title: "Research Opportunities", description: "Find PhD, research projects, and global fellowships.", gradient: "from-red-500 to-orange-400", path: "/research" },
                { icon: Users, title: "Networking", description: "Connect with alumni, professors, and industry leaders.", gradient: "from-blue-600 to-indigo-500", path: "/networking" },
                { icon: Trophy, title: "Competitive Exams", description: "Prepare for NET, GATE, GRE, and other PG-level exams.", gradient: "from-pink-600 to-purple-500", path: "/exams" },
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0" onClick={() => handleFeatureClick(feature.title, feature.path)}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tools */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-center">PG Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: BookOpen, title: "Thesis Builder", description: "Organize and structure your PG thesis easily.", gradient: "from-indigo-500 to-purple-500" },
                    { icon: Briefcase, title: "Global Fellowships", description: "Apply for fellowships and funded opportunities.", gradient: "from-green-500 to-teal-500" },
                    { icon: Lightbulb, title: "Innovation Hub", description: "Showcase research and connect with industry.", gradient: "from-yellow-500 to-orange-500" },
                  ].map((tool, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0" onClick={() => handleFeatureClick(tool.title)}>
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.gradient} p-3 mb-4`}>
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Logout Button */}
        <div className="text-center mt-8">
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;