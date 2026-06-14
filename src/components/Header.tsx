import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, Sparkles, Phone } from "lucide-react";

interface HeaderProps {
  onBookNowClick: () => void;
}

export default function Header({ onBookNowClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Hotels", href: "#hotels" },
    { label: "Tour Packages", href: "#packages" },
    { label: "VIP Darshan", href: "#vip-darshan" },
    { label: "Tourist Guides", href: "#guides" },
    { label: "About Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-100/90 backdrop-blur-md shadow-md py-3 border-b border-gold-200/50"
          : "bg-gradient-to-b from-black/60 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Title */}
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="p-1.5 rounded-full bg-saffron-500 text-white group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-yellow-100" />
            </div>
            <div>
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight block leading-tight ${
                isScrolled ? "text-saffron-700" : "text-white"
              }`}>
                Mathura Vrindavan
              </span>
              <span className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase block ${
                isScrolled ? "text-gold-600" : "text-amber-300"
              }`}>
                Pilgrimage Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-saffron-600 ${
                  isScrolled ? "text-stone-700" : "text-stone-100 hover:text-amber-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct CTA Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919172567691"
              className={`flex items-center gap-1.5 text-xs font-semibold ${
                isScrolled ? "text-stone-700 hover:text-saffron-600" : "text-white hover:text-amber-300"
              } transition-colors`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 91725 67691</span>
            </a>
            
            <button
              onClick={onBookNowClick}
              id="cta-book-now"
              className="px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 bg-saffron-600 hover:bg-saffron-700 text-white transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburguer-style Button */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={onBookNowClick}
              className="md:hidden px-3 py-1.5 rounded-full bg-saffron-600 text-white text-[10px] font-bold tracking-wider uppercase shadow"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-btn"
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? "text-stone-800 hover:bg-stone-200/50" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out/Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-cream-50 border-b border-gold-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-stone-700 hover:bg-saffron-50 hover:text-saffron-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gold-200/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4">
              <a
                href="tel:+919172567691"
                className="flex items-center gap-2 text-stone-600 hover:text-saffron-600"
              >
                <Phone className="w-4 h-4 text-saffron-600" />
                <span className="text-sm font-medium">+91 91725 67691</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-saffron-600 hover:bg-saffron-700 text-white font-bold tracking-wider uppercase text-sm shadow-md"
              >
                Book Your Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
