import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Filter,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Code,
  Calculator,
  Palette,
  Heart,
  Briefcase,
  Users
} from "lucide-react";

interface CareerExplorerProps {
  onBack: () => void;
}

const CareerExplorer = ({ onBack }: CareerExplorerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCareer, setSelectedCareer] = useState<any>(null);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const navigate = useNavigate();


  const categories = ["All", "Technology", "Finance", "Healthcare", "Creative", "Business", "Science"];

  // Mock career data
  const careers = [
    {
      id: "software-engineer",
      name: "Software Engineer",
      category: "Technology",
      icon: Code,
      shortDescription: "Build innovative software solutions and applications.",
      longDescription: "Software engineers design, develop, test, and maintain software applications and systems. They work with various programming languages and frameworks to create solutions that meet user needs and business requirements.",
      salaryRange: "₹3,00,000 - ₹12,00,000 per year",
      growthProspects: "High growth potential with continuous learning",
      whyItMatters: "Software engineers are at the forefront of digital transformation, creating technology that impacts millions of lives and drives innovation across industries.",
      jobRoles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer", "DevOps Engineer"],
      requiredSkills: ["Programming Languages", "Problem Solving", "Database Management", "Version Control", "Testing"],
      roadmap: [
        {
          title: "Foundation",
          description: "Learn programming fundamentals and basic computer science concepts",
          duration: "6-12 months"
        },
        {
          title: "Specialization",
          description: "Choose a specialization (web, mobile, data, etc.) and master relevant technologies",
          duration: "12-18 months"
        },
        {
          title: "Experience",
          description: "Build projects, contribute to open source, and gain practical experience",
          duration: "6-12 months"
        },
        {
          title: "Professional",
          description: "Land your first job and continue learning advanced concepts",
          duration: "Ongoing"
        }
      ]
    },
    {
      id: "data-scientist",
      name: "Data Scientist",
      category: "Technology",
      icon: Calculator,
      shortDescription: "Extract insights from data to drive business decisions.",
      longDescription: "Data scientists analyze large datasets to identify patterns, trends, and insights that help organizations make informed decisions. They use statistical methods, machine learning, and programming to solve complex problems.",
      salaryRange: "₹4,00,000 - ₹15,00,000 per year",
      growthProspects: "Extremely high demand with excellent career progression",
      whyItMatters: "Data scientists help organizations harness the power of data to optimize operations, predict trends, and create competitive advantages in the data-driven economy.",
      jobRoles: ["Machine Learning Engineer", "Business Analyst", "Research Scientist", "AI Specialist"],
      requiredSkills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
      roadmap: [
        {
          title: "Math & Statistics",
          description: "Build strong foundation in mathematics, statistics, and probability",
          duration: "3-6 months"
        },
        {
          title: "Programming",
          description: "Learn Python/R and data manipulation libraries like pandas, numpy",
          duration: "6-9 months"
        },
        {
          title: "Machine Learning",
          description: "Master ML algorithms, deep learning, and model deployment",
          duration: "9-12 months"
        },
        {
          title: "Specialization",
          description: "Focus on specific domains like NLP, computer vision, or business analytics",
          duration: "6-12 months"
        }
      ]
    },
    {
      id: "ux-designer",
      name: "UX Designer",
      category: "Creative",
      icon: Palette,
      shortDescription: "Design intuitive and engaging user experiences.",
      longDescription: "UX designers research user needs, create wireframes and prototypes, and design interfaces that provide excellent user experiences. They focus on usability, accessibility, and user satisfaction.",
      salaryRange: "₹2,50,000 - ₹10,00,000 per year",
      growthProspects: "Growing demand as digital products become more user-centric",
      whyItMatters: "UX designers ensure that technology serves humans effectively, creating products that are not just functional but delightful to use.",
      jobRoles: ["UI Designer", "Product Designer", "Interaction Designer", "Design Researcher"],
      requiredSkills: ["Design Thinking", "Prototyping", "User Research", "Figma/Sketch", "Psychology"],
      roadmap: [
        {
          title: "Design Fundamentals",
          description: "Learn design principles, color theory, typography, and composition",
          duration: "3-6 months"
        },
        {
          title: "UX Methods",
          description: "Master user research, persona creation, journey mapping, and testing",
          duration: "6-9 months"
        },
        {
          title: "Tools & Prototyping",
          description: "Become proficient in design tools like Figma, Sketch, and prototyping",
          duration: "3-6 months"
        },
        {
          title: "Portfolio Building",
          description: "Create a strong portfolio with diverse projects and case studies",
          duration: "6-12 months"
        }
      ]
    },
    {
      id: "doctor",
      name: "Doctor",
      category: "Healthcare",
      icon: Heart,
      shortDescription: "Diagnose and treat patients to improve health outcomes.",
      longDescription: "Doctors diagnose illnesses, prescribe treatments, and provide preventive care to patients. They work in various specialties and settings to promote health and save lives.",
      salaryRange: "₹5,00,000 - ₹25,00,000 per year",
      growthProspects: "Stable career with high social impact and respect",
      whyItMatters: "Doctors play a crucial role in maintaining public health, treating diseases, and improving quality of life for individuals and communities.",
      jobRoles: ["General Practitioner", "Specialist", "Surgeon", "Researcher", "Public Health Officer"],
      requiredSkills: ["Medical Knowledge", "Diagnosis", "Patient Care", "Communication", "Empathy"],
      roadmap: [
        {
          title: "Medical School",
          description: "Complete MBBS degree with strong academic performance",
          duration: "5.5 years"
        },
        {
          title: "Internship",
          description: "Gain practical experience through mandatory internship",
          duration: "1 year"
        },
        {
          title: "Specialization",
          description: "Pursue MD/MS in chosen specialty through entrance exams",
          duration: "3 years"
        },
        {
          title: "Practice",
          description: "Start independent practice or work in hospitals/clinics",
          duration: "Ongoing"
        }
      ]
    }
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.requiredSkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "All" || career.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCareerClick = (career: any) => {
    setSelectedCareer(career);
  };

  const handleBackToList = () => {
    setSelectedCareer(null);
    setShowRoadmap(false);
    setCurrentStep(0);
  };

  const handleShowRoadmap = () => {
    setShowRoadmap(true);
    setCurrentStep(0);
  };

  const handleCloseRoadmap = () => {
    setShowRoadmap(false);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < selectedCareer.roadmap.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showRoadmap && selectedCareer) {
    return (
      <div className="space-y-8">
        {/* Roadmap Modal */}
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl border border-border shadow-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Career Roadmap: {selectedCareer.name}</h2>
                <Button variant="ghost" size="sm" onClick={handleCloseRoadmap}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {selectedCareer.roadmap.length}</span>
                  <span className="text-sm text-muted-foreground">{Math.round(((currentStep + 1) / selectedCareer.roadmap.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="gradient-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${((currentStep + 1) / selectedCareer.roadmap.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Step */}
              <div className="text-center mb-8">
                <div className="inline-flex p-4 rounded-2xl gradient-primary mb-4">
                  <selectedCareer.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {selectedCareer.roadmap[currentStep].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {selectedCareer.roadmap[currentStep].description}
                </p>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Duration: {selectedCareer.roadmap[currentStep].duration}
                </Badge>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <div className="flex space-x-2">
                  {selectedCareer.roadmap.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-3 h-3 rounded-full transition-smooth ${
                        index === currentStep
                          ? "bg-primary"
                          : index < currentStep
                          ? "bg-success"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={nextStep}
                  disabled={currentStep === selectedCareer.roadmap.length - 1}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCareer) {
    return (
      <div className="space-y-8">
        {/* Back Button */}
        <Button
          onClick={handleBackToList}
          variant="ghost"
          className="flex items-center space-x-2 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Career List</span>
        </Button>

        {/* Career Detail */}
        <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
          {/* Header */}
          <div className="gradient-primary p-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <selectedCareer.icon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{selectedCareer.name}</h1>
                <Badge className="bg-white/20 text-white border-white/30 mt-2">
                  {selectedCareer.category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">About This Career</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCareer.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Why This Career Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCareer.whyItMatters}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.requiredSkills.map((skill: string, index: number) => (
                      <Badge
                        key={index}
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Career Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Salary Range</span>
                      <p className="text-lg font-semibold text-foreground">{selectedCareer.salaryRange}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Growth Prospects</span>
                      <p className="text-foreground">{selectedCareer.growthProspects}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Related Job Roles</h3>
                  <div className="space-y-2">
                    {selectedCareer.jobRoles.map((role: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 text-center">
              <Button
                onClick={handleShowRoadmap}
                className="gradient-primary hover-glow transition-smooth px-8 py-3"
              >
                View Career Roadmap
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
             <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>

      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-4">Career Explorer</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Discover exciting career paths, understand requirements, and plan your journey to success.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search careers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category 
                ? "gradient-primary text-white" 
                : "hover-lift transition-smooth"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Found {filteredCareers.length} careers
        </h2>
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filter by category</span>
        </Button>
      </div>

      {/* Career Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => (
          <div
            key={career.id}
            className="bg-card rounded-2xl border border-border shadow-card p-6 hover-lift transition-smooth cursor-pointer"
            onClick={() => handleCareerClick(career)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-xl gradient-primary">
                <career.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{career.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {career.category}
                </Badge>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {career.shortDescription}
            </p>
            
            <div className="text-sm text-muted-foreground">
              <div className="font-medium text-foreground mb-1">
                {career.salaryRange}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No careers found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default CareerExplorer;