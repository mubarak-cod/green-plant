"use client";

import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const CTASection = () => {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push("/place-an-order");
  };

  const handleWhatsAppClick = () => {
    // Replace with your business WhatsApp number
    window.open("https://wa.me/+2348127144292", "_blank");
  };

  return (
    <section className="relative bg-green-700 text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Background gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-90"></span>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          Need Diesel Today?{" "}
          <span className="text-yellow-300">Get It Delivered Fast.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-10 text-green-100"
        >
          Quick, reliable, and nationwide delivery — powering homes, offices, and
          industries without delay.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button
            onClick={handleOrderClick}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-green-900 font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-300 transition"
          >
            <ShoppingCart size={20} /> Order Now
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            <MessageCircle size={20} /> Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
