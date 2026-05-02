'use client';

import { useState, useMemo } from 'react';
import PackageCard from '@/components/PackageCard';
import { dummyPackages } from '@/lib/dummy-data';
import { PackageCategory } from '@/types';

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');

  const categories: Array<{ id: PackageCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All Categories' },
    { id: 'pantai', label: 'Pantai' },
    { id: 'gunung', label: 'Gunung' },
    { id: 'desa', label: 'Desa' },
    { id: 'pulau', label: 'Pulau' },
    { id: 'kota', label: 'Kota' },
    { id: 'laut', label: 'Laut' },
    { id: 'objek-wisata', label: 'Objek Wisata' },
  ];

  const filteredAndSortedPackages = useMemo(() => {
    let filtered = dummyPackages;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((pkg) => pkg.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    return filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price-low') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Tour Packages</h1>
          <p className="text-lg opacity-90">Discover amazing tour packages across Sumatera Barat</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2">Search</label>
              <input
                type="text"
                placeholder="Package name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredAndSortedPackages.length} of {dummyPackages.length} packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredAndSortedPackages.length > 0 ? (
                filteredAndSortedPackages.map((pkg) => (
                  <PackageCard key={pkg.id} package={pkg} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 text-lg">No packages found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
