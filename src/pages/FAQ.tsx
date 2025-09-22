import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI Career Quiz work?",
      answer:
        "Our AI Career Quiz uses advanced algorithms to analyze your interests, skills, personality, and goals to provide personalized career recommendations tailored for students in Jammu & Kashmir.",
    },
    {
      question: "Are the scholarships on your platform legitimate?",
      answer:
        "Yes, all scholarships listed on our platform are verified and legitimate. We regularly update our database to ensure accuracy and remove expired opportunities.",
    },
    {
      question: "Is Career Path completely free to use?",
      answer:
        "Yes, Career Path is completely free for all students. We believe in providing equal access to quality career guidance and educational resources.",
    },
    {
      question: "How often is the scholarship database updated?",
      answer:
        "Our scholarship database is updated weekly to include new opportunities and remove expired ones. We also add region-specific scholarships for Jammu & Kashmir students.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {faq.question}
                  <ChevronDown className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
