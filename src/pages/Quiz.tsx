import React, { useEffect, useState } from "react";

type Question = {
  id: string;
  category: string;
  text: string;
  options: string[];
};

const questionBank: Question[] = [
  {
    id: "q1",
    category: "Personality",
    text: "What type of learning environment works best for you?",
    options: [
      "Quiet library with individual study space",
      "Group study sessions with friends",
      "Interactive classroom discussions",
      "Online learning with videos and tutorials",
    ],
  },
  {
    id: "q2",
    category: "Personality",
    text: "How do you prefer to approach difficult subjects?",
    options: [
      "Break them down into smaller topics",
      "Ask teachers and friends for help",
      "Use visual aids and diagrams",
      "Practice with exercises and examples",
    ],
  },
  {
    id: "q3",
    category: "Skills",
    text: "What comes most naturally to you in school?",
    options: [
      "Understanding complex concepts",
      "Helping classmates with their studies",
      "Organizing events and activities",
      "Following instructions carefully",
    ],
  },
  {
    id: "q4",
    category: "Interests",
    text: "Which subject do you enjoy studying the most?",
    options: [
      "Mathematics and Science",
      "English and Literature",
      "History and Social Studies",
      "Computer Science and Technology",
      "Art and Creative subjects",
    ],
  },
  {
    id: "q5",
    category: "Values",
    text: "What matters most to you in choosing a career?",
    options: [
      "Job security and income",
      "Opportunity to help others and society",
      "Creative freedom and self-expression",
      "High salary and financial success",
      "Work-life balance and personal time",
    ],
  },
  {
    id: "q6",
    category: "Skills",
    text: "Which skill do you feel most confident about?",
    options: [
      "Problem-solving and logical thinking",
      "Communication and presentation",
      "Creativity and artistic expression",
      "Leadership and teamwork",
      "Technical and computer skills",
    ],
  },
  {
    id: "q7",
    category: "Interests",
    text: "What type of activities do you enjoy in your free time?",
    options: [
      "Solving puzzles and brain teasers",
      "Reading books and articles",
      "Playing sports and outdoor activities",
      "Creating art, music, or writing",
      "Learning about technology and gadgets",
    ],
  },
  {
    id: "q8",
    category: "Values",
    text: "What motivates you most in your studies?",
    options: [
      "Getting good grades and recognition",
      "Learning new things and gaining knowledge",
      "Helping others understand difficult topics",
      "Preparing for a successful career",
      "Making your family proud",
    ],
  },
  {
    id: "q9",
    category: "Interests",
    text: "Which field excites you the most for future studies?",
    options: [
      "Engineering and Technology",
      "Medicine and Healthcare",
      "Business and Management",
      "Arts and Humanities",
      "Science and Research",
    ],
  },
  {
    id: "q10",
    category: "Goals",
    text: "What would you like to achieve in the next 5 years?",
    options: [
      "Complete graduation with excellent grades",
      "Gain practical work experience",
      "Develop new skills and certifications",
      "Build a strong professional network",
      "Contribute to your community and society",
    ],
  },
  {
    id: "q11",
    category: "Goals",
    text: "Where do you see yourself after completing your education?",
    options: [
      "Working in a big company or organization",
      "Starting your own business or startup",
      "Pursuing higher studies and research",
      "Working in government or public service",
      "Teaching and mentoring others",
    ],
  },
  {
    id: "q12",
    category: "Personality",
    text: "Do you prefer structured schedules or flexible routines?",
    options: [
      "Structured schedules with clear deadlines",
      "Flexible routines that change daily",
      "A mix of both",
    ],
  },
];

// Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomQuestions(n: number): Question[] {
  return shuffleArray(questionBank).slice(0, n);
}

const Quiz: React.FC = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setQuiz(getRandomQuestions(12));
  }, []);

  if (!started) {
    return (
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
          Gamified Aptitude Quiz
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Take our engaging AI-powered quiz to discover your strengths and get personalized career recommendations with clear roadmaps.
        </p>

        <ul style={{ textAlign: "left", listStyle: "none", padding: 0, marginBottom: "20px" }}>
          <li>⚡ <strong>AI-Powered</strong></li>
          <li>🎯 <strong>Personalized Results</strong></li>
          <li>🛣️ <strong>Career Roadmaps</strong></li>
          <li>📊 <strong>Progress Tracking</strong></li>
        </ul>

        <button
          onClick={() => setStarted(true)}
          style={{
            padding: "12px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Start Quiz 🚀
        </button>
      </div>
    );
  }

  if (!quiz.length) return <p>Loading quiz…</p>;

  const current = quiz[index];
  const total = quiz.length;

  const handleAnswer = (option: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
    if (index < total - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>AI Career Quiz</h1>
        <p>
          Discover your perfect career path with our intelligent assessment system.
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: "20px" }}>
        <p>
          Question {index + 1} of {total} — {Math.round(((index + 1) / total) * 100)}%
          Complete
        </p>
        <div style={{ height: "8px", background: "#eee", borderRadius: "4px" }}>
          <div
            style={{
              height: "100%",
              width: `${((index + 1) / total) * 100}%`,
              background: "#4f46e5",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h3>{current.text}</h3>
        <p style={{ fontSize: "14px", color: "#777" }}>Category: {current.category}</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {current.options.map((opt) => (
            <li key={opt} style={{ margin: "10px 0" }}>
              <button
                onClick={() => handleAnswer(opt)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  background: answers[current.id] === opt ? "#eef2ff" : "#fff",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit */}
      {index === total - 1 && (
        <button
          onClick={() =>
            alert("Quiz completed! Answers: " + JSON.stringify(answers, null, 2))
          }
          style={{
            padding: "12px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit & Get Recommendations
        </button>
      )}
    </div>
  );
};

export default Quiz;
