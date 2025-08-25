// components/layout/Footer.tsx
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {
 HiEnvelope,
 HiPhone,
 HiMapPin,
 HiGlobeAlt,
 HiHeart,
} from "react-icons/hi2";

const footerLinks = {
 services: [
  {name: "Undangan Digital", href: "/services/digital-invitation"},
  {name: "Website Portofolio", href: "/services/portfolio"},
  {name: "Desain Grafis", href: "/services/graphic-design"},
  {name: "Website Company Profile", href: "/services/company-profile"},
 ],
 company: [
  {name: "Tentang Kami", href: "/about"},
  {name: "Portofolio", href: "/portfolio"},
  {name: "Testimonial", href: "/testimonials"},
  {name: "Blog", href: "/blog"},
 ],
 support: [
  {name: "Kontak", href: "/contact"},
  {name: "FAQ", href: "/faq"},
  {name: "Syarat & Ketentuan", href: "/terms"},
  {name: "Kebijakan Privasi", href: "/privacy"},
 ],
};

export default function Footer() {
 return (
  <footer className="bg-gray-900 text-white">
   <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
     {/* Brand Section */}
     <div className="lg:col-span-2">
      <Link
       href="/"
       className="flex items-center space-x-2 mb-6">
       <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">DI</span>
       </div>
       <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        DigitalInvite
       </span>
      </Link>
      <p className="text-gray-400 mb-6 max-w-md">
       Menyediakan jasa pembuatan undangan digital, website portofolio, dan
       layanan digital kreatif lainnya dengan desain modern dan elegan.
      </p>
      <div className="flex space-x-4">
       <a
        href="#"
        className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-600 transition-colors">
        <FiFacebook className="w-5 h-5" />
       </a>
       <a
        href="#"
        className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-600 transition-colors">
        <FiInstagram className="w-5 h-5" />
       </a>
       <a
        href="#"
        className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-600 transition-colors">
        <FiTwitter className="w-5 h-5" />
       </a>
      </div>
     </div>

     {/* Services Links */}
     <div>
      <h3 className="font-semibold text-lg mb-6">Layanan</h3>
      <ul className="space-y-3">
       {footerLinks.services.map((link) => (
        <li key={link.name}>
         <Link
          href={link.href}
          className="text-gray-400 hover:text-cyan-400 transition-colors">
          {link.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Company Links */}
     <div>
      <h3 className="font-semibold text-lg mb-6">Perusahaan</h3>
      <ul className="space-y-3">
       {footerLinks.company.map((link) => (
        <li key={link.name}>
         <Link
          href={link.href}
          className="text-gray-400 hover:text-cyan-400 transition-colors">
          {link.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Support Links */}
     <div>
      <h3 className="font-semibold text-lg mb-6">Dukungan</h3>
      <ul className="space-y-3">
       {footerLinks.support.map((link) => (
        <li key={link.name}>
         <Link
          href={link.href}
          className="text-gray-400 hover:text-cyan-400 transition-colors">
          {link.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>
    </div>

    {/* Contact Info */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
     <div className="flex items-center space-x-3">
      <div className="p-2 bg-cyan-600 rounded-lg">
       <HiEnvelope className="w-5 h-5" />
      </div>
      <div>
       <p className="text-gray-400 text-sm">Email</p>
       <p className="font-medium">hello@digitalinvite.com</p>
      </div>
     </div>
     <div className="flex items-center space-x-3">
      <div className="p-2 bg-cyan-600 rounded-lg">
       <HiPhone className="w-5 h-5" />
      </div>
      <div>
       <p className="text-gray-400 text-sm">Telepon</p>
       <p className="font-medium">+62 812 3456 7890</p>
      </div>
     </div>
     <div className="flex items-center space-x-3">
      <div className="p-2 bg-cyan-600 rounded-lg">
       <HiMapPin className="w-5 h-5" />
      </div>
      <div>
       <p className="text-gray-400 text-sm">Lokasi</p>
       <p className="font-medium">Jakarta, Indonesia</p>
      </div>
     </div>
    </div>

    {/* Bottom Footer */}
    <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
     <p className="text-gray-400 text-sm flex items-center">
      © {new Date().getFullYear()} DigitalInvite. Made with{" "}
      <HiHeart className="text-red-500 mx-1" /> in Indonesia
     </p>
     <div className="flex items-center space-x-2 mt-4 md:mt-0">
      <HiGlobeAlt className="w-4 h-4 text-gray-400" />
      <span className="text-gray-400 text-sm">Indonesia</span>
     </div>
    </div>
   </div>
  </footer>
 );
}
