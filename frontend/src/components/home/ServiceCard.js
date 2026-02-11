'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, image, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="group relative p-0 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative">
         <img 
            src={image || "/images/digital-print.jpg"} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
         <div className="absolute bottom-3 left-4 text-white">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg w-fit">
               <Icon className="w-5 h-5 text-white" />
            </div>
         </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
        )}
        
        <div className="mt-auto pt-2 flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
          <span>View Samples</span>
          <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}
