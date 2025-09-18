import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, Calendar, DollarSign, Users, Clock, Award, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Scholarships = () => {
  const scholarships = [
    {
      id: 1,
      name: "Central Sector Scheme of Scholarships",
      provider: "Ministry of Education, Govt. of India",
      amount: "₹20,000 - ₹50,000/year",
      deadline: "30th October 2024",
      daysLeft: 45,
      eligibility: "12th pass with 80%+ marks",
      category: "Merit-based",
      applicants: 125000,
      status: "Active",
      type: "Central Government"
    },
    {
      id: 2,
      name: "Post Matric Scholarship for SC/ST",
      provider: "Social Justice & Empowerment Ministry",
      amount: "₹15,000 - ₹35,000/year", 
      deadline: "15th November 2024",
      daysLeft: 61,
      eligibility: "SC/ST category students",
      category: "Caste-based",
      applicants: 350000,
      status: "Active",
      type: "Central Government"
    },
    {
      id: 3,
      name: "National Means-cum-Merit Scholarship",
      provider: "Department of School Education",
      amount: "₹12,000/year",
      deadline: "25th September 2024",
      daysLeft: 12,
      eligibility: "Class 9th with family income <₹1.5L",
      category: "Need & Merit",
      applicants: 85000,
      status: "Closing Soon",
      type: "Central Government"
    },
    {
      id: 4,
      name: "Prime Minister's Special Scholarship Scheme",
      provider: "AICTE",
      amount: "₹30,000 - ₹75,000/year",
      deadline: "31st December 2024",
      daysLeft: 107,
      eligibility: "Technical education students from J&K",
      category: "Regional",
      applicants: 15000,
      status: "Active",
      type: "Special Scheme"
    },
    {
      id: 5,
      name: "Inspire Scholarship for Higher Education",
      provider: "Department of Science & Technology",
      amount: "₹80,000/year",
      deadline: "20th November 2024",
      daysLeft: 66,
      eligibility: "Top 1% in Class 12th (Science stream)",
      category: "Merit-based",
      applicants: 45000,
      status: "Active", 
      type: "Central Government"
    },
    {
      id: 6,
      name: "Minority Community Scholarship",
      provider: "Ministry of Minority Affairs",
      amount: "₹20,000 - ₹40,000/year",
      deadline: "10th October 2024", 
      daysLeft: 25,
      eligibility: "Religious minority students",
      category: "Community-based",
      applicants: 200000,
      status: "Active",
      type: "Central Government"
    }
  ];

  const getStatusBadge = (status: string, daysLeft: number) => {
    if (daysLeft <= 15) return <Badge variant="destructive">{status}</Badge>;
    if (daysLeft <= 30) return <Badge className="bg-yellow-500 text-white">{status}</Badge>;
    return <Badge variant="secondary">{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-smooth">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <h1 className="text-xl font-bold">Scholarship Portal</h1>
            
            <Badge variant="secondary" className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              NSP Verified
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="gradient-primary text-white rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-4">
                  Find Your Perfect Scholarship Match
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Access real-time scholarship data from Scholarships.gov.in and never miss a deadline. 
                  Get personalized recommendations based on your profile.
                </p>
                <Button variant="secondary" size="lg">
                  Create Scholarship Profile
                </Button>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">₹2,500 Cr+</p>
                  <p className="text-sm opacity-80">Total Scholarships Available</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">50+ Schemes</p>
                  <p className="text-sm opacity-80">Active This Year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Search Scholarships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <Input 
                    placeholder="Search by scholarship name or provider..." 
                    className="h-12"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="merit">Merit-based</SelectItem>
                    <SelectItem value="need">Need-based</SelectItem>
                    <SelectItem value="caste">Caste-based</SelectItem>
                    <SelectItem value="minority">Minority</SelectItem>
                    <SelectItem value="disability">Disability</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Education Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school">School (9th-12th)</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="phd">PhD/Research</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="outline" size="sm">
                  Closing Soon
                </Button>
                <Button variant="outline" size="sm">
                  Amount: ₹30K+
                </Button>
                <Button variant="outline" size="sm">
                  No Income Limit
                </Button>
                <Button variant="outline" size="sm">
                  Apply Online
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Urgent Deadlines Alert */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800">⚠️ Urgent Deadlines Approaching</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    3 scholarships are closing within the next 15 days. Don't miss out on ₹1.2L+ in potential funding!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Available Scholarships</h2>
              <p className="text-muted-foreground">Showing {scholarships.length} active scholarships</p>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by Deadline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deadline">Deadline (Urgent First)</SelectItem>
                <SelectItem value="amount">Amount (High to Low)</SelectItem>
                <SelectItem value="applicants">Competition (Low to High)</SelectItem>
                <SelectItem value="alphabetical">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Scholarship Cards */}
          <div className="space-y-6">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.id} className="shadow-medium border-0 hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold">{scholarship.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {scholarship.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {scholarship.provider}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3 text-primary" />
                              <span className="font-medium text-primary">{scholarship.amount}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3 text-muted-foreground" />
                              <span>{scholarship.applicants.toLocaleString()} applied</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                        <Badge variant="outline" className="text-xs">
                          {scholarship.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Application Deadline</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="font-medium">{scholarship.deadline}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time Left</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{scholarship.daysLeft} days</span>
                        </div>
                      </div>
                      {getStatusBadge(scholarship.status, scholarship.daysLeft)}
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button variant="hero" className="w-full">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                      <Button variant="ghost" className="w-full text-xs">
                        Check Eligibility
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg">
              Load More Scholarships
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Data from National Scholarship Portal (NSP) • Last updated: September 13, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;