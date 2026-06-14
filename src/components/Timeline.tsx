import { motion } from "motion/react";
import { CheckCircle2, Bookmark, Flame, Calendar, MapPin, Sparkles, Navigation, ShieldCheck } from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      id: 1,
      title: "Book Service",
      description: "Customize your package or lodge requirements on our portal. Submit files or custom queries easily.",
      icon: <Calendar className="w-5 h-5 text-saffron-600" />
    },
    {
      id: 2,
      title: "Receive Confirmation",
      description: "Our Vraja travel desk reviews availability and generates a comprehensive, transparent digital token with invoice details.",
      icon: <CheckCircle2 className="w-5 h-5 text-saffron-600" />
    },
    {
      id: 3,
      title: "Pickup Arranged",
      description: "Receive driver photo and contact phone details. Punctual AC car reception at station or local airport gates.",
      icon: <Flame className="w-5 h-5 text-saffron-600" />
    },
    {
      id: 4,
      title: "Hotel Check-In",
      description: "Hassle-free reception desk check-in at elite vetting properties. Safe baggage support and clean rooms.",
      icon: <ShieldCheck className="w-5 h-5 text-saffron-600" />
    },
    {
      id: 5,
      title: "Darshan Assistance",
      description: "Priest companion guides you past the long corridors. Comfortably attend aarti, perform pujas, and absorb deep blessings.",
      icon: <Sparkles className="w-5 h-5 text-saffron-600" />
    },
    {
      id: 6,
      title: "Guided Tour",
      description: "Tour Mathura & Vrindavan sacred alleys, Nidhivan forests, or Kusum Sarovar sideparks with your certified guide.",
      icon: <Navigation className="w-5 h-5 text-saffron-600" />
    },
    {
      id: 7,
      title: "Safe Drop-Off",
      description: "End your sacred journey with souvenir packages and safe, timely departure drops to coordinates of choice.",
      icon: <MapPin className="w-5 h-5 text-saffron-600" />
    }
  ];

  return (
    <section
      id="customer-journey"
      className="py-24 bg-cream-50 overflow-hidden relative"
    >
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-gold-400/5 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Carefree Execution
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Customer Journey Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            From the moment you connect, enjoy unmatched coordination, local oversight, and spiritual security. Here is exactly what your pilgrimage itinerary looks like:
          </p>
        </div>

        {/* Timeline Path Design */}
        {/* Horizontal scroll timeline on medium/large screens, vertical checklist on small screens */}
        <div className="hidden lg:block relative py-12">
          {/* Central Connecting Timeline Line */}
          <div className="absolute top-[88px] left-10 right-10 h-0.5 bg-gradient-to-r from-saffron-100 via-gold-300 to-saffron-100"></div>

          <div className="grid grid-cols-7 gap-4 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="text-center flex flex-col items-center space-y-4 group px-1"
              >
                {/* Numbered Ring */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gold-300 shadow flex items-center justify-center relative z-10 group-hover:border-saffron-600 group-hover:scale-110 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-saffron-50 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Badge Number */}
                  <span className="absolute -top-1 -right-1 bg-saffron-600 text-white font-mono text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-1.5">
                  <h4 className="font-serif text-sm font-bold text-stone-900 group-hover:text-saffron-700 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Stack Timeline on Mobile and Tablet screens */}
        <div className="lg:hidden space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gold-200">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex gap-4 relative pl-2"
            >
              {/* Node Indicator */}
              <div className="w-12 h-12 rounded-full bg-white border-2 border-gold-300 flex items-center justify-center shrink-0 shadow-sm relative z-10">
                <div className="w-9 h-9 rounded-full bg-saffron-50 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="absolute -bottom-1 -right-1 bg-saffron-600 text-white font-mono text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {step.id}
                </span>
              </div>

              {/* Text detail */}
              <div className="bg-white p-5 rounded-2xl border border-gold-200/50 shadow-sm flex-grow space-y-1">
                <h4 className="font-serif text-base font-bold text-stone-800">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
