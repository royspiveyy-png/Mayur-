import { MouseEvent } from "react";
import { Sparkles, MapPin, Phone, Mail, Youtube, Facebook, Instagram, Heart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home Base", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Vetted Hotels", href: "#hotels" },
    { label: "Tour Packages", href: "#packages" },
    { label: "VIP Darshan", href: "#vip-darshan" },
    { label: "Expert Guides", href: "#guides" }
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
    <footer className="bg-stone-950 text-stone-300 border-t border-gold-400/20 pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core details rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Info Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-saffron-500 text-white shadow-md">
                <Sparkles className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight block text-white leading-tight">
                  Mathura Vrindavan
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase block text-amber-300 leading-none">
                  Pilgrimage Services
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Standardizing spiritual tourism with premium, secure, and highly respectful on-ground coordination. Helping worldwide families discover the sacred essence of Vraja Dham with blissful peace.
            </p>

            {/* Social Links bookmarks */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook Profile"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-saffron-600 hover:text-white hover:border-saffron-600 transition-colors"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-saffron-600 hover:text-white hover:border-saffron-600 transition-colors"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube Channel"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-saffron-600 hover:text-white hover:border-saffron-600 transition-colors"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links bookmarks */}
          <div className="lg:col-span-2.5 space-y-6">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link, key) => (
                <li key={key}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-saffron-400 transition-colors flex items-center gap-1 text-stone-400"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Contact Information
            </h4>
            
            <ul className="space-y-4 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-saffron-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Office:</strong> Raman Reti Chowk, Opp. ISKCON Gate, Vrindavan, Mathura District, Uttar Pradesh, PIN - 281121
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-saffron-500 shrink-0" />
                <span>+91 91725 67691</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-saffron-500 shrink-0" />
                <span>bookings@mathuravrindavanpilgrim.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter capture */}
          <div className="lg:col-span-2.5 space-y-6">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe to receive sacred Vraja festival calendars, holy Ekadashi fast limits, and special seasonal offerings.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Pilgrim Email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs focus:ring-1 focus:ring-saffron-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-[10px] tracking-wider uppercase transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Legal and copy summary section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <p>© 2026 Mathura Vrindavan Pilgrimage Services Trust. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-stone-400">
            <a href="#terms" className="hover:text-saffron-400 transition-colors">Terms & Conditions</a>
            <span className="text-stone-700 font-mono">|</span>
            <a href="#privacy" className="hover:text-saffron-400 transition-colors">Privacy Policy</a>
          </div>

          <p className="flex items-center gap-1 text-[10px] text-stone-600 leading-none">
            <span>Made with deep devotion</span>
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>for Vraja Dham</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
