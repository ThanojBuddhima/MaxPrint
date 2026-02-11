'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }} // Reduced delay for smoother load of many items
      onClick={onClick}
      className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-125 duration-500" />
      
      <div className="relative z-10 flex-grow">
        <div className="mb-4 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        )}
      </div>
      
      <div className="mt-auto pt-4 flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
        <span>View Samples</span>
        <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
      </div>
    </motion.div>
  );
}
