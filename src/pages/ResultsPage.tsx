import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Answer, Question } from "../data/types";

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers, questions } = location.state as {
    answers: Answer[];
    questions: Question[];
  };

  const grouped = questions.reduce((acc: any, q) => {
    const ans = answers.find((a) => a.questionId === q.id);
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push({ ...q, selected: ans?.selectedOption });
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Quiz Results</h1>
      {Object.keys(grouped).map((cat) => (
        <div key={cat} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{cat}</h2>
          <ul className="space-y-2">
            {grouped[cat].map((q: any) => (
              <li
                key={q.id}
                className="p-3 border rounded bg-gray-50 flex flex-col"
              >
                <span className="font-medium">{q.text}</span>
                <span className="text-blue-600">
                  Your answer: {q.selected || "Not answered"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResultsPage;
