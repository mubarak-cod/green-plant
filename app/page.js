import Image from "next/image";
import { Suspense } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeroSlider from "./components/Hero";
import ChatWidget from "./ChatWidget";
import Welcome from "./components/Welcome";
import WhatWeDo from "./components/WhatWeDo";
import { WorldMapDemo } from "./components/WorldMapDemo";
import Loader from "./components/Loader";
import CounterSection from "./components/CounterSection";
import SmartMapSection from "./components/Map-Section";


export default function Home() {
  return (
    <div>

      <Nav />
      <Suspense fallback={<Loader />}>

        <HeroSlider />
      </Suspense>
      <ChatWidget
        phone="+2348127144292"
        welcome="👋 Welcome to Green Plant Energy! We're here to keep your business and home powered."
        ctaText="Chat with Us on WhatsApp"
        presetText="Hello Green Plant Energy team, I’d like to make an enquiry about your diesel supply and energy solutions."
      />

      <Welcome />
      <WhatWeDo />
      <SmartMapSection />
      {/* <WorldMapDemo /> */}
      <CounterSection />
      <Footer />
    </div>
  );
}
