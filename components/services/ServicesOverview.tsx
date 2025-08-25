// components/services/ServicesOverview.tsx
"use client";

import {motion} from "framer-motion";
import {
 MdDesignServices,
 MdWeb,
 MdPalette,
 MdRocketLaunch,
 MdSupportAgent,
 MdSpeed,
 MdDevices,
 MdSecurity,
} from "react-icons/md";
import Link from "next/link";

const services = [
 {
  icon: <MdDesignServices className="text-4xl" />,
  title: "Undangan Digital",
  description:
   "Desain undangan digital interaktif yang dapat disesuaikan dengan tema acara Anda, dilengkapi dengan RSVP dan fitur manajemen tamu.",
  features: ["Responsif", "Interaktif", "Custom Domain", "RSVP System"],
  href: "/services/digital-invitation",
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
  href: "/services/portfolio",
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
  href: "/services/graphic-design",
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
  href: "/services/custom-development",
 },
];

const features = [
 {
  icon: <MdSpeed className="text-2xl" />,
  title: "Cepat & Responsif",
  description:
   "Website yang dioptimalkan untuk kecepatan loading dan tampilan sempurna di semua perangkat.",
 },
 {
  icon: <MdDevices className="text-2xl" />,
  title: "Mobile-Friendly",
  description:
   "Desain yang responsif dan bekerja dengan baik di smartphone, tablet, dan desktop.",
 },
 {
  icon: <MdSecurity className="text-2xl" />,
  title: "Aman & Terpercaya",
  description:
   "Keamanan data menjadi prioritas kami dengan implementasi protokol keamanan terbaru.",
 },
 {
  icon: <MdSupportAgent className="text-2xl" />,
  title: "Dukungan Penuh",
  description:
   "Tim support siap membantu Anda kapan saja dengan respon yang cepat dan solusi tepat.",
 },
];

export default function ServicesOverview() {
 return (
  <div className="mb-20">
   {/* Services Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
      <ul className="space-y-2 mb-6">
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
      <Link
       href={service.href}
       className="text-cyan-500 font-medium hover:text-cyan-600 transition-colors inline-flex items-center">
       Pelajari lebih lanjut
       <svg
        className="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M9 5l7 7-7 7"
        />
       </svg>
      </Link>
     </motion.div>
    ))}
   </div>

   {/* Features Section */}
   <motion.div
    className="text-center mb-12"
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.5}}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
     Mengapa Memilih Kami?
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
     Keunggulan layanan kami yang membuat pengalaman digital Anda menjadi lebih
     baik
    </p>
   </motion.div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {features.map((feature, index) => (
     <motion.div
      key={index}
      className="text-center p-6 bg-gray-50 rounded-lg"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5, delay: index * 0.1}}>
      <div className="text-cyan-500 mb-4 flex justify-center">
       {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
       {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
     </motion.div>
    ))}
   </div>
  </div>
 );
}
