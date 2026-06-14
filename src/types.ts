export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface Temple {
  id: string;
  name: string;
  deity: string;
  description: string;
  timings: string;
  location: string;
  imageUrl: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  pricePerNight: string;
  imageUrl: string;
  description: string;
  amenities: string[];
}

export interface Guide {
  id: string;
  name: string;
  languages: string[];
  experienceYears: number;
  rating: number;
  availability: "Available" | "Fully Booked" | "On Tour";
  imageUrl: string;
  bio: string;
}

export interface BookingDetails {
  fullName: string;
  phoneNumber: string;
  email: string;
  arrivalDate: string;
  departureDate: string;
  numberOfTravelers: number;
  pickupRequired: boolean;
  hotelRequired: boolean;
  vipDarshanRequired: boolean;
  guideRequired: boolean;
  specialRequests: string;
  selectedPackage?: string;
  selectedHotel?: string;
  selectedGuide?: string;
  selectedTemples?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatarUrl: string;
  date: string;
}
