'use client';

import { Transport } from '@/types';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface TransportCardProps {
  transport: Transport;
}

export default function TransportCard({ transport }: TransportCardProps) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  const typeLabel = {
    flight: '✈️ Flight',
    bus: '🚌 Bus',
    'car-rental': '🚗 Car Rental',
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
      {/* Type Badge */}
      <div className="mb-3">
        <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded">
          {typeLabel[transport.type]}
        </span>
      </div>

      {/* Route */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-gray-600 text-sm">From</p>
          <p className="font-semibold text-gray-800">{transport.from}</p>
        </div>
        <FiArrowRight size={20} className="text-primary" />
        <div className="text-right">
          <p className="text-gray-600 text-sm">To</p>
          <p className="font-semibold text-gray-800">{transport.to}</p>
        </div>
      </div>

      {/* Name */}
      <p className="text-gray-700 mb-3 border-t pt-3">{transport.name}</p>

      {/* Price and Button */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600 text-xs">Starting from</p>
          <p className="text-xl font-bold text-primary">{formatter.format(transport.price)}</p>
        </div>
        <Link
          href={`/booking/${transport.id}`}
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded transition duration-300 text-sm"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
