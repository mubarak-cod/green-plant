"use client";
import { motion } from "framer-motion";

const keyCities = [
  { name: "Lagos", x: 18, y: 30 }, // x and y as % of width/height
  { name: "Abuja", x: 40, y: 20 },
  { name: "Port Harcourt", x: 27, y: 50 },
  { name: "Kano", x: 50, y: 10 },
  { name: "Ibadan", x: 20, y: 45 },
  { name: "Kaduna", x: 45, y: 18 },
];

export default function SmartMapSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black py-28 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        className="text-white text-3xl md:text-5xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Discover Growth Across <span className="text-green-400">Nigeria</span>
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-3xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Key cities and hubs where innovation, opportunities, and growth converge.
        Explore our footprint and connect with thriving ecosystems across Nigeria.
      </motion.p>

      {/* Map Container */}
      <div className="relative w-full max-w-5xl aspect-[2/1] bg-gradient-to-b from-green-900 to-black rounded-2xl shadow-xl overflow-hidden">
        {/* Animated Dots */}
        {keyCities.map((city, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-green-400 rounded-full shadow-lg"
            style={{
              left: `${city.x}%`,
              top: `${city.y}%`,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: i * 0.3,
              repeatType: "loop",
            }}
          />
        ))}

        {/* Floating City Labels */}
        {keyCities.map((city, i) => (
          <motion.div
            key={i + "-label"}
            className="absolute text-white font-semibold bg-green-700/80 px-3 py-1 rounded-full shadow-lg whitespace-nowrap text-xs md:text-sm"
            style={{
              left: `${city.x}%`,
              top: `${city.y}%`,
              translateX: "60%",
              translateY: "-60%",
            }}
            animate={{
              y: [`${city.y - 2}%`, `${city.y + 2}%`, `${city.y - 2}%`],
              x: [`${city.x + 2}%`, `${city.x + 5}%`, `${city.x + 2}%`],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 2,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {city.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
