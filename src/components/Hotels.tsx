import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { hotelsData } from "../data";
import { Hotel as HotelType } from "../types";
import { Star, MapPin, X, Check, Coffee, Award, Sparkles, Building } from "lucide-react";

interface HotelsProps {
  onSelectHotel: (hotelName: string) => void;
  selectedHotel?: string;
}

export default function Hotels({ onSelectHotel, selectedHotel }: HotelsProps) {
  const [selectedSpecHotel, setSelectedSpecHotel] = useState<HotelType | null>(null);

  // Helper to render golden stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= Math.floor(rating)
              ? "text-amber-400 fill-amber-400"
              : "text-stone-300"
          }`}
        />
      );
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <section
      id="hotels"
      className="py-24 bg-white scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Luxury Sanctuary
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Premium Vetted Stays
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            Rest in immaculate, sanitized, and deeply peaceful pure-vegetarian hotels. Located close to the temples, our partners guarantee high security and top family-first hygiene standards.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {hotelsData.map((hotel) => {
            const isChosen = selectedHotel === hotel.name;
            return (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-gold-200/50 hover:border-saffron-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-saffron-700 flex items-center gap-1 shadow">
                      {renderStars(hotel.rating)}
                      <span className="ml-1 text-[11px]">{hotel.rating}</span>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-1.5 min-h-[44px]">
                      <MapPin className="w-4 h-4 text-saffron-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-500 line-clamp-2 leading-snug">
                        {hotel.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-saffron-700 transition-colors leading-snug">
                      {hotel.name}
                    </h3>

                    {/* Simple amenity row */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {hotel.amenities.slice(0, 2).map((amen, idx) => (
                        <span key={idx} className="text-[10px] font-mono tracking-wide uppercase px-2 py-0.5 bg-gold-100/50 text-gold-800 rounded">
                          {amen}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons details */}
                <div className="p-5 pt-0 mt-auto space-y-3">
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-gold-200/30">
                    <span className="text-stone-500">Avg / Night</span>
                    <span className="font-bold text-stone-900 text-sm">{hotel.pricePerNight}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedSpecHotel(hotel)}
                      className="w-full py-2 px-3 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-gold-300 text-stone-700 hover:bg-gold-50 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onSelectHotel(hotel.name)}
                      className={`w-full py-2 px-3 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors ${
                        isChosen
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-saffron-600 text-white hover:bg-saffron-700"
                      }`}
                    >
                      {isChosen ? "Selected" : "Choose Hotel"}
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Detailed Hotel Specification Info Pop-up Modal */}
        <AnimatePresence>
          {selectedSpecHotel && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full relative shadow-2xl border border-gold-200"
              >
                {/* Header graphic */}
                <div className="relative h-64 sm:h-80 select-none">
                  <img
                    src={selectedSpecHotel.imageUrl}
                    alt={selectedSpecHotel.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/10 to-transparent"></div>
                  
                  {/* Close button modal */}
                  <button
                    onClick={() => setSelectedSpecHotel(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors focus:ring-2 focus:ring-gold-400"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 text-white right-6">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 flex items-center gap-1 mb-1">
                      <Sparkles className="w-3.5 h-3.5 fill-amber-300" /> Vetted Prime Sanctuary
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-50">
                      {selectedSpecHotel.name}
                    </h3>
                  </div>
                </div>

                {/* Body areas */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <MapPin className="w-4 h-4 text-saffron-500 shrink-0" />
                      <span>{selectedSpecHotel.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(selectedSpecHotel.rating)}</div>
                      <span className="text-xs font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold">
                        {selectedSpecHotel.rating} / 5.0
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {selectedSpecHotel.description}
                    </p>

                    {/* Real Lodging services */}
                    <div className="space-y-3">
                      <p className="text-xs uppercase font-mono tracking-widest font-bold text-gold-600">
                        Sanctuary Inclusions & Amenities
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedSpecHotel.amenities.map((amen, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-100">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{amen}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footing actions */}
                  <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] block text-stone-500 lowercase">Price Guide</span>
                      <span className="text-xl font-serif font-bold text-stone-900">{selectedSpecHotel.pricePerNight}</span>
                      <span className="text-[10px] block text-stone-400">Includes breakfast & taxes</span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedSpecHotel(null)}
                        className="px-5 py-2.5 rounded-full border border-gold-300 text-stone-700 text-xs font-bold font-sans tracking-wide uppercase hover:bg-stone-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          onSelectHotel(selectedSpecHotel.name);
                          setSelectedSpecHotel(null);
                        }}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase shadow transition-colors flex items-center gap-1.5 ${
                          selectedHotel === selectedSpecHotel.name
                            ? "bg-emerald-600 text-white"
                            : "bg-saffron-600 hover:bg-saffron-700 text-white"
                        }`}
                      >
                        {selectedHotel === selectedSpecHotel.name ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Selected</span>
                          </>
                        ) : (
                          <>
                            <Building className="w-3.5 h-3.5" />
                            <span>Select Lodging</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
