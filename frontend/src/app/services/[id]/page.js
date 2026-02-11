'use client';

import { useState, useEffect, use } from 'react';
import { api as backendApi } from '@/lib/api';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ChevronRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Unwrap params using React.use()
  const { id } = use(params);

  useEffect(() => {
    if (id) {
        backendApi.products.getById(id)
        .then(data => {
            setProduct(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!product) return <div className="text-center py-20">Service not found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center text-sm text-gray-500 mb-8 space-x-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight size={14} />
        <Link href="/shop" className="hover:text-blue-600">Services</Link>
        <ChevronRight size={14} />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Section */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square"
        >
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="object-cover w-full h-full"
            />
        </motion.div>

        {/* Info Section */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
        >
            <span className="text-blue-600 font-semibold mb-2">{product.category}</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{product.name}</h1>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {product.description}
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="font-semibold text-blue-900 mb-2">Service Features</h3>
                <ul className="space-y-2 text-blue-800/80">
                    <li className="flex items-center">• High quality materials</li>
                    <li className="flex items-center">• Fast turnaround time</li>
                    <li className="flex items-center">• Custom sizing available</li>
                </ul>
            </div>

            <div className="flex space-x-4">
                <Link href="/contact" className="flex-1">
                    <Button 
                        size="lg" 
                        className="w-full flex items-center justify-center space-x-2"
                    >
                        <MessageSquare size={20} />
                        <span>Request a Quote</span>
                    </Button>
                </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Need bulk pricing? Contact our sales team.</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
