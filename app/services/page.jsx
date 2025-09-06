"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function OurServices() {
  return (
    <div className="bg-white text-black">
      <Nav />

      {/* Hero */}
      <div className="relative w-full h-[85vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757111518/image_gyopfo.png"
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">
            Our Services
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
            Delivering reliable, efficient, and customer-focused energy solutions across Nigeria.
          </p>
        </div>
      </div>

      {/* Section 1 – Diesel Delivery */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-r from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-green-700">Diesel Delivery</h2>
            <p className="text-lg text-gray-700">
              Safe and prompt delivery of quality diesel to homes, offices, and industries.
              We ensure supply when you need it most.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757111212/image_h0iu1c.png"
              alt="Diesel Delivery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 2 – Bulk Supply */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="relative h-96 w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757111343/image_wc3kp4.png"
              alt="Bulk Supply"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-green-700">Bulk Supply</h2>
            <p className="text-lg text-gray-700">
              Large-scale diesel supply tailored for factories, hotels, hospitals,
              and organizations with uninterrupted power needs.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 3 – Energy Logistics */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Energy Logistics</h2>
          <p className="text-lg text-gray-700 mb-12">
            Efficient and professional handling of energy distribution needs with
            end-to-end logistics support.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {["Planning", "Distribution", "Support"].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-green-50 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-semibold text-green-600">{step}</h3>
                <p className="text-gray-600 mt-2">
                  {step} services that ensure your energy reaches where it matters most.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sections 4–7: Why Choose Us */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-green-700 mb-10">Why Choose Us</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Registered & Trusted", desc: "CAC Certified for professionalism and trust." },
              { title: "Competitive Pricing", desc: "Affordable and transparent rates." },
              { title: "Quality Assurance", desc: "Clean and tested diesel supply." },
              { title: "Prompt Delivery", desc: "Nationwide reach, always on time." },
              { title: "Customer-First", desc: "Dedicated to satisfaction and reliability." },
              { title: "Nationwide Reach", desc: "From Lagos to every part of Nigeria." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold text-green-600">{item.title}</h3>
                <p className="text-gray-600 mt-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
