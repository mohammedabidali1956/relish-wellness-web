
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
              alt="Dr. Hamid's Physio and Pain Clinic - Best Physiotherapy in Manikonda" 
              className="h-12 w-12 sm:h-16 sm:w-16 mr-2 flex-shrink-0 rounded-full object-cover" 
            />
            <span className="text-xs sm:text-sm lg:text-base font-semibold text-relish-600 truncate">
              <span className="hidden lg:inline">Dr. Hamid's Physio and Pain Clinic</span>
              <span className="hidden sm:inline lg:hidden">Dr. Hamid's Physio and Pain Clinic</span>
              <span className="sm:hidden">Dr. Hamid's Physio and Pain Clinic</span>
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

            <div className="pt-4 mt-1 border-t border-border">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
                Connect With Dr. Hamid
              </p>
              <div className="flex items-center justify-around px-2">
                <a
                  href="https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20enquire%20about%20physiotherapy%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground hover:text-emerald-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <div className="h-9 w-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.98 7.62 8.56 7.62 9.73C7.62 10.9 8.47 12.03 8.59 12.19C8.71 12.35 10.24 14.71 12.6 15.72C13.16 15.96 13.6 16.11 13.94 16.22C14.51 16.4 15.02 16.37 15.43 16.31C15.89 16.24 16.84 15.73 17.04 15.17C17.24 14.61 17.24 14.13 17.18 14.03C17.12 13.93 16.96 13.87 16.7 13.74C16.44 13.61 15.18 12.99 14.95 12.9C14.72 12.81 14.55 12.77 14.38 13.03C14.21 13.29 13.73 13.87 13.58 14.03C13.43 14.19 13.28 14.22 13.02 14.09C12.76 13.96 11.93 13.69 10.95 12.82C10.19 12.14 9.67 11.3 9.52 11.04C9.37 10.78 9.5 10.64 9.63 10.51C9.75 10.39 9.89 10.21 10.03 10.05C10.17 9.89 10.22 9.77 10.31 9.6C10.4 9.43 10.35 9.28 10.28 9.14C10.21 9 9.63 7.57 9.39 7.02C9.16 6.47 8.92 6.55 8.74 6.55C8.58 6.55 8.39 6.55 8.2 6.55H9.11V7.44Z" />
                    </svg>
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/drhamidphysio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <div className="h-9 w-9 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@dr.hamidsphysiopainclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground hover:text-red-600 transition-colors"
                  aria-label="YouTube"
                >
                  <div className="h-9 w-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                    </svg>
                  </div>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61587086612280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <div className="h-9 w-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
