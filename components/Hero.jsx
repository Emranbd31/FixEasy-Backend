import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const backgrounds = [
    "/images/plumber.jpg",
    "/images/electrician.jpg",
    "/images/cleaner.jpg",
    "/images/painter.jpg"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[75vh] flex flex-col justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={backgrounds[index]}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">FixEasy Ireland</h1>
        <p className="text-lg mb-6">Real local pros. Upfront pricing. Book in minutes.</p>
        <a
          href="/book"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition"
        >
          Book a Service
        </a>
      </div>
    </div>
  );
}
