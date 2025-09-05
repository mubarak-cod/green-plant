"use client";
import { motion } from "framer-motion";

export default function SmartMapSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-28 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        className="text-black text-3xl md:text-5xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Discover Growth Across <span className="text-green-400">Nigeria</span>
      </motion.h2>

      <motion.p
        className="text-black text-center max-w-3xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Key cities and hubs where innovation, opportunities, and growth converge.
        Explore our footprint and connect with thriving ecosystems across Nigeria.
      </motion.p>

      {/* Embedded Google Map */}
      <section className="px-6 md:px-16 pb-16 w-full">
        <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8845151469!2d3.379205415318525!3d6.524379525191343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8a67b1d3f3f%3A0x7a83f9e51d4b0e3a!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1682010234567"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
