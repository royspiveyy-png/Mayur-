import { motion } from "motion/react";
import { packagesData } from "../data";
import { Clock, CheckCircle2, Bookmark, Flame } from "lucide-react";

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
  selectedPackage?: string;
}

export default function Packages({ onSelectPackage, selectedPackage }: PackagesProps) {
  return (
    <section
      id="packages"
      className="py-24 bg-cream-50 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background visual helpers */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-saffron-100/20 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Handcrafted Journeys
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Pilgrimage Tour Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            Choose from our highly optimized devotional schedules. Our tour packages include hygienic dining hubs, neat transport cruisers, and knowledgeable escorts.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {packagesData.map((pack) => {
            const isChosen = selectedPackage === pack.title;
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative bg-white rounded-3xl overflow-hidden border border-gold-200/50 hover:shadow-2xl hover:border-saffron-500/40 transition-all duration-300 flex flex-col justify-between ${
                  pack.isPopular ? "ring-2 ring-saffron-500" : ""
                }`}
              >
                {/* Popularity Banner */}
                {pack.isPopular && (
                  <div className="absolute top-5 right-5 bg-saffron-600 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10">
                    <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-pulse" />
                    <span>Best Seller</span>
                  </div>
                )}

                <div>
                  {/* Decorative Header Block with Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={pack.imageUrl}
                      alt={pack.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Visual Highlights Overlay */}
                    <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white">
                      <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>{pack.duration}</span>
                      </span>
                      <span className="text-2xl font-serif font-bold text-amber-300">{pack.price}</span>
                    </div>
                  </div>

                  {/* Body Details Area */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        {pack.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {pack.description}
                      </p>
                    </div>

                    {/* Highlights Bullet Bullet points */}
                    <div className="space-y-3 bg-gold-50/50 p-5 sm:p-6 rounded-2xl border border-gold-200/30">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
                        Package Highlights:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                        {pack.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4.5 h-4.5 text-saffron-600 shrink-0 mt-0.5" />
                            <span className="leading-tight text-stone-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Selection Button */}
                <div className="p-6 sm:p-8 pt-0 border-t border-stone-100 flex items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="block text-[10px] font-mono tracking-wide text-stone-500 uppercase">Pricing Starts From</span>
                    <span className="text-xs text-stone-500 font-medium">All Govt Taxes Included</span>
                  </div>
                  <button
                    onClick={() => onSelectPackage(pack.title)}
                    className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      isChosen
                        ? "bg-emerald-600 text-white shadow-md hover:bg-emerald-700"
                        : "bg-saffron-600 hover:bg-saffron-700 text-white shadow-xl hover:shadow-saffron-600/30"
                    }`}
                  >
                    {isChosen ? "Selected Package" : "Book This Package"}
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
