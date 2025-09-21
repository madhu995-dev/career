import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      let firstName = storedName.trim();

      if (firstName.includes(" ")) {
        firstName = firstName.split(" ")[0];
      }
      if (firstName.includes("@")) {
        firstName = firstName.split("@")[0];
      }
      firstName = firstName.replace(/[^a-zA-Z]/g, "");
      if (firstName.length > 0) {
        firstName =
          firstName.charAt(0).toUpperCase() +
          firstName.slice(1).toLowerCase();
      }
      setUser(firstName);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="rounded-md p-1 bg-white shadow-md"
              >
                <rect
                  x="2"
                  y="6"
                  width="20"
                  height="12"
                  rx="3"
                  fill="#0EA5A4"
                />
                <path d="M6 8.5L10 12L6 15.5V8.5Z" fill="white" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-primary">Career Path</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <Link to="/courses" className="text-sm font-medium hover:text-primary">
              Courses
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Auth Buttons - Desktop */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm font-medium">👋 {user}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/sign-in" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className="inline-flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>
                Courses
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
            </nav>

            {/* Auth Buttons - Mobile */}
            <div className="mt-auto flex flex-col gap-3">
              {user ? (
                <>
                  <span className="text-sm font-medium">👋 {user}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-600"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="inline-flex items-center gap-2"
                  >
                    <User className="w-4 h-4" /> Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
