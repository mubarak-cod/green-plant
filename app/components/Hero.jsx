"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  { 
    id: 1, 
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757081915/1_fhsljn.png", 
    heading: "Africa’s largest energy company", 
    text: "We are committed to making energy available and accessible to all, driving development across communities and ensuring that no one is left behind in the journey toward progress." 
  },
  { 
    id: 2, 
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757081994/2_z5y4jt.png", 
    heading: "Driving sustainable energy", 
    text: "Innovation and sustainability sit at the heart of everything we do, as we work to create solutions that protect the environment while powering homes, businesses, and industries for the future." 
  },
  { 
    id: 3, 
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757082033/3_rergyq.png", 
    heading: "Global partnerships", 
    text: "Through collaboration with leading international partners, we are building stronger networks and advancing technologies that ensure reliable, affordable, and clean energy supply worldwide." 
  },
  { 
    id: 4, 
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757082076/4_cz2gjp.png", 
    heading: "Innovation in energy", 
    text: "By leveraging cutting-edge technology and research, we are transforming the energy landscape with cleaner, more reliable, and future-ready solutions that power modern living." 
  },
  { 
    id: 5, 
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757082227/5_wu7xbx.png", 
    heading: "Energy efficiency and sustainability", 
    text: "Our focus on efficiency and sustainability helps reduce carbon emissions, while delivering consistent, dependable power to millions of people and industries across the continent." 
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 12000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].heading}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-24 max-w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight drop-shadow-lg">
              {slides[current].heading}
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-md drop-shadow">
              {slides[current].text}
            </p>
            <div
              onClick={() => (window.location.href = "/who-we-are")}
              className="mt-6 flex items-center justify-center bg-white text-black font-bold rounded-lg px-8 py-4 text-lg hover:bg-gray-100 cursor-pointer transition-shadow shadow-md hover:shadow-lg w-fit"
            >
              Who We Are
              <ChevronRight className="ml-3" size={20} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
        >
          <ChevronLeft className="text-black" />
        </button>
        <button
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
}
