// app/about/page.tsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {HiGlobe} from "react-icons/hi";
import {HiUsers, HiBriefcase, HiHeart} from "react-icons/hi2";

const stats = [
 {
  icon: <HiUsers className="text-3xl" />,
  number: "150+",
  label: "Klien Bahagia",
 },
 {
  icon: <HiBriefcase className="text-3xl" />,
  number: "240+",
  label: "Proyek Selesai",
 },
 {
  icon: <HiHeart className="text-3xl" />,
  number: "98%",
  label: "Kepuasan Klien",
 },
 {
  icon: <HiGlobe className="text-3xl" />,
  number: "3",
  label: "Tahun Pengalaman",
 },
];

const team = [
 {
  name: "Ahmad Rizki",
  role: "Founder & Fullstack Developer",
  image: "/api/placeholder/300/300",
  bio: "Berpengalaman lebih dari 5 tahun dalam pengembangan web dan digital solution.",
 },
 {
  name: "Sarah Wijaya",
  role: "UI/UX Designer",
  image: "/api/placeholder/300/300",
  bio: "Spesialis desain interface yang fokus pada user experience dan visual storytelling.",
 },
 {
  name: "Budi Santoso",
  role: "Frontend Developer",
  image: "/api/placeholder/300/300",
  bio: "Ahli dalam React, Next.js, dan framework modern untuk membuat website yang cepat dan responsive.",
 },
 {
  name: "Diana Putri",
  role: "Graphic Designer",
  image: "/api/placeholder/300/300",
  bio: "Menciptakan desain visual yang memukau untuk brand identity dan marketing materials.",
 },
];

export default function AboutPage() {
 return (
  <div className="pt-24 pb-16">
   <div className="container mx-auto px-4">
    {/* Hero Section */}
    <div className="text-center max-w-3xl mx-auto mb-16">
     <motion.h1
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}>
      Tentang DigitalInvite
     </motion.h1>
     <motion.p
      className="text-xl text-gray-600"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.1}}>
      Kami adalah tim kreatif yang berdedikasi untuk menciptakan pengalaman
      digital yang memukau dan bermakna bagi setiap klien.
     </motion.p>
    </div>

    {/* Story Section */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
     <motion.div
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
      <div className="space-y-4 text-gray-700">
       <p>
        DigitalInvite didirikan pada tahun 2020 dengan visi untuk
        mentransformasi cara orang berbagi momen spesial melalui undangan
        digital yang elegan dan interaktif.
       </p>
       <p>
        Seiring berjalannya waktu, kami berkembang tidak hanya menyediakan
        layanan undangan digital, tetapi juga website portofolio, desain grafis,
        dan solusi digital lainnya.
       </p>
       <p>
        Hingga saat ini, kami telah membantu ratusan klien dari berbagai latar
        belakang mewujudkan visi digital mereka dengan hasil yang memuaskan.
       </p>
      </div>
     </motion.div>
     <motion.div
      className="relative h-80 rounded-xl overflow-hidden"
      initial={{opacity: 0, x: 20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      <Image
       src="/api/placeholder/600/400"
       alt="Tim DigitalInvite"
       fill
       className="object-cover"
      />
     </motion.div>
    </section>

    {/* Stats Section */}
    <section className="bg-gray-50 rounded-xl p-8 mb-16">
     <motion.h2
      className="text-3xl font-bold text-center text-gray-900 mb-12"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      Dalam Angka
     </motion.h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
       <motion.div
        key={index}
        className="text-center"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: index * 0.1}}>
        <div className="text-cyan-500 mb-4 flex justify-center">
         {stat.icon}
        </div>
        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
         {stat.number}
        </div>
        <div className="text-gray-600">{stat.label}</div>
       </motion.div>
      ))}
     </div>
    </section>

    {/* Team Section */}
    <section className="mb-16">
     <motion.h2
      className="text-3xl font-bold text-center text-gray-900 mb-12"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      Tim Kami
     </motion.h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
       <motion.div
        key={index}
        className="text-center bg-white p-6 rounded-xl shadow-md border border-gray-100"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: index * 0.1}}>
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
         <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
         />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
         {member.name}
        </h3>
        <p className="text-cyan-600 mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
       </motion.div>
      ))}
     </div>
    </section>

    {/* Values Section */}
    <section className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 text-white mb-16">
     <motion.h2
      className="text-3xl font-bold text-center mb-12"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      Nilai Kami
     </motion.h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
       className="text-center p-6 bg-white/10 rounded-lg"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: 0.1}}>
       <h3 className="text-xl font-semibold mb-4">Kreativitas</h3>
       <p>
        Selalu berinovasi dan menciptakan solusi yang fresh dan original untuk
        setiap proyek.
       </p>
      </motion.div>
      <motion.div
       className="text-center p-6 bg-white/10 rounded-lg"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: 0.2}}>
       <h3 className="text-xl font-semibold mb-4">Kualitas</h3>
       <p>
        Tidak pernah kompromi dengan kualitas, dari desain hingga kode yang
        clean dan maintainable.
       </p>
      </motion.div>
      <motion.div
       className="text-center p-6 bg-white/10 rounded-lg"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.5, delay: 0.3}}>
       <h3 className="text-xl font-semibold mb-4">Kepuasan Klien</h3>
       <p>
        Prioritas utama adalah membuat klien bahagia dengan hasil kerja yang
        melebihi ekspektasi.
       </p>
      </motion.div>
     </div>
    </section>

    {/* CTA Section */}
    <motion.section
     className="text-center"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     viewport={{once: true}}
     transition={{duration: 0.5}}>
     <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Tertarik Bekerja Sama?
     </h2>
     <p className="text-xl text-gray-600 mb-8">
      Mari wujudkan ide digital Anda bersama tim profesional kami
     </p>
     <a
      href="/contact"
      className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center">
      Hubungi Kami
     </a>
    </motion.section>
   </div>
  </div>
 );
}
