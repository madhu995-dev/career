import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Calendar, 
  BookOpen, 
  FileText, 
  GraduationCap,
  Trophy,
  Clock
} from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  dateRange: string;
  icon: React.ComponentType<any>;
  color: string;
  status: 'upcoming' | 'active' | 'completed';
}

const Timeline = () => {
  const navigate = useNavigate();

  const events: TimelineEvent[] = [
    {
      id: 1,
      title: "College Admissions Open",
      description: "Application process begins for undergraduate programs across major universities in J&K and India.",
      dateRange: "June - July",
      icon: GraduationCap,
      color: "bg-blue-500",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Entrance Exam Registration",
      description: "Registration opens for JEE Main, NEET, and other competitive examinations.",
      dateRange: "February - March",
      icon: FileText,
      color: "bg-purple-500",
      status: "active"
    },
    {
      id: 3,
      title: "Board Exam Results",
      description: "JKBOSE 10th and 12th class results are typically announced during this period.",
      dateRange: "May - June",
      icon: Trophy,
      color: "bg-green-500",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Scholarship Applications",
      description: "Prime Minister's Special Scholarship Scheme and other scholarship programs open for applications.",
      dateRange: "August - September",
      icon: BookOpen,
      color: "bg-orange-500",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Career Counseling Sessions",
      description: "Special career guidance sessions organized by educational institutions across J&K.",
      dateRange: "July - August",
      icon: Calendar,
      color: "bg-pink-500",
      status: "upcoming"
    },
    {
      id: 6,
      title: "University Entrance Tests",
      description: "Kashmir University, Jammu University and other local institutions conduct entrance exams.",
      dateRange: "April - May",
      icon: FileText,
      color: "bg-indigo-500",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'active':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'Active Now';
      default:
        return 'Upcoming';
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
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-bold">Academic Timeline</span>
          </div>

          <Button variant="outline" onClick={() => navigate('/')}>
            Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Introductory Card */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl">Important Academic Dates & Deadlines</CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Stay on top of crucial academic milestones and never miss important deadlines. 
              Plan your educational journey with our comprehensive timeline.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2">
                  <div className={`w-4 h-4 rounded-full ${event.color} border-4 border-background`}></div>
                </div>

                {/* Event card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-full ${event.color} p-3 flex items-center justify-center`}>
                          <event.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <Badge className={getStatusColor(event.status)}>
                              {getStatusText(event.status)}
                            </Badge>
                          </div>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${event.color.split('-')[1]}-100 text-${event.color.split('-')[1]}-800`}>
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.dateRange}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                      <div className="mt-4 flex space-x-2">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Quick Actions</CardTitle>
            <CardDescription className="text-center">
              Manage your academic schedule and stay organized
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button 
                variant="outline" 
                className="h-20 flex-col space-y-2"
                onClick={() => navigate('/calendar')}
              >
                <Calendar className="h-6 w-6" />
                <span>View Full Calendar</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex-col space-y-2"
                onClick={() => navigate('/reminders')}
              >
                <Clock className="h-6 w-6" />
                <span>Set Reminders</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex-col space-y-2"
                onClick={() => navigate('/deadlines')}
              >
                <FileText className="h-6 w-6" />
                <span>Track Deadlines</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Pro Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Set calendar reminders 2-3 weeks before important deadlines</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Keep all required documents ready well in advance</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Follow official websites and social media for real-time updates</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Create a personal study and application schedule</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timeline;