'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Success step
      // Clear cart
      localStorage.removeItem('cartSessionId');
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
            Thank you for your purchase. We've sent a confirmation email to {formData.email}.
          </p>
          <Button size="lg" onClick={() => router.push('/')}>
            Return to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">Checkout</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Steps Info */}
        <div className="md:col-span-1 space-y-6">
           <div className={`p-4 rounded-xl border transition-colors ${step === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
              <div className="flex items-center space-x-3">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                 <span className={`font-medium ${step === 1 ? 'text-blue-900' : 'text-gray-500'}`}>Shipping Info</span>
              </div>
           </div>
           <div className={`p-4 rounded-xl border transition-colors ${step === 2 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
              <div className="flex items-center space-x-3">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                 <span className={`font-medium ${step === 2 ? 'text-blue-900' : 'text-gray-500'}`}>Payment Details</span>
              </div>
           </div>
        </div>

        {/* Form */}
        <Card className="md:col-span-2">
           <form onSubmit={(e) => { e.preventDefault(); if(step === 1) setStep(2); else handleSubmit(e); }}>
              {step === 1 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl font-bold mb-4 flex items-center"><Truck className="mr-2" size={20}/> Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <Input name="name" label="Full Name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                       <Input name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                    </div>
                    <Input name="address" label="Address" value={formData.address} onChange={handleChange} required placeholder="123 Main St" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <Input name="city" label="City" value={formData.city} onChange={handleChange} required placeholder="New York" />
                       <Input name="zip" label="ZIP / Postal Code" value={formData.zip} onChange={handleChange} required placeholder="10001" />
                    </div>
                    <div className="pt-4 flex justify-end">
                       <Button type="submit">Continue to Payment</Button>
                    </div>
                 </motion.div>
              )}

              {step === 2 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl font-bold mb-4 flex items-center"><CreditCard className="mr-2" size={20}/> Payment Method</h2>
                    <Input name="cardNumber" label="Card Number" value={formData.cardNumber} onChange={handleChange} required placeholder="0000 0000 0000 0000" />
                    <div className="grid grid-cols-2 gap-4">
                       <Input name="expiry" label="Expiry Date" value={formData.expiry} onChange={handleChange} required placeholder="MM/YY" />
                       <Input name="cvc" label="CVC" value={formData.cvc} onChange={handleChange} required placeholder="123" />
                    </div>
                    <div className="pt-4 flex justify-between items-center">
                       <button type="button" onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-700">Back</button>
                       <Button type="submit" disabled={loading}>
                          {loading ? 'Processing...' : 'Complete Order'}
                       </Button>
                    </div>
                 </motion.div>
              )}
           </form>
        </Card>
      </div>
    </div>
  );
}
