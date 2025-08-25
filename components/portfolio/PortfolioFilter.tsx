// components/portfolio/PortfolioFilter.tsx
"use client";

import {motion} from "framer-motion";

const filters = [
 {id: "all", name: "Semua"},
 {id: "digital-invitation", name: "Undangan Digital"},
 {id: "portfolio", name: "Website Portofolio"},
 {id: "graphic-design", name: "Desain Grafis"},
 {id: "custom-development", name: "Development Khusus"},
];

interface PortfolioFilterProps {
 activeFilter: string;
 setActiveFilter: (filter: string) => void;
}

export default function PortfolioFilter({
 activeFilter,
 setActiveFilter,
}: PortfolioFilterProps) {
 return (
  <motion.div
   className="flex flex-wrap justify-center gap-4 mb-12"
   initial={{opacity: 0, y: 20}}
   whileInView={{opacity: 1, y: 0}}
   viewport={{once: true}}
   transition={{duration: 0.5}}>
   {filters.map((filter) => (
    <button
     key={filter.id}
     onClick={() => setActiveFilter(filter.id)}
     className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      activeFilter === filter.id
       ? "bg-cyan-500 text-white shadow-md"
       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
     }`}>
     {filter.name}
    </button>
   ))}
  </motion.div>
 );
}
