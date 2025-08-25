// components/portfolio/PortfolioGrid.tsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
 id: number;
 title: string;
 category: string;
 image: string;
 description: string;
 tags: string[];
 link: string;
}

const portfolioItems: PortfolioItem[] = [
 {
  id: 1,
  title: "Undangan Pernikahan Digital",
  category: "digital-invitation",
  image: "/api/placeholder/600/400",
  description:
   "Undangan pernikahan elegan dengan animasi floral dan RSVP terintegrasi.",
  tags: ["React", "Next.js", "Tailwind CSS", "Animation"],
  link: "/portfolio/wedding-invitation",
 },
 {
  id: 2,
  title: "Portofolio Fotografer",
  category: "portfolio",
  image: "/api/placeholder/600/400",
  description:
   "Website portofolio untuk fotografer profesional dengan gallery yang memukau.",
  tags: ["Next.js", "TypeScript", "Framer Motion", "GSAP"],
  link: "/portfolio/photographer-website",
 },
 {
  id: 3,
  title: "Website Personal Branding",
  category: "portfolio",
  image: "/api/placeholder/600/400",
  description:
   "Website personal branding untuk influencer dengan integrasi media sosial.",
  tags: ["React", "Styled Components", "Social API", "Responsive"],
  link: "/portfolio/personal-branding",
 },
 {
  id: 4,
  title: "Undangan Khitanan Digital",
  category: "digital-invitation",
  image: "/api/placeholder/600/400",
  description:
   "Undangan khitanan yang colorful dan interaktif dengan countdown timer.",
  tags: ["Vue.js", "CSS3", "Interactive", "Countdown"],
  link: "/portfolio/khitanan-invitation",
 },
 {
  id: 5,
  title: "Company Profile Startup",
  category: "custom-development",
  image: "/api/placeholder/600/400",
  description:
   "Website company profile untuk startup teknologi dengan fitur lengkap.",
  tags: ["Next.js", "Tailwind", "CMS", "SEO"],
  link: "/portfolio/startup-website",
 },
 {
  id: 6,
  title: "Brand Identity Package",
  category: "graphic-design",
  image: "/api/placeholder/600/400",
  description:
   "Paket lengkap identitas merek termasuk logo, warna, dan tipografi.",
  tags: ["Logo Design", "Branding", "Typography", "Style Guide"],
  link: "/portfolio/brand-identity",
 },
];

interface PortfolioGridProps {
 filter: string;
}

export default function PortfolioGrid({filter}: PortfolioGridProps) {
 const filteredItems =
  filter === "all"
   ? portfolioItems
   : portfolioItems.filter((item) => item.category === filter);

 if (filteredItems.length === 0) {
  return (
   <div className="text-center py-12">
    <p className="text-gray-500">
     Tidak ada proyek yang ditemukan untuk kategori ini.
    </p>
   </div>
  );
 }

 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   {filteredItems.map((item, index) => (
    <motion.div
     key={item.id}
     className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5, delay: index * 0.1}}
     whileHover={{y: -5}}>
     <div className="h-64 relative overflow-hidden">
      <Image
       src={item.image}
       alt={item.title}
       fill
       className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
       <Link
        href={item.link}
        className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        Lihat Detail
       </Link>
      </div>
     </div>
     <div className="p-6">
      <span className="text-sm text-cyan-500 font-medium capitalize">
       {item.category.replace("-", " ")}
      </span>
      <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
       {item.title}
      </h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <div className="flex flex-wrap gap-2">
       {item.tags.map((tag, i) => (
        <span
         key={i}
         className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
         {tag}
        </span>
       ))}
      </div>
     </div>
    </motion.div>
   ))}
  </div>
 );
}
