import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold text-white" color="blue">Career Path</h3>
          <p className="mt-3 text-sm">
            Empowering students across India with AI-driven career guidance, scholarship discovery, and peer mentorship opportunities.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-white"><i className="fab fa-github"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-white"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/career-quiz" className="hover:text-white">Career Quiz</Link></li>
            <li><Link to="/scholarships" className="hover:text-white">Scholarships</Link></li>
            <li><Link to="/mentorship" className="hover:text-white">Mentorship</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/career-explorer" className="hover:text-white">Career Explorer</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">API Reference</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © 2025 Career Path. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
