"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Nav from "../components/Nav";   // adjust path if different
import Footer from "../components/Footer"; // adjust path if different

const steps = [
  {
    id: 1,
    title: "Request a Quote",
    description:
      "Contact us via phone, email, or website form to request your diesel supply.",
  },
  {
    id: 2,
    title: "Confirm Your Order",
    description:
      "Agree on volume, delivery time, and secure payment (bank transfer only).",
  },
  {
    id: 3,
    title: "We Deliver",
    description:
      "Our logistics team ensures safe and timely supply at your location nationwide.",
  },
  {
    id: 4,
    title: "Stay Powered",
    description:
      "Enjoy uninterrupted energy supply with Green Plant Energy.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Main Section */}
      <main className="flex-grow">
        <section className="relative bg-gradient-to-b from-white to-green-50 py-24 px-6 overflow-hidden">
          {/* Background Accent */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple, transparent, and reliable energy delivery process.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block" />
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Circle Marker */}
                  <div className="hidden md:flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Card */}
                  <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-2xl transition">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-28 max-w-4xl mx-auto text-center"
          >
            <div className="relative bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-10 border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Green Plant Energy — Powering the Future, Today.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a
                  href="tel:+2348127144292"
                  className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  +234 812 714 4292
                </a>
                <a
                  href="mailto:greenplantenergyservices@gmail.com"
                  className="flex items-center gap-3 bg-green-100 text-green-700 text-sm px-6 py-3 rounded-full hover:bg-green-200 transition shadow-md"
                >
                  <Mail className="w-5 h-5" />
                  greenplantenergyservices@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
