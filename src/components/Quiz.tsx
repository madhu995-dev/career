import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Info } from "lucide-react";

// Types
type Question = {
  id: string;
  category: string;
  text: string;
  options: string[];
};

// --- Your Question Bank (same as before) ---

// Shuffle Helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}
function getRandomQuestions(n: number, bank: Question[]): Question[] {
  return shuffleArray(bank).slice(0, n);
}

const Quiz: React.FC = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setQuiz(getRandomQuestions(12, questionBank));
  }, []);

  const current = quiz[index];
  const total = quiz.length;

  const handleAnswer = (opt: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: opt }));
    if (index < total - 1) setIndex(index + 1);
  };

  // Start Screen
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Info className="text-indigo-600 w-6 h-6" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3">AI Career Quiz</h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover your perfect career path with our intelligent assessment
          system. Answer a few questions and get personalized career
          recommendations.
        </p>
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Start Quiz 🚀
        </button>
      </div>
    );
  }

  // Quiz Screen
  if (!quiz.length) return <p>Loading…</p>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm">
          <Info className="w-4 h-4 mr-2" />
          Questions are randomly generated for each user
        </div>
        <h1 className="text-3xl font-bold mt-6">AI Career Quiz</h1>
        <p className="text-gray-600 mt-2">
          Answer the questions to unlock your personalized career path.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Question {index + 1} of {total}
          </span>
          <span>{Math.round(((index + 1) / total) * 100)}% Complete</span>
        </div>
        <Progress value={((index + 1) / total) * 100} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>{current.text}</CardTitle>
          <p className="text-sm text-gray-500 mt-1">
            Category: {current.category}
          </p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {current.options.map((opt) => (
              <li key={opt}>
                <button
                  onClick={() => handleAnswer(opt)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                    answers[current.id] === opt
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white hover:bg-indigo-50 border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
