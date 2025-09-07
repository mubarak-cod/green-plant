"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  const formRef = useRef(null);
  const formEl = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xtqiioc", 
        "template_wd6h4pn", 
        formEl.current,
        "0w1FNBE-7Na5EeBz3" 
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("✅ Order sent successfully! We’ll get back shortly.");
          formEl.current.reset();
          setTimeout(() => setSuccess(""), 4000);
        },
        (error) => {
          setLoading(false);
          setSuccess("❌ Failed to send. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section
          className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dgznrfgvc/image/upload/v1757201837/image_tup5lr.png')",
          }}
        >
          <div className="bg-black/50 absolute inset-0"></div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-2xl px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Green Plant Energy Oil and Gas Limited ⛽
            </h1>
            <p className="mb-6 text-lg leading-relaxed">
              We specialize in clean, safe, and quality diesel delivery across Lagos. 
              Whether it’s for your home, estate, hotel, hospital, or event, we’ve got you covered.
            </p>
            <button
              onClick={scrollToForm}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition"
            >
              Place Your Order Now
            </button>
          </motion.div>
        </section>

        {/* Form Section */}
        <section
          ref={formRef}
          className="py-16 px-4 bg-gradient-to-b from-green-50 to-white"
        >
          <div className="max-w-2xl mx-auto shadow-xl rounded-2xl p-8 bg-white transition hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Place Your Order
            </h2>

            <form ref={formEl} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity (Liters)"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Preferred Delivery Time
                </label>
                <input
                  type="date"
                  name="delivery_time"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
              >
                {loading ? "Sending..." : "Submit Order"}
              </button>
            </form>

            {success && (
              <p className="mt-4 text-center text-green-700 font-medium">
                {success}
              </p>
            )}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+2348127144292?text=Hello%20I%20want%20today's%20pricing"
              target="_blank"
              className="mt-6 block text-center w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
            >
              Request Today’s Pricing 💬
            </a>
          </div>
        </section>

        {/* Info Section */}
        <section className="max-w-3xl mx-auto px-4 py-12 text-gray-700 space-y-4">
          <h3 className="text-xl font-bold">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Delivery 🚚 is not free and varies by location and quantity. At least
              24 hours' notice for scheduling and dispatch.
            </li>
            <li>
              Payment validates your order—we only confirm delivery after payment
              is received.
            </li>
            <li>🚫 No cash allowed. ✅ Bank Transfers only.</li>
            <li>‼ No refunds will be issued for deliveries that have already been made.</li>
            <li>
              Diesel deliveries will be made according to the scheduled date and
              time agreed upon by both parties.
            </li>
            <li>
              Any delays or changes in the schedule must be communicated and
              agreed upon at least 24 hours in advance.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
