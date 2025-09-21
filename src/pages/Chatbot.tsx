import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { role: "assistant", content: data.reply || "⚠️ No reply" };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error: Could not connect to AI service." },
      ]);
    }
    setLoading(false);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            🤖 Career Advisor Chatbot
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Chat Window */}
          <div className="h-[400px] overflow-y-auto p-4 border rounded-lg bg-muted/30 space-y-3">
            {messages.length === 0 && (
              <p className="text-muted-foreground text-center">
                Start a conversation to get career advice!
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "mr-auto bg-accent text-accent-foreground"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="italic text-muted-foreground">AI is typing...</div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-2 mt-4">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage} disabled={loading}>
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
