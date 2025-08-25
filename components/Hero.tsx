// components/Hero.tsx
"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useState, useEffect} from "react";

export default function Hero() {
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
  setIsClient(true);
 }, []);

 // Data untuk circles (dibuat konsisten antara server dan client)
 const circlesData = [
  {width: 150, height: 150, top: 20, left: 30},
  {width: 200, height: 100, top: 15, left: 80},
  {width: 80, height: 240, top: 70, left: 95},
  {width: 180, height: 140, top: 15, left: 35},
  {width: 190, height: 120, top: 70, left: 90},
 ];

 return (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
   <div className="absolute inset-0 bg-black opacity-40"></div>

   {/* Animated background elements */}
   {isClient && (
    <div className="absolute top-0 left-0 w-full h-full">
     {circlesData.map((circle, i) => (
      <motion.div
       key={i}
       className="absolute rounded-full bg-white opacity-10"
       style={{
        width: circle.width,
        height: circle.height,
        top: `${circle.top}%`,
        left: `${circle.left}%`,
       }}
       animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
       }}
       transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "easeInOut",
       }}
      />
     ))}
    </div>
   )}

   <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <motion.h1
     className="text-5xl md:text-7xl font-bold mb-6"
     initial={{opacity: 0, y: 20}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8}}>
     Ubah Acara Anda Menjadi Pengalaman Digital yang{" "}
     <span className="text-cyan-400">Tak Terlupakan</span>
    </motion.h1>

    <motion.p
     className="text-xl md:text-2xl mb-10 text-gray-200"
     initial={{opacity: 0, y: 20}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8, delay: 0.2}}>
     Kami menciptakan undangan digital dan website portofolio yang elegan,
     interaktif, dan sesuai dengan gaya Anda.
    </motion.p>

    <motion.div
     initial={{opacity: 0, y: 20}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8, delay: 0.4}}
     className="flex flex-col sm:flex-row gap-4 justify-center">
     <Link
      href="/services"
      className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
      Jelajahi Layanan
     </Link>
     <Link
      href="/portfolio"
      className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-semibold rounded-lg transition-all duration-300">
      Lihat Portofolio
     </Link>
    </motion.div>
   </div>

   <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <motion.div
     animate={{y: [0, 10, 0]}}
     transition={{duration: 1.5, repeat: Infinity}}>
     <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
     </svg>
    </motion.div>
   </div>
  </section>
 );
}
