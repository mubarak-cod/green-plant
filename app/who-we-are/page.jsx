"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";


const missionSections = [
  {
    id: 1,
    title: "Timely Energy Delivery",
    description:
      "We ensure that your homes, offices, and industries receive diesel supply exactly when you need it, avoiding downtime and disruption.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110274/image_oec3j0.png",
  },
  {
    id: 2,
    title: "Transparent Operations",
    description:
      "Our operations are transparent and professional, from order placement to delivery, ensuring you always know the status of your energy supply.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110516/image_rlnm3u.png",
  },
  {
    id: 3,
    title: "Efficient & Reliable",
    description:
      "We combine professionalism, integrity, and efficiency to deliver energy solutions that businesses and homes can rely on every day.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110604/image_yfglqe.png",
  },
];

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
export default function Home() {
  const [activeTab, setActiveTab] = useState("reliability");

  const activeContent = visionTabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center">
        {/* Hero Section with Background Image */}
        <section className="relative w-full h-[90vh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757112004/image_epkmlu.png"
            alt="Ship background"
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Overlay */}
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold after:content-[''] after:block after:w-1/2 after:h-1 after:bg-green-500 after:mx-auto after:mt-2">
            WHO WE ARE
          </h1>


        </section>

        {/* Intro Section */}
        <section className="w-full bg-gray-50 px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-3xl font-bold text-gray-900 leading-snug">
             Green Plant Energy is a registered Nigerian energy solutions provider, focused on seamless diesel supply and distribution. We combine professionalism, integrity, and efficiency to deliver energy where it matters most.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Our mandate is to create an energy business that is:
            </p>
            <div className="mt-6 p-6 bg-gray-100 rounded-2xl shadow">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Efficient
              </h2>
              <p className="mt-3 text-gray-600">
                We are focused on energy transition while ensuring domestic energy
                security.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757099538/image_vss3js.png"
              alt="NNPC fuel station"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </section>


        <div className="max-w-7xl mx-auto px-6 py-16">

          <h1 className="text-black text-4xl mb-4">Our Vision</h1>
          <p className="text-sm text-black mb-8">To become the leading name in energy logistics across Africa, known for reliability and customer satisfaction.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {visionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${activeTab === tab.id
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

              <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                <h1 className="text-4xl text-black mb-5">Our Mission</h1>
                <p className=" text-black mb-4">To power lives and businesses through timely, transparent, and efficient energy solutions.</p>
                {missionSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                  >
                    <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                      />
                    </div>
        
                    <div className="md:w-1/2 space-y-4">
                      <h2 className="text-3xl font-bold text-black">{section.title}</h2>
                      <p className="text-black text-lg">{section.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

        {/* What We Do */}
        <section className="w-full bg-gray-50 px-6 py-16 space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Liquid Hydrocarbon
              </h3>
              <p className="mt-3 text-gray-600">
                We are enhancing our liquid hydrocarbon production while creating
                new energy businesses.
              </p>
              <p className="mt-3 text-green-800 font-medium">
                To support our environmental sustainability efforts through our
                near-term and long-term decarbonization program.
              </p>
            </div>
            <Image
              src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757141462/image_mf5t35.png"
              alt="Liquid Hydrocarbon"
              width={400}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757101093/image_gfcdwc.png"
              alt="Gas infrastructure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Gas</h3>
              <p className="mt-3 text-gray-600">
                We are expanding and upscaling our gas processing and
                transportation infrastructure to meet domestic gas needs and
                exports, including LNG.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
