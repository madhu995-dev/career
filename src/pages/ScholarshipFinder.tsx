import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Filter, Bookmark, MapPin, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const ScholarshipFinder = () => {
  const [showResults, setShowResults] = useState(false);
  const [filter, setFilter] = useState("all");
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    gender: "",
    category: "",
    income: "",
    degree: ""
  });

  const scholarships = [
    {
      id: 1,
      title: "Merit-Based Academic Excellence Scholarship",
      institution: "National Scholarship Portal",
      match: 88,
      description: "For students with outstanding academic performance in class 10th and 12th examinations.",
      amount: "₹50,000",
      location: "National",
      dueDate: "Jan 15, 2025",
      tags: ["Academic", "GPA > 3.5", "Leadership"],
      type: "merit"
    },
    {
      id: 2,
      title: "Jammu & Kashmir Merit Scholarship",
      institution: "J&K Government",
      match: 95,
      description: "Special scholarship for students from Jammu & Kashmir pursuing higher education.",
      amount: "₹75,000",
      location: "Jammu & Kashmir",
      dueDate: "Dec 20, 2024",
      tags: ["Regional", "Merit-based", "J&K Domicile"],
      type: "regional"
    },
    {
      id: 3,
      title: "Minority Community Scholarship",
      institution: "Ministry of Minority Affairs",
      match: 76,
      description: "For students belonging to minority communities pursuing professional courses.",
      amount: "₹40,000",
      location: "National",
      dueDate: "Feb 28, 2025",
      tags: ["Minority", "Professional", "Need-based"],
      type: "community"
    },
    {
      id: 4,
      title: "Science & Technology Scholarship",
      institution: "Department of Science & Technology",
      match: 82,
      description: "For students pursuing Science, Technology, Engineering, and Mathematics courses.",
      amount: "₹60,000",
      location: "National",
      dueDate: "Mar 10, 2025",
      tags: ["STEM", "Innovation", "Research"],
      type: "stem"
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    if (filter === "high-match") return scholarship.match >= 85;
    if (filter === "ending-soon") return new Date(scholarship.dueDate) < new Date("2025-01-31");
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link 
                to="/dashboard"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Link>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-bold">Scholarships Based on Your Profile</h1>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-lg text-muted-foreground">Found {filteredScholarships.length} scholarships</p>
            <div className="flex gap-2">
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
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
            </div>
          </div>

          {/* Scholarship Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="shadow-soft hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold leading-tight">{scholarship.title}</h3>
                    <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                      {scholarship.match}% match
                    </Badge>
                  </div>
                  
                  <p className="text-primary font-medium mb-3">{scholarship.institution}</p>
                  <p className="text-muted-foreground mb-4">{scholarship.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{scholarship.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Due: {scholarship.dueDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">{scholarship.amount}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {scholarship.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1" onClick={() => console.log(`Applying for ${scholarship.title}`)}>
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => console.log(`Bookmarked ${scholarship.title}`)}
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
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
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Scholarship Finder</h1>
          </div>
          <p className="text-lg text-muted-foreground">Find the perfect scholarship for your education journey</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="font-medium text-primary">Student Info</span>
            </div>
            <div className="w-12 h-0.5 bg-muted"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">2</div>
              <span className="text-muted-foreground">Results</span>
            </div>
            <div className="w-12 h-0.5 bg-muted"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">3</div>
              <span className="text-muted-foreground">Apply</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Tell us about yourself
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input 
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number</label>
                  <Input 
                    placeholder="Enter mobile number"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Caste/Category</label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Annual Family Income</label>
                  <Select value={formData.income} onValueChange={(value) => handleInputChange("income", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-1">Below ₹1 Lakh</SelectItem>
                      <SelectItem value="1-3">₹1-3 Lakhs</SelectItem>
                      <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
                      <SelectItem value="above-5">Above ₹5 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Current Degree</label>
                  <Select value={formData.degree} onValueChange={(value) => handleInputChange("degree", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10th">Class 10th</SelectItem>
                      <SelectItem value="12th">Class 12th</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Find My Scholarships
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScholarshipFinder;