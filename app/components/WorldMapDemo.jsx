"use client";
import { WorldMap } from "../ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
    return (
        <div className="py-35 dark:bg-black bg-white w-full mb-12">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    Capabilities-Driven Strategy +{" "}
                    <span className="text-neutral-400">
                        {"Growth".split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ y: -50, opacity: 0, rotate: -45, scale: 0.5 }}
                                animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 12,
                                    delay: idx * 0.2, // slower + more obvious
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    A company's right to win in any market depends not just on external
                    market positioning and not just on internal capabilities, but on a
                    coherent strategy that aligns these factors at every level.
                </p>
            </div>
            <WorldMap
                dots={[
                    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Alaska → LA
                    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Alaska → Brazil
                    { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } }, // Brazil → Lisbon
                    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } }, // London → Delhi
                    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } }, // Delhi → Vladivostok
                    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } }, // Delhi → Nairobi
                ]}
            />
        </div>
    );
}
