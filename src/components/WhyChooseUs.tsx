import { motion } from "motion/react";
import { ShieldAlert, Users, Award, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const valueProps = [
    {
      title: "Verified Hotels",
      description: "100% clean, vetted properties offering pure vegetarian Saatvik cuisine, hot water, high-speed Wi-Fi, and quick transportation.",
      icon: <ShieldCheck className="w-6 h-6 text-saffron-600" />
    },
    {
      title: "Trusted Drivers",
      description: "Professional local chaffeurs with non-drinking/non-smoking certification. Premium air-conditioned sedans and SUVs.",
      icon: <Users className="w-6 h-6 text-saffron-600" />
    },
    {
      title: "Professional Guides",
      description: "Sanskrit scholars who walk you through transcendental pastimes with warmth, clarity, and deep historical precision.",
      icon: <Award className="w-6 h-6 text-saffron-600" />
    },
    {
      title: "Secure Payments",
      description: "Highly secure booking tokens with transparent digital invoicing. Zero hidden taxes, zero priest commission tricks.",
      icon: <ShieldCheck className="w-5 h-5 text-saffron-600" />
    },
    {
      title: "Dedicated Support",
      description: "24/7 on-ground assistance to reschedule times, arrange wheelchair support, or coordinate medical needs immediately.",
      icon: <HeartHandshake className="w-6 h-6 text-saffron-600" />
    },
    {
      title: "End-to-End Service",
      description: "From railway exit reception to elite suites, fast queue darshans, and safe returns — everything managed in one neat bundle.",
      icon: <MapPin className="w-6 h-6 text-saffron-600" />
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-white scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative Traditional Circular Motif / Background Vector light circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-200/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-saffron-100/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Why choose us summary detail */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
              Our Core Strengths
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              Why Mathura Vrindavan Pilgrimage Services?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto lg:mx-0 rounded-full"></div>
            
            <p className="text-sm text-stone-600 leading-relaxed">
              We started our pilgrimage services to replace chaotic, non-regulated travel arrangements with standardized premium hospitality. Our singular mission is to help you experience the spiritual nectar of Vraja Dham with pure joy, safety, and deep psychological relaxation.
            </p>

            <div className="bg-cream-50 p-6 rounded-2xl border border-gold-200/50 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-saffron-500"></span>
                <span className="text-xs font-bold text-stone-800">5,000+ Families Served</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-saffron-500"></span>
                <span className="text-xs font-bold text-stone-800">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-saffron-500"></span>
                <span className="text-xs font-bold text-stone-800">Government Registered Trust Partner</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueProps.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-cream-50 hover:bg-white rounded-2xl border border-gold-200/30 hover:border-saffron-500/30 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-saffron-50 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
