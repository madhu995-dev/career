import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CareerQuiz from "./pages/CareerQuiz";
import CollegeFinder from "./pages/CollegeFinder";
import Scholarships from "./pages/Scholarships";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/career-quiz" element={<CareerQuiz />} />
          <Route path="/colleges" element={<CollegeFinder />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/dashboard" element={<Dashboard />} />
		  <Route path="/quiz" element={<Quiz />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
