'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
      
      <div className="relative z-10">
        <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm w-fit group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
          <span>Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
