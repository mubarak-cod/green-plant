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
        phone="+2347039978994"            
        welcome="Hi! I’m your assistant 🤖 — how can I help today?"
        ctaText="Chat on WhatsApp"
        presetText="Hello! I’d like to speak with support."
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
