"use client";
import React, { useState, Suspense } from "react";
import Tilt from "react-parallax-tilt"; // ✅ React Tilt
import { Lens } from "../ui/lens";
import Loader from "./Loader";

const WhatWeDo = () => {
  const [hovering, setHovering] = useState(false);

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
  );
};

export default WhatWeDo;
