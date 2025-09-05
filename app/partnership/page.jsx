"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Handshake, Users, Globe2 } from "lucide-react";


export default function Partnership() {
    return (
        <div className="bg-white text-gray-900">
            <Nav />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <Image
                    src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757051690/image_qeg2av.png"
                    alt="Partnership Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative text-center z-10 px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                        Partnership Opportunities
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Collaborate with us to drive innovation, expand reach, and create
                        meaningful impact globally.
                    </p>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Partner With Us
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
                    >
                        <Handshake className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mutual Growth</h3>
                        <p className="text-gray-600">
                            We create partnerships that foster shared success and long-term
                            value for all stakeholders.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
                    >
                        <Users className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Strong Network</h3>
                        <p className="text-gray-600">
                            Gain access to our diverse network of industry leaders, innovators,
                            and global partners.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
                    >
                        <Globe2 className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                        <p className="text-gray-600">
                            Expand your presence and impact through collaborations that span
                            across continents.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Types */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Types of Partnerships
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-3">Strategic Alliances</h3>
                            <p className="text-gray-600">
                                Collaborate on shared initiatives to leverage strengths and
                                achieve mutual goals.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-3">Innovation Partners</h3>
                            <p className="text-gray-600">
                                Work with us to co-create and deploy innovative solutions that
                                drive transformation.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                            <p className="text-gray-600">
                                Join us in initiatives focused on sustainability, education, and
                                community development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="relative py-20">
                <Image
                    src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757023971/image_ejemmn.png"
                    alt="CTA Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-700/80" />
                <div className="relative max-w-3xl mx-auto text-center text-white px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Build a Partnership?
                    </h2>
                    <p className="mb-6 text-lg">
                        Let’s create impactful collaborations that shape the future. Get in
                        touch with us today.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-6 py-3 bg-white text-emerald-700 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </motion.a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
