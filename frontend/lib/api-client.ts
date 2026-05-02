import axios from 'axios';
import type { BookingForm, ApiResponse, BookingResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  // Packages
  getPackages: () => apiClient.get('/packages'),
  getPackageById: (id: string) => apiClient.get(`/packages/${id}`),
  getPackagesByCategory: (category: string) => apiClient.get(`/packages/category/${category}`),

  // Transport
  getTransport: (type?: string) => 
    apiClient.get('/transport', { params: { type } }),
  getTransportById: (id: string) => apiClient.get(`/transport/${id}`),

  // Bookings
  createBooking: (data: BookingForm) => 
    apiClient.post<ApiResponse<BookingResponse>>('/booking', data),
  getBooking: (id: string) => apiClient.get(`/booking/${id}`),

  // Email verification
  verifyEmail: (email: string) => 
    apiClient.post('/booking/verify-email', { email }),
};

export default apiClient;
