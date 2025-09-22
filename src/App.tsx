import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Existing pages
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CareerQuiz from "./pages/CareerQuiz";
import CollegeFinder from "./pages/CollegeFinder";
import Scholarships from "./pages/Scholarships";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import GeminiChat from "./pages/GeminiChat";
import Demo from "./pages/Demo";
import FAQ from "./pages/FAQ";

// New pages
import ResumeHelper from "./pages/ResumeHelper";
import Mentor from "./pages/Mentor";
import Collaboration from "./pages/Collaboration";
import Timeline from "./pages/Timeline";
import JobsInternships from "./pages/JobsInternships";
import PassionExplorer from "./pages/PassionExplorer";
import Profile from "./pages/Profile";

// Quiz system
import QuizPage from "./pages/QuizPage";     // ✅ new
import ResultsPage from "./pages/ResultsPage"; // ✅ new

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth & General */}
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Core Features */}
          <Route path="/career-quiz" element={<CareerQuiz />} />
          <Route path="/colleges" element={<CollegeFinder />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/chat" element={<GeminiChat />} /> 
          <Route path="/demo" element={<Demo />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Quiz Routes */}
          <Route path="/quiz/10th" element={<QuizPage level="10th" />} />
          <Route path="/quiz/12th" element={<QuizPage level="12th" />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* Newly Added Pages */}
          <Route path="/resume" element={<ResumeHelper />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/jobs" element={<JobsInternships />} />
          <Route path="/passion" element={<PassionExplorer />} />
          <Route path="/profile" element={<Profile />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
