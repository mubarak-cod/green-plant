"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const steps = [
  {
    id: 1,
    title: "Place Your Order",
    description:
      "Request diesel via phone, WhatsApp, or our online form — choose the quantity and delivery location.",
  },
  {
    id: 2,
    title: "Order Confirmation",
    description:
      "Our team confirms your request, provides transparent pricing, and schedules delivery.",
  },
  {
    id: 3,
    title: "Fast & Reliable Delivery",
    description:
      "Diesel is transported safely through our trusted logistics network, arriving exactly when you need it.",
  },
  {
    id: 4,
    title: "Hassle-Free Support",
    description:
      "From start to finish, our customer support team keeps you updated with real-time assistance.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow">
        <section className="relative bg-gradient-to-b from-white to-green-50 py-24 px-6 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/40 rounded-full blur-3xl animate-pulse delay-200" />
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              A seamless, transparent, and reliable diesel supply process.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 to-green-600 hidden md:block" />

            <div className="space-y-20 md:space-y-28">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number */}
                  <div className="hidden md:flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shadow-lg"
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="flex-1 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 hover:shadow-2xl transition"
                  >
                    <h3 className="text-2xl font-semibold text-green-700 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-32 max-w-4xl mx-auto text-center"
          >
            <div className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-12 border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h3>
              <p className="text-gray-600 text-lg mb-10">
                Green Plant Energy — Reliable. Fast. Transparent.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a
                  href="tel:+2348127144292"
                  className="flex items-center gap-3 bg-green-600 text-white px-4 py-4 rounded-full hover:bg-green-700 transition shadow-lg text-sm"
                >
                  <Phone className="w-5 h-5" />
                  +234 812 714 4292
                </a>
                <a
                  href="mailto:greenplantenergyservices@gmail.com"
                  className="flex items-center gap-3 bg-green-100 text-green-700 text-sm px-4 py-4 rounded-full hover:bg-green-200 transition shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  greenplantenergyservices@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
