"use client";

import { motion } from "framer-motion";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="relative px-6 md:px-16 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-40 w-72 h-72 bg-[#228B22]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-emerald-400/10 blur-2xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wide text-[#228B22] font-semibold mb-3"
          >
            Why We Exist
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight"
          >
            Vision & Mission
          </motion.h2>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#228B22]" />
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted diesel delivery and energy logistics
              provider, known for reliability, innovation, and customer satisfaction —
              while driving the continent’s transition to cleaner, sustainable energy.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-[#228B22]" />
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-gray-700 text-base">
              {[
                "Timely diesel delivery that keeps homes, offices, and industries running without interruption.",
                "Transparent operations that build trust and accountability at every stage of the supply chain.",
                "Efficient logistics that guarantee reliability, safety, and nationwide reach.",
                "Sustainability initiatives that balance today’s energy needs with tomorrow’s environmental responsibilities.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#228B22] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Image
            src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110746/image_bn3bmc.png"
            alt="Energy and sustainability"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-3xl ring-2 ring-[#228B22]/20 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
