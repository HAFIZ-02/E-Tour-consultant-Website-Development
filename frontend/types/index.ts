export type PackageCategory = 'kota' | 'desa' | 'objek-wisata' | 'gunung' | 'pantai' | 'laut' | 'pulau';

export interface TourPackage {
  id: string;
  name: string;
  category: PackageCategory;
  location: string;
  description: string;
  price: number;
  image: string;
  includeGuide: boolean;
}

export interface Transport {
  id: string;
  type: 'flight' | 'bus' | 'car-rental';
  name: string;
  from: string;
  to: string;
  price: number;
  date?: string;
  availableSeats?: number;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  numberOfPeople: number;
  serviceType: 'package' | 'transport';
  serviceId: string;
  notes?: string;
}

export interface BookingResponse {
  id: string;
  receiptId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  totalPrice: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
