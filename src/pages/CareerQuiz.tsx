import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Clock, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  
  const questions = [
    {
      id: 1,
      question: "What type of work environment do you thrive in?",
      options: [
        "Collaborative team settings with lots of interaction",
        "Independent work with minimal supervision", 
        "Structured environment with clear guidelines",
        "Dynamic, fast-paced changing environments"
      ]
    },
    {
      id: 2,
      question: "Which activities do you find most engaging?",
      options: [
        "Solving complex mathematical or logical problems",
        "Creating artistic or creative content",
        "Helping and supporting others",
        "Leading teams and making strategic decisions"
      ]
    },
    {
      id: 3,
      question: "What motivates you most in your ideal career?",
      options: [
        "High salary and financial security",
        "Making a positive impact on society",
        "Personal growth and learning opportunities", 
        "Recognition and professional prestige"
      ]
    },
    {
      id: 4,
      question: "How do you prefer to solve problems?",
      options: [
        "Through systematic research and analysis",
        "Using creative and innovative approaches",
        "Collaborating with others to find solutions",
        "Taking quick decisive action based on intuition"
      ]
    },
    {
      id: 5,
      question: "Which subjects did you enjoy most in school?",
      options: [
        "Mathematics, Physics, Computer Science",
        "Literature, Arts, History, Languages",
        "Biology, Chemistry, Environmental Science",
        "Economics, Business Studies, Political Science"
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-smooth">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                ~10 minutes
              </Badge>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Progress Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl lg:text-3xl font-bold">
                AI-Powered Career Assessment
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Brain className="w-4 h-4" />
                <span>Adaptive Questions</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <Card className="shadow-medium border-0">
            <CardHeader className="pb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    Question {currentQuestion + 1}
                  </Badge>
                  <CardTitle className="text-xl leading-relaxed">
                    {questions[currentQuestion].question}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswers[currentQuestion] === index ? "default" : "quiz"}
                    className="w-full text-left h-auto p-4 justify-start"
                    onClick={() => handleAnswerSelect(currentQuestion, index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index 
                          ? 'bg-primary border-primary' 
                          : 'border-muted-foreground/30'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm leading-relaxed">{option}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="text-sm text-muted-foreground">
              {Object.keys(selectedAnswers).length} of {questions.length} answered
            </div>
            
            {currentQuestion === questions.length - 1 ? (
              <Link to="/quiz-results">
                <Button 
                  variant="hero" 
                  disabled={!isAnswered}
                  className="flex items-center gap-2"
                >
                  View Results
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Button 
                variant="cta" 
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex items-center gap-2"
              >
                Next Question
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Help Text */}
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Answer honestly for the most accurate career recommendations. 
              Your responses will be analyzed using advanced AI algorithms to match you with suitable career paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;