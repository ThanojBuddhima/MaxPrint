'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/home/AnimatedSection';
import { ArrowRight, Printer, PenTool, Briefcase, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const highlights = [
    {
      title: "Corporate Printing",
      description: "Business cards, letterheads, bill books, and high-quality offset printing for your brand.",
      icon: Briefcase
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching banners, posters, flyers, and stickers to promote your business effectively.",
      icon: Printer
    },
    {
      title: "Design & Office Services",
      description: "Professional graphic design, typesetting, scanning, and document binding services.",
      icon: PenTool
    },
    {
      title: "Stationery & Supplies",
      description: "Exercise books, school items, and general office stationery needs.",
      icon: BookOpen
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div style={{ y: y1 }} className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl" />
           <motion.div style={{ y: y2 }} className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 uppercase tracking-wider">
              One-Stop Printing Solution
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              From Design to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Final Print
              </span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Commercial printing, graphic design, and office services all under one roof. 
              High quality, fast turnaround, and competitive pricing.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We provide a complete range of communication and printing services. 
              Whether you need urgent photocopies or a full branding package, we have you covered.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                   <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed mb-6">
                        {item.description}
                      </p>
                   </div>
                </AnimatedSection>
              );
            })}
          </div>
          
          <AnimatedSection className="mt-16 text-center">
             <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Explore Full Service Catalog <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
             </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Need something custom?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                We handle bulk orders, custom requirements, and urgent requests. Get in touch with us today.
              </p>
              <div className="flex justify-center">
                 <Link href="/contact">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-10 py-6 text-lg">
                       Contact Us
                    </Button>
                 </Link>
              </div>
            </AnimatedSection>
         </div>
      </section>

    </div>
  );
}
