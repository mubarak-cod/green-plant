"use client";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import Image from "next/image";

export default function TermsOfUse() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <div className="relative h-[80vh] w-full">
          <Image
            src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757901083/terms_i6eive.jpg"
            alt="Green Plant Energy"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Terms of Use
            </h1>
          </div>
        </div>


        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-12 leading-relaxed">
          {/* Intro */}
          <p className="text-lg text-gray-700 md:text-xl text-center">
            Welcome to <span className="font-semibold text-green-600">Green Plant Energy</span>.
            By accessing or using our website, services, and diesel delivery platform,
            you agree to comply with these Terms of Use.
          </p>

          {/* Services */}
          <section className="space-y-4 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Our Services
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Green Plant Energy is a Nigerian energy solutions provider focused on
              seamless diesel supply, distribution, and logistics. We deliver fuel
              to homes, offices, industries, and organizations reliably, guided by
              professionalism, integrity, and efficiency.
            </p>
          </section>

          {/* Customer Commitment */}
          <section className="space-y-4 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Customer Commitment
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We ensure prompt diesel delivery where it matters most. Clients are
              expected to provide accurate delivery details and ensure safe
              facilities for storage. Every order is confirmed with transparent
              pricing and supported with responsive customer service.
            </p>
          </section>

          {/* Dependability */}
          <section className="space-y-4 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Dependability
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              While our logistics network is designed to minimize disruption,
              delays may occur due to external circumstances. We remain committed
              to transparency, safety, and reliability in every delivery.
            </p>
          </section>

          {/* Sustainability */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Sustainability in Diesel Supply
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              While our core service is reliable diesel delivery, we are committed to
              responsible practices that reduce waste, ensure safe handling, and
              optimize logistics for efficiency. Green Plant Energy continues to invest
              in modern delivery methods that meet today’s fuel needs while preparing
              for a cleaner energy future in Nigeria.
            </p>
          </section>

        </div>

      </div>
      <Footer />
    </div>
  );
}
