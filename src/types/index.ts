export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  description: string;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  capacity: number;
}

export interface Booking {
  id: number;
  propertyId: number;
  userId: number;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: string;
  paymentStatus: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

export interface BookingStats {
  totalBookings: number;
  confirmedBookings: number;
  pendingBookings: number;
  averageStay: number;
  occupancyRate: number;
  popularProperties: {
    id: number;
    name: string;
    bookings: number;
  }[];
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
}
