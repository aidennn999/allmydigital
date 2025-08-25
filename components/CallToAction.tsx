// components/CallToAction.tsx
"use client";

import {motion} from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
 return (
  <section className="py-20 px-4 bg-gray-900 text-white">
   <div className="max-w-4xl mx-auto text-center">
    <motion.h2
     className="text-4xl md:text-5xl font-bold mb-6"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5}}>
     Siap Mewujudkan Ide Anda?
    </motion.h2>
    <motion.p
     className="text-xl text-gray-300 mb-10"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5, delay: 0.1}}>
     Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran khusus
     untuk proyek Anda.
    </motion.p>
    <motion.div
     className="flex flex-col sm:flex-row gap-4 justify-center"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5, delay: 0.2}}>
     <Link
      href="/contact"
      className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
      Konsultasi Gratis
     </Link>
     <Link
      href="/portfolio"
      className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-all duration-300">
      Lihat Portofolio Lengkap
     </Link>
    </motion.div>
   </div>
  </section>
 );
}
