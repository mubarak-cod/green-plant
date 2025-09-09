"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 0,
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757178171/image_zflpbj.png",
    heading: "Green Plant Energy",
    text: "Green Plant Energy is a forward-thinking energy solutions company dedicated to reliable fuel delivery and sustainable practices. We keep homes, businesses, and industries powered efficiently...",
    isOverview: true
  },
  {
    id: 1,
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757180219/image_g4tlo4.png",
    heading: "Reliable Diesel Supply",
    text: "Our priority is delivering diesel safely and on time. Homes, businesses, and industries trust us to keep operations running without interruption."
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757177907/image_g4msb5.png",
    heading: "24/7 Availability",
    text: "We provide round-the-clock supply services whenever and wherever you need it."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757177961/image_arpiub.png",
    heading: "Premium Quality Fuel",
    text: "Our diesel meets industry standards for performance and efficiency, ensuring your machines, generators, and vehicles run at their best."
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757178095/image_ur1eyw.png",
    heading: "Nationwide Coverage",
    text: "From small households to large industrial sites, our wide distribution network ensures timely delivery across the country."
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757178171/image_zflpbj.png",
    heading: "Affordable & Transparent Pricing",
    text: "Get competitive rates with no hidden charges. Clear pricing so you can plan your energy costs with confidence."
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = current === 0 ? 60000 : 40000;
    const interval = setInterval(() => {
      handleNext();
    }, delay);
    return () => clearInterval(interval);
  }, [current]); 

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

          {/* FULL-COVER OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-white max-w-xl leading-snug drop-shadow-lg">
              {slides[current].heading}
            </h1>
            
            <p className="mt-3 text-base md:text-lg text-gray-200 max-w-lg drop-shadow-lg">
              {slides[current].text}
              {slides[current].isOverview && (
                <span
                  onClick={() => (window.location.href = "/who-we-are")}
                  className="ml-2 text-yellow-400 font-semibold cursor-pointer hover:underline"
                >
                  Read More →
                </span>
              )}
            </p>

            {/* Who We Are button */}
            <div
              onClick={() => (window.location.href = "/who-we-are")}
              className="mt-5 flex items-center justify-center bg-white text-black font-semibold rounded-md px-6 py-2 text-sm md:text-base hover:bg-gray-100 cursor-pointer transition-shadow shadow-md hover:shadow-lg w-fit"
            >
              Who We Are
              <ChevronRight className="ml-2" size={18} />
            </div>

            {/* Yellow navigation buttons (moved here) */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
              >
                <ChevronLeft className="text-black" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
              >
                <ChevronRight className="text-black" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full max-w-lg bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
