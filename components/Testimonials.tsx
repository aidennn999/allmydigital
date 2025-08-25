// components/Testimonials.tsx
"use client";

import {motion} from "framer-motion";

const testimonials = [
 {
  id: 1,
  name: "Sarah & Budi",
  role: "Pengantin",
  content:
   "Undangan digital kami sangat memukau! Semua tamu terkagum-kagum dengan animasi dan kemudahan RSVP. Terima kasih telah membuat hari spesial kami semakin berkesan.",
  avatar: "/api/placeholder/60/60",
 },
 {
  id: 2,
  name: "Ahmad Rizki",
  role: "Fotografer Professional",
  content:
   "Website portofolio yang dibuat sangat profesional dan membantu saya mendapatkan lebih banyak klien. Desainnya elegan dan mudah untuk di-update.",
  avatar: "/api/placeholder/60/60",
 },
 {
  id: 3,
  name: "Diana Putri",
  role: "Content Creator",
  content:
   "Layanan desain grafisnya sangat memuaskan! Hasilnya sesuai dengan ekspektasi dan proses pengerjaannya cepat. Recommended banget!",
  avatar: "/api/placeholder/60/60",
 },
];

export default function Testimonials() {
 return (
  <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
   <div className="max-w-7xl mx-auto">
    <motion.div
     className="text-center mb-16"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5}}>
     <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Apa Kata Klien Kami?
     </h2>
     <p className="text-xl text-purple-200 max-w-3xl mx-auto">
      Kepuasan klien adalah prioritas utama kami. Berikut adalah testimonial
      dari mereka yang telah menggunakan layanan kami.
     </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {testimonials.map((testimonial, index) => (
      <motion.div
       key={testimonial.id}
       className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: index * 0.1}}>
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
         <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-full h-full object-cover"
         />
        </div>
        <div>
         <h3 className="font-semibold">{testimonial.name}</h3>
         <p className="text-purple-200 text-sm">{testimonial.role}</p>
        </div>
       </div>
       <p className="text-gray-100">"{testimonial.content}"</p>
       <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
         <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
        ))}
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
