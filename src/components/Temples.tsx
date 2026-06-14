import { useState } from "react";
import { motion } from "motion/react";
import { templesData } from "../data";
import { Clock, MapPin, Sparkles, Check, Plus } from "lucide-react";

interface TemplesProps {
  onAddTempleToPlan: (templeName: string) => void;
  selectedTemples: string[];
}

export default function Temples({ onAddTempleToPlan, selectedTemples }: TemplesProps) {
  const [activeTab, setActiveTab] = useState<"all" | "mathura" | "vrindavan">("all");

  const filteredTemples = templesData.filter((temple) => {
    if (activeTab === "all") return true;
    if (activeTab === "mathura") return temple.location.toLowerCase().includes("mathura");
    if (activeTab === "vrindavan") return temple.location.toLowerCase().includes("vrindavan");
    return true;
  });

  return (
    <section
      id="temples"
      className="py-24 bg-white scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Sacred Destinations
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Popular Divine Temples
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            Drown in the divine love (Prem) and pure devotion of the pristine shrines in Mathura and Vrindavan. We handle logistics so your mind is focused purely on devotion.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {["all", "mathura", "vrindavan"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "all" | "mathura" | "vrindavan")}
              className={`px-6 py-2.5 rounded-full font-serif text-sm font-semibold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? "bg-saffron-600 text-white shadow-md shadow-saffron-600/20"
                  : "bg-cream-100 text-stone-700 hover:bg-gold-100"
              }`}
            >
              {tab === "all" ? "All Temples" : tab}
            </button>
          ))}
        </div>

        {/* Temples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemples.map((temple, index) => {
            const isAdded = selectedTemples.includes(temple.name);
            return (
              <motion.div
                key={temple.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-gold-200/50 hover:border-saffron-500/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={temple.imageUrl}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  
                  {/* Absolute Badge Upper Corner */}
                  <div className="absolute top-4 left-4 bg-saffron-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{temple.location.includes("Mathura") ? "Mathura" : "Vrindavan"}</span>
                  </div>
                  
                  {/* Deity Caption Lower Corner */}
                  <div className="absolute bottom-4 left-4 text-white right-4">
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-amber-300">Presiding Deity</span>
                    <span className="block text-sm font-semibold truncate text-stone-100">{temple.deity}</span>
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-saffron-700 transition-colors">
                      {temple.name}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                      {temple.description}
                    </p>
                  </div>

                  {/* Operational Details Block */}
                  <div className="space-y-2.5 pt-4 border-t border-gold-200/40 text-xs text-stone-600">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-stone-800">Darshan Timings:</span>
                        <span className="text-[11px] text-stone-500 leading-tight block">{temple.timings}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-stone-800">Address:</span>
                        <span className="text-[11px] text-stone-500 line-clamp-1 block">{temple.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => onAddTempleToPlan(temple.name)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border ${
                        isAdded
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                          : "bg-white text-stone-700 border-gold-300 hover:border-saffron-500 hover:bg-saffron-50/50"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Itinerary</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to My Tour</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
