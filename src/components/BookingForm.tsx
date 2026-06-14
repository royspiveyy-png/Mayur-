import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookingDetails } from "../types";
import { Check, ArrowRight, ArrowLeft, Calendar, FileText, CheckCircle, Package, Bed, User, Shield, HelpCircle, Info } from "lucide-react";

interface BookingFormProps {
  prefilledPackage?: string;
  prefilledHotel?: string;
  prefilledGuide?: string;
  selectedTemples?: string[];
  onSubmitSuccess: (details: BookingDetails & { selectedGuide?: string; selectedTemples?: string[] }) => void;
}

export default function BookingForm({
  prefilledPackage = "",
  prefilledHotel = "",
  prefilledGuide = "",
  selectedTemples = [],
  onSubmitSuccess
}: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingDetails & { selectedGuide: string }>({
    fullName: "",
    phoneNumber: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    numberOfTravelers: 1,
    pickupRequired: false,
    hotelRequired: false,
    vipDarshanRequired: false,
    guideRequired: false,
    specialRequests: "",
    selectedPackage: "",
    selectedHotel: "",
    selectedGuide: ""
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Sync pre-fills from landing page selection clicks
  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({ ...prev, selectedPackage: prefilledPackage }));
    }
  }, [prefilledPackage]);

  useEffect(() => {
    if (prefilledHotel) {
      setFormData((prev) => ({ ...prev, selectedHotel: prefilledHotel, hotelRequired: true }));
    }
  }, [prefilledHotel]);

  useEffect(() => {
    if (prefilledGuide) {
      setFormData((prev) => ({ ...prev, selectedGuide: prefilledGuide, guideRequired: true }));
    }
  }, [prefilledGuide]);

  // Form Field Modification handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear specific field errors
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Step 1 Validation checker
  const validateStep1 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = "Please provide a valid phone number.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please provide a valid email address.";
    }
    if (!formData.arrivalDate) errors.arrivalDate = "Arrival Date is required.";
    if (!formData.departureDate) errors.departureDate = "Departure Date is required.";
    
    // Check if departure date is before arrival date
    if (formData.arrivalDate && formData.departureDate) {
      if (new Date(formData.departureDate) <= new Date(formData.arrivalDate)) {
        errors.departureDate = "Departure must be after arrival date.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      onSubmitSuccess({
        ...formData,
        selectedTemples
      });
      // Reset form or trigger confirmation modal
    }
  };

  // Pricing Estimations preview helpers
  const calculateEstimatedSubTotal = () => {
    let basePrice = 0;
    if (formData.selectedPackage === "One Day Mathura Vrindavan Darshan") basePrice = 1499;
    else if (formData.selectedPackage === "Weekend Spiritual Retreat") basePrice = 3999;
    else if (formData.selectedPackage === "Srimad Bhagavatam Family Spiritual Tour") basePrice = 6999;
    else if (formData.selectedPackage === "Exclusive Premium VIP Darshan Tour") basePrice = 11999;
    else basePrice = 1999; // custom default

    let travelers = Number(formData.numberOfTravelers) || 1;
    let mainCost = basePrice * travelers;

    if (formData.hotelRequired) mainCost += 3500;
    if (formData.vipDarshanRequired) mainCost += 2500;
    if (formData.guideRequired) mainCost += 1500;
    if (formData.pickupRequired) mainCost += 1200;

    return mainCost;
  };

  return (
    <section
      id="booking-form"
      className="py-24 bg-cream-50 scroll-mt-20 relative overflow-hidden"
    >
      {/* Visual backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-saffron-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-200/20 blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Secure Reservation
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Pilgrimage Custom Booking
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-sm text-stone-600 leading-relaxed">
            Fill out your dates and specifications below. No charges apply right now. Submit to receive custom quotes and priest schedules.
          </p>
        </div>

        {/* Floating helper block if package/hotel was prefilled */}
        {(formData.selectedPackage || formData.selectedHotel || formData.selectedGuide || selectedTemples.length > 0) && (
          <div className="mb-8 p-4 bg-amber-50 border border-gold-200 rounded-2xl flex items-center gap-3">
            <Info className="w-5 h-5 text-saffron-600 shrink-0" />
            <div className="text-xs text-stone-700 leading-normal">
              <span className="font-bold">Preferences Prefilled: </span>
              {formData.selectedPackage && `Package [${formData.selectedPackage}] `}
              {formData.selectedHotel && `• Accommodation [${formData.selectedHotel}] `}
              {formData.selectedGuide && `• Guide [${formData.selectedGuide}] `}
              {selectedTemples.length > 0 && `• Temples [${selectedTemples.length} added]`}
            </div>
          </div>
        )}

        {/* Multi-step Form Tracker */}
        <div className="bg-white rounded-3xl border border-gold-200 shadow-xl overflow-hidden">
          
          {/* Progress gauge header */}
          <div className="bg-stone-50 border-b border-gold-200 px-6 py-5 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center border-2 transition-all duration-300 ${
                    step === s
                      ? "bg-saffron-600 border-saffron-600 text-white shadow-md shadow-saffron-600/20"
                      : step > s
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-white border-stone-200 text-stone-400"
                  }`}>
                    {step > s ? <Check className="w-4 h-4 text-white font-bold" /> : s}
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${
                    step === s ? "text-stone-900" : "text-stone-400"
                  }`}>
                    {s === 1 ? "Personal Info" : s === 2 ? "Preferences" : "Review Summary"}
                  </span>
                </div>
              ))}
            </div>

            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Step {step} of 3
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            
            {/* Step 1: Personal Info & Dates */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label id="lbl-fullname" htmlFor="fullName" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar Verma"
                      className={`w-full px-4 py-3 rounded-xl border bg-stone-50 text-sm ${
                        formErrors.fullName ? "border-rose-400 bg-rose-50/10" : "border-stone-200"
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-rose-500 font-medium">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Phone number */}
                  <div className="space-y-1.5">
                    <label id="lbl-phone" htmlFor="phoneNumber" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. +91 91725 67691"
                      className={`w-full px-4 py-3 rounded-xl border bg-stone-50 text-sm ${
                        formErrors.phoneNumber ? "border-rose-400 bg-rose-50/10" : "border-stone-200"
                      }`}
                    />
                    {formErrors.phoneNumber && (
                      <p className="text-[11px] text-rose-500 font-medium">{formErrors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Email address */}
                  <div className="space-y-1.5">
                    <label id="lbl-email" htmlFor="email" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh.kumar@domain.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-stone-50 text-sm ${
                        formErrors.email ? "border-rose-400 bg-rose-50/10" : "border-stone-200"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-500 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Number of Travelers */}
                  <div className="space-y-1.5">
                    <label id="lbl-travelers" htmlFor="numberOfTravelers" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Number of Travelers (Adults/Kids)
                    </label>
                    <select
                      id="numberOfTravelers"
                      name="numberOfTravelers"
                      value={formData.numberOfTravelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm block"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Person" : "People"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Arrival Date */}
                  <div className="space-y-1.5">
                    <label id="lbl-arrival" htmlFor="arrivalDate" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Arrival Date *
                    </label>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-stone-50 text-sm ${
                        formErrors.arrivalDate ? "border-rose-400 bg-rose-50/10" : "border-stone-200"
                      }`}
                    />
                    {formErrors.arrivalDate && (
                      <p className="text-[11px] text-rose-500 font-medium">{formErrors.arrivalDate}</p>
                    )}
                  </div>

                  {/* Departure Date */}
                  <div className="space-y-1.5">
                    <label id="lbl-departure" htmlFor="departureDate" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-stone-50 text-sm ${
                        formErrors.departureDate ? "border-rose-400 bg-rose-50/10" : "border-stone-200"
                      }`}
                    />
                    {formErrors.departureDate && (
                      <p className="text-[11px] text-rose-500 font-medium">{formErrors.departureDate}</p>
                    )}
                  </div>

                </div>
              </motion.div>
            )}

            {/* Step 2: Pilgrimage Services & Preferences Customize */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Checkboxes setup */}
                <div className="space-y-4">
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block">
                    Choose pilgrimage components
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Pickup Required */}
                    <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 hover:border-gold-300 transition-colors cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="pickupRequired"
                        name="pickupRequired"
                        checked={formData.pickupRequired}
                        onChange={handleChange}
                        className="w-4 h-4 accent-saffron-600 mt-1 cursor-pointer"
                      />
                      <label htmlFor="pickupRequired" className="cursor-pointer">
                        <span className="block text-sm font-bold text-stone-900">Arrive & Depart Pickup Required</span>
                        <span className="block text-[11px] text-stone-500 leading-tight">Chauffeur pickup from Train station or Airport.</span>
                      </label>
                    </div>

                    {/* Hotel Required */}
                    <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 hover:border-gold-300 transition-colors cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="hotelRequired"
                        name="hotelRequired"
                        checked={formData.hotelRequired}
                        onChange={handleChange}
                        className="w-4 h-4 accent-saffron-600 mt-1 cursor-pointer"
                      />
                      <label htmlFor="hotelRequired" className="cursor-pointer">
                        <span className="block text-sm font-bold text-stone-900">Premium Hotel Stay Required</span>
                        <span className="block text-[11px] text-stone-500 leading-tight">Comfortable vetted occupancy at rated boutique resorts.</span>
                      </label>
                    </div>

                    {/* VIP Darshan Required */}
                    <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 hover:border-gold-300 transition-colors cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="vipDarshanRequired"
                        name="vipDarshanRequired"
                        checked={formData.vipDarshanRequired}
                        onChange={handleChange}
                        className="w-4 h-4 accent-saffron-600 mt-1 cursor-pointer"
                      />
                      <label htmlFor="vipDarshanRequired" className="cursor-pointer">
                        <span className="block text-sm font-bold text-stone-900">Dedicated VIP Darshan Assistance</span>
                        <span className="block text-[11px] text-stone-500 leading-tight">Skip the stampedes & queues. Direct holy companioning.</span>
                      </label>
                    </div>

                    {/* Guide Required */}
                    <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 hover:border-gold-300 transition-colors cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="guideRequired"
                        name="guideRequired"
                        checked={formData.guideRequired}
                        onChange={handleChange}
                        className="w-4 h-4 accent-saffron-600 mt-1 cursor-pointer"
                      />
                      <label htmlFor="guideRequired" className="cursor-pointer">
                        <span className="block text-sm font-bold text-stone-900">Spiritual Scholar Guide Required</span>
                        <span className="block text-[11px] text-stone-500 leading-tight">Government certified history & Sanskrit sloka scholar.</span>
                      </label>
                    </div>

                  </div>
                </div>

                {/* Additional parameters input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
                  
                  {/* Select Packages */}
                  <div className="space-y-1.5">
                    <label id="lbl-selpackage" htmlFor="selectedPackage" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Tour Package
                    </label>
                    <select
                      id="selectedPackage"
                      name="selectedPackage"
                      value={formData.selectedPackage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm block"
                    >
                      <option value="">No Custom Package / Individual Operations Only</option>
                      <option value="One Day Mathura Vrindavan Darshan">One Day Darshan (₹1,499/person)</option>
                      <option value="Weekend Spiritual Retreat">Weekend Spiritual Retreat (₹3,999/person)</option>
                      <option value="Srimad Bhagavatam Family Spiritual Tour">Family Spiritual Tour (₹6,999/person)</option>
                      <option value="Exclusive Premium VIP Darshan Tour">Exclusive Premium VIP Darshan (₹11,999/person)</option>
                    </select>
                  </div>

                  {/* Select Hotels */}
                  <div className="space-y-1.5">
                    <label id="lbl-selhotel" htmlFor="selectedHotel" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Lodging Preference
                    </label>
                    <select
                      id="selectedHotel"
                      name="selectedHotel"
                      value={formData.selectedHotel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm block"
                    >
                      <option value="">Select Vetted Stay</option>
                      <option value="Nidhivan Sarovar Portico">Nidhivan Sarovar Portico</option>
                      <option value="Kridha Residency - Spiritual Boutique Hotel">Kridha Residency</option>
                      <option value="Ananda Krishna Vanam Resort">Ananda Krishna Vanam</option>
                      <option value="Brij Vasundhara Scenic Cottages">Brij Vasundhara Cottages</option>
                    </select>
                  </div>

                  {/* Select Guides */}
                  <div className="space-y-1.5">
                    <label id="lbl-selguide" htmlFor="selectedGuide" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Requested Guide Companion
                    </label>
                    <select
                      id="selectedGuide"
                      name="selectedGuide"
                      value={formData.selectedGuide}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm block"
                    >
                      <option value="">Any Available Certified Scholar Guide</option>
                      <option value="Acharya Devvrat Shastri">Acharya Devvrat Shastri (Sanskrit & English)</option>
                      <option value="Shri Krishna Gopal Dixit">Shri Krishna Gopal Dixit (Bengali & English)</option>
                      <option value="Pandita Radhika Chaturvedi">Pandita Radhika Chaturvedi (Gujarati & English)</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label id="lbl-special" htmlFor="specialRequests" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Special Requests, Wheelchair or Dietary Guidelines
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="e.g. Please arrange wheelchair support for elderly citizen, Satvik diet without onion/garlic, or child seating option."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm block resize-none"
                    ></textarea>
                  </div>

                </div>
              </motion.div>
            )}

            {/* Step 3: Comprehensive Review Booking Summary list */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-6"
              >
                <div className="bg-gold-50/50 border border-gold-200 p-6 sm:p-8 rounded-2xl space-y-6">
                  <h3 className="font-serif text-lg font-bold text-stone-900 border-b border-gold-200/50 pb-2">
                    Reservation Details Summary
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    <div>
                      <span className="text-xs text-stone-400 font-bold uppercase block">Lead Pilgrim</span>
                      <span className="text-stone-800 font-medium">{formData.fullName}</span>
                    </div>

                    <div>
                      <span className="text-xs text-stone-400 font-bold uppercase block">Contact Details</span>
                      <span className="text-stone-800 font-medium">{formData.phoneNumber} • {formData.email}</span>
                    </div>

                    <div>
                      <span className="text-xs text-stone-400 font-bold uppercase block">Itinerary Interval</span>
                      <span className="text-stone-800 font-medium">{formData.arrivalDate} directly to {formData.departureDate}</span>
                    </div>

                    <div>
                      <span className="text-xs text-stone-400 font-bold uppercase block">Travelers Crew</span>
                      <span className="text-stone-800 font-medium font-mono">{formData.numberOfTravelers} traveler(s)</span>
                    </div>

                    {formData.selectedPackage && (
                      <div className="sm:col-span-2 bg-white/70 p-3 rounded-xl border border-gold-300/30 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-saffron-600 font-bold uppercase tracking-wider block">Package Selected</span>
                          <span className="text-stone-900 font-bold text-sm block">{formData.selectedPackage}</span>
                        </div>
                        <Package className="w-5 h-5 text-gold-500 shrink-0" />
                      </div>
                    )}

                    {formData.selectedHotel && (
                      <div className="sm:col-span-2 bg-white/70 p-3 rounded-xl border border-gold-300/30 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-saffron-600 font-bold uppercase tracking-wider block">Hotel Vetted Stay</span>
                          <span className="text-stone-900 font-bold text-sm block">{formData.selectedHotel}</span>
                        </div>
                        <Bed className="w-5 h-5 text-gold-500 shrink-0" />
                      </div>
                    )}

                    {formData.selectedGuide && (
                      <div className="sm:col-span-2 bg-white/70 p-3 rounded-xl border border-gold-300/30 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-saffron-600 font-bold uppercase tracking-wider block">Guide Companion Requested</span>
                          <span className="text-stone-900 font-bold text-sm block">{formData.selectedGuide}</span>
                        </div>
                        <User className="w-5 h-5 text-gold-500 shrink-0" />
                      </div>
                    )}

                    {selectedTemples.length > 0 && (
                      <div className="sm:col-span-2">
                        <span className="text-xs text-stone-400 font-bold uppercase block mb-1">My Itinerary Temples ({selectedTemples.length})</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {selectedTemples.map((temp, key) => (
                            <span key={key} className="text-xs font-semibold px-2.5 py-1 bg-white border border-gold-300 text-stone-800 rounded-lg">
                              {temp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {formData.specialRequests && (
                      <div className="sm:col-span-2 pt-2">
                        <span className="text-xs text-stone-400 font-bold uppercase block">Special Directives</span>
                        <p className="text-stone-600 text-xs italic leading-normal bg-white p-3 rounded-xl border border-stone-100">{formData.specialRequests}</p>
                      </div>
                    )}
                  </div>

                  {/* Component Badges list summary */}
                  <div className="border-t border-gold-200/50 pt-5 flex flex-wrap gap-2 text-xs">
                    <span className={`px-2.5 py-1 rounded-md font-semibold border ${
                      formData.pickupRequired ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-stone-50/50 text-stone-400 border-stone-200"
                    }`}>
                      Pickup: {formData.pickupRequired ? "Yes" : "No"}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md font-semibold border ${
                      formData.hotelRequired ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-stone-50/50 text-stone-400 border-stone-200"
                    }`}>
                      Resort: {formData.hotelRequired ? "Yes" : "No"}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md font-semibold border ${
                      formData.vipDarshanRequired ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-stone-50/50 text-stone-400 border-stone-200"
                    }`}>
                      VIP Darshan: {formData.vipDarshanRequired ? "Yes" : "No"}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md font-semibold border ${
                      formData.guideRequired ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-stone-50/50 text-stone-400 border-stone-200"
                    }`}>
                      Guide: {formData.guideRequired ? "Yes" : "No"}
                    </span>
                  </div>

                  {/* Estimate calculation block */}
                  <div className="border-t border-gold-200/50 pt-5 flex items-center justify-between text-stone-900 bg-saffron-50/40 p-4 rounded-xl border border-gold-200/30">
                    <div>
                      <span className="text-xs text-stone-500 font-medium block">Estimated Package Price Indicator</span>
                      <span className="text-[10px] text-stone-400 block block">Pay on confirmation • Tax included</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-saffron-600 block leading-none">
                        ₹{calculateEstimatedSubTotal().toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* Stepping controls actions toolbar */}
            <div className="pt-6 border-t border-gold-200/30 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={step === 1}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold font-sans uppercase tracking-wider transition-colors ${
                  step === 1
                    ? "text-stone-300 cursor-not-allowed"
                    : "text-stone-700 hover:bg-stone-100 border border-stone-300"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center gap-1.5 px-6 py-3 rounded-full bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold font-sans uppercase tracking-wider transition-all duration-300 shadow-md shadow-saffron-600/15"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold font-sans uppercase tracking-wider transition-all duration-300 shadow-md shadow-emerald-600/15"
                >
                  <span>Request Custom Token Booking</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              )}
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
