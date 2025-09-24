import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  Users,
  UserCheck,
  MessageSquare,
  Calendar,
  FileQuestion,
  UserPlus,
  ArrowLeft,
  Star,
  Clock,
  BookOpen,
  Award,
  MapPin
} from "lucide-react";

interface MentorshipProps {
  onBack: () => void;
}

const Mentorship = ({ onBack }: MentorshipProps) => {
  const [currentView, setCurrentView] = useState<'main' | 'mentor-directory' | 'peer-mentorship' | 'study-groups' | 'qa-forum' | 'events' | 'request-mentor'>('main');
  const navigate = useNavigate();
  // Mock data
  const mentors = [
    {
      name: "Dr. Sarah Kumar",
      expertise: "Data Science & AI",
      bio: "Senior Data Scientist at Google with 8+ years experience",
      rating: 4.9,
      sessions: 120
    },
    {
      name: "Rajesh Sharma",
      expertise: "Software Engineering",
      bio: "Full Stack Developer at Microsoft, IIT Delhi alumnus",
      rating: 4.8,
      sessions: 95
    },
    {
      name: "Priya Agarwal",
      expertise: "Digital Marketing",
      bio: "Marketing Director at Zomato, MBA from ISB",
      rating: 4.7,
      sessions: 78
    }
  ];
	
  const seniors = [
    {
      name: "Arjun Patel",
      year: "4th Year CSE",
      college: "IIT Bombay",
      specialization: "Machine Learning"
    },
    {
      name: "Sneha Gupta",
      year: "3rd Year ECE", 
      college: "BITS Pilani",
      specialization: "Electronics"
    }
  ];

  const studyGroups = [
    { name: "GATE Prep 2025", members: 45, subject: "Computer Science" },
    { name: "UPSC Aspirants", members: 32, subject: "Civil Services" },
    { name: "Data Science Club", members: 67, subject: "Analytics" },
    { name: "Medical Entrance", members: 28, subject: "NEET Prep" }
  ];

  const forumQuestions = [
    {
      question: "How to prepare for coding interviews?",
      author: "Amit Kumar",
      answers: 12,
      timeAgo: "2 hours ago"
    },
    {
      question: "Best resources for machine learning?", 
      author: "Riya Singh",
      answers: 8,
      timeAgo: "5 hours ago"
    }
  ];

  const events = [
    {
      title: "Career Guidance Webinar",
      date: "Oct 25, 2025",
      time: "6:00 PM",
      speaker: "Industry Expert"
    },
    {
      title: "Resume Building Workshop",
      date: "Oct 28, 2025", 
      time: "4:00 PM",
      speaker: "HR Professional"
    }
  ];

  const MainMentorshipView = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Mentorship Hub</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Connect with mentors, join study groups, and accelerate your career growth.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mentor Directory */}
        <div
          onClick={() => setCurrentView('mentor-directory')}
          className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow mb-4 group-hover:scale-110 transition-bounce">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            Mentor Directory
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Browse and connect with industry professionals and experienced mentors.
          </p>
          <p className="text-xs text-accent font-medium">
            Available Mentors – 45
          </p>
        </div>

        {/* Peer Mentorship */}
        <div
          onClick={() => setCurrentView('peer-mentorship')}
          className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-secondary to-accent mb-4 group-hover:scale-110 transition-bounce">
            <UserCheck className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            Peer Mentorship
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Connect with senior students for guidance and support.
          </p>
          <p className="text-xs text-accent font-medium">
            12 Seniors Available
          </p>
        </div>

        {/* Study Groups */}
        <div
          onClick={() => setCurrentView('study-groups')}
          className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-hero to-success mb-4 group-hover:scale-110 transition-bounce">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            Study Groups
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Join or create study groups with like-minded peers.
          </p>
          <p className="text-xs text-accent font-medium">
            4 Active Groups
          </p>
        </div>

        {/* Q&A Forum */}
        <div
          onClick={() => setCurrentView('qa-forum')}
          className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-accent to-primary mb-4 group-hover:scale-110 transition-bounce">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            Q&A Forum
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Ask questions and get answers from mentors and peers.
          </p>
          <p className="text-xs text-accent font-medium">
            248 Questions Answered
          </p>
        </div>

        {/* Events & Workshops */}
        <div
          onClick={() => setCurrentView('events')}
          className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-success to-hero mb-4 group-hover:scale-110 transition-bounce">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            Events & Workshops
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Attend mentorship events and skill-building workshops.
          </p>
          <p className="text-xs text-accent font-medium">
            3 Upcoming Events
          </p>
        </div>

        {/* Request a Mentor */}
        <div
          onClick={() => setCurrentView('request-mentor')}
          className="group cursor-pointer p-6 bg-card rounded-2xl border border-border shadow-card hover-lift transition-smooth"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4 group-hover:scale-110 transition-bounce">
            <UserPlus className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
            Request a Mentor
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Submit a request to find the perfect mentor for your needs.
          </p>
          <p className="text-xs text-accent font-medium">
            Get Matched Today
          </p>
        </div>
      </div>
    </div>
  );

  const MentorDirectoryView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Available Mentors – 45</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{mentor.name.charAt(0)}</span>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                <p className="text-sm text-accent">{mentor.expertise}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm ml-1">{mentor.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">{mentor.sessions} sessions</span>
            </div>
            <Button className="w-full gradient-primary hover-glow">Ask for Advice</Button>
          </div>
        ))}
      </div>
    </div>
  );

  const PeerMentorshipView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Connect with Seniors</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {seniors.map((senior, index) => (
          <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-hero to-success rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{senior.name.charAt(0)}</span>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-foreground">{senior.name}</h3>
                <p className="text-sm text-muted-foreground">{senior.year}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">{senior.college}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">{senior.specialization}</span>
              </div>
            </div>
            <Button className="w-full gradient-primary hover-glow">Talk to Senior</Button>
          </div>
        ))}
      </div>
    </div>
  );

  const StudyGroupsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Study Groups</h2>
        <Button className="gradient-primary hover-glow">Create Group</Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {studyGroups.map((group, index) => (
          <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-card">
            <h3 className="font-semibold text-foreground mb-2">{group.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{group.subject}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-accent">{group.members} members</span>
              <Button size="sm" className="gradient-primary hover-glow">Join Group</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const QAForumView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Q&A Forum</h2>
        <Button className="gradient-primary hover-glow">Ask a Question</Button>
      </div>
      <div className="space-y-4">
        {forumQuestions.map((q, index) => (
          <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-card">
            <h3 className="font-semibold text-foreground mb-2">{q.question}</h3>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>by {q.author}</span>
              <div className="flex items-center space-x-4">
                <span>{q.answers} answers</span>
                <span>{q.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const EventsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-card">
            <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">{event.speaker}</span>
              </div>
            </div>
            <Button className="w-full gradient-primary hover-glow">Register</Button>
          </div>
        ))}
      </div>
    </div>
  );

  const RequestMentorView = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6">Request a Mentor</h2>
      <div className="p-6 bg-card rounded-2xl border border-border shadow-card">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Area of Help</label>
            <select className="w-full p-3 bg-background border border-border rounded-lg text-foreground">
              <option>Career Guidance</option>
              <option>Technical Skills</option>
              <option>Interview Preparation</option>
              <option>Academic Support</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Mentor Type</label>
            <select className="w-full p-3 bg-background border border-border rounded-lg text-foreground">
              <option>Alumni</option>
              <option>Senior Student</option>
              <option>Industry Professional</option>
              <option>Teacher/Professor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
            <textarea 
              className="w-full p-3 bg-background border border-border rounded-lg text-foreground h-24"
              placeholder="Describe your specific needs and goals..."
            />
          </div>
          <Button className="w-full gradient-primary hover-glow">Submit Request</Button>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'mentor-directory':
        return <MentorDirectoryView />;
      case 'peer-mentorship':
        return <PeerMentorshipView />;
      case 'study-groups':
        return <StudyGroupsView />;
      case 'qa-forum':
        return <QAForumView />;
      case 'events':
        return <EventsView />;
      case 'request-mentor':
        return <RequestMentorView />;
      default:
        return <MainMentorshipView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 p-8">
      <div className="container mx-auto">
        {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>

        {renderCurrentView()}
      </div>
    </div>
  );
};

export default Mentorship;