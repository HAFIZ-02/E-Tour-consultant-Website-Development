'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiUsers } from 'react-icons/fi';
import { TourPackage } from '@/types';

interface PackageCardProps {
  package: TourPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-2 flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800 flex-1">{pkg.name}</h3>
          {pkg.includeGuide && (
            <span className="text-xs bg-secondary text-white px-2 py-1 rounded">Guide</span>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FiMapPin size={16} className="mr-1" />
          {pkg.location}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded">
            {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1).replace('-', ' ')}
          </span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-gray-600 text-xs">Starting from</p>
            <p className="text-2xl font-bold text-primary">{formatter.format(pkg.price)}</p>
          </div>
          <Link
            href={`/booking/${pkg.id}`}
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
