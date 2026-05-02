'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import PackageCard from '@/components/PackageCard';
import { dummyPackages } from '@/lib/dummy-data';
import { PackageCategory } from '@/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory | 'all'>('all');

  const categories: Array<{ id: PackageCategory | 'all'; label: string; icon: string }> = [
    { id: 'all', label: 'All', icon: '🌍' },
    { id: 'pantai', label: 'Pantai', icon: '🏖️' },
    { id: 'gunung', label: 'Gunung', icon: '⛰️' },
    { id: 'desa', label: 'Desa', icon: '🏘️' },
    { id: 'pulau', label: 'Pulau', icon: '🏝️' },
    { id: 'kota', label: 'Kota', icon: '🏙️' },
    { id: 'laut', label: 'Laut', icon: '🌊' },
    { id: 'objek-wisata', label: 'Objek Wisata', icon: '🗿' },
  ];

  const filteredPackages = useMemo(() => {
    if (selectedCategory === 'all') {
      return dummyPackages;
    }
    return dummyPackages.filter((pkg) => pkg.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop"
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Explore Sumatera Barat
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Discover the beauty of nature and culture with our expert tour consultants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
            >
              Explore Packages
            </Link>
            <Link
              href="/transport"
              className="bg-secondary text-white hover:bg-secondary/90 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
            >
              Book Transport
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose by Category</h2>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No packages found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready for an Adventure?</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Choose from our wide selection of tour packages, book your transport, and start your journey to Sumatera Barat today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/packages"
            className="bg-primary text-white hover:bg-primary/90 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            View All Packages
          </Link>
          <Link
            href="/transport"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Browse Transport
          </Link>
        </div>
      </section>
    </div>
  );
}
