import { Toaster } from "@/components/ui/toaster"; 
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

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
import InnerOrbit from "./pages/InnerOrbit";
import PrepIQ from "./pages/PrepIQ";
import Mentorship from "./pages/Mentorship";
import CollaborationHub from "./pages/CollaborationHub";
import CareerExplorer from "./pages/CareerExplorer";

// New pages
import ResumeHelper from "./pages/ResumeHelper";
import Mentor from "./pages/Mentor";
import Timeline from "./pages/Timeline";
import JobsInternships from "./pages/JobsInternships";
import PassionExplorer from "./pages/PassionExplorer";
import Profile from "./pages/Profile";

// Quiz system
import QuizPage from "./pages/QuizPage";     
import ResultsPage from "./pages/ResultsPage"; 

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* ✅ Toasts available everywhere */}
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Core Features */}
            <Route path="/career-quiz" element={<CareerQuiz />} />
            <Route path="/colleges" element={<CollegeFinder />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/chat" element={<GeminiChat />} /> 
            <Route path="/demo" element={<Demo />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Protected Dashboard */}
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/sign-in" replace />}
            />

            {/* Quiz Routes */}
            <Route path="/quiz/10th" element={<QuizPage level="10th" />} />
            <Route path="/quiz/12th" element={<QuizPage level="12th" />} />
            <Route path="/results" element={<ResultsPage />} />

            {/* Newly Added Pages */}
            <Route path="/resume" element={<ResumeHelper />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/jobs" element={<JobsInternships />} />
            <Route path="/passion" element={<PassionExplorer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inner-orbit" element={<InnerOrbit />} />
            <Route path="/prepiq" element={<PrepIQ />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/collaboration" element={<CollaborationHub />} />
            <Route path="/careers" element={<CareerExplorer />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
