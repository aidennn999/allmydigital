// components/Services.tsx
"use client";

import {motion} from "framer-motion";
import {
 MdDesignServices,
 MdWeb,
 MdPalette,
 MdRocketLaunch,
} from "react-icons/md";

const services = [
 {
  icon: <MdDesignServices className="text-4xl" />,
  title: "Undangan Digital",
  description:
   "Desain undangan digital interaktif yang dapat disesuaikan dengan tema acara Anda, dilengkapi dengan RSVP dan fitur manajemen tamu.",
  features: ["Responsif", "Interaktif", "Custom Domain", "RSVP System"],
 },
 {
  icon: <MdWeb className="text-4xl" />,
  title: "Website Portofolio",
  description:
   "Website portofolio profesional yang menampilkan karya Anda dengan elegan dan meningkatkan personal branding.",
  features: [
   "Modern Design",
   "SEO Friendly",
   "Fast Performance",
   "Easy to Update",
  ],
 },
 {
  icon: <MdPalette className="text-4xl" />,
  title: "Desain Grafis",
  description:
   "Layanan desain grafis untuk kebutuhan branding, sosial media, dan materi promosi lainnya.",
  features: [
   "Brand Identity",
   "Social Media Kit",
   "Print Design",
   "Illustration",
  ],
 },
 {
  icon: <MdRocketLaunch className="text-4xl" />,
  title: "Development Khusus",
  description:
   "Pengembangan website dan aplikasi khusus sesuai kebutuhan bisnis dan personal Anda.",
  features: [
   "Custom Functionality",
   "Database Integration",
   "API Development",
   "Maintenance",
  ],
 },
];

export default function Services() {
 return (
  <section className="py-20 px-4 bg-gray-50">
   <div className="max-w-7xl mx-auto">
    <motion.div
     className="text-center mb-16"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5}}>
     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Layanan Kami
     </h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Memberikan solusi digital kreatif untuk membuat momen spesial Anda semakin
      berkesan
     </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {services.map((service, index) => (
      <motion.div
       key={index}
       className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: index * 0.1}}
       whileHover={{y: -5}}>
       <div className="text-cyan-500 mb-4">{service.icon}</div>
       <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
       </h3>
       <p className="text-gray-600 mb-4">{service.description}</p>
       <ul className="space-y-2">
        {service.features.map((feature, i) => (
         <li
          key={i}
          className="flex items-center text-gray-600">
          <svg
           className="w-4 h-4 text-cyan-500 mr-2"
           fill="currentColor"
           viewBox="0 0 20 20">
           <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
           />
          </svg>
          {feature}
         </li>
        ))}
       </ul>
       <button className="mt-6 text-cyan-500 font-medium hover:text-cyan-600 transition-colors">
        Pelajari lebih lanjut →
       </button>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
