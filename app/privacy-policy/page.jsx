"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <div className="relative h-[80vh] w-full">
          <Image
            src="https://res.cloudinary.com/dgznrfgvc/image/upload/v1757901083/terms_i6eive.jpg"
            alt="Green Plant Energy Privacy"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Privacy Policy
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-12 leading-relaxed">
          {/* Intro */}
          <p className="text-lg text-gray-700 md:text-xl text-center">
            At <span className="font-semibold text-green-600">Green Plant Energy</span>,
            we respect your privacy and are committed to protecting your information.
            This Privacy Policy explains how we handle customer and operational data
            in line with our values of professionalism, integrity, and efficiency.
          </p>

          {/* Information We Handle */}
          <section className="space-y-4 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Information We Handle
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We collect only information necessary for seamless diesel supply:
              order details, delivery addresses, contact information, and client
              support records. This allows us to provide timely and reliable services
              across homes, offices, and industries.
            </p>
          </section>

          {/* Use of Information */}
          <section className="space-y-4 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Use of Information
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Customer information is used strictly for order confirmation, delivery
              planning, transparent pricing, and dependable logistics. Every client
              matters, and every delivery counts — our data handling reflects that commitment.
            </p>
          </section>

          {/* Customer-Centricity */}
          <section className="space-y-4 border-b border-gray-200 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Customer-Centricity
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We do not sell or misuse client information. Data shared with logistics
              partners is solely for the purpose of safe and on-time delivery. Our focus
              remains on trust, transparency, and efficiency at every stage of our operations.
            </p>
          </section>

          {/* Sustainability & Trust */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Sustainability & Trust
              <span className="block h-1 w-16 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              As we invest in cleaner energy futures, we also invest in protecting
              customer data. Green Plant Energy’s operations — from order placement to
              support — are aligned with accountability and respect for privacy.
            </p>
          </section>
        </div>

      </div>
      <Footer />
    </div>
  );
}
