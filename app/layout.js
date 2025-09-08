import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ChatWidget from "./ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Green Plant Energy",
  description: "Reliable diesel supply and energy solutions in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        

        {/* Main content */}
        <main>{children}</main>

        {/* Chat widget (always visible) */}
        <ChatWidget
              phone="+2348127144292"
              welcome="👋 Welcome to Green Plant Energy! We're here to keep your business and home powered."
              ctaText="Chat with Us on WhatsApp"
              presetText="Hello Green Plant Energy solutions, I’d like to make an enquiry about your diesel supply and energy solutions."
            />
        
      </body>
    </html>
  );
}
