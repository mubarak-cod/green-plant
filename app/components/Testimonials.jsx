"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Adewale Johnson",
    role: "Factory Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Green Plant Energy has been a game changer. Diesel delivery is always on time, and the quality is unmatched.",
  },
  {
    name: "Ngozi Okafor",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Their service is reliable, professional, and affordable. I no longer worry about power interruptions in my business.",
  },
  {
    name: "Ibrahim Musa",
    role: "Logistics Director",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "We get diesel exactly when we need it. Green Plant Energy keeps our trucks and operations running smoothly.",
  },
  {
    name: "Chioma Eze",
    role: "Hospital Administrator",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "In healthcare, constant power is critical. Green Plant Energy delivers fast and helps us focus on saving lives.",
  },
  {
    name: "Tunde Akin",
    role: "Tech Startup CEO",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Sustainable, reliable, and efficient energy solutions. They understand what businesses truly need.",
  },
  {
    name: "Amara Umeh",
    role: "Hotel Owner",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "Guests expect comfort 24/7. With Green Plant Energy, we never have to worry about power failures again.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full mb-4 object-cover"
              /> */}
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
