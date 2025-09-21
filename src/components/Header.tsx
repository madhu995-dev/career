import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, User, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatName } from "@/lib/formatName";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [loggingOut, setLoggingOut] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUser(formatName(storedName));

    const storedLang = localStorage.getItem("language");
    if (storedLang) setLanguage(storedLang);

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem("userName");
      setUser(null);
      navigate("/");
      setLoggingOut(false);
    }, 600);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  // ✅ Show Dashboard only if user logged in
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Explore", href: "#features" },
    { name: "Contact", href: "#contact" },
    ...(user ? [{ name: "Dashboard", href: "/dashboard" }] : []),
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        requestAnimationFrame(() => {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      } else {
        navigate("/" + href);
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="rounded-md p-1 bg-gradient-to-r from-teal-400 to-blue-500 shadow-md"
              >
                <rect x="2" y="6" width="20" height="12" rx="3" fill="#fff" />
                <path d="M6 8.5L10 12L6 15.5V8.5Z" fill="#0EA5A4" />
              </svg>
            </motion.div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition">
              Career Path
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <AnimatePresence>
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium hover:text-primary transition"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </AnimatePresence>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border rounded-md px-2 py-1 text-sm dark:bg-gray-800 dark:text-white"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="te">తెలుగు</option>
              <option value="ta">தமிழ்</option>
            </select>

            {/* Dark/Light Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </Button>

            {/* Auth Buttons */}
            <AnimatePresence>
              {user && !loggingOut ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="hidden md:flex items-center gap-2"
                >
                  <span className="text-sm font-medium">👋 {user}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-600"
                  >
                    Logout
                  </Button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {!user && (
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
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
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
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              {user ? (
                <AnimatePresence>
                  {!loggingOut && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col gap-2"
                    >
                      <span className="text-sm font-medium">👋 {user}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLogout}
                        className="text-red-500 hover:text-red-600"
                      >
                        Logout
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
