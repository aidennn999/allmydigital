// components/services/Process.tsx
"use client";

import {motion} from "framer-motion";
import {
 HiChatBubbleBottomCenterText,
 HiLightBulb,
 HiComputerDesktop,
 HiEye,
 HiRocketLaunch,
} from "react-icons/hi2";

const processSteps = [
 {
  icon: <HiChatBubbleBottomCenterText className="text-2xl" />,
  title: "Konsultasi",
  description:
   "Diskusikan kebutuhan dan ide Anda dengan tim kami secara gratis",
  duration: "1-2 Hari",
 },
 {
  icon: <HiLightBulb className="text-2xl" />,
  title: "Perencanaan",
  description: "Kami membuat rancangan dan proposal berdasarkan kebutuhan Anda",
  duration: "2-3 Hari",
 },
 {
  icon: <HiComputerDesktop className="text-2xl" />,
  title: "Development",
  description: "Tim kami mengerjakan proyek Anda dengan teknologi terbaru",
  duration: "5-10 Hari",
 },
 {
  icon: <HiEye className="text-2xl" />,
  title: "Review & Revisi",
  description: "Anda mereview hasil kerja kami dan memberikan masukan",
  duration: "2-3 Hari",
 },
 {
  icon: <HiRocketLaunch className="text-2xl" />,
  title: "Launch",
  description: "Proyek diluncurkan dan siap digunakan",
  duration: "1 Hari",
 },
];

export default function Process() {
 return (
  <section className="mb-16">
   <motion.div
    className="text-center mb-12"
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.5}}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
     Proses Kerja Kami
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
     Langkah-langkah yang kami lakukan untuk mewujudkan website impian Anda
    </p>
   </motion.div>

   <div className="relative">
    {/* Timeline connector */}
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 hidden md:block"></div>

    <div className="space-y-12 md:space-y-0">
     {processSteps.map((step, index) => (
      <motion.div
       key={index}
       className={`flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
       }`}
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: index * 0.1}}>
       {/* Content */}
       <div
        className={`md:w-1/2 ${
         index % 2 === 0 ? "md:pl-8" : "md:pr-8"
        } mb-4 md:mb-0`}>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
         <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mr-4">
           {step.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
         </div>
         <p className="text-gray-600 mb-3">{step.description}</p>
         <div className="text-sm text-cyan-600 font-medium">
          Durasi: {step.duration}
         </div>
        </div>
       </div>

       {/* Timeline dot */}
       <div className="flex items-center justify-center md:w-4 h-4 relative">
        <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10"></div>
       </div>

       {/* Step number */}
       <div className="md:w-1/2 flex items-center justify-center md:justify-start md:pl-8">
        <div className="text-5xl font-bold text-gray-300 opacity-50">
         {index + 1}
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
