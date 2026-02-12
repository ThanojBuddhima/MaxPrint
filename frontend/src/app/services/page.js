'use client';

import { useState } from 'react';
import { servicesData } from '@/lib/data';
import ServiceCard from '@/components/home/ServiceCard';
import ServicePreviewModal from '@/components/home/ServicePreviewModal';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [filters, setFilters] = useState(['All']);

  const categories = ['All', ...new Set(servicesData.map(s => s.category))];
  
  const toggleFilter = (category) => {
    if (category === 'All') {
      setFilters(['All']);
      return;
    }

    setFilters(prev => {
      // If currently 'All', clear it and select the new one
      let newFilters = prev.includes('All') ? [] : [...prev];
      
      if (newFilters.includes(category)) {
        newFilters = newFilters.filter(c => c !== category);
      } else {
        newFilters.push(category);
      }

      // If nothing selected, revert to 'All'
      return newFilters.length === 0 ? ['All'] : newFilters;
    });
  };

  const filteredServices = filters.includes('All')
    ? servicesData
    : servicesData.filter(s => filters.includes(s.category));

  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Our Services
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We offer a comprehensive range of printing and office solutions.
        </p>
      </div>
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filters.includes(cat)
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredServices.map((service, idx) => (
          <ServiceCard
            key={service.title}
            {...service}
            index={idx}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      <ServicePreviewModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </div>
  );
}
