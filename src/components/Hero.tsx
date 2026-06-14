import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Heart } from "lucide-react";

interface HeroProps {
  onBookNowClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookNowClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 pt-20"
    >
      {/* Background Image with Rich Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0fc?auto=format&fit=crop&w=1920&q=80"
          alt="Divine Mathura Vrindavan Temples"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend background beautifully */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40"></div>
        
        {/* Soft decorative light circles simulating temple lamps/morning sun */}
         <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-saffron-500/10 blur-3xl"></div>
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl"></div>
      </div>

      {/* Decorative Traditional Border Detail */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-stone-100 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Highly visual gold pill label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron-500/20 border border-saffron-500/40 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>Divine Vraja Dham Pilgrimage 2026</span>
            </motion.div>

            {/* Breathtaking Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]"
            >
              Your Complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-amber-300 to-gold-400 font-medium">
                Mathura Vrindavan
              </span>{" "}
              Pilgrimage Partner
            </motion.h1>

            {/* Subheadline with high contrast */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              From pickup to darshan, hotel stays, guides, and drop services — everything managed in one place. Experience hassle-free spirituality with trusted companions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onBookNowClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-500 hover:to-saffron-600 text-white font-sans text-sm font-bold tracking-wider uppercase shadow-xl hover:shadow-saffron-500/30 hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Book Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-stone-100 font-sans text-sm font-bold tracking-wider uppercase backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <span>Explore Packages</span>
              </button>
            </motion.div>

            {/* Micro Badge Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 select-none"
            >
              <div className="flex items-center gap-2 text-stone-400 justify-center lg:justify-start">
                <ShieldCheck className="w-5 h-5 text-saffron-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">100% Vetted Stays</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-saffron-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Local Experts Only</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 justify-center lg:justify-start">
                <Heart className="w-5 h-5 text-saffron-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Devotional Grace</span>
              </div>
            </motion.div>
          </div>

          {/* Majestic Promo Card (Investment-ready presentation) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl glassmorphism-dark p-6 sm:p-8 max-w-md mx-auto overflow-hidden border border-gold-400/20 shadow-2xl"
            >
              {/* Card Header Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-600 via-gold-400 to-saffron-600"></div>

              <h3 className="font-serif text-2xl text-amber-400 font-semibold mb-2">
                Hassle-Free Pilgrimage
              </h3>
              <p className="text-xs text-stone-400 font-mono tracking-widest uppercase mb-6">
                End-To-End Luxury Escapes
              </p>

              {/* Step checklist items */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-600/30 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-200">Arrive in Vraja</h4>
                    <p className="text-xs text-stone-400">Punctual reception by certified driver with premium AC cruiser at Mathura jn. station or Delhi airport.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-600/30 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-200">Elite Sanctuary Check-in</h4>
                    <p className="text-xs text-stone-400">Sanitized rooms in top rated properties (e.g. Sarovar Portico) with pure vegetarian Satvik meals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-600/30 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-200">Blessed VIP Darshan</h4>
                    <p className="text-xs text-stone-400">Avoid stampedes/queues. Receive quick priority entry & custom blessings at legendary temples.</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Catalyst */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-rose-400">Current Season offer</span>
                  <span className="block text-lg font-serif font-bold text-stone-200">10% OFF packages</span>
                </div>
                <button
                  onClick={onBookNowClick}
                  className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold font-sans tracking-wide uppercase transition-colors"
                >
                  Apply Code: VRAJA
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
