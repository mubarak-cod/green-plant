"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Environmental Responsibility",
    content:
      "We prioritize environmental stewardship by reducing emissions, conserving energy, and ensuring sustainable practices across all our operations.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757099890/image_at6apb.png",
  },
  {
    title: "Community Engagement",
    content:
      "Our projects actively support local communities, providing education, healthcare, and economic opportunities.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757099966/image_akemhx.png",
  },
  {
    title: "Innovative Practices",
    content:
      "We leverage modern technology and innovative processes to minimize environmental impact and maximize efficiency.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100064/image_om8hqe.png",
  },
  {
    title: "Sustainable Growth",
    content:
      "Our long-term strategy ensures growth that benefits stakeholders, the environment, and the society at large.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100134/image_nhmp1v.png",
  },
];

const SustainabilityPage = () => {
  return (
    <div className="bg-white text-black">
      <Nav />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center bg-white">
          <Image
            src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757099792/image_itxsmo.png"
            alt="Sustainability Background"
            fill
            className="object-cover"
            priority
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Sustainability
            </h1>
            <p className="mt-4 text-white text-lg md:text-xl max-w-2xl mx-auto">
              Exploring our core businesses and initiatives.
            </p>
          </motion.div>
        </section>

        {/* Content Sections */}
        {sections.map((section, idx) => (
          <InView key={idx} triggerOnce={true}>
            {({ inView, ref }) => (
              <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`w-full flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-12 gap-8 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-96">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-black">
                    {section.title}
                  </h2>
                  <p className="text-black leading-relaxed">{section.content}</p>
                </div>
              </motion.section>
            )}
          </InView>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
