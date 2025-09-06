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
          phone="+2347039978994"
          welcome="Hi! I’m your assistant 🤖 — how can I help today?"
          ctaText="Chat on WhatsApp"
          presetText="Hello! I’d like to speak with support."
        />

        
      </body>
    </html>
  );
}
