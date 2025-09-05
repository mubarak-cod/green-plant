"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const businesses = [
  {
    id: 1,
    title: "Renewable Energy",
    description:
      "We invest in solar, wind, and hydro projects to provide sustainable power solutions across Africa and beyond.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100329/image_swszuo.png",
  },
  // {
  //   id: 2,
  //   title: "Power Distribution",
  //   description:
  //     "Our state-of-the-art distribution network ensures reliable electricity access for businesses and communities.",
  //   image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100389/image_egw5u0.png",
  // },
  {
    id: 3,
    title: "Innovation & Technology",
    description:
      "We leverage cutting-edge technology and smart grids to optimize energy management and efficiency.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100441/image_og28x0.png",
  },
];

export default function OurBusinesses() {
  return (
    <div className="bg-white text-black">

      <Nav />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[90vh] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100248/image_odnmuc.png"
            alt="Our Businesses Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <h1 className="relative text-white text-5xl md:text-6xl font-bold text-center drop-shadow-lg">
            Our Businesses
          </h1>
        </div>

        {/* Businesses Sections */}
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          {businesses.map((biz, index) => (
            <motion.div
              key={biz.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
            >
              <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={biz.image}
                  alt={biz.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />

              </div>

              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-black">{biz.title}</h2>
                <p className="text-black text-lg">{biz.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
