"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const features = [
  {
    id: 1,
    title: "Registered & Trusted",
    text: "We are fully CAC certified, ensuring your transactions are safe, transparent, and professional.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757141462/image_mf5t35.png",
  },
  {
    id: 2,
    title: "Competitive Pricing",
    text: "Affordable rates without compromising on quality or reliability, tailored to meet your needs.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757082076/4_cz2gjp.png",
  },
  {
    id: 3,
    title: "Quality Assurance",
    text: "Every drop of fuel is clean, tested, and certified — guaranteed performance and efficiency.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757111805/image_hcn9oy.png",
  },
  {
    id: 4,
    title: "Prompt Delivery",
    text: "Nationwide reach with a commitment to timely deliveries, wherever you are in Nigeria.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757139858/image_irpdk8.png",
  },
  {
    id: 5,
    title: "Customer-First Approach",
    text: "Our clients remain at the heart of every service we deliver — excellence is our standard.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757082227/5_wu7xbx.png",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <Nav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-white py-24 px-6 md:px-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-900"
        >
          Why <span className="text-green-600">Choose Us</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto"
        >
          At Green Plant Energy, we go beyond fuel supply — we deliver trust,
          speed, and sustainable value across Nigeria.
        </motion.p>
      </section>

      {/* Features Grid */}
      <main className="flex-grow bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group"
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
