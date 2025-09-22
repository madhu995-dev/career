import React, { useState, useEffect } from "react";
import { Question, Answer } from "../data/types";
import { after10thQuestions } from "../data/after10thQuestions";
import { after12thQuestions } from "../data/after12thQuestions";

type QuizPageProps = {
  level: "10th" | "12th";
};

type ProfileScores = {
  Technical: number;
  Creative: number;
  Analytical: number;
  Leadership: number;
  Communication: number;
  RegionalImpact: number;
};

type Career = {
  title: string;
  description: string;
  requirements: ProfileScores;
  salary: string;
  marketDemand: "High" | "Medium" | "Low";
  workLifeBalance: "Excellent" | "Good" | "Challenging";
  jobSecurity: "High" | "Medium" | "Low";
  matchScore?: number;
};

const careers: Career[] = [
  {
    title: "Software Engineer",
    description:
      "Develop software solutions and applications using programming languages and development tools.",
    requirements: {
      Technical: 90,
      Creative: 60,
      Analytical: 85,
      Leadership: 70,
      Communication: 65,
      RegionalImpact: 75,
    },
    salary: "₹6-15 LPA",
    marketDemand: "High",
    workLifeBalance: "Good",
    jobSecurity: "High",
  },
  {
    title: "UX/UI Designer",
    description:
      "Create user-friendly and visually appealing digital interfaces.",
    requirements: {
      Technical: 70,
      Creative: 95,
      Analytical: 60,
      Leadership: 50,
      Communication: 80,
      RegionalImpact: 70,
    },
    salary: "₹5-12 LPA",
    marketDemand: "High",
    workLifeBalance: "Excellent",
    jobSecurity: "Medium",
  },
  {
    title: "Data Scientist",
    description:
      "Analyze complex data to help organizations make informed decisions.",
    requirements: {
      Technical: 90,
      Creative: 40,
      Analytical: 95,
      Leadership: 60,
      Communication: 70,
      RegionalImpact: 80,
    },
    salary: "₹8-20 LPA",
    marketDemand: "High",
    workLifeBalance: "Good",
    jobSecurity: "High",
  },
  {
    title: "Healthcare Professional",
    description:
      "Provide medical care and support to patients in various healthcare settings.",
    requirements: {
      Technical: 70,
      Creative: 40,
      Analytical: 80,
      Leadership: 60,
      Communication: 90,
      RegionalImpact: 95,
    },
    salary: "₹8-25 LPA",
    marketDemand: "High",
    workLifeBalance: "Challenging",
    jobSecurity: "High",
  },
];

const QuizPage: React.FC<QuizPageProps> = ({ level }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [profile, setProfile] = useState<ProfileScores | null>(null);
  const [recommendedCareers, setRecommendedCareers] = useState<Career[]>([]);

  useEffect(() => {
    const dataSet = level === "10th" ? after10thQuestions : after12thQuestions;
    const categories = Array.from(new Set(dataSet.map((q) => q.category)));

    const selectedQuestions: Question[] = [];
    categories.forEach((cat) => {
      const catQuestions = dataSet.filter((q) => q.category === cat);
      shuffleArray(catQuestions);
      selectedQuestions.push(...catQuestions.slice(0, 3));
    });

    setQuestions(shuffleArray(selectedQuestions));
  }, [level]);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSelect = (questionId: string, option: string) => {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === questionId);
      if (existing) {
        return prev.map((a) =>
          a.questionId === questionId ? { ...a, selectedOption: option } : a
        );
      } else {
        return [...prev, { questionId, selectedOption: option }];
      }
    });
  };

  const calculateProfile = (): ProfileScores => {
    const profileScores: ProfileScores = {
      Technical: 0,
      Creative: 0,
      Analytical: 0,
      Leadership: 0,
      Communication: 0,
      RegionalImpact: 0,
    };
    const counts: Record<string, number> = {
      Technical: 0,
      Creative: 0,
      Analytical: 0,
      Leadership: 0,
      Communication: 0,
      RegionalImpact: 0,
    };

    answers.forEach((ans) => {
      const q = questions.find((q) => q.id === ans.questionId);
      if (q && q.category in profileScores) {
        profileScores[q.category as keyof ProfileScores] += 1;
        counts[q.category as keyof ProfileScores] += 1;
      }
    });

    const percentages: ProfileScores = { ...profileScores };
    Object.keys(profileScores).forEach((key) => {
      const k = key as keyof ProfileScores;
      percentages[k] = counts[k]
        ? Math.round((profileScores[k] / counts[k]) * 100)
        : 0;
    });

    return percentages;
  };

  const calculateCareerMatches = (profile: ProfileScores) => {
    return careers
      .map((career) => {
        const totalScore = Object.keys(profile).reduce((acc, key) => {
          const k = key as keyof ProfileScores;
          const diff = Math.abs(profile[k] - career.requirements[k]);
          return acc + (100 - diff);
        }, 0);
        const matchScore = Math.round(totalScore / 6);
        return { ...career, matchScore };
      })
      .sort((a, b) => (b.matchScore ?? 0) - (a.matchScore ?? 0));
  };

  const handleSubmit = () => {
    const profileResult = calculateProfile();
    setProfile(profileResult);
    setRecommendedCareers(calculateCareerMatches(profileResult));
    setSubmitted(true);
  };

  if (!questions.length) return <p>Loading quiz…</p>;

  const current = questions[currentIndex];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  if (submitted && profile) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Quiz Completed 🎉</h1>

        {/* Profile Analysis */}
        <h2 className="text-2xl font-semibold mb-4">Your Profile Analysis</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.keys(profile).map((key) => {
            const k = key as keyof ProfileScores;
            return (
              <div key={k} className="p-4 border rounded bg-gray-50">
                <p className="font-semibold">{k}</p>
                <p className="text-xl">{profile[k]}%</p>
              </div>
            );
          })}
        </div>

        {/* Career Recommendations */}
        <h2 className="text-2xl font-semibold mb-4">Career Recommendations</h2>
        {recommendedCareers.map((career) => (
          <div
            key={career.title}
            className="mb-6 p-4 border rounded shadow-sm bg-white"
          >
            <h3 className="font-bold text-lg">{career.title}</h3>
            <p className="mb-2">{career.description}</p>
            <p>
              Match Score:{" "}
              <span className="font-semibold">{career.matchScore}%</span>
            </p>
            <p>Salary Range: {career.salary}</p>
            <p>Market Demand: {career.marketDemand}</p>
            <p>Work-Life Balance: {career.workLifeBalance}</p>
            <p>Job Security: {career.jobSecurity}</p>
          </div>
        ))}

        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  // Quiz View
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        {level} Career Quiz
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Question {currentIndex + 1} of {questions.length} ({progress}% complete)
      </p>

      <div className="w-full h-3 bg-gray-200 rounded mb-6">
        <div
          className="h-3 bg-blue-600 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mb-6 p-4 border rounded shadow-sm">
        <p className="font-semibold mb-2">{current.text}</p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {current.category}
        </p>
        <div className="flex flex-col gap-2">
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(current.id, opt)}
              className={`p-3 border rounded text-left transition ${
                answers.find((a) => a.questionId === current.id)
                  ?.selectedOption === opt
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded font-semibold"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((i) => i + 1)}
            className="px-6 py-2 bg-blue-600 text-white rounded font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
