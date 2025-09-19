import { Button } from "@/components/ui/button";
import {
  Compass,
  Menu,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="rounded-md p-1 bg-white shadow-md"
              >
                <rect x="2" y="6" width="20" height="12" rx="3" fill="#0EA5A4" />
                <path d="M6 8.5L10 12L6 15.5V8.5Z" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary flex items-center gap-1">
                Career Path<span className="text-yellow-500">✨</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                Smart Career Guidance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Features
            </a>
            <Link
              to="/colleges"
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Colleges
            </Link>
            <Link
              to="/scholarships"
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Scholarships
            </Link>
            <Link
              to="/resources"
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Resources
            </Link>
          </nav>

          {/* Action Buttons + Language Selector */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="hidden md:block">
              <select className="bg-white text-black text-sm px-3 py-1 rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="te">తెలుగు</option>
                <option value="ta">தமிழ்</option>
                <option value="ml">മലയാളം</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </div>

            {/* 🚀 Take Quiz */}
            <Link to="/career-quiz">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex"
              >
                🚀 Take Career Quiz
              </Button>
            </Link>

            {/* Auth Buttons */}
            <Link to="/sign-up">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex items-center gap-2"
              >
                <User className="w-4 h-4" /> Sign In
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Login
              </Button>
            </Link>
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;