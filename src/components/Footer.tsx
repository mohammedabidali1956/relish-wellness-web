import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.98 7.62 8.56 7.62 9.73C7.62 10.9 8.47 12.03 8.59 12.19C8.71 12.35 10.24 14.71 12.6 15.72C13.16 15.96 13.6 16.11 13.94 16.22C14.51 16.4 15.02 16.37 15.43 16.31C15.89 16.24 16.84 15.73 17.04 15.17C17.24 14.61 17.24 14.13 17.18 14.03C17.12 13.93 16.96 13.87 16.7 13.74C16.44 13.61 15.18 12.99 14.95 12.9C14.72 12.81 14.55 12.77 14.38 13.03C14.21 13.29 13.73 13.87 13.58 14.03C13.43 14.19 13.28 14.22 13.02 14.09C12.76 13.96 11.93 13.69 10.95 12.82C10.19 12.14 9.67 11.3 9.52 11.04C9.37 10.78 9.5 10.64 9.63 10.51C9.75 10.39 9.89 10.21 10.03 10.05C10.17 9.89 10.22 9.77 10.31 9.6C10.4 9.43 10.35 9.28 10.28 9.14C10.21 9 9.63 7.57 9.39 7.02C9.16 6.47 8.92 6.55 8.74 6.55C8.58 6.55 8.39 6.55 8.2 6.55H9.11V7.44Z" />
  </svg>
);

const socialLinks = [
  {
    label: "WhatsApp",
    subtext: "Chat with Dr. Hamid",
    handle: "+91 76010 26596",
    href: "https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20enquire%20about%20physiotherapy%20services",
    icon: WhatsAppIcon,
    hoverBg: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    accentColor: "text-[#25D366]",
  },
  {
    label: "Instagram",
    subtext: "Exercise & Clinic Updates",
    handle: "@drhamidphysio",
    href: "https://www.instagram.com/drhamidphysio",
    icon: Instagram,
    hoverBg: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
    accentColor: "text-[#E4405F]",
  },
  {
    label: "YouTube",
    subtext: "Rehab & Recovery Guides",
    handle: "@dr.hamidsphysiopainclinic",
    href: "https://www.youtube.com/@dr.hamidsphysiopainclinic",
    icon: Youtube,
    hoverBg: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
    accentColor: "text-[#FF0000]",
  },
  {
    label: "Facebook",
    subtext: "Official Facebook Page",
    handle: "Dr. Hamid's Physio Clinic",
    href: "https://www.facebook.com/profile.php?id=61587086612280",
    icon: Facebook,
    hoverBg: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    accentColor: "text-[#1877F2]",
  },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blogs", label: "Blogs" },
  { to: "/#appointment", label: "Book Appointment" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-sand-100">
      <div className="container px-4 pt-14 pb-8 md:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Summary */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/hamid-physio-logo.png"
                alt="Dr. Hamid's Physio and Pain Clinic — physiotherapy in Manikonda, Hyderabad"
                className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full object-cover border border-border"
              />
              <div>
                <span className="font-display text-base sm:text-lg font-semibold text-relish-900 leading-tight block">
                  Dr. Hamid's Physio and Pain Clinic
                </span>
                <span className="text-xs text-muted-foreground block mt-0.5">
                  Dr. Mohammed Hamid Ali, BPT
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Professional physiotherapy, advanced rehabilitation, and specialized pain management in Manikonda & Puppalguda, Hyderabad.
            </p>

            {/* Quick Icon Row */}
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Dr. Hamid's Physio on ${label}`}
                  title={`${label} - Dr. Hamid's Physio`}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 shadow-sm ${hoverBg}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-relish-900">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-relish-700"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-relish-900">Visit & Contact</h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-1 text-relish-600" />
                <a
                  href="https://maps.app.goo.gl/zGixCFnPJbKzKxy17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-muted-foreground hover:text-relish-700 transition-colors"
                >
                  4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Friends Colony,
                  Puppalguda, Manikonda, Hyderabad, Telangana 500089
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-relish-600" />
                <a
                  href="tel:+917601026596"
                  className="text-sm text-muted-foreground transition-colors hover:text-relish-700 font-medium"
                >
                  +91 76010 26596
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-relish-600" />
                <span className="text-sm text-muted-foreground">
                  Mon – Sun: 10:00 AM – 10:00 PM
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-relish-600" />
                <a
                  href="mailto:hamid.physio324@gmail.com"
                  className="text-sm break-all text-muted-foreground transition-colors hover:text-relish-700"
                >
                  hamid.physio324@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Dedicated Social Media Section - High Visibility */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-relish-900 flex items-center justify-between">
              <span>Connect With Us</span>
              <span className="text-[11px] font-normal normal-case text-relish-700 bg-relish-50 px-2 py-0.5 rounded border border-relish-200">
                Official Channels
              </span>
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Follow Dr. Hamid on social media for physiotherapy exercises, recovery tips, and direct consultations:
            </p>

            <ul className="mt-3.5 space-y-2">
              {socialLinks.map(({ label, subtext, handle, href, icon: Icon, hoverBg, accentColor }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2 rounded-lg border border-border bg-card/80 hover:bg-card hover:border-relish-300 transition-all duration-200 shadow-xs"
                  >
                    <div className={`h-8 w-8 rounded-md bg-sand-100 flex items-center justify-center shrink-0 border border-border group-${hoverBg} transition-colors`}>
                      <Icon className={`h-4 w-4 ${accentColor} group-hover:text-white transition-colors`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-foreground group-hover:text-relish-800 transition-colors">
                          {label}
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground/60 group-hover:text-relish-700 transition-colors shrink-0" />
                      </div>
                      <span className="text-[11px] text-muted-foreground truncate block">
                        {handle}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dr. Hamid's Physio and Pain Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Follow us:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon, accentColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Icon className={`h-3.5 w-3.5 ${accentColor}`} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
