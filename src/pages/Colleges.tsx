import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  GraduationCap,
  Building,
  ZoomIn,
  ZoomOut,
  Map as MapIcon
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface College {
  id: number;
  name: string;
  location: string;
  type: 'College' | 'University' | 'Institute';
  ownership: 'Govt.' | 'Private';
  rating: number;
  courses: string[];
  established: number;
  coordinates: [number, number];
}

const Colleges = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const colleges: College[] = [
    {
      id: 1,
      name: "University of Kashmir",
      location: "Srinagar, J&K",
      type: "University",
      ownership: "Govt.",
      rating: 4.2,
      courses: ["Engineering", "Medicine", "Arts", "Commerce"],
      established: 1948,
      coordinates: [34.0837, 74.7973]
    },
    {
      id: 2,
      name: "NIT Srinagar",
      location: "Srinagar, J&K", 
      type: "Institute",
      ownership: "Govt.",
      rating: 4.5,
      courses: ["Engineering", "Technology", "Computer Science"],
      established: 1960,
      coordinates: [34.0479, 74.8056]
    },
    {
      id: 3,
      name: "SKIMS Medical College",
      location: "Srinagar, J&K",
      type: "College",
      ownership: "Govt.",
      rating: 4.3,
      courses: ["Medicine", "Nursing", "Allied Health"],
      established: 1982,
      coordinates: [34.0515, 74.8256]
    },
    {
      id: 4,
      name: "Jammu University",
      location: "Jammu, J&K",
      type: "University", 
      ownership: "Govt.",
      rating: 4.1,
      courses: ["Arts", "Science", "Commerce", "Law"],
      established: 1969,
      coordinates: [32.7266, 74.8570]
    },
    {
      id: 5,
      name: "IIT Jammu",
      location: "Jammu, J&K",
      type: "Institute",
      ownership: "Govt.",
      rating: 4.6,
      courses: ["Engineering", "Technology", "Research"],
      established: 2016,
      coordinates: [32.5910, 74.9700]
    },
    {
      id: 6,
      name: "Lovely Professional University",
      location: "Phagwara, Punjab",
      type: "University",
      ownership: "Private",
      rating: 4.0,
      courses: ["Engineering", "Management", "Arts", "Science"],
      established: 2005,
      coordinates: [31.2544, 75.4041]
    }
  ];

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.courses.some(course => course.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCollegeSelect = (collegeId: number) => {
    setSelectedCollege(collegeId);
    toast({
      title: "College Selected",
      description: `Selected ${colleges.find(c => c.id === collegeId)?.name}`,
    });
  };

  const handleSearch = () => {
    toast({
      title: "Searching...",
      description: `Looking for colleges matching "${searchQuery}"`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <MapIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Smart Location Search</span>
          </div>

          <Button variant="outline" onClick={() => navigate('/')}>
            Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-120px)]">
          {/* Left Column - Search & Results */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Smart Location Search</span>
                    </CardTitle>
                    <CardDescription>
                      Find schools and colleges near you with our intelligent location-based search
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, city, or course"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button onClick={handleSearch}>Search</Button>
                </div>

                {showFilters && (
                  <div className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Type</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>All Types</option>
                          <option>University</option>
                          <option>College</option>
                          <option>Institute</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Ownership</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>All</option>
                          <option>Government</option>
                          <option>Private</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Results ({filteredColleges.length})</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[500px] overflow-y-auto space-y-2 p-4">
                  {filteredColleges.map((college) => (
                    <Card 
                      key={college.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedCollege === college.id ? 'ring-2 ring-primary bg-primary/5' : ''
                      }`}
                      onClick={() => handleCollegeSelect(college.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg truncate">{college.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {college.location}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="secondary">{college.type}</Badge>
                              <Badge variant={college.ownership === 'Govt.' ? 'default' : 'outline'}>
                                {college.ownership}
                              </Badge>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm ml-1">{college.rating}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {college.courses.slice(0, 3).map((course, index) => (
                                <span 
                                  key={index}
                                  className="text-xs bg-secondary px-2 py-1 rounded"
                                >
                                  {course}
                                </span>
                              ))}
                              {college.courses.length > 3 && (
                                <span className="text-xs text-muted-foreground">
                                  +{college.courses.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Interactive Map */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <MapIcon className="h-5 w-5" />
                  <span>Interactive Map</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[600px] bg-secondary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Placeholder map - In a real app, this would be replaced with actual map component */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-950 to-green-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground">
                        Map showing colleges in Jammu & Kashmir region
                      </p>
                    </div>
                  </div>
                  
                  {/* Sample map markers */}
                  {filteredColleges.map((college, index) => (
                    <div
                      key={college.id}
                      className={`absolute w-6 h-6 rounded-full cursor-pointer transition-all duration-200 ${
                        selectedCollege === college.id 
                          ? 'bg-primary ring-4 ring-primary/30 scale-125' 
                          : 'bg-red-500 hover:scale-110'
                      }`}
                      style={{
                        top: `${20 + (index * 80)}px`,
                        left: `${50 + (index * 60)}px`,
                      }}
                      onClick={() => handleCollegeSelect(college.id)}
                      title={college.name}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur p-2 rounded text-xs">
                  Leaflet | © OpenStreetMap contributors
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected College Info */}
        {selectedCollege && (
          <Card className="mt-6">
            <CardContent className="p-6">
              {(() => {
                const college = colleges.find(c => c.id === selectedCollege);
                if (!college) return null;
                
                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{college.name}</h3>
                      <p className="text-muted-foreground mb-4">{college.location}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Established:</span>
                          <span>{college.established}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <Badge variant="secondary">{college.type}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Ownership:</span>
                          <Badge variant={college.ownership === 'Govt.' ? 'default' : 'outline'}>
                            {college.ownership}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Available Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {college.courses.map((course, index) => (
                          <Badge key={index} variant="outline">{course}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                      <Button variant="outline" className="w-full">
                        Compare Colleges
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Colleges;