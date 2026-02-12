'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock session ID
    let sessionId = localStorage.getItem('cartSessionId');
    if (!sessionId) {
        setLoading(false);
        return;
    }

    api.cart.get(sessionId)
      .then(data => {
        setCart(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleRemove = async (productId) => {
      try {
        let sessionId = localStorage.getItem('cartSessionId');
        const updatedCart = await api.cart.remove(sessionId, productId);
        setCart(updatedCart);
      } catch (e) {
          console.error(e);
      }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;

  if (!cart || !cart.items || cart.items.length === 0) {
      return (
          <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
              <Link href="/shop">
                  <Button size="lg">Start Shopping</Button>
              </Link>
          </div>
      );
  }

  const subtotal = cart.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
                {cart.items.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        layout
                    >
                        <Card className="flex items-center p-4">
                            <img 
                                src={item.product.imageUrl} 
                                alt={item.product.name} 
                                className="w-20 h-20 object-cover rounded-md mr-6"
                            />
                            <div className="flex-grow">
                                <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                                <p className="text-gray-500 text-sm">{item.product.category}</p>
                            </div>
                            <div className="flex items-center space-x-6">
                                <span className="font-medium text-gray-900">${item.product.price}</span>
                                <div className="bg-gray-100 rounded-md px-3 py-1 text-sm font-medium">
                                    Qty: {item.quantity}
                                </div>
                                <button 
                                    onClick={() => handleRemove(item.product.id)}
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
              <Card className="sticky top-24">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-gray-600">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                          <span>Estimates Tax (8%)</span>
                          <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                          <span>Shipping</span>
                          <span className="text-green-600 font-medium">Free</span>
                      </div>
                      <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-lg text-gray-900">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                      </div>
                  </div>

                  <Button size="lg" className="w-full justify-between group">
                      Checkout <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
              </Card>
          </div>
      </div>
    </div>
  );
}
