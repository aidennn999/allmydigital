// components/PortfolioShowcase.tsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const projects = [
 {
  id: 1,
  title: "Undangan Pernikahan Digital",
  category: "Undangan Digital",
  image: "/api/placeholder/400/300",
  description:
   "Undangan pernikahan elegan dengan animasi floral dan RSVP terintegrasi.",
 },
 {
  id: 2,
  title: "Portofolio Fotografer",
  category: "Website Portofolio",
  image: "/api/placeholder/400/300",
  description:
   "Website portofolio untuk fotografer profesional dengan gallery yang memukau.",
 },
 {
  id: 3,
  title: "Website Personal Branding",
  category: "Website Portofolio",
  image: "/api/placeholder/400/300",
  description:
   "Website personal branding untuk influencer dengan integrasi media sosial.",
 },
 {
  id: 4,
  title: "Undangan Khitanan Digital",
  category: "Undangan Digital",
  image: "/api/placeholder/400/300",
  description:
   "Undangan khitanan yang colorful dan interaktif dengan countdown timer.",
 },
];

export default function PortfolioShowcase() {
 return (
  <section className="py-20 px-4 bg-white">
   <div className="max-w-7xl mx-auto">
    <motion.div
     className="text-center mb-16"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5}}>
     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Portofolio Kami
     </h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Lihat karya terbaru kami yang telah membantu klien menciptakan pengalaman
      digital yang memukau
     </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     {projects.map((project, index) => (
      <motion.div
       key={project.id}
       className="group relative overflow-hidden rounded-xl shadow-lg"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: index * 0.1}}>
       <div className="h-64 relative overflow-hidden">
        <Image
         src={project.image}
         alt={project.title}
         fill
         className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg">
          Lihat Detail
         </button>
        </div>
       </div>
       <div className="p-6">
        <span className="text-sm text-cyan-500 font-medium">
         {project.category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mt-2">
         {project.title}
        </h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
       </div>
      </motion.div>
     ))}
    </div>

    <motion.div
     className="text-center mt-12"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5, delay: 0.4}}>
     <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300">
      Lihat Semua Portofolio
     </button>
    </motion.div>
   </div>
  </section>
 );
}
