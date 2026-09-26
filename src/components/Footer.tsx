import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/drhamidphysio",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587086612280",
    Icon: Facebook,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/hamid-physio-logo.png"
                alt="Dr. Hamid's Physio and Pain Clinic — physiotherapy in Manikonda, Hyderabad"
                className="h-24 w-24 shrink-0 rounded-full object-cover border border-border"
              />
              <span className="font-display text-base sm:text-lg font-semibold text-relish-900 leading-tight">
                Dr. Hamid's Physio and Pain Clinic
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Professional physiotherapy, pain relief and rehabilitation by
              Dr. Mohammed Hamid Ali, BPT, in Manikonda, Hyderabad.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-relish-700 transition-colors hover:border-relish-300 hover:text-relish-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Quick links</h3>
            <ul className="mt-4 space-y-3">
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

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-1 text-relish-600" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Friends Colony,
                  Puppalguda, Manikonda, Hyderabad, Telangana 500089
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-relish-600" />
                <a
                  href="tel:+917601026596"
                  className="text-sm text-muted-foreground transition-colors hover:text-relish-700"
                >
                  +91 76010 26596
                </a>
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
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dr. Hamid's Physio and Pain Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
