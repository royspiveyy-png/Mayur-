import { motion } from "motion/react";
import { Sparkles, Calendar, Award, Shield, Check } from "lucide-react";

interface VIPDarshanProps {
  onVIPDarshanClick: () => void;
}

export default function VIPDarshan({ onVIPDarshanClick }: VIPDarshanProps) {
  const vipHighlights = [
    {
      title: "Direct Entrance Passways",
      description: "Skip 3-4 hours of crowded public waiting queues. Enter via expedited VIP corridors securely."
    },
    {
      title: "Dedicated Acharya companion",
      description: "A highly learned Sanskrit Acharya will accompany your family, reciting sacred mantras."
    },
    {
      title: "Interactive Prasad & Archana offerings",
      description: "We organize customized incense, fresh flower garlands, and pure sweet peda offering ceremonies."
    },
    {
      title: "Handcrafted Vraja Blessing Gift Box",
      description: "A gorgeous premium brass box containing holy Yamuna water (Jal), vrindavan dust (Raj), and dry prasad."
    }
  ];

  return (
    <section
      id="vip-darshan"
      className="py-24 bg-stone-950 text-stone-100 scroll-mt-20 overflow-hidden relative"
    >
      {/* Devotional Graphic Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1920&q=80"
          alt="Ancient Devotional Lighting"
          className="w-full h-full object-cover opacity-15 filter grayscale contrast-120"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/90 to-stone-950"></div>
        {/* Soft Gold Spotlights */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-saffron-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main visuals and benefits */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 fill-amber-300 text-amber-300 animate-pulse" />
                <span>Elite Spiritual Facilitation</span>
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                Premium VIP Darshan Assistance
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-saffron-600 rounded-full"></div>
            </div>

            <p className="text-stone-300 text-base leading-relaxed">
              Vrindavan and Mathura attract hundreds of thousands of daily pilgrims. Navigating extreme crowds, security checkpoints, and peak-time curtains at temples like Shri Banke Bihari or Shri Krishna Janmabhoomi can be exhausting. Our VIP coordination handles all permissions, providing safety, peace-of-mind, and graceful holy connect.
            </p>

            {/* Custom List details */}
            <div className="space-y-4">
              {vipHighlights.map((hl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/20 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-100">{hl.title}</h4>
                    <p className="text-xs text-stone-400 leading-relaxed mt-0.5">{hl.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Large call Out / Order card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl glassmorphism-dark p-8 border border-gold-400/30 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold-400/5 blur-xl -z-10"></div>
              
              <h3 className="font-serif text-2xl text-amber-300 font-semibold mb-2 text-center">
                Request Priority VIP Support
              </h3>
              <p className="text-xs text-stone-400 text-center font-mono uppercase tracking-widest mb-6">
                Direct booking starts from ₹2,500 / family
              </p>

              {/* Package mini inclusions */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-amber-300" />
                  <span className="text-xs text-stone-300">Perfect for Elder citizens & children</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-300" />
                  <span className="text-xs text-stone-300">Date pre-scheduled with temple trusts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-300" />
                  <span className="text-xs text-stone-300">100% Authorized & secure arrangements</span>
                </div>
              </div>

              {/* Devotional quote */}
              <div className="mt-8 p-4 rounded-xl bg-saffron-500/10 border border-saffron-500/20 text-center text-xs text-amber-200/90 italic leading-relaxed">
                "Experience the blissful darshan of Thakur Ji with undivided concentration and tranquil mental space."
              </div>

              {/* Booking CTA trigger */}
              <button
                onClick={onVIPDarshanClick}
                className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-amber-400/15 text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Add VIP Darshan Assistance</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
