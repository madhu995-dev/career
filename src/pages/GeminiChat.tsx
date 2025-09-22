import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const GeminiChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      // ✅ Call backend using env variable
      const res = await axios.post(`${API_URL}/chat`, { input });
      setResponse(res.data.reply || "No response");
    } catch (err) {
      console.error(err);
      setResponse("⚠️ Error fetching response. Check server or API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Gemini Chat</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your prompt..."
        className="border p-2 w-96 rounded"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className={`px-4 py-2 mt-3 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      <div className="mt-4 p-4 border rounded w-96 min-h-[80px] bg-gray-50">
        <strong>Response:</strong>
        <p className="mt-2 whitespace-pre-wrap">{response}</p>
      </div>
    </div>
  );
};

export default GeminiChat;
