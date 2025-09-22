import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, MapPin, Star, Users, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CollegeFinder = () => {
  const navigate = useNavigate();
  const colleges = [
    {
      id: 1,
      name: "Indian Institute of Technology Delhi",
      location: "New Delhi, Delhi",
      type: "Government",
      rating: 4.8,
      nirfRank: 2,
      fees: "₹2,50,000/year",
      courses: ["B.Tech", "M.Tech", "PhD"],
      cutoff: "JEE Adv. Rank 50",
      established: 1961,
      students: 8000,
      badge: "Top Tier",
    },
    {
      id: 2,
      name: "Jawaharlal Nehru University",
      location: "New Delhi, Delhi",
      type: "Government",
      rating: 4.5,
      nirfRank: 12,
      fees: "₹45,000/year",
      courses: ["BA", "MA", "PhD"],
      cutoff: "CUET Rank 100",
      established: 1969,
      students: 8500,
      badge: "Research Excellence",
    },
    {
      id: 3,
      name: "University of Delhi",
      location: "Delhi, Delhi",
      type: "Government",
      rating: 4.3,
      nirfRank: 8,
      fees: "₹35,000/year",
      courses: ["BCom", "BA", "BSc"],
      cutoff: "CUET Rank 500",
      established: 1922,
      students: 132000,
      badge: "Historic",
    },
    {
      id: 4,
      name: "Indian Institute of Science",
      location: "Bangalore, Karnataka",
      type: "Government",
      rating: 4.9,
      nirfRank: 1,
      fees: "₹65,000/year",
      courses: ["BS", "MS", "PhD"],
      cutoff: "KVPY/JEE",
      established: 1909,
      students: 3000,
      badge: "Research Leader",
    },
    {
      id: 5,
      name: "Anna University",
      location: "Chennai, Tamil Nadu",
      type: "Government",
      rating: 4.2,
      nirfRank: 18,
      fees: "₹75,000/year",
      courses: ["B.Tech", "M.Tech", "MBA"],
      cutoff: "TNEA Rank 1000",
      established: 1978,
      students: 40000,
      badge: "Engineering Hub",
    },
    {
      id: 6,
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      type: "Government",
      rating: 4.1,
      nirfRank: 25,
      fees: "₹40,000/year",
      courses: ["BA", "BSc", "B.Tech"],
      cutoff: "BHU CET Rank 2000",
      established: 1916,
      students: 27000,
      badge: "Cultural Heritage",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>

            <h1 className="text-xl font-bold">College Finder</h1>

            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              NIRF Verified
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Search and Filters */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Find Your Perfect College
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Search colleges, courses, or locations..."
                    className="h-12"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Course Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  Fees: Under ₹1L
                </Button>
                <Button variant="outline" size="sm">Government Only</Button>
                <Button variant="outline" size="sm">Top 50 NIRF</Button>
                <Button variant="outline" size="sm">Nearby (50km)</Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Recommended Colleges</h2>
              <p className="text-muted-foreground">
                Showing {colleges.length} colleges based on government data
              </p>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by NIRF Rank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rank">NIRF Rank</SelectItem>
                <SelectItem value="fees">Fees (Low to High)</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="cutoff">Cutoff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* College Cards */}
          <div className="space-y-6">
            {colleges.map((college) => (
              <Card
                key={college.id}
                className="shadow-medium border-0 hover:shadow-strong transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    {/* College Info */}
                    <div className="lg:col-span-2 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          #{college.nirfRank}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold">{college.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {college.badge}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {college.location}
                            </div>
                            <span>•</span>
                            <span>Est. {college.established}</span>
                            <span>•</span>
                            <span className="text-secondary font-medium">{college.type}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-medium">{college.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{college.students.toLocaleString()} students</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {college.courses.map((course, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Fees</p>
                        <p className="text-lg font-bold text-primary">{college.fees}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Cutoff (2024)</p>
                        <p className="font-medium">{college.cutoff}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button variant="hero" className="w-full">
                        View Details
                      </Button>
                      <Button variant="outline" className="w-full">
                        Compare
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
              Load More Colleges
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Data sourced from AISHE & NIRF • Last updated: September 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder;
