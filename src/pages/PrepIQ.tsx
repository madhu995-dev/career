import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Camera,
  CameraOff,
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  User,
  Award,
  TrendingUp
} from "lucide-react";

interface PrepIQProps {
  onBack: () => void;
}

const PrepIQ = ({ onBack }: PrepIQProps) => {
  const [currentView, setCurrentView] = useState<'welcome' | 'interview' | 'results'>('welcome');
  const [selectedLevel, setSelectedLevel] = useState<'entry' | 'intermediate' | 'advanced' | null>(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [confidence, setConfidence] = useState(63);
  const [engagement, setEngagement] = useState(66);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const navigate = useNavigate();


  // Mock interview questions based on level
  const questions = {
    entry: [
      "Tell me about yourself and why you're interested in this field.",
      "What are your greatest strengths and how do they apply to this role?",
      "Describe a challenge you faced and how you overcame it.",
      "Where do you see yourself in 5 years?",
      "Why should we hire you for this position?"
    ],
    intermediate: [
      "Walk me through a project you're particularly proud of.",
      "How do you handle working under pressure and tight deadlines?",
      "Describe a time when you had to learn a new technology quickly.",
      "How do you stay updated with industry trends?",
      "Tell me about a time you disagreed with a team member."
    ],
    advanced: [
      "How would you architect a solution for a complex problem?",
      "Describe your leadership style and give an example.",
      "How do you approach mentoring junior team members?",
      "What's your strategy for handling technical debt?",
      "How do you balance innovation with maintaining existing systems?"
    ]
  };

  useEffect(() => {
    if (cameraEnabled && videoRef.current) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [cameraEnabled]);

  // Simulate real-time confidence and engagement updates
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setConfidence(prev => Math.max(30, Math.min(95, prev + (Math.random() - 0.5) * 10)));
        setEngagement(prev => Math.max(30, Math.min(95, prev + (Math.random() - 0.5) * 8)));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isRecording]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: micEnabled 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const startInterview = () => {
    if (!selectedLevel) return;
    setCurrentView('interview');
    setCameraEnabled(true);
    setMicEnabled(true);
  };

  const WelcomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 p-8">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>

        {/* Welcome Content */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to PrepIQ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered interview preparation that analyzes your performance in real-time. 
            Get instant feedback on your confidence, engagement, and communication skills.
          </p>
        </div>

        {/* Experience Level Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
            Please select your experience level to begin:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                level: 'entry' as const,
                title: 'Entry',
                description: 'New to the field or recent graduate',
                icon: User,
                color: 'from-green-500 to-emerald-600'
              },
              {
                level: 'intermediate' as const,
                title: 'Intermediate', 
                description: '2-5 years of experience',
                icon: TrendingUp,
                color: 'from-blue-500 to-cyan-600'
              },
              {
                level: 'advanced' as const,
                title: 'Advanced',
                description: '5+ years, senior level positions',
                icon: Award,
                color: 'from-purple-500 to-pink-600'
              }
            ].map((option) => (
              <div
                key={option.level}
                onClick={() => setSelectedLevel(option.level)}
                className={`cursor-pointer p-8 bg-card rounded-2xl border-2 transition-all duration-300 hover-lift ${
                  selectedLevel === option.level
                    ? 'border-primary shadow-glow bg-card/80'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${option.color} mb-6`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                
                {selectedLevel === option.level && (
                  <div className="mt-4 flex items-center text-primary">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Selected</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        {selectedLevel && (
          <div className="text-center">
            <Button
              onClick={startInterview}
              size="lg"
              className="gradient-primary hover-glow transition-smooth px-12 py-4 text-lg"
            >
              Start AI Interview
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  const InterviewView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => setCurrentView('welcome')}
              variant="ghost"
              className="text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-foreground">AI Interview Session</h1>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setCurrentView('results')}
                className="gradient-primary hover-glow"
              >
                End Interview
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Left Side - Camera Feed */}
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6">
            <div className="space-y-6 h-full flex flex-col">
              {/* Video Container */}
              <div className="flex-1 bg-slate-800 rounded-xl overflow-hidden relative">
                {cameraEnabled ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <CameraOff className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Camera is disabled</p>
                    </div>
                  </div>
                )}
                
                {/* Recording Indicator */}
                {isRecording && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    Recording
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  onClick={() => setCameraEnabled(!cameraEnabled)}
                  variant={cameraEnabled ? "default" : "secondary"}
                  size="lg"
                  className="rounded-full w-12 h-12"
                >
                  {cameraEnabled ? <Camera className="h-5 w-5" /> : <CameraOff className="h-5 w-5" />}
                </Button>
                <Button
                  onClick={() => setMicEnabled(!micEnabled)}
                  variant={micEnabled ? "default" : "secondary"}
                  size="lg"
                  className="rounded-full w-12 h-12"
                >
                  {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>
                <Button
                  onClick={() => setIsRecording(!isRecording)}
                  variant={isRecording ? "destructive" : "default"}
                  size="lg"
                  className="px-6"
                >
                  {isRecording ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                  {isRecording ? 'Pause' : 'Start'}
                </Button>
              </div>

              {/* AI Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Confidence</span>
                    <span className="text-sm text-primary font-bold">{confidence}%</span>
                  </div>
                  <Progress value={confidence} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Engagement</span>
                    <span className="text-sm text-primary font-bold">{engagement}%</span>
                  </div>
                  <Progress value={engagement} className="h-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Questions */}
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6">
            <div className="h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {selectedLevel?.charAt(0).toUpperCase() + selectedLevel?.slice(1)} Level Interview
                </h2>
                <p className="text-muted-foreground">Question 1 of {questions[selectedLevel!]?.length || 5}</p>
              </div>

              <div className="flex-1 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Current Question:</h3>
                <p className="text-foreground text-lg leading-relaxed">
                  {questions[selectedLevel!]?.[0] || "Tell me about yourself and your background."}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <Button className="w-full gradient-primary hover-glow">
                  Next Question
                </Button>
                <Button variant="outline" className="w-full">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Repeat Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ResultsView = () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 p-8">
      <div className="container mx-auto max-w-4xl">
        <Button
          onClick={() => setCurrentView('welcome')}
          variant="ghost"
          className="flex items-center space-x-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Start</span>
        </Button>

        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Interview Complete!</h1>
          <p className="text-lg text-muted-foreground">
            Here's your AI-powered performance analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card rounded-2xl border border-border shadow-card p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Overall Scores</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Confidence</span>
                  <span className="font-bold text-primary">{confidence}%</span>
                </div>
                <Progress value={confidence} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Engagement</span>
                  <span className="font-bold text-primary">{engagement}%</span>
                </div>
                <Progress value={engagement} className="h-3" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-card p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Insights</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Strong eye contact maintained throughout</li>
              <li>• Clear articulation and pacing</li>
              <li>• Good use of specific examples</li>
              <li>• Consider more confident posture</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => {
              setCurrentView('welcome');
              setSelectedLevel(null);
              setConfidence(63);
              setEngagement(66);
            }}
            className="gradient-primary hover-glow px-8"
          >
            Practice Again
          </Button>
        </div>
      </div>
    </div>
  );

  switch (currentView) {
    case 'interview':
      return <InterviewView />;
    case 'results':
      return <ResultsView />;
    default:
      return <WelcomeView />;
  }
};

export default PrepIQ;