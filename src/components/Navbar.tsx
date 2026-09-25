
import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToAppointmentSection } from "@/lib/navigation";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Reviews", path: "/reviews" },
  { title: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToAppointment = () => {
    scrollToAppointmentSection(navigate, location.pathname);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center min-w-0 flex-1">
          <NavLink to="/" className="flex items-center min-w-0">
            <img 
              src="/images/logo/hamid-physio-logo.png" 
              alt="Dr. Hamid's Physio Clinic - Best Physiotherapy in Manikonda" 
              className="h-8 w-8 sm:h-10 sm:w-10 mr-2 flex-shrink-0 rounded-full object-cover" 
            />
            <span className="text-xs sm:text-sm lg:text-base font-semibold text-relish-600 truncate">
              <span className="hidden lg:inline">Dr. Hamid's Physio Clinic</span>
              <span className="hidden sm:inline lg:hidden">Dr. Hamid's Physio</span>
              <span className="sm:hidden">Dr. Hamid's</span>
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm lg:text-base font-medium transition-colors hover:text-relish-600 whitespace-nowrap",
                  isActive ? "text-relish-600" : "text-muted-foreground"
                )
              }
            >
              {link.title}
            </NavLink>
          ))}
          <Button 
            size="sm" 
            className="bg-relish-600 hover:bg-relish-700 whitespace-nowrap text-xs lg:text-sm"
            onClick={scrollToAppointment}
          >
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium py-2 transition-colors hover:text-relish-600",
                    isActive ? "text-relish-600" : "text-muted-foreground"
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
            <Button 
              className="bg-relish-600 hover:bg-relish-700 w-full"
              onClick={() => {
                scrollToAppointment();
                setIsMobileMenuOpen(false);
              }}
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
