"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

export default function OurMission() {
  return (
    <div className="bg-white text-black">
      <Nav />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757110202/image_q3kpf2.png"
          alt="Our Mission Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">
            Our Mission
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            To power lives and businesses through timely, transparent, and efficient energy solutions.
          </p>
        </div>
      </div>

      {/* Mission Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
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

      <Footer />
    </div>
  );
}
