import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Briefcase, Building, MapPin, Calendar, DollarSign, Users, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const JobsInternships = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const opportunities = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Solutions Pvt Ltd",
      type: "Internship",
      match: 95,
      description: "3-month summer internship working on real-world software projects using React and Node.js.",
      location: "Srinagar, J&K",
      salary: "₹15,000/month",
      dueDate: "Dec 15, 2024",
      applicants: 45,
      skills: ["React", "JavaScript", "Node.js"],
      experience: "Fresher"
    },
    {
      id: 2,
      title: "Research Assistant Program",
      company: "Indian Institute of Technology",
      type: "Internship",
      match: 88,
      description: "Work with PhD students and faculty on cutting-edge research in Computer Science.",
      location: "Delhi",
      salary: "₹20,000/month",
      dueDate: "Jan 10, 2025",
      applicants: 78,
      skills: ["Research", "Python", "Data Analysis"],
      experience: "Fresher"
    },
    {
      id: 3,
      title: "Junior Data Analyst",
      company: "Analytics Corp",
      type: "Job",
      match: 82,
      description: "Entry-level position analyzing business data and creating insights for decision making.",
      location: "Jammu, J&K",
      salary: "₹25,000/month",
      dueDate: "Feb 20, 2025",
      applicants: 126,
      skills: ["Excel", "SQL", "Python", "Tableau"],
      experience: "0-1 years"
    },
    {
      id: 4,
      title: "Content Writing Intern",
      company: "Digital Marketing Agency",
      type: "Internship",
      match: 76,
      description: "Create engaging content for social media, blogs, and marketing campaigns.",
      location: "Remote",
      salary: "₹12,000/month",
      dueDate: "Dec 30, 2024",
      applicants: 89,
      skills: ["Writing", "SEO", "Social Media"],
      experience: "Fresher"
    },
    {
      id: 5,
      title: "Junior Software Engineer",
      company: "StartupTech",
      type: "Job",
      match: 91,
      description: "Join our growing team to build innovative web applications and mobile solutions.",
      location: "Bangalore",
      salary: "₹35,000/month",
      dueDate: "Jan 25, 2025",
      applicants: 203,
      skills: ["JavaScript", "React", "MongoDB"],
      experience: "0-2 years"
    },
    {
      id: 6,
      title: "UI/UX Design Intern",
      company: "Creative Studio",
      type: "Internship",
      match: 84,
      description: "Learn from experienced designers while working on real client projects.",
      location: "Mumbai",
      salary: "₹18,000/month",
      dueDate: "Mar 15, 2025",
      applicants: 67,
      skills: ["Figma", "Adobe XD", "User Research"],
      experience: "Fresher"
    }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesTab = activeTab === "all" || 
                     (activeTab === "internships" && opportunity.type === "Internship") ||
                     (activeTab === "jobs" && opportunity.type === "Job");
    
    const matchesFilter = filter === "all" ||
                         (filter === "high-match" && opportunity.match >= 85) ||
                         (filter === "ending-soon" && new Date(opportunity.dueDate) < new Date("2025-01-31"));
    
    const matchesSearch = searchQuery === "" ||
                         opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTab && matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
			<Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Jobs & Internships</h1>
          </div>
          <p className="text-lg text-muted-foreground">Discover opportunities that match your skills and interests</p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 ml-4">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button 
              variant={filter === "high-match" ? "default" : "outline"}
              onClick={() => setFilter("high-match")}
            >
              High Match
            </Button>
            <Button 
              variant={filter === "ending-soon" ? "default" : "outline"}
              onClick={() => setFilter("ending-soon")}
            >
              Ending Soon
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          <Button
            variant={activeTab === "all" ? "default" : "ghost"}
            onClick={() => setActiveTab("all")}
            className="px-6"
          >
            All Opportunities
          </Button>
          <Button
            variant={activeTab === "internships" ? "default" : "ghost"}
            onClick={() => setActiveTab("internships")}
            className="px-6"
          >
            Internships
          </Button>
          <Button
            variant={activeTab === "jobs" ? "default" : "ghost"}
            onClick={() => setActiveTab("jobs")}
            className="px-6"
          >
            Jobs
          </Button>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">
          Found {filteredOpportunities.length} opportunities
        </p>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="shadow-soft hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-tight">{opportunity.title}</h3>
                      <p className="text-primary font-medium">{opportunity.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                    {opportunity.match}% match
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Due: {opportunity.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-600">{opportunity.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{opportunity.applicants} applicants</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                    {opportunity.type}
                  </Badge>
                  {opportunity.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1" 
                    onClick={() => console.log(`Applying for ${opportunity.title}`)}
                  >
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => console.log(`Bookmarked ${opportunity.title}`)}
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsInternships;