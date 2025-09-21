import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  // ✅ Load stored username on mount
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      let displayName = storedName.trim();
      if (displayName.includes(" ")) displayName = displayName.split(" ")[0];
      if (displayName.includes("@")) displayName = displayName.split("@")[0];
      displayName = displayName.replace(/[^a-zA-Z]/g, "");
      displayName =
        displayName.length > 0
          ? displayName.charAt(0).toUpperCase() +
            displayName.slice(1).toLowerCase()
          : "User";
      setUser(displayName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          CareerPath
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <Link to="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link to={user ? "/dashboard" : "/sign-in"} className="hover:text-blue-600">
            Dashboard
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="font-medium">👋 {user}</span>
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
            <Link to="/sign-in">
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-bold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 p-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                About
              </Link>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                Features
              </a>
              <Link
                to="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                Contact
              </Link>
              <Link
                to={user ? "/dashboard" : "/sign-in"}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                Dashboard
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="mt-auto p-4 border-t dark:border-gray-700">
              {user ? (
                <div className="flex flex-col gap-2">
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
                <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full inline-flex items-center gap-2 justify-center"
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
