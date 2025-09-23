import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Target,
  Search,
  Filter,
  Users,
  ArrowLeft
} from "lucide-react";

interface CollaborationHubProps {
  onBack: () => void;
}

const CollaborationHub = ({ onBack }: CollaborationHubProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("projects");

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Smart Agriculture IoT Solution",
      status: "Open for Members",
      teamSize: "2/4",
      description: "Developing IoT sensors and analytics platform for smart farming to optimize crop yield and reduce water usage.",
      requiredSkills: ["Arduino", "Python", "Machine Learning", "Data Analysis", "IoT"]
    },
    {
      id: 2,
      title: "Educational Platform for Rural Areas",
      status: "In Progress",
      teamSize: "3/5",
      description: "Building an offline-first educational platform to provide quality education resources in remote areas.",
      requiredSkills: ["React", "Node.js", "MongoDB", "PWA", "UI/UX"]
    },
    {
      id: 3,
      title: "Mental Health Support App",
      status: "Open for Members",
      teamSize: "1/3",
      description: "Creating a mobile app with AI-powered mood tracking and peer support features for student mental wellness.",
      requiredSkills: ["React Native", "AI/ML", "Psychology", "Database", "API Design"]
    },
    {
      id: 4,
      title: "Sustainable Energy Monitor",
      status: "Planning Phase",
      teamSize: "2/4",
      description: "Developing a real-time energy consumption monitoring system for college campuses to promote sustainability.",
      requiredSkills: ["Embedded Systems", "Cloud Computing", "Data Visualization", "Sustainability"]
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.requiredSkills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open for Members":
        return "bg-success/20 text-success border-success/30";
      case "In Progress":
        return "bg-primary/20 text-primary border-primary/30";
      case "Planning Phase":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Button
        onClick={onBack}
        variant="ghost"
        className="flex items-center space-x-2 text-primary hover:text-primary/80"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Dashboard</span>
      </Button>

      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-4">Collaboration Hub</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Connect with like-minded students, form teams, and collaborate on innovative projects. 
          Join existing projects or start your own to build something amazing together.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button className="gradient-primary hover-glow transition-smooth flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Create New Project</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2 hover-lift transition-smooth">
          <Target className="h-5 w-5" />
          <span>Find Your Path</span>
        </Button>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-8">
        <div className="bg-card rounded-lg p-1 border border-border">
          <Button
            variant={activeTab === "projects" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("projects")}
            className={activeTab === "projects" ? "gradient-primary" : ""}
          >
            Projects
          </Button>
          <Button
            variant={activeTab === "members" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("members")}
            className={activeTab === "members" ? "gradient-primary" : ""}
          >
            Team Members
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Found {filteredProjects.length} projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-2xl border border-border shadow-card p-6 hover-lift transition-smooth"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground line-clamp-2 flex-1">
                {project.title}
              </h3>
            </div>

            {/* Status and Team Size */}
            <div className="flex items-center gap-3 mb-4">
              <Badge className={`${getStatusColor(project.status)} px-3 py-1`}>
                {project.status}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                Team {project.teamSize}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Required Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {project.requiredSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Join Button */}
            <Button className="w-full gradient-primary hover-glow transition-smooth">
              Join Project
            </Button>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No projects found matching your search criteria.
          </p>
          <Button className="mt-4 gradient-primary hover-glow transition-smooth">
            Create Your First Project
          </Button>
        </div>
      )}
    </div>
  );
};

export default CollaborationHub;