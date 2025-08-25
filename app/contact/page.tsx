// app/contact/page.tsx
"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane} from "react-icons/hi2";

export default function ContactPage() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
 });

 const handleChange = (
  e: React.ChangeEvent<
   HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
 ) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission here
  console.log("Form submitted:", formData);
  alert(
   "Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera."
  );
 };

 return (
  <div className="pt-24 pb-16">
   <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
     <motion.h1
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}>
      Hubungi Kami
     </motion.h1>
     <motion.p
      className="text-xl text-gray-600"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.1}}>
      Sampaikan kebutuhan Anda dan kami akan membantu mewujudkannya
     </motion.p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     {/* Contact Form */}
     <motion.div
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
      <form
       onSubmit={handleSubmit}
       className="space-y-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
         <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2">
          Nama Lengkap
         </label>
         <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
         />
        </div>
        <div>
         <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2">
          Email
         </label>
         <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
         />
        </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
         <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2">
          Nomor Telepon
         </label>
         <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
         />
        </div>
        <div>
         <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-2">
          Layanan yang Diminati
         </label>
         <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
          <option value="">Pilih Layanan</option>
          <option value="digital-invitation">Undangan Digital</option>
          <option value="portfolio">Website Portofolio</option>
          <option value="graphic-design">Desain Grafis</option>
          <option value="custom-development">Development Khusus</option>
         </select>
        </div>
       </div>

       <div>
        <label
         htmlFor="message"
         className="block text-sm font-medium text-gray-700 mb-2">
         Pesan
        </label>
        <textarea
         id="message"
         name="message"
         value={formData.message}
         onChange={handleChange}
         required
         rows={5}
         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"></textarea>
       </div>

       <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
        Kirim Pesan
        <HiPaperAirplane className="w-5 h-5 ml-2" />
       </button>
      </form>
     </motion.div>

     {/* Contact Information */}
     <motion.div
      className="space-y-8"
      initial={{opacity: 0, x: 20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}>
      <div>
       <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Informasi Kontak
       </h2>
       <p className="text-gray-600 mb-6">
        Jangan ragu untuk menghubungi kami melalui informasi di bawah ini. Tim
        support kami siap membantu Anda.
       </p>
      </div>

      <div className="space-y-6">
       <div className="flex items-start">
        <div className="bg-cyan-100 p-3 rounded-lg mr-4">
         <HiEnvelope className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
         <h3 className="font-semibold text-gray-900">Email</h3>
         <p className="text-gray-600">hello@digitalinvite.com</p>
         <p className="text-gray-600">support@digitalinvite.com</p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="bg-cyan-100 p-3 rounded-lg mr-4">
         <HiPhone className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
         <h3 className="font-semibold text-gray-900">Telepon</h3>
         <p className="text-gray-600">+62 812 3456 7890 (WhatsApp)</p>
         <p className="text-gray-600">+62 21 1234 5678 (Office)</p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="bg-cyan-100 p-3 rounded-lg mr-4">
         <HiMapPin className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
         <h3 className="font-semibold text-gray-900">Alamat</h3>
         <p className="text-gray-600">
          Jl. Digital No. 123
          <br />
          Jakarta Selatan, 12345
          <br />
          Indonesia
         </p>
        </div>
       </div>
      </div>

      {/* Business Hours */}
      <div className="bg-gray-50 rounded-xl p-6">
       <h3 className="font-semibold text-gray-900 mb-4">Jam Operasional</h3>
       <div className="space-y-2">
        <div className="flex justify-between">
         <span className="text-gray-600">Senin - Jumat</span>
         <span className="text-gray-900 font-medium">09:00 - 18:00</span>
        </div>
        <div className="flex justify-between">
         <span className="text-gray-600">Sabtu</span>
         <span className="text-gray-900 font-medium">10:00 - 16:00</span>
        </div>
        <div className="flex justify-between">
         <span className="text-gray-600">Minggu</span>
         <span className="text-gray-900 font-medium">Tutup</span>
        </div>
       </div>
      </div>

      {/* Social Media */}
      <div>
       <h3 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
       <div className="flex space-x-4">
        <a
         href="#"
         className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-cyan-100 hover:text-cyan-600 transition-colors">
         <span className="sr-only">Facebook</span>
         <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
         </svg>
        </a>
        <a
         href="#"
         className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-cyan-100 hover:text-cyan-600 transition-colors">
         <span className="sr-only">Instagram</span>
         <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.986 11.988 11.986s11.987-5.366 11.987-11.986C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.7 13.679 3.7 12.316s.498-2.579 1.426-3.375c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.796 1.426 2.012 1.426 3.375s-.498 2.579-1.426 3.375c-.875.807-2.026 1.297-3.323 1.297zm8.062-6.245c0 .677-.118 1.331-.332 1.941a5.346 5.346 0 01-.947 1.705 5.355 5.355 0 01-1.53 1.213c-.625.332-1.331.546-2.07.546s-1.445-.214-2.07-.546a5.396 5.396 0 01-1.53-1.213 5.387 5.387 0 01-.947-1.705c-.214-.61-.332-1.264-.332-1.941s.118-1.331.332-1.941c.214-.61.498-1.163.947-1.705a5.365 5.365 0 011.53-1.213c.625-.332 1.331-.546 2.07-.546s1.445.214 2.07.546a5.396 5.396 0 011.53 1.213c.449.542.733 1.095.947 1.705.214.61.332 1.264.332 1.941z" />
         </svg>
        </a>
        <a
         href="#"
         className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-cyan-100 hover:text-cyan-600 transition-colors">
         <span className="sr-only">Twitter</span>
         <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
         </svg>
        </a>
       </div>
      </div>
     </motion.div>
    </div>
   </div>
  </div>
 );
}
