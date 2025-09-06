"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const visionTabs = [
  {
    id: "reliability",
    title: "Reliability",
    description:
      "We prioritize dependable energy supply so businesses and homes across Africa never experience power interruptions.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110746/image_bn3bmc.png",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Through smart logistics, digital tools, and modern infrastructure, we aim to set new standards in energy distribution.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110798/image_wrw4zn.png",
  },
  {
    id: "customer",
    title: "Customer First",
    description:
      "Our vision is driven by our customers — ensuring satisfaction with transparency, fair pricing, and excellent service.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110870/image_qz0bse.png",
  },
  {
    id: "growth",
    title: "Continental Growth",
    description:
      "We see ourselves expanding across Africa, becoming the most trusted name in energy logistics across the continent.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110972/image_myvpoz.png",
  },
];

export default function OurVision() {
  const [activeTab, setActiveTab] = useState("reliability");

  const activeContent = visionTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-white text-black">
      <Nav />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110692/image_tfb8lq.png"
          alt="Our Vision Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">
            Our Vision
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            To become the leading name in energy logistics across Africa, known for reliability and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {visionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">{activeContent.title}</h2>
              <p className="text-lg text-gray-700">{activeContent.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
