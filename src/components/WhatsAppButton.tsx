import { useState, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Show welcome bubble after 4 seconds of page loading
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Construct real whatsapp link with text
    const textEncoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919172567691?text=${textEncoded}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const handleQuickChat = () => {
    const textEncoded = encodeURIComponent("Radhe Radhe! I would like to inquire about Mathura Vrindavan VIP Darshan packages.");
    window.open(`https://wa.me/919172567691?text=${textEncoded}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans select-none">
      
      {/* Absolute Welcome Text Bubble */}
      {showBubble && !isOpen && (
        <div className="bg-white text-stone-800 p-3.5 rounded-2xl shadow-xl border border-gold-200 text-xs max-w-xs animate-bounce-slow relative mr-1 pr-8">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <p className="font-serif font-bold text-saffron-700 leading-snug">Radhe Radhe! 🙏</p>
          <p className="text-[11px] text-stone-600 mt-1 leading-normal">
            Need urgent help with VIP Darshan or hotel booking? Let's chat on WhatsApp!
          </p>
          
          <button
            onClick={() => {
              setIsOpen(true);
              setShowBubble(false);
            }}
            className="text-[10px] text-saffron-600 hover:text-saffron-700 font-bold block mt-1.5 underline"
          >
            Open Chat Dialogue
          </button>
          
          {/* Triangular pointer */}
          <div className="w-3 h-3 bg-white border-r border-b border-gold-200 absolute -bottom-1.5 right-6 rotate-45"></div>
        </div>
      )}

      {/* Slide dialogue box */}
      {isOpen && (
         <div className="bg-white rounded-2xl shadow-2xl border border-gold-200 w-80 sm:w-85 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
           {/* Header */}
           <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold font-serif text-lg text-white">
                 V
               </div>
               <div>
                 <h4 className="text-sm font-bold leading-tight text-white">Vraja Desk Companion</h4>
                 <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping"></span>
                   <span>Typically replies instantly</span>
                 </span>
               </div>
             </div>
             
             <button onClick={() => setIsOpen(false)} className="text-emerald-100 hover:text-white">
               <X className="w-5 h-5" />
             </button>
           </div>

           {/* Dialogue list */}
           <div className="p-4 bg-cream-50 space-y-3 max-h-48 overflow-y-auto text-xs">
             <div className="bg-emerald-50 text-emerald-950 p-3 rounded-2xl border border-emerald-100 max-w-[85%]">
               <p className="font-serif font-semibold text-emerald-800 leading-none mb-1">Pandit Ramendra Shastri</p>
               <p className="leading-relaxed">Radhe Radhe pilgrim! How can I assist you with your Mathura or Vrindavan darshan arrangements today?</p>
             </div>
             <button
               onClick={handleQuickChat}
               className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-gold-50 border border-gold-200/50 text-stone-700 font-semibold transition-colors flex items-center justify-between"
             >
               <span>👉 I want to ask about VIP Darshan</span>
               <Send className="w-3.5 h-3.5 text-gold-500" />
             </button>
           </div>

           {/* Form chat input */}
           <form onSubmit={handleSendMessage} className="p-3 border-t border-stone-100 bg-white flex items-center gap-2">
             <input
               type="text"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               placeholder="Type your religious query..."
               className="flex-grow rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-xs focus:ring-1 focus:ring-emerald-500 text-stone-800"
             />
             <button
               type="submit"
               aria-label="Send message"
               className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 transition-colors"
             >
               <Send className="w-4 h-4" />
             </button>
           </form>
         </div>
      )}

      {/* Green WhatsApp Ring button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        id="whatsapp-fab-button"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />
        
        {/* Pulsating green ring badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center font-mono text-[8px] text-white font-bold animate-pulse">
          1
        </span>
      </button>

    </div>
  );
}
