"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function OurServices() {
  return (
    <div className="bg-white text-black">
      <Nav />

      {/* HERO */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757111518/image_gyopfo.png"
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-lg md:text-2xl leading-relaxed"
          >
            Delivering reliable, efficient, and customer-focused energy solutions across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* SECTION 1 – Diesel Delivery */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative py-20 bg-gradient-to-r from-green-50 to-white"
          >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-green-700">Diesel Delivery</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Safe, reliable, and prompt delivery of premium diesel —
                  whether small-scale or bulk — to homes, offices, and industries.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757787437/image_mctbeh.png"
                  alt="Diesel Delivery"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.section>
        )}
      </InView>

      {/* SECTION 2 – Bulk Supply */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative h-96 w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757787607/image_oyfjsu.png"
                  alt="Bulk Supply"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-green-700">Bulk Supply</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Large-volume diesel solutions tailored for factories, hotels,
                  hospitals, and corporate organizations.
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </InView>

      {/* SECTION 3 – Reliable Logistics */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="py-20 bg-white"
          >
            <div className="max-w-6xl mx-auto text-center px-6">
              <h2 className="text-4xl font-bold text-green-700 mb-6">
                Reliable Logistics
              </h2>
              <p className="text-lg text-gray-700 mb-12">
                We handle every stage of the diesel supply chain — from safe storage
                to timely transportation — with a focus on efficiency, security, and
                transparency. Our logistics network keeps your operations powered
                without delays.
              </p>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  {
                    title: "Supply Planning",
                    desc: "Strategic scheduling and inventory management ensure you never run out of diesel when it matters most."
                  },
                  { title: "Nationwide Delivery", desc: "Dedicated tankers and a robust fleet provide fast and safe transport across Nigeria." },
                  { title: "Real-Time Tracking", desc: "Monitor your fuel movement from dispatch to delivery for complete peace of mind." }
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <h3 className="text-2xl font-semibold text-green-600">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </InView>

      {/* SECTION 4 – Customer-Focused Service */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="py-20 bg-gradient-to-b from-green-50 to-white"
          >
            <div className="max-w-6xl mx-auto text-center px-6">
              <h2 className="text-4xl font-bold text-green-700 mb-6">
                Customer-Focused Service
              </h2>
              <p className="text-lg text-gray-700 mb-12">
                We prioritize transparency and support. From real-time updates
                to responsive assistance, every client is valued.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10"
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  “Green Plant Energy has been our go-to diesel supplier for
                  years. Their service is consistent, reliable, and always
                  customer-first.”
                </p>
                <p className="mt-4 font-semibold text-green-700">– Client Testimonial</p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </InView>

      <Footer />
    </div>
  );
}
