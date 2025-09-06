"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  { 
    id: 1, 
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757111805/image_hcn9oy.png", 
    heading: "Africa’s Energy Company", 
    text: "We make energy accessible and reliable across Nigeria. Powering communities, driving growth, and ensuring no one is left without fuel." 
  },
  { 
    id: 2, 
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757081994/2_z5y4jt.png", 
    heading: "Reliable Diesel Supply", 
    text: "Our priority is delivering diesel safely and on time. Homes, businesses, and industries trust us to keep operations running without interruption." 
  },
  { 
    id: 3, 
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757139858/image_irpdk8.png", 
    heading: "Nationwide Reach", 
    text: "With strong logistics and trusted partnerships, we provide seamless fuel delivery nationwide, supporting industries and powering daily life." 
  },
  { 
    id: 4, 
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757141192/image_geq0ea.png", 
    heading: "Innovation in Energy", 
    text: "We leverage technology to improve speed, safety, and efficiency in fuel delivery — transforming the energy experience for our customers." 
  },
  { 
    id: 5, 
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757140258/image_vikepy.png", 
    heading: "Efficiency & Trust", 
    text: "Green Plant Energy delivers dependable diesel supply that businesses can count on. Efficient, consistent, and built on customer trust." 
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
