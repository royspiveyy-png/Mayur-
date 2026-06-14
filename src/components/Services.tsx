import { motion } from "motion/react";
import { servicesData } from "../data";
import { Car, Hotel, Sparkles, Navigation, Map, Train, Plane, Users, ArrowUpRight } from "lucide-react";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  
  // Icon resolution helper for compile-safety
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return <Car className="w-7 h-7 text-saffron-600" />;
      case "Hotel":
        return <Hotel className="w-7 h-7 text-saffron-600" />;
      case "Sparkles":
        return <Sparkles className="w-7 h-7 text-saffron-600" />;
      case "Navigation":
        return <Navigation className="w-7 h-7 text-saffron-600" />;
      case "Map":
        return <Map className="w-7 h-7 text-saffron-600" />;
      case "Train":
        return <Train className="w-7 h-7 text-saffron-600" />;
      case "Plane":
        return <Plane className="w-7 h-7 text-saffron-600" />;
      case "Users":
        return <Users className="w-7 h-7 text-saffron-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-saffron-600" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-cream-50 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background traditional motifs / soft gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-saffron-100/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Our Offerings
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Comprehensive Pilgrimage Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            Every step of your holy journey has been designed for maximum comfort, safety, and deep spiritual immersion. Choose single operations or combine them seamlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => onServiceSelect(service.title)}
              className="group relative cursor-pointer bg-white p-8 rounded-2xl border border-gold-200/40 hover:border-saffron-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-saffron-500 to-gold-400 group-hover:w-full transition-all duration-300 rounded-t-2xl"></div>

              <div>
                {/* Icon Wrapper with Custom Saffron Background */}
                <div className="w-14 h-14 rounded-2xl bg-saffron-50 mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-3 group-hover:text-saffron-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Indicator / Quick Link */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-saffron-600 group-hover:text-saffron-700">
                <span>Select & Customize</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional information card (Call-out banner) */}
        <div className="mt-16 bg-gradient-to-r from-saffron-50 to-gold-50 border border-gold-200 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-serif font-bold text-stone-900">
              Planning a highly customized family package?
            </h4>
            <p className="text-sm text-stone-600">
              We coordinate wheelchair assistance, private e-battery rickshaws for elderly travel, baby seats, and customized food options.
            </p>
          </div>
          <button
            onClick={() => onServiceSelect("Custom Family Pack")}
            className="px-6 py-3 rounded-full bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shrink-0"
          >
            Create Custon Plan
          </button>
        </div>

      </div>
    </section>
  );
}
