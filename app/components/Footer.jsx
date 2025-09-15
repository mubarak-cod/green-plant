import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1757026514/greenlogoo_tuab4h.png"
            alt="Logo"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
            priority
          />
          <p className="text-gray-300 text-sm">
            Green Plant Energy is a registered Nigerian energy solutions
            provider, focused on seamless diesel supply and distribution.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Green Plant Energy. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Oil and Gas</li>
            <li>Diesel Delivery</li>
            <li>Bulk Supply</li>
            <li>Energy Logistics</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Oil Products</li>
            <li>Diesel Delivery</li>
            <li>Container Tracking</li>
          </ul>
        </div>

        {/* Quick Links (Extra Tabs/Pages) */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {/* <li>
              <Link href="/who-we-are" className="hover:text-green-500 transition">
                About Us
              </Link>
            </li> */}
            <li>
              <Link
                href="/who-we-are"
                className="hover:text-green-500 transition"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="hover:text-green-500 transition"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="hover:text-green-500 transition"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-green-500 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-2">
            Phone: +2348127144292, +2348127144292.
          </p>
          <p className="text-gray-300 text-sm">
            Email:{" "}
            <a
              href="mailto:greenplantenergyservices@gmail.com"
              className="hover:text-green-500 transition"
            >
              greenplantenergyservices@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
