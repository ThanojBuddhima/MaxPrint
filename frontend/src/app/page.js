'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/home/AnimatedSection';
import ServiceCard from '@/components/home/ServiceCard';
import { ArrowRight, Box, Image as ImageIcon, Layers, PenTool, Printer } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const services = [
    {
      title: "Commercial Printing",
      description: "High-volume offset printing for brochures, catalogs, and flyers with impeccable color accuracy.",
      icon: Printer
    },
    {
      title: "Packaging Solutions",
      description: "Custom boxes, labels, and flexible packaging designed to make your product stand out on the shelf.",
      icon: Box
    },
    {
      title: "Large Format",
      description: "Banners, posters, and signage that demand attention. Durable materials for indoor and outdoor use.",
      icon: Layers
    },
    {
      title: "Branding & Design",
      description: "From logo creation to full brand guidelines. Our design team brings your vision to life.",
      icon: PenTool
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div style={{ y: y1 }} className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl" />
           <motion.div style={{ y: y2 }} className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 tracking-wide uppercase">
              Premium Printing Solutions
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6 leading-tight">
              Print with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Precision & Impact
              </span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge technology with artisanal craftsmanship to deliver print materials that elevate your brand.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/shop">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="rounded-full px-8 py-6 text-lg hover:bg-gray-50">
                Our Protfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive printing and design solutions tailored to your business needs. 
              From concept to delivery, we handle it all.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                 <ServiceCard {...service} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / About Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                   <img 
                     src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
                     alt="Printing Process" 
                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <div className="text-white">
                         <p className="font-bold text-lg mb-1">State-of-the-art Facility</p>
                         <p className="text-sm opacity-80">Our production floor operates 24/7</p>
                      </div>
                   </div>
                </div>
             </AnimatedSection>

             <AnimatedSection delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Quality that speaks <br/> for itself.
                </h2>
                <div className="space-y-6 text-lg text-gray-500 mb-8">
                  <p>
                    At Max Print, we don't just print; we partner with you to achieve your communication goals. 
                    Our investment in the latest digital and offset technology ensures superior results every time.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Eco-friendly inks and sustainable paper options",
                      "G7 Master Qualification for color consistency",
                      "Next-day turnaround on select products",
                      "Dedicated account manager for enterprise clients"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" size="lg" className="rounded-full">
                   Learn About Our Process
                </Button>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Ready to make a statement?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of brands that trust Max Print for their critical communication needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/shop">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8">
                       View Services
                    </Button>
                 </Link>
                 <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800 rounded-full px-8">
                    Request Custom Quote
                 </Button>
              </div>
            </AnimatedSection>
         </div>
      </section>

    </div>
  );
}
