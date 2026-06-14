import { motion } from "motion/react";
import { guidesData } from "../data";
import { Star, Languages, Award, ShieldAlert, Check, Calendar, HelpCircle } from "lucide-react";

interface GuidesProps {
  onSelectGuide: (guideName: string) => void;
  selectedGuide?: string;
}

export default function Guides({ onSelectGuide, selectedGuide }: GuidesProps) {
  
  // Status badge styling helper
  const getAvailabilityStyle = (status: "Available" | "Fully Booked" | "On Tour") => {
    switch (status) {
      case "Available":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "On Tour":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Fully Booked":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-stone-50 text-stone-700 border-stone-200";
    }
  };

  return (
    <section
      id="guides"
      className="py-24 bg-white scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Heritage Companions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Certified Spiritual Guides
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            Travel beyond superficial sightseeing. Our guides are local scholars, possessing deep Vedic training, ready to share scriptural pastimes and historical lore.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guidesData.map((guide, idx) => {
            const isChosen = selectedGuide === guide.name;
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-gold-200/50 hover:border-saffron-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo with beautiful framing */}
                  <div className="relative pt-[110%] overflow-hidden bg-gold-100">
                    <img
                      src={guide.imageUrl}
                      alt={guide.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
                    
                    {/* Absolute Availability Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase border tracking-wider shadow-sm backdrop-blur-sm ${getAvailabilityStyle(guide.availability)}`}>
                      {guide.availability}
                    </div>

                    {/* Name block on the photo */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="flex items-center gap-1.5 mb-1 text-xs text-amber-300">
                        <Award className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                        <span className="font-mono uppercase tracking-widest text-[9px]">Sanskrit Acharya Tour Guide</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                        {guide.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body textual information */}
                  <div className="p-6 space-y-5">
                    
                    {/* Dual badge summary */}
                    <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-stone-600">
                      <div className="bg-white p-2.5 rounded-xl border border-gold-200/30 flex flex-col justify-center">
                        <span className="text-[10px] font-mono uppercase text-stone-400 block leading-none mb-1">Languages</span>
                        <span className="font-bold text-stone-800 line-clamp-1">{guide.languages.join(", ")}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-gold-200/30 flex flex-col justify-center">
                        <span className="text-[10px] font-mono uppercase text-stone-400 block leading-none mb-1">Experience</span>
                        <span className="font-bold text-stone-800">{guide.experienceYears}+ Years</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed min-h-[72px] line-clamp-3">
                      {guide.bio}
                    </p>

                    {/* Quality ratings */}
                    <div className="flex items-center justify-between text-xs pt-4 border-t border-gold-200/20">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-stone-500">Rating</span>
                        <div className="flex text-amber-400 mb-0.5">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                        </div>
                        <span className="font-bold text-stone-800">{guide.rating} / 5.0</span>
                      </div>
                      
                      <span className="text-[10px] uppercase font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-100">
                        Government Approved
                      </span>
                    </div>

                  </div>
                </div>

                {/* Direct Action trigger */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => {
                      if (guide.availability !== "Fully Booked") {
                        onSelectGuide(guide.name);
                      }
                    }}
                    disabled={guide.availability === "Fully Booked"}
                    className={`w-full py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors ${
                      guide.availability === "Fully Booked"
                        ? "bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300"
                        : isChosen
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-saffron-600 hover:bg-saffron-700 text-white shadow-md"
                    }`}
                  >
                    {guide.availability === "Fully Booked" ? (
                      "Unavailable"
                    ) : isChosen ? (
                      <span className="flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4" /> Selected Guide
                      </span>
                    ) : (
                      "Request This Guide"
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
