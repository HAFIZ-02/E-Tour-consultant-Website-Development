'use client';

import { useState, useMemo } from 'react';
import TransportCard from '@/components/TransportCard';
import { dummyTransport } from '@/lib/dummy-data';

export default function TransportPage() {
  const [transportType, setTransportType] = useState<'all' | 'flight' | 'bus' | 'car-rental'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const transportTypes = [
    { id: 'all', label: 'All Transport', icon: '🚀' },
    { id: 'flight', label: 'Flights', icon: '✈️' },
    { id: 'bus', label: 'Buses', icon: '🚌' },
    { id: 'car-rental', label: 'Car Rental', icon: '🚗' },
  ];

  const filteredTransport = useMemo(() => {
    let filtered = dummyTransport;

    if (transportType !== 'all') {
      filtered = filtered.filter((t) => t.type === transportType);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.to.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [transportType, searchTerm]);

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Book Your Transport</h1>
          <p className="text-lg opacity-90">Choose from flights, buses, and car rental services</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Transport Type Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">Transport Type</label>
              <div className="flex flex-wrap gap-2">
                {transportTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setTransportType(type.id as any)}
                    className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                      transportType === type.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.icon} {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-semibold mb-3">Search</label>
              <input
                type="text"
                placeholder="Search by name, from, or to..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTransport.length} of {dummyTransport.length} options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTransport.length > 0 ? (
            filteredTransport.map((transport) => (
              <TransportCard key={transport.id} transport={transport} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No transport options found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
