import { motion, AnimatePresence } from "motion/react";
import { BookingDetails } from "../types";
import { X, Calendar, User, Phone, CheckCircle, Package, Clock, ShieldCheck, Download, Trash } from "lucide-react";

interface BookingListModalProps {
  bookings: (BookingDetails & { id: string; dateSubmitted: string; selectedTemples?: string[] })[];
  isOpen: boolean;
  onClose: () => void;
  onCancelBooking: (id: string) => void;
}

export default function BookingListModal({ bookings, isOpen, onClose, onCancelBooking }: BookingListModalProps) {
  
  // Simulated receipt downloader
  const handleDownloadReceipt = (booking: BookingDetails & { id: string }) => {
    const textData = `
--------------------------------------------------
  MATHURA VRINDAVAN PILGRIMAGE SERVICES
  CONFIRMED BOOKING RESERVATION VOUCHER
--------------------------------------------------
Booking Reference ID: ${booking.id}
Lead Pilgrim: ${booking.fullName}
Email: ${booking.email}
Phone: ${booking.phoneNumber}
Departure Date: ${booking.departureDate}
Arrival Date: ${booking.arrivalDate}
Total Travelers: ${booking.numberOfTravelers}

INCLUSIONS SUMMARY:
- Selected Package: ${booking.selectedPackage || "Individual Components"}
- Selected Hotel: ${booking.selectedHotel || "Self Organised / Not Required"}
- Selected Guide: ${booking.selectedGuide || "Any Available / Not Required"}
- Airport/Station Pickup: ${booking.pickupRequired ? "Yes" : "No"}
- VIP Darshan Passes: ${booking.vipDarshanRequired ? "Yes" : "No"}

Special Request Notes:
"${booking.specialRequests || "None"}"

Thank you for choosing Mathura Vrindavan Pilgrimage.
Our Travel Desk Pandit will contact you on WhatsApp!
Radhe Radhe!
--------------------------------------------------`;

    const blob = new Blob([textData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Vraja-Pilgrimage-Voucher-${booking.id.substring(0, 6).toUpperCase()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative shadow-2xl border border-gold-200 flex flex-col max-h-[85vh]"
      >
        {/* Header bar */}
        <div className="bg-stone-50 border-b border-gold-200 px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              My Active Reservations ({bookings.length})
            </h3>
            <p className="text-xs text-stone-500 font-mono tracking-wide uppercase">
              Prototype Local Storage Dashboard
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookings log or placeholder */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-cream-50">
          {bookings.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Calendar className="w-12 h-12 text-stone-300 mx-auto" />
              <div>
                <p className="text-sm font-bold text-stone-800">No Reservations Found</p>
                <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                  Scroll down, fill out our secure multi-step booking form, and click submit to watch your pilgrimage tokens populate here!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-2xl p-5 border border-gold-200/50 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  {/* Decorative badge marker */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-saffron-600"></div>

                  {/* Booking Primary parameters */}
                  <div className="space-y-4 flex-grow">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-bold bg-saffron-50 text-saffron-800 border border-saffron-200 px-2.5 py-0.5 rounded-lg uppercase">
                        Ref: #{booking.id.substring(0, 8).toUpperCase()}
                      </span>
                      <span className="text-xs text-stone-400 font-medium">
                        Submitted: {booking.dateSubmitted}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                        <Clock className="w-3 h-3 animate-pulse" />
                        <span>Pandit Reviewing</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                      <div>
                        <span className="text-stone-400 font-bold uppercase block text-[10px]">Lead traveler</span>
                        <span className="text-stone-800 font-semibold">{booking.fullName}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 font-bold uppercase block text-[10px]">Contact Info</span>
                        <span className="text-stone-800 font-medium">{booking.phoneNumber} • {booking.email}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 font-bold uppercase block text-[10px]">Arrival Dates</span>
                        <span className="text-stone-800 font-medium">{booking.arrivalDate} to {booking.departureDate}</span>
                      </div>
                    </div>

                    {/* Booking selections summaries */}
                    <div className="pt-3 border-t border-gold-100 flex flex-wrap gap-2 text-xs">
                      {booking.selectedPackage && (
                        <span className="px-2.5 py-1 rounded-md bg-gold-50 text-gold-800 border border-gold-200 flex items-center gap-1">
                          <Package className="w-3.5 h-3.5" />
                          <span>Package: {booking.selectedPackage}</span>
                        </span>
                      )}
                      {booking.selectedHotel && (
                        <span className="px-2.5 py-1 rounded-md bg-gold-50 text-gold-800 border border-gold-200 flex items-center gap-1">
                          🏠 <span>Stay: {booking.selectedHotel}</span>
                        </span>
                      )}
                      {booking.selectedGuide && (
                        <span className="px-2.5 py-1 rounded-md bg-gold-50 text-gold-800 border border-gold-200 flex items-center gap-1">
                          👨‍🏫 <span>Guide: {booking.selectedGuide}</span>
                        </span>
                      )}
                      {booking.selectedTemples && booking.selectedTemples.length > 0 && (
                        <span className="px-2.5 py-1 rounded-md bg-gold-50 text-gold-800 border border-gold-200 flex items-center gap-1">
                          🛕 <span>Temples Selected: {booking.selectedTemples.length}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions column */}
                  <div className="flex sm:flex-col gap-2 justify-end self-stretch shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-stone-100">
                    <button
                      onClick={() => handleDownloadReceipt(booking)}
                      className="flex-grow sm:flex-grow-0 px-4 py-2 bg-stone-100 hover:bg-gold-50 text-stone-700 font-bold text-xs uppercase tracking-wide rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-stone-300 hover:border-gold-300"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Receipt</span>
                    </button>
                    <button
                      onClick={() => onCancelBooking(booking.id)}
                      className="px-4 py-2 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 font-bold text-xs uppercase tracking-wide rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Trash className="w-3.5 h-3.5" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer controls dashboard */}
        <div className="bg-stone-50 border-t border-gold-200 px-6 py-4 flex items-center justify-between text-xs text-stone-500">
          <p>Mock confirmation tokens are persistent in your browser's Local Storage.</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white hover:bg-stone-800 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-colors"
          >
            Close Dashboard
          </button>
        </div>

      </motion.div>
    </div>
  );
}
