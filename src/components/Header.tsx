import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatName } from "@/lib/formatName";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUser(formatName(storedName));

    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUser(null);
    window.location.href = "/";
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

  // ✅ Added Demo & FAQ here
  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "#about" },
    { name: t("features"), href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: t("contact"), href: "#contact" },
    ...(user ? [{ name: t("dashboard"), href: "/dashboard" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.name === t("home") ? (
                <Link
                  key={item.name}
                  to="/"
                  onClick={() =>
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100)
                  }
                  className="text-sm font-medium hover:text-primary transition"
                >
                  {item.name}
                </Link>
              ) : item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium hover:text-primary transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Controls */}
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

            {/* Dark Mode Toggle */}
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

            {/* Auth Section */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm font-medium">👋 {user}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600"
                >
                  {t("logout")}
                </Button>
              </div>
            ) : (
              <Link to="/sign-in" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className="inline-flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> {t("login")}
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{t("home")}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-4">
                {navItems.map((item) =>
                  item.name === t("home") ? (
                    <Link
                      key={item.name}
                      to="/"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      {item.name}
                    </Link>
                  ) : item.href.startsWith("#") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>

              {/* Auth in Mobile */}
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
                      {t("logout")}
                    </Button>
                  </>
                ) : (
                  <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="inline-flex items-center gap-2"
                    >
                      <User className="w-4 h-4" /> {t("login")}
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
