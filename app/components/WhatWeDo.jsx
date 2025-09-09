"use client";
import React, { useState, Suspense } from "react";
import Tilt from "react-parallax-tilt"; // ✅ React Tilt
import { Lens } from "../ui/lens";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import Image from "next/image";


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
const WhatWeDo = () => {
  const [hovering, setHovering] = useState(false);
  const [activeTab, setActiveTab] = useState("reliability");

  const activeContent = visionTabs.find((tab) => tab.id === activeTab);

  const items = [
    {
      src: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757176130/image_lhfcfn.png",
      title: "Diesel Delivery",
      desc: "Safe and prompt delivery of quality diesel to homes, offices, and industries.",
    },
    {
      src: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757176183/image_qidgwq.png",
      title: "Bulk Supply",
      desc: "Large-scale diesel supply tailored for factories, hotels, hospitals, and organizations.",
    },
    {
      src: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757176229/image_a8pmll.png",
      title: "Reliable Logistics",
      desc: "Efficient transport and delivery networks across all regions of Nigeria.",
    },
    {
      src: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419287/oil4_eeivuu.png",
      title: "Customer-Focused Service",
      desc: "We prioritize client satisfaction with timely updates and responsive support.",
    },
  ];

  return (

    <div>

    <section className="px-6 md:px-16 py-12 mb-10 bg-gray-50 bg-gradient-to-br from-green-700 via-green-500 to-green-200">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h1>
        <p className="mt-4 text-white leading-relaxed">
          At Green Plant Energy, we specialize in delivering quality diesel across Nigeria, both in small and bulk quantities.  
          Our focus is prompt, reliable service to homes, offices, industries, and large organizations, ensuring power is always available when needed.
        </p>
      </div>

      {/* 4 Tilt Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <Tilt
          key={i}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-6"
          >
            <div className="relative z-10">
              <Lens hovering={hovering} setHovering={setHovering}>
                <Suspense fallback={<Loader />}>
                  <img
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="rounded-2xl"
                    />
                </Suspense>
              </Lens>
              <div className="py-4 relative z-20">
                <h2 className="text-white text-xl font-bold">{item.title}</h2>
                <p className="text-neutral-200 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>



    </section>
          

                        </div>
  );
};

export default WhatWeDo;
