import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">career path</h3>
                <p className="text-sm opacity-70">Smart Career Guidance</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Empowering students with AI-driven career guidance and authentic government data for better educational decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="opacity-80 hover:opacity-100 transition-smooth">Features</a></li>
              <li><Link to="/colleges" className="opacity-80 hover:opacity-100 transition-smooth">Find Colleges</Link></li>
              <li><Link to="/scholarships" className="opacity-80 hover:opacity-100 transition-smooth">Scholarships</Link></li>
              <li><Link to="/career-quiz" className="opacity-80 hover:opacity-100 transition-smooth">Career Quiz</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-smooth">AISHE Portal</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-smooth">NIRF Rankings</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-smooth">NSP Scholarships</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-smooth">Career Guides</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span>support@edupath.ai</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm opacity-80">
              <span>&copy; 2024 EduPath AI. All rights reserved.</span>
              <a href="#" className="hover:opacity-100 transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-smooth">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="opacity-80">Powered by:</span>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-white/10 rounded text-xs">Ministry of Education</span>
                <span className="px-2 py-1 bg-white/10 rounded text-xs">Government APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;