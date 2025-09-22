import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  MessageCircle, 
  Mic, 
  Send, 
  Phone,
  Bot,
  User,
  Lightbulb,
  GraduationCap,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const Mentor = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI Career Mentor. I'm here to help you with career guidance, skill development, and educational planning. What would you like to know about?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('career') || input.includes('job')) {
      return "Great question about career options! Based on your interests and skills, I can suggest several career paths. Could you tell me more about what subjects you enjoy or what kind of work environment appeals to you?";
    } else if (input.includes('college') || input.includes('university')) {
      return "I'd be happy to help you with college selection! For students in Jammu & Kashmir, there are excellent options like NIT Srinagar, University of Kashmir, and IIT Jammu. What field of study are you considering?";
    } else if (input.includes('skill') || input.includes('learn')) {
      return "Skill development is crucial for career success! I recommend focusing on both technical skills relevant to your field and soft skills like communication and leadership. What specific skills would you like to develop?";
    } else if (input.includes('scholarship')) {
      return "There are many scholarship opportunities available! For J&K students, the Prime Minister's Special Scholarship Scheme is particularly beneficial. I can help you find scholarships based on your academic performance and field of interest.";
    } else {
      return "I understand you're looking for guidance. Could you be more specific about what aspect of your career or education you'd like help with? I'm here to provide personalized advice based on your needs.";
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleVoiceChat = () => {
    setIsVoiceActive(!isVoiceActive);
    toast({
      title: isVoiceActive ? "Voice Chat Stopped" : "Voice Chat Started",
      description: isVoiceActive ? "Voice conversation ended" : "Speak now to chat with your AI mentor",
    });
  };

  const handleHelpCall = () => {
    toast({
      title: "Initiating Support Call",
      description: "Connecting you with our support team...",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="text-white hover:bg-white/20 flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Bot className="h-6 w-6" />
                <h1 className="text-xl font-bold">Chat with AI Mentor</h1>
              </div>
              <p className="text-blue-100">Ask me anything about your career</p>
            </div>

            <div className="w-32"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-6">
        {/* Welcome Section */}
        {messages.length <= 1 && (
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome to AI Career Mentor!</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ask me anything about your career, skills, education, or professional development.
            </p>

            {/* Quick Prompt Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <Button
                variant="outline"
                className="h-20 flex-col space-y-2 bg-blue-50 hover:bg-blue-100 border-blue-200"
                onClick={() => handleQuickPrompt("What career options are available for me after 12th grade in science stream?")}
              >
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="text-blue-800">Career Options</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col space-y-2 bg-green-50 hover:bg-green-100 border-green-200"
                onClick={() => handleQuickPrompt("What skills should I develop to improve my career prospects?")}
              >
                <Lightbulb className="h-6 w-6 text-green-600" />
                <span className="text-green-800">Skill Development</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col space-y-2 bg-purple-50 hover:bg-purple-100 border-purple-200"
                onClick={() => handleQuickPrompt("How should I prepare for job interviews and what should I expect?")}
              >
                <Briefcase className="h-6 w-6 text-purple-600" />
                <span className="text-purple-800">Interview Prep</span>
              </Button>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="max-w-4xl mx-auto">
          <Card className="min-h-[400px] mb-6">
            <CardContent className="p-6">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary'
                    }`}>
                      <p>{message.content}</p>
                      <p className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Input Section */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Voice Status: Ready</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Voice Assistant */}
          <Card className="mt-6">
            <CardContent className="p-6 text-center">
              <Button
                onClick={handleVoiceChat}
                className={`w-24 h-24 rounded-full mb-4 ${
                  isVoiceActive 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}
              >
                <Mic className="h-8 w-8 text-white" />
              </Button>
              <h3 className="text-xl font-semibold mb-2">Voice Assistant</h3>
              <p className="text-muted-foreground">
                Click the microphone to start a voice conversation with our AI mentor
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Help Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Card className="w-64">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Need help?</span>
            </div>
            <Button 
              onClick={handleHelpCall}
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              <Phone className="h-4 w-4 mr-2" />
              Start a call
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mentor;