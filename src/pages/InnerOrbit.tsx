import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Home,
  Heart,
  Lightbulb,
  BookOpen,
  HelpCircle,
  Sparkles,
  RefreshCw
} from "lucide-react";

interface InnerOrbitProps {
  onBack: () => void;
}

const InnerOrbit = ({ onBack }: InnerOrbitProps) => {
  const [activeSection, setActiveSection] = useState<'home' | 'affirmations' | 'tips' | 'journal' | 'what-if'>('home');
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [whatIfInput, setWhatIfInput] = useState('');

  const affirmations = [
    "I am capable of achieving great things and overcoming any challenge.",
    "My unique perspective and skills add value to everything I do.",
    "I belong here and deserve all the success that comes my way.",
    "Every challenge is an opportunity for me to grow and improve.",
    "I trust in my abilities and have confidence in my decisions.",
    "I am worthy of respect, love, and all good things in life.",
    "My potential is limitless, and I am constantly evolving.",
    "I choose to focus on progress, not perfection."
  ];
	const navigate = useNavigate();

  const copingTips = [
    {
      title: "Recognize Your Achievements",
      description: "Keep a record of your accomplishments, no matter how small. Review them regularly to remind yourself of your capabilities."
    },
    {
      title: "Talk to Others",
      description: "Share your feelings with trusted friends, mentors, or family. You'll often find that others have experienced similar doubts."
    },
    {
      title: "Challenge Negative Thoughts",
      description: "When you catch yourself thinking 'I don't deserve this,' ask yourself: 'What evidence do I have for this thought?'"
    },
    {
      title: "Focus on Learning",
      description: "Instead of trying to know everything, embrace being a learner. It's okay not to have all the answers immediately."
    },
    {
      title: "Practice Self-Compassion",
      description: "Treat yourself with the same kindness you'd show a good friend facing similar challenges."
    },
    {
      title: "Set Realistic Expectations",
      description: "Perfection is impossible. Set achievable goals and celebrate progress along the way."
    }
  ];

  const journalPrompts = [
    "What accomplishment am I most proud of this week, and why?",
    "What skills have I developed or improved recently?",
    "How have I helped or positively impacted someone lately?",
    "What challenges have I overcome that I once thought were impossible?",
    "What would I tell my younger self about handling self-doubt?",
    "What are three things I do well that others might not notice?",
    "How has a past failure actually helped me grow or learn?",
    "What feedback have I received that shows my value and contributions?"
  ];

  const Sidebar = () => (
    <div className="w-80 bg-card/50 backdrop-blur-md border-r border-border p-6 flex flex-col">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gradient">Your Inner Orbit</h1>
        </div>
        <p className="text-sm text-muted-foreground">Mental wellness & growth</p>
      </div>

      <nav className="space-y-2">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'affirmations', label: 'Affirmations', icon: Heart },
          { id: 'tips', label: 'Tips', icon: Lightbulb },
          { id: 'journal', label: 'Journal', icon: BookOpen },
          { id: 'what-if', label: 'What-If', icon: HelpCircle }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as any)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-smooth ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-primary to-primary-glow text-white shadow-glow'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  const HomeSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Your Inner-Orbit</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A space for mental wellness, self-reflection, and personal growth. Explore tools designed to help you build confidence and overcome self-doubt.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-card p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Explore Your Features</h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">Read positive affirmations to boost your confidence</span>
          </li>
          <li className="flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">Explore tips to cope with imposter syndrome</span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">Reflect with self-journaling prompts</span>
          </li>
          <li className="flex items-start space-x-3">
            <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">Discover what real achievers have to say</span>
          </li>
          <li className="flex items-start space-x-3">
            <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">Take a self-check quiz to see how you're really doing</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const AffirmationsSection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Daily Affirmation</h1>
        <p className="text-muted-foreground">Start your day with a positive mindset</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center shadow-glow">
          <div className="mb-6">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-xl font-medium text-foreground leading-relaxed">
              "{affirmations[currentAffirmation]}"
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => setCurrentAffirmation((prev) => (prev + 1) % affirmations.length)}
            className="gradient-primary hover-glow transition-smooth px-8 py-3"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Show Another
          </Button>
        </div>
      </div>
    </div>
  );

  const TipsSection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Coping Strategies for Imposter Syndrome</h1>
        <p className="text-muted-foreground">Practical approaches to overcome self-doubt</p>
      </div>

      <div className="grid gap-6">
        {copingTips.map((tip, index) => (
          <div key={index} className="bg-card rounded-2xl border border-border shadow-card p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const JournalSection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Journal for Reflection</h1>
        <p className="text-muted-foreground">Guided prompts to help you explore your thoughts and growth</p>
      </div>

      <div className="grid gap-4">
        {journalPrompts.map((prompt, index) => (
          <div key={index} className="bg-card rounded-xl border border-border shadow-card p-4 hover-lift transition-smooth">
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-r from-hero to-success rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                {index + 1}
              </div>
              <p className="text-foreground font-medium leading-relaxed">{prompt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WhatIfSection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">What-If Scenario Explorer</h1>
        <p className="text-muted-foreground">Explore your thoughts and discover new perspectives</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl border border-border shadow-card p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                What's on your mind? Share a "what if..." thought:
              </label>
              <textarea
                value={whatIfInput}
                onChange={(e) => setWhatIfInput(e.target.value)}
                placeholder="What if I'm not good enough for this position..."
                className="w-full p-4 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground h-32 resize-none"
              />
            </div>
            
            <Button 
              className="w-full gradient-primary hover-glow transition-smooth py-3"
              disabled={!whatIfInput.trim()}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Explore Outcome
            </Button>

            {whatIfInput.trim() && (
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">Reflection & Reframe:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consider this: every successful person has faced similar doubts. Your "what if" concern shows you care about doing well, which is actually a strength. Instead of focusing on what might go wrong, try asking "What if I succeed?" or "What can I learn from this experience?"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'affirmations':
        return <AffirmationsSection />;
      case 'tips':
        return <TipsSection />;
      case 'journal':
        return <JournalSection />;
      case 'what-if':
        return <WhatIfSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 flex overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card/30 backdrop-blur-md border-b border-border p-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InnerOrbit;