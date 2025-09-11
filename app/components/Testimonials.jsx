"use client";
import { motion } from "framer-motion";

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
    <section className="relative py-20 bg-gradient-to-br from-[#228B22] via-[#00A86B] to-gray-900 text-white overflow-hidden">
      {/* Decorative overlay circles */}
      <span className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></span>
      <span className="absolute bottom-10 right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></span>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-12 text-white drop-shadow-lg"
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
              className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
