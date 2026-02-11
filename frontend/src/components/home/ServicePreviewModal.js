'use client';

import Modal from '@/components/ui/Modal';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ServicePreviewModal({ isOpen, onClose, service }) {
  if (!service) return null;

  // Generate some dummy images for the gallery if none provided
  const images = service.images || [
    `https://source.unsplash.com/random/800x600?${service.searchQuery || 'printing'}`,
    `https://source.unsplash.com/random/800x600?paper`,
    `https://source.unsplash.com/random/800x600?design`
  ];

  // Fallback for unsplash source deprecation or issues, using reliable placeholders or specific IDs would be better in prod
  // For this demo, let's use a reliable placeholder service with text if possible, or robust logical images.
  // Actually, Unsplash source is unreliable. Let's use a placeholder service that generates nice colored blocks or specific tech images.
  const getDummyImage = (keyword, index) => 
    `https://placehold.co/600x400/2563eb/ffffff?text=${encodeURIComponent(service.title + ' ' + (index + 1))}`;


  return (
    <Modal isOpen={isOpen} onClose={onClose} title={service.title} size="full">
      <div className="flex flex-col h-full">
        <div className="flex-grow overflow-y-auto p-1">
          <div className="max-w-7xl mx-auto w-full space-y-8 p-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                 <p className="text-xl text-gray-600 leading-relaxed">{service.description || "Premium quality service tailored to your needs. We use the best materials and latest technology to ensure your project stands out."}</p>
                 
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-2">Specifications</h4>
                      <ul className="space-y-2 text-sm text-blue-800/80">
                        <li>• High resolution output</li>
                        <li>• Multiple paper stocks available</li>
                        <li>• Fast turnaround times</li>
                        <li>• Color matching services</li>
                      </ul>
                    </div>
                 </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Gallery & Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 relative group shadow-sm hover:shadow-md transition-all">
                        <img 
                            src={getDummyImage(service.title, i)} 
                            alt={`${service.title} sample ${i+1}`}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-6 bg-white shrink-0">
            <div className="max-w-7xl mx-auto flex justify-end space-x-4">
                <Button variant="outline" size="lg" onClick={onClose}>Close Preview</Button>
                <Link href="/contact">
                    <Button size="lg">Request Custom Quote</Button>
                </Link>
            </div>
        </div>
      </div>
    </Modal>
  );
}
