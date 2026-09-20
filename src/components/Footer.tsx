
import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/hamid-physio-logo.png" 
                alt="Dr. Hamid's Physio Clinic - Physiotherapy in Manikonda, Hyderabad" 
                className="h-16 w-16 mr-3 rounded-full object-cover border-2 border-yellow-400 shadow-md" 
              />
              <span className="text-lg font-semibold text-relish-600">Dr. Hamid's Physio Clinic</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Professional physiotherapy and wellness services by Dr. Mohammed Hamid Ali, BPT, in Manikonda, Hyderabad dedicated to improving your quality of life.
            </p>
            <div className="flex gap-2">
              {/* Social Icons would go here */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/reviews" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/#appointment" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Book Appointment
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-relish-600 mt-0.5 mr-3" />
                <span className="text-muted-foreground">4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Friends Colony, Puppalguda, Manikonda, Hyderabad, Telangana 500089</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-relish-600 mr-3" />
                <span className="text-muted-foreground">+91 76010 26596</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 text-relish-600 mr-3" />
                <a href="mailto:hamid.physio324@gmail.com" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  hamid.physio324@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Hamid's Physio Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
