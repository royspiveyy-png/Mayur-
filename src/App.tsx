/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Temples from "./components/Temples";
import Packages from "./components/Packages";
import Hotels from "./components/Hotels";
import VIPDarshan from "./components/VIPDarshan";
import Guides from "./components/Guides";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BookingListModal from "./components/BookingListModal";
import { BookingDetails } from "./types";
import { Calendar, CheckCircle, Sparkles, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [prefilledPackage, setPrefilledPackage] = useState("");
  const [prefilledHotel, setPrefilledHotel] = useState("");
  const [prefilledGuide, setPrefilledGuide] = useState("");
  const [selectedTemples, setSelectedTemples] = useState<string[]>([]);
  const [bookings, setBookings] = useState<(BookingDetails & { id: string; dateSubmitted: string; selectedTemples?: string[] })[]>([]);
  const [isBookingListOpen, setIsBookingListOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState("");

  // Load bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("vraja_bookings");
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  // Shared scroll smooth helper
  const scrollToBookingForm = () => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = formElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setPrefilledPackage(packageName);
    scrollToBookingForm();
  };

  const handleSelectHotel = (hotelName: string) => {
    setPrefilledHotel(hotelName);
    scrollToBookingForm();
  };

  const handleSelectGuide = (guideName: string) => {
    setPrefilledGuide(guideName);
    scrollToBookingForm();
  };

  const handleAddTempleToPlan = (templeName: string) => {
    if (selectedTemples.includes(templeName)) {
      setSelectedTemples((prev) => prev.filter((t) => t !== templeName));
    } else {
      setSelectedTemples((prev) => [...prev, templeName]);
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    // Scroll to form and prepopulate notes or package
    if (serviceTitle.includes("Package")) {
      setPrefilledPackage("One Day Mathura Vrindavan Darshan");
    } else if (serviceTitle.includes("Hotel")) {
      setPrefilledHotel("Nidhivan Sarovar Portico");
    } else if (serviceTitle.includes("VIP")) {
      scrollToBookingForm();
    } else {
      scrollToBookingForm();
    }
    scrollToBookingForm();
  };

  const handleSubmitBooking = (details: BookingDetails & { selectedGuide?: string; selectedTemples?: string[] }) => {
    const newBooking = {
      ...details,
      id: "mvp-" + Math.random().toString(36).substring(2, 11),
      dateSubmitted: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    };

    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem("vraja_bookings", JSON.stringify(updated));
    setLastSubmittedId(newBooking.id);
    setShowSuccessToast(true);

    // Auto close success toast after 8 seconds
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 8000);
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("vraja_bookings", JSON.stringify(updated));
  };

  return (
    <div className="bg-cream-50 text-stone-800 min-h-screen font-sans">
      
      {/* Premium Sticky Header */}
      <Header onBookNowClick={scrollToBookingForm} />

      {/* Main Body Layout */}
      <main>
        
        {/* Hero Section */}
        <Hero
          onBookNowClick={scrollToBookingForm}
          onExploreClick={() => {
            const el = document.getElementById("packages");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Services Showcase */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* Popular Shrines Direct Itinerary Selector */}
        <Temples
          onAddTempleToPlan={handleAddTempleToPlan}
          selectedTemples={selectedTemples}
        />

        {/* Handcrafted Packages */}
        <Packages
          onSelectPackage={handleSelectPackage}
          selectedPackage={prefilledPackage}
        />

        {/* VIP queue facilitation */}
        <VIPDarshan onVIPDarshanClick={scrollToBookingForm} />

        {/* Premium Hotels directory page */}
        <Hotels
          onSelectHotel={handleSelectHotel}
          selectedHotel={prefilledHotel}
        />

        {/* Expert local Guides profiles */}
        <Guides
          onSelectGuide={handleSelectGuide}
          selectedGuide={prefilledGuide}
        />

        {/* Customer Journey Timeline */}
        <Timeline />

        {/* Core value props (Why Choose Us) */}
        <WhyChooseUs />

        {/* Verified travelers reviews */}
        <Testimonials />

        {/* Secure Multi-Step Booking Wizard */}
        <BookingForm
          prefilledPackage={prefilledPackage}
          prefilledHotel={prefilledHotel}
          prefilledGuide={prefilledGuide}
          selectedTemples={selectedTemples}
          onSubmitSuccess={handleSubmitBooking}
        />

      </main>

      {/* Deep Footer links and copyrights */}
      <Footer />

      {/* Floating WhatsApp Companion Applet */}
      <WhatsAppButton />

      {/* Persistent Reservations Floating Indicator badge (Prototype utility) */}
      {bookings.length > 0 && (
        <div className="fixed bottom-6 left-6 z-40 select-none">
          <button
            onClick={() => setIsBookingListOpen(true)}
            className="px-4 py-3 rounded-full bg-stone-900 border border-gold-300 hover:bg-stone-800 text-gold-300 font-sans text-xs font-bold tracking-wider uppercase shadow-2xl flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4.5 h-4.5 text-gold-400" />
            <span className="hidden sm:inline">My Itineraries</span>
            <span className="bg-saffron-600 text-white font-mono text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {bookings.length}
            </span>
          </button>
        </div>
      )}

      {/* Booking List Dashboard Modal overlay */}
      <BookingListModal
        bookings={bookings}
        isOpen={isBookingListOpen}
        onClose={() => setIsBookingListOpen(false)}
        onCancelBooking={handleCancelBooking}
      />

      {/* Spectacular Floating Confirmation Alert (Toast) */}
      <AnimatePresence>
        {showSuccessToast && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-gold-300 shadow-2xl text-center space-y-6 relative"
            >
              <button
                onClick={() => setShowSuccessToast(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-400 transition-colors"
                aria-label="Dismiss alert"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-saffron-600 block">
                  Reservation Received
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Radhe Radhe! 🙏
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Your pilgrimage token has been generated successfully under ID <span className="font-mono bg-stone-100 px-1.5 py-0.5 rounded font-bold text-stone-900">#{lastSubmittedId.substring(0, 8).toUpperCase()}</span>. Our Travel Desk Pandit will contact you on WhatsApp shortly to confirm priest timings.
                </p>
              </div>

              {/* Utility actions */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setShowSuccessToast(false)}
                  className="w-full py-3 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold font-sans uppercase tracking-wide hover:bg-stone-50 transition-colors"
                >
                  Ok, Thanks
                </button>
                <button
                  onClick={() => {
                    setShowSuccessToast(false);
                    setIsBookingListOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-saffron-600 text-white text-xs font-bold font-sans uppercase tracking-wide hover:bg-saffron-700 transition-all flex items-center justify-center gap-1"
                >
                  <span>My Active Itineraries</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
