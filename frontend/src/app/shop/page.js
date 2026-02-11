'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/utils'; // Assuming api is exported fromutils or separate file
// correcting import
import { api as backendApi } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    backendApi.products.getAll()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-96 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-gray-900"
      >
        Service Catalog
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="h-full flex flex-col overflow-hidden p-0 group cursor-pointer hover:shadow-xl border-transparent hover:border-blue-100">
              <Link href={`/shop/${product.id}`} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                    <Button className="w-full mt-auto" variant="outline">
                      View Details
                    </Button>
                  </div>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
