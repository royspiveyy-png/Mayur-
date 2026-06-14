import { motion } from "motion/react";
import { testimonialsData } from "../data";
import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  
  // Rating stars generator
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
        />
      );
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-cream-50 overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-saffron-100/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-saffron-600">
            Pilgrim Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Loved By Devotees Worldwide
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-base text-stone-600 mt-4 leading-relaxed">
            Read how other families and devotees from India and around the globe experienced absolute blissful darshan, comfortable stays, and trusted support.
          </p>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gold-200/40 relative shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-6 right-8 text-gold-200 pointer-events-none">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex justify-between items-center">
                  {renderStars(test.rating)}
                  <span className="text-[10px] font-mono text-stone-400">{test.date}</span>
                </div>

                {/* Testimonial Quote Speech */}
                <p className="text-stone-600 text-sm italic leading-relaxed pt-2">
                  "{test.text}"
                </p>
              </div>

              {/* Creator Metadata Profile */}
              <div className="flex items-center gap-4.5 pt-6 mt-6 border-t border-gold-200/20">
                <img
                  src={test.avatarUrl}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    {test.name}
                  </h4>
                  <span className="text-xs text-stone-500 block leading-tight">
                    {test.location}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic call out for reviews submission */}
        <div className="text-center mt-12 bg-white/60 backdrop-blur-sm shadow border border-gold-200/40 p-4 rounded-xl max-w-lg mx-auto flex items-center justify-center gap-2 text-xs text-stone-600">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>Have you completed a tour with us? Share your feedback via WhatsApp callback.</span>
        </div>

      </div>
    </section>
  );
}
