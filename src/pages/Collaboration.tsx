import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Plus, 
  Target, 
  Lightbulb, 
  Users, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Heart,
  Eye,
  Clock
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Project {
  id: number;
  title: string;
  description: string;
  teamStatus: string;
  statusTag: 'Open for Members' | 'In Progress' | 'Completed';
  skills: string[];
  location: string;
  deadline: string;
  views: number;
  likes: number;
  createdBy: string;
}

const Collaboration = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'projects' | 'members'>('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Agriculture IoT Solution",
      description: "Developing an IoT-based system to monitor soil moisture, temperature, and crop health for farmers in Kashmir valley. This project aims to revolutionize traditional farming methods.",
      teamStatus: "Team 2/4",
      statusTag: "Open for Members",
      skills: ["IoT", "Python", "Data Analysis", "Arduino"],
      location: "Srinagar, J&K",
      deadline: "Dec 2024",
      views: 127,
      likes: 23,
      createdBy: "Ahmad Khan"
    },
    {
      id: 2,
      title: "Student Mental Health App",
      description: "Creating a mobile application focused on mental health support for students, featuring mood tracking, meditation guides, and peer support groups.",
      teamStatus: "Team 3/5",
      statusTag: "In Progress",
      skills: ["React Native", "UI/UX", "Psychology", "Backend"],
      location: "Jammu, J&K",
      deadline: "Nov 2024",
      views: 89,
      likes: 18,
      createdBy: "Priya Sharma"
    },
    {
      id: 3,
      title: "Local Tourism Platform",
      description: "Building a comprehensive platform to promote local tourism in J&K, featuring hidden gems, cultural sites, and local experiences.",
      teamStatus: "Team 1/3",
      statusTag: "Open for Members",
      skills: ["Web Development", "Marketing", "Photography", "Content Writing"],
      location: "Leh, J&K",
      deadline: "Jan 2025",
      views: 156,
      likes: 31,
      createdBy: "Ravi Singh"
    },
    {
      id: 4,
      title: "E-Learning Platform for Rural Areas",
      description: "Developing an offline-capable e-learning solution specifically designed for students in remote areas with limited internet connectivity.",
      teamStatus: "Team 4/6",
      statusTag: "In Progress",
      skills: ["React", "Node.js", "PWA", "Education", "UI/UX"],
      location: "Kupwara, J&K",
      deadline: "Feb 2025",
      views: 203,
      likes: 45,
      createdBy: "Neha Malik"
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCreateProject = () => {
    toast({
      title: "Create New Project",
      description: "Project creation feature coming soon!",
    });
  };

  const handleFindPath = () => {
    toast({
      title: "Find Your Path",
      description: "Path discovery feature coming soon!",
    });
  };

  const handleJoinProject = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    toast({
      title: "Join Request Sent",
      description: `Your request to join "${project?.title}" has been sent to the project team.`,
    });
  };

  const handleSearch = () => {
    toast({
      title: "Searching Projects",
      description: `Searching for projects matching "${searchQuery}"`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open for Members':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
            <Users className="h-6 w-6 text-primary" />
            <span className="font-bold">Collaboration Hub</span>
          </div>

          <Button variant="outline" onClick={() => navigate('/')}>
            Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl">Collaboration Hub</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Connect with like-minded students, form teams, and collaborate on innovative projects. 
              Find the perfect team members or join exciting projects that match your skills and interests.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCreateProject}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Create New Project</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleFindPath}
                className="flex items-center space-x-2"
              >
                <Target className="h-5 w-5" />
                <span>Find Your Path</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <Button
            variant={activeTab === 'projects' ? 'default' : 'outline'}
            onClick={() => setActiveTab('projects')}
            className="flex items-center space-x-2"
          >
            <Lightbulb className="h-4 w-4" />
            <span>Projects</span>
          </Button>
          <Button
            variant={activeTab === 'members' ? 'default' : 'outline'}
            onClick={() => setActiveTab('members')}
            className="flex items-center space-x-2"
          >
            <Users className="h-4 w-4" />
            <span>Team Members</span>
          </Button>
        </div>

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button onClick={handleSearch}>Search</Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                </div>

                {showFilters && (
                  <div className="p-4 bg-secondary/20 rounded-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium">Project Status</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>All Status</option>
                          <option>Open for Members</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Skills Required</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>All Skills</option>
                          <option>Programming</option>
                          <option>Design</option>
                          <option>Marketing</option>
                          <option>Research</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Location</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>All Locations</option>
                          <option>Srinagar</option>
                          <option>Jammu</option>
                          <option>Leh</option>
                          <option>Remote</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm text-muted-foreground mt-4">
                  Found {filteredProjects.length} projects
                </p>
              </CardContent>
            </Card>

            {/* Project Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="secondary">{project.teamStatus}</Badge>
                          <Badge className={getStatusColor(project.statusTag)}>
                            {project.statusTag}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>

                    <div>
                      <h4 className="font-medium mb-2">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {project.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>{project.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes} likes</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Created by </span>
                        <span className="font-medium">{project.createdBy}</span>
                      </div>
                      <Button 
                        onClick={() => handleJoinProject(project.id)}
                        className="bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-400/90"
                      >
                        Join Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Team Members Section */}
        {activeTab === 'members' && (
          <Card>
            <CardHeader>
              <CardTitle>Find Team Members</CardTitle>
              <CardDescription>
                Connect with talented students who can contribute to your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Members Feature</h3>
                <p className="text-muted-foreground mb-6">
                  This feature is coming soon! You'll be able to find and connect with 
                  talented team members based on skills, interests, and project needs.
                </p>
                <Button variant="outline">
                  Get Notified When Available
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center">Collaboration Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">24</p>
                <p className="text-muted-foreground">Active Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">156</p>
                <p className="text-muted-foreground">Student Collaborators</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-muted-foreground">Completed Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">89%</p>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Collaboration;