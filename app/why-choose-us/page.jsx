"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const features = [
  {
    id: 1,
    title: "Timely Delivery",
    text: "We ensure your diesel supply arrives exactly when you need it, minimizing downtime and disruption.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757175276/image_gz6hjt.png",
  },
  {
    id: 2,
    title: "Quality & Safety",
    text: "Premium diesel, handled and delivered with strict safety and quality standards.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757175329/image_if7ydg.png",
  },
  {
    id: 3,
    title: "Nationwide Coverage",
    text: "A reliable logistics network serving homes, offices, and industries across Nigeria.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757491623/image_tx5fbl.png",
  },
  {
    id: 4,
    title: "Customer Commitment",
    text: "Transparent operations, responsive support, and services tailored to your needs.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757491700/image_dczm6l.png",
  },
  {
    id: 5,
    title: "Reliable Diesel Supply",
    text: "Delivering high-quality diesel with consistency, efficiency, and transparency — powering industries, businesses, and communities nationwide.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757787870/image_hidymg.png",
  },
];


const WhyChooseUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-50 py-24 px-6 md:px-12">
        {/* Floating Blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-200" />

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-extrabold text-center text-gray-900"
        >
          Why <span className="text-green-600">Choose Green Plant Energy?</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-6 text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto"
        >
          We don’t just deliver fuel — we deliver reliability, trust, and a commitment to building a sustainable energy future.
        </motion.p>
      </section>

      {/* Features Grid */}
      <main className="flex-grow bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden flex flex-col group border border-green-100 hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
