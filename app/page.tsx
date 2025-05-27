// app/page.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import MenuScreen from "@/components/MenuScreen";
import SecondScreen from "@/components/SecondScreen";

const screens = [
  { id: 1, Component: SplashScreen },
  { id: 2, Component: SecondScreen },
  { id: 3, Component: MenuScreen },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const lastScrollY = useRef(0);

  const handleWheel = (e: WheelEvent) => {
    const direction = e.deltaY;

    if (direction < 0) {
      // Scroll up → go to next screen
      console.log("🟢 Scroll Up Detected - transitioning to next screen");
      setIndex((prev) => (prev + 1) % screens.length);
    } else if (direction > 0) {
      // Scroll down → go to previous screen
      console.log("🔴 Scroll Down Detected - transitioning to previous screen");
      setIndex((prev) => (prev - 1 + screens.length) % screens.length);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const { Component } = screens[index];

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <AnimatePresence mode="sync">
        <motion.div
          key={screens[index].id}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-screen w-screen flex text-white text-5xl font-bold"
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}