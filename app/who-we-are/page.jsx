"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutPage() {
  return (

    <div>
      <Nav />
    <main className="w-full">
      {/* HERO stays exactly as you had it */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757099538/image_vss3js.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Who We Are
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
            At <span className="font-semibold text-green-400">Green Plant Energy</span>, 
            we are more than a fuel supplier — we are a trusted partner in energy delivery.  
            Our mission is to provide reliable, transparent, and sustainable energy solutions 
            that keep Nigeria moving forward.
          </p>
        </div>
      </section>

      {/* SECTION 1 – Our Journey */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
          ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white px-6 py-20 lg:px-16"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a mission to simplify fuel access has grown into a 
                company trusted by homes, businesses, and industries nationwide.  
                From day one, we’ve focused on delivering diesel that’s always on time, 
                competitively priced, and backed by professional service.
              </p>
            </div>
          </motion.section>
        )}
      </InView>

      {/* SECTION 2 – Our Promises */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-50 px-6 py-20 lg:px-16"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
                Our Promises
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                  <span className="text-4xl">⛽</span>
                  <h3 className="text-xl font-semibold text-green-700 mt-4 mb-2">
                    Dependability
                  </h3>
                  <p className="text-gray-600">
                    Diesel when and where you need it — no delays, no excuses.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                  <span className="text-4xl">🤝</span>
                  <h3 className="text-xl font-semibold text-green-700 mt-4 mb-2">
                    Customer First
                  </h3>
                  <p className="text-gray-600">
                    Every delivery is centered around you, ensuring stress-free energy supply.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                  <span className="text-4xl">🌍</span>
                  <h3 className="text-xl font-semibold text-green-700 mt-4 mb-2">
                    Sustainability
                  </h3>
                  <p className="text-gray-600">
                    We power today responsibly while preparing for a cleaner tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </InView>

      {/* SECTION 3 – How We Deliver */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
          ref={ref}
          variants={fadeUp}
          initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white px-6 py-20 lg:px-16"
          >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  How We Deliver
                </h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>✔️ Nationwide coverage</li>
                  <li>✔️ Fast & reliable logistics</li>
                  <li>✔️ 24/7 customer support</li>
                  <li>✔️ Transparent pricing</li>
                </ul>
              </div>
              <div>
                <Image
                  src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757100164/image2_tptx9r.png"
                  alt="Fuel delivery truck"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full object-cover"
                  />
              </div>
            </div>
          </motion.section>
        )}
      </InView>

      {/* SECTION 4 – Looking Ahead */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.section
          ref={ref}
          variants={fadeUp}
          initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-900 text-white px-6 py-20 lg:px-16"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Looking Ahead
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                As we expand, our focus is shifting toward cleaner energy solutions.  
                We remain committed to powering growth responsibly — creating a balance 
                between today’s energy demands and tomorrow’s sustainability.
              </p>
            </div>
          </motion.section>
        )}
      </InView>
    </main>

    <Footer />
        </div>
  );
}
