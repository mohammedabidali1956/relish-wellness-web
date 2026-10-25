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
  { title: "Blogs", path: "/blogs" },
  { title: "Conditions", path: "/#conditions" },
  { title: "Patient Resources", path: "/#patient-info" },
  { title: "Contact", path: "/contact" },
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

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const sectionId = path.slice(2);
      if (location.pathname !== "/") {
        navigate(path);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5dec9]/80 bg-[#faf6ed]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf6ed]/90 transition-colors">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name exactly matching reference typography */}
        <div className="flex items-center min-w-0">
          <NavLink to="/" className="flex items-center gap-3 min-w-0 group" aria-label="Dr Hamid’s Physio and Pain Clinic – Home">
            <img
              src="/images/logo/hamid-physio-logo.png"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full object-contain"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0a1f33] group-hover:text-[#183955] transition-colors leading-none">
                Dr Hamid’s
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#183955] tracking-tight mt-1">
                Physio and Pain Clinic
              </span>
            </div>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isAnchor = link.path.startsWith("/#");
            return isAnchor ? (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.path)}
                className="text-sm font-medium text-[#2d3748] hover:text-[#0a1f33] transition-colors cursor-pointer py-1 relative"
              >
                {link.title}
              </button>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-[#0a1f33] py-1 relative",
                    isActive
                      ? "text-[#0a1f33] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a853]"
                      : "text-[#4a5568]"
                  )
                }
              >
                {link.title}
              </NavLink>
            );
          })}

          <Button
            size="default"
            className="bg-[#0b1d33] hover:bg-[#132c4d] text-white font-medium rounded-lg px-6 h-11 text-sm shadow-sm transition-all"
            onClick={scrollToAppointment}
          >
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            size="sm"
            className="bg-[#0b1d33] hover:bg-[#132c4d] text-white text-xs px-3 h-9 rounded-md sm:hidden"
            onClick={scrollToAppointment}
          >
            Book
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
            className="text-[#0b1d33]"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#faf6ed] border-b border-[#e5dec9] px-6 py-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isAnchor = link.path.startsWith("/#");
              return isAnchor ? (
                <button
                  key={link.title}
                  onClick={() => handleNavClick(link.path)}
                  className="text-left text-base font-medium py-2 text-[#2d3748] hover:text-[#0a1f33] border-b border-[#ece5d4]"
                >
                  {link.title}
                </button>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-base font-medium py-2 border-b border-[#ece5d4] transition-colors",
                      isActive ? "text-[#0a1f33] font-semibold" : "text-[#4a5568]"
                    )
                  }
                >
                  {link.title}
                </NavLink>
              );
            })}

            <div className="pt-4 flex flex-col gap-2">
              <Button
                className="bg-[#0b1d33] hover:bg-[#132c4d] text-white w-full h-11 rounded-lg"
                onClick={() => {
                  scrollToAppointment();
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Appointment
              </Button>
              <a
                href="https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20enquire%20about%20physiotherapy%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-[#2a5d45] font-semibold py-2"
              >
                Chat on WhatsApp (+91 76010 26596)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
