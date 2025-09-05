"use client";
import { WorldMap } from "../ui/world-map";
import { motion } from "framer-motion";

const movingTexts = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Kaduna"];

export function WorldMapDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black bg-white py-20">
      
      {/* Title */}
      <div className="text-center mb-12">
        <p className="font-bold text-2xl md:text-4xl dark:text-white text-black mb-4">
          Explore Nigeria’s <span className="text-green-600">Opportunities</span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto">
          Key hubs across Nigeria where growth and innovation are taking root.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full max-w-4xl aspect-[2/1]">
        {/* Original World Map with animated dots/lines */}
        <WorldMap
          dots={[
            { start: { lat: 6.5244, lng: 3.3792 }, end: { lat: 9.0765, lng: 7.3986 } }, // Lagos → Abuja
            { start: { lat: 9.0765, lng: 7.3986 }, end: { lat: 4.8156, lng: 7.0498 } }, // Abuja → PH
            { start: { lat: 6.5244, lng: 3.3792 }, end: { lat: 12.0022, lng: 8.5919 } }, // Lagos → Kano
          ]}
          lineColor="#10B981"
        />

        {/* Floating / Moving Texts on top of the map */}
        {movingTexts.map((text, i) => (
          <motion.div
            key={i}
            className="absolute text-sm md:text-base font-semibold text-white bg-green-700 px-2 py-1 rounded-md shadow-lg select-none"
            initial={{
              x: 350, // starting near center X
              y: 180, // starting near center Y
            }}
            animate={{
              x: [300 + Math.random() * 100, 350 + Math.random() * 100, 300 + Math.random() * 100],
              y: [150 + Math.random() * 60, 180 + Math.random() * 60, 150 + Math.random() * 60],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
