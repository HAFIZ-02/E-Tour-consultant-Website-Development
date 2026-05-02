'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { FiMapPin, FiCalendar, FiUsers, FiMail, FiPhone } from 'react-icons/fi';
import { dummyPackages, dummyTransport } from '@/lib/dummy-data';
import { api } from '@/lib/api-client';
import { BookingForm as BookingFormType } from '@/types';

interface BookingPageProps {
  params: {
    id: string;
  };
}

export default function BookingPage({ params }: BookingPageProps) {
  const router = useRouter();
  const { id } = params;

  const pkg = dummyPackages.find((p) => p.id === id);
  const transport = dummyTransport.find((t) => t.id === id);
  const service = pkg || transport;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BookingFormType>({
    name: '',
    email: '',
    phone: '',
    date: '',
    numberOfPeople: 1,
    serviceType: pkg ? 'package' : 'transport',
    serviceId: id,
  });

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link
          href="/packages"
          className="bg-primary text-white hover:bg-primary/90 font-bold py-3 px-8 rounded-lg inline-block"
        >
          Back to Packages
        </Link>
      </div>
    );
  }

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  const totalPrice = (pkg ? pkg.price : (transport as any).price) * formData.numberOfPeople;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numberOfPeople' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.numberOfPeople < 1) {
      toast.error('Number of people must be at least 1');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, call the actual API
      // const response = await api.createBooking(formData);

      // For now, simulate success
      toast.success('Booking submitted successfully!');

      // Redirect to checkout
      router.push(
        `/checkout?serviceId=${id}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&people=${formData.numberOfPeople}`
      );
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={pkg ? '/packages' : '/transport'} className="text-white hover:opacity-80 mb-4 inline-block">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold">Complete Your Booking</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Booking Details</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <FiMail size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <FiPhone size={18} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62 xxx xxx xxxx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <FiCalendar size={18} />
                    Booking Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Number of People */}
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <FiUsers size={18} />
                    Number of People *
                  </label>
                  <input
                    type="number"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Special Requests (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes || ''}
                    onChange={handleInputChange}
                    placeholder="Any special requests or preferences..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              </form>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
              {/* Service Image */}
              {pkg && (
                <div className="relative h-48 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>

                {/* Details */}
                <div className="space-y-3 mb-6 border-b pb-6">
                  {pkg && (
                    <>
                      <div className="flex items-start gap-2">
                        <FiMapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-semibold">{pkg.location}</p>
                        </div>
                      </div>
                      {pkg.includeGuide && (
                        <div className="bg-secondary/10 text-secondary px-3 py-2 rounded text-sm font-semibold">
                          ✓ Tour Guide Included
                        </div>
                      )}
                    </>
                  )}

                  {transport && (
                    <>
                      <div>
                        <p className="text-sm text-gray-600">From</p>
                        <p className="font-semibold">{transport.from}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">To</p>
                        <p className="font-semibold">{transport.to}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Price Calculation */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per person:</span>
                    <span className="font-semibold">
                      {formatter.format(pkg ? pkg.price : (transport as any).price)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Number of people:</span>
                    <span className="font-semibold">{formData.numberOfPeople}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="font-bold text-lg">Total Price:</span>
                    <span className="text-2xl font-bold text-primary">{formatter.format(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
