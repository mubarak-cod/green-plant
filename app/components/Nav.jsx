"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Current route

  const navLinks = [
    { href: "/place-an-order", label: "Place an order" },
    { href: "/who-we-are", label: "About us" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/services", label: "Our Services" },
    { href: "/how-it-works", label: "How It Works" },
  ];

  return (
    <div>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo + RC number */}
            <div className="flex items-center flex-shrink-0 space-x-3">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757026514/greenlogoo_tuab4h.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  style={{ objectFit: "contain" }}
                  priority
                  quality={80}
                />
              </Link>
              <span className="text-xs text-gray-500">Rc : 8731821</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden [@media(min-width:1180px)]:flex flex-1 justify-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-black text-sm group"
                >
                  {link.label}
                  {/* underline effect only on desktop */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden [@media(min-width:1180px)]:flex items-center">
              <Link
                href="/contact"
                className="flex items-center bg-green-900 text-white px-5 py-2 rounded-none text-sm font-semibold hover:bg-green-800 transition"
              >
                CONTACT US
                <ChevronRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="[@media(min-width:1180px)]:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="[@media(min-width:1180px)]:hidden bg-white shadow-md"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col text-left">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-black text-base font-medium hover:text-green-600 transition`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Contact Button in Mobile */}
              <Link
                href="/contact"
                className="flex items-center justify-center bg-green-900 text-white px-5 py-2 text-sm font-semibold hover:bg-green-800 transition"
              >
                CONTACT US <ChevronRight className="ml-2" size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Page;
