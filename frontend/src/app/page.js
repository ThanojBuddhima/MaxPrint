'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/home/AnimatedSection';
import { ArrowRight, Printer, PenTool, Briefcase, BookOpen } from 'lucide-react';
import TypingText from '@/components/home/TypingText';
import ImageSlideshow from '@/components/home/ImageSlideshow';
import Link from 'next/link';
import { servicesData } from '@/lib/data';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Enable scroll snapping only on the homepage
  useEffect(() => {
    // Apply snap styles to html/body
    document.documentElement.style.scrollSnapType = 'y mandatory';
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    
    return () => {
      // Cleanup styles when leaving homepage
      document.documentElement.style.scrollSnapType = '';
      document.documentElement.style.scrollBehavior = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, []);
  
  // Hero Images
  // Hero Content Data (Synchronized Images & Text)
  const heroSlides = [
    {
      id: 1,
      text: "Offset Printing",
      image: "/images/hero-printing.jpg",
      subtext: "High-volume, premium quality printing solutions."
    },
    {
      id: 2,
      text: "School Stationery",
      image: "/images/hero-stationery.jpg",
      subtext: "Everything your school needs, from books to pens."
    },
    {
      id: 3,
      text: "Office Services",
      image: "/images/hero-typing.jpg",
      subtext: "Typesetting, photocopying, and document management."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Select 4 key services to highlight with images
  const highlights = [
    {
      title: "Commercial Printing",
      description: "Business cards, letterheads, and offset printing.",
      image: servicesData.find(s => s.title === 'Offset Printing')?.image,
      icon: Printer
    },
    {
      title: "Graphic Design",
      description: "Professional branding and layout services.",
      image: servicesData.find(s => s.title === 'Graphic Designing')?.image,
      icon: PenTool
    },
    {
      title: "School Stationery",
      description: "Exercise books and educational materials.",
      image: servicesData.find(s => s.title === 'School Items')?.image,
      icon: BookOpen
    },
    {
      title: "Marketing Materials",
      description: "Banners, posters, and promotional items.",
      image: servicesData.find(s => s.title === 'Banners')?.image,
      icon: Briefcase
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section - Redesigned */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always bg-gray-50">
        
        {/* Animated Background Image (Behind Text) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             <AnimatePresence mode="wait">
                <motion.div 
                   key={heroSlides[currentSlide].id}
                   initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                   animate={{ opacity: 1, scale: 1, rotate: 0 }}
                   exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute w-[80vw] md:w-[60vw] max-w-3xl aspect-square"
                >
                   <img 
                      src={heroSlides[currentSlide].image} 
                      alt="Hero Background"
                      className="w-full h-full object-contain opacity-20 md:opacity-25 mix-blend-multiply filter blur-sm md:blur-0" 
                   />
                </motion.div>
             </AnimatePresence>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Premium Printing & Design
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-tight text-gray-900">
              We are experts in <br />
              <span className="block mt-2 h-[1.3em] relative">
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={heroSlides[currentSlide].id}
                       initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                       animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                       exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                       transition={{ duration: 0.6, ease: "easeOut" }}
                       className="absolute inset-0 w-full text-blue-600"
                    >
                       {heroSlides[currentSlide].text}
                    </motion.div>
                 </AnimatePresence>
              </span>
            </h1>
            
            <div className="h-16 mb-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                   <motion.p 
                      key={heroSlides[currentSlide].id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
                   >
                     {heroSlides[currentSlide].subtext}
                   </motion.p>
                </AnimatePresence>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="rounded-full px-12 py-7 text-xl bg-blue-600 hover:bg-blue-700 text-white border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Explore Services <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/contact">
                 <Button 
                   variant="outline"
                   size="lg" 
                   className="rounded-full px-12 py-7 text-xl border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
                 >
                   Get a Quote
                 </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section - Hanging Banners */}
      <section className="min-h-screen flex flex-col justify-center py-24 bg-gray-50 snap-start snap-always relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-60" />
           <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-purple-50 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Our Expertise</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We specialize in a wide array of printing and design services.
            </p>
          </AnimatedSection>

          {/* Flex Brick Layout - Dynamic Text Width */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
             {[
               { name: "Offset Printing", color: "bg-blue-600" },
               { name: "Digital Printing", color: "bg-indigo-600" },
               { name: "Graphic Design", color: "bg-purple-600" },
               { name: "Stationery", color: "bg-pink-600" },
               { name: "Binding", color: "bg-rose-600" },
               { name: "Laminating", color: "bg-orange-600" },
               { name: "Typesetting", color: "bg-amber-600" },
               { name: "Photocopy", color: "bg-emerald-600" },
             ].map((service, index) => (
               <AnimatedSection 
                  key={service.name} 
                  delay={index * 0.05}
                  className={`relative group overflow-hidden rounded-full ${service.color} shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
               >
                 <Link href="/services" className="block w-full h-full px-8 py-4 flex items-center justify-center">
                    {/* Background Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-in-out" />
                    
                    <h3 className="relative z-10 text-lg md:text-xl font-bold text-white tracking-tight text-center whitespace-nowrap">
                      {service.name}
                    </h3>
                 </Link>
               </AnimatedSection>
             ))}
          </div>

          <AnimatedSection className="mt-16 text-center">
             <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-300 hover:bg-gray-100 text-gray-700">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
             </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Modern Grid / Collage Section */}
      <section className="min-h-screen flex flex-col justify-center py-24 bg-white overflow-hidden snap-start snap-always">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <AnimatedSection>
                   <div className="relative">
                      <div className="grid grid-cols-2 gap-4">
                         <img 
                            src="/images/digital-print.jpg" 
                            className="rounded-2xl shadow-lg mt-8"
                            alt="Printing"
                         />
                         <img 
                            src="/images/typesetting.jpg" 
                            className="rounded-2xl shadow-lg"
                            alt="Design"
                         />
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-xl max-w-xs border border-gray-100 hidden sm:block">
                         <div className="flex items-center space-x-3 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-bold text-gray-900">Live Support</span>
                         </div>
                         <p className="text-xs text-gray-500">Our design team is ready to help you with your next project.</p>
                      </div>
                   </div>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                   <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Max Print?</h2>
                   <div className="space-y-8">
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <Printer className="text-blue-600 w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg mb-1">Advanced Technology</h3>
                            <p className="text-gray-500">We use industry-leading offset and digital printers for crisp, vibrant results.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            <PenTool className="text-purple-600 w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg mb-1">Expert Design Team</h3>
                            <p className="text-gray-500">Our in-house graphics team helps bring your creative vision to reality.</p>
                         </div>
                      </div>
                   </div>
                </AnimatedSection>
             </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex flex-col justify-center py-24 bg-gray-900 text-white relative overflow-hidden snap-start snap-always">
         <div className="absolute inset-0">
            <img 
              src="/images/graphic-design.jpg" 
              className="w-full h-full object-cover opacity-10"
              alt="Background"
            />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-gray-900 via-gray-900/90 to-gray-900" />
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Ready to make a statement?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of brands that trust Max Print.
              </p>
              <div className="flex justify-center">
                 <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-6 text-lg border-none">
                       Get a Quote
                    </Button>
                 </Link>
              </div>
            </AnimatedSection>
         </div>
      </section>

    </div>
  );
}
