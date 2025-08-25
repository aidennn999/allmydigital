// components/Header.tsx
"use client";

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {HiComputerDesktop, HiEnvelope, HiPhoto} from "react-icons/hi2";
import {HiMenu, HiX} from "react-icons/hi";

const navigation = [
 {name: "Beranda", href: "/"},
 {
  name: "Layanan",
  href: "/services",
  children: [
   {
    name: "Undangan Digital",
    href: "/services/digital-invitation",
    icon: <HiEnvelope className="w-5 h-5" />,
   },
   {
    name: "Website Portofolio",
    href: "/services/portfolio",
    icon: <HiComputerDesktop className="w-5 h-5" />,
   },
   {
    name: "Desain Grafis",
    href: "/services/graphic-design",
    icon: <HiPhoto className="w-5 h-5" />,
   },
  ],
 },
 {name: "Portofolio", href: "/portfolio"},
 {name: "Tentang Kami", href: "/about"},
 {name: "Kontak", href: "/contact"},
];

export default function Header() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
 const pathname = usePathname();

 return (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
   <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <Link
     href="/"
     className="flex items-center space-x-2">
     <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-xl">DI</span>
     </div>
     <span className="font-bold text-2xl bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
      DigitalInvite
     </span>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center space-x-1">
     {navigation.map((item) => (
      <div
       key={item.name}
       className="relative py-2 px-3">
       {item.children ? (
        <>
         <div
          className="flex items-center space-x-1 cursor-pointer group"
          onMouseEnter={() => setServicesMenuOpen(true)}
          onMouseLeave={() => setServicesMenuOpen(false)}>
          <Link
           href={item.href}
           className={`font-medium transition-colors hover:text-cyan-600 ${
            pathname === item.href ? "text-cyan-600" : "text-gray-700"
           }`}>
           {item.name}
          </Link>
          <svg
           className="w-4 h-4 transition-transform group-hover:rotate-180"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24">
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
           />
          </svg>
         </div>

         {/* Services Dropdown */}
         {servicesMenuOpen && (
          <div
           className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
           onMouseEnter={() => setServicesMenuOpen(true)}
           onMouseLeave={() => setServicesMenuOpen(false)}>
           {item.children.map((child) => (
            <Link
             key={child.name}
             href={child.href}
             className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors">
             <span className="text-cyan-500">{child.icon}</span>
             <span>{child.name}</span>
            </Link>
           ))}
          </div>
         )}
        </>
       ) : (
        <Link
         href={item.href}
         className={`font-medium transition-colors hover:text-cyan-600 ${
          pathname === item.href ? "text-cyan-600" : "text-gray-700"
         }`}>
         {item.name}
        </Link>
       )}
      </div>
     ))}
    </div>

    {/* CTA Button */}
    <div className="hidden lg:block">
     <Link
      href="/contact"
      className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
      Konsultasi Gratis
     </Link>
    </div>

    {/* Mobile menu button */}
    <button
     className="lg:hidden p-2 rounded-md text-gray-700"
     onClick={() => setMobileMenuOpen(true)}>
     <HiMenu className="w-6 h-6" />
    </button>
   </nav>

   {/* Mobile Navigation */}
   {mobileMenuOpen && (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">
     <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center mb-8">
       <Link
        href="/"
        className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
         <span className="text-white font-bold text-xl">DI</span>
        </div>
        <span className="font-bold text-2xl bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
         DigitalInvite
        </span>
       </Link>
       <button
        className="p-2 rounded-md text-gray-700"
        onClick={() => setMobileMenuOpen(false)}>
        <HiX className="w-6 h-6" />
       </button>
      </div>

      <div className="flex flex-col space-y-6">
       {navigation.map((item) => (
        <div key={item.name}>
         {item.children ? (
          <details className="group">
           <summary className="flex justify-between items-center py-2 text-gray-700 font-medium cursor-pointer">
            <span>{item.name}</span>
            <svg
             className="w-4 h-4 group-open:rotate-180 transition-transform"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24">
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
             />
            </svg>
           </summary>
           <div className="pl-4 mt-2 space-y-4">
            {item.children.map((child) => (
             <Link
              key={child.name}
              href={child.href}
              className="flex items-center space-x-3 py-2 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="text-cyan-500">{child.icon}</span>
              <span>{child.name}</span>
             </Link>
            ))}
           </div>
          </details>
         ) : (
          <Link
           href={item.href}
           className="block py-2 text-gray-700 font-medium"
           onClick={() => setMobileMenuOpen(false)}>
           {item.name}
          </Link>
         )}
        </div>
       ))}

       <Link
        href="/contact"
        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg mt-4"
        onClick={() => setMobileMenuOpen(false)}>
        Konsultasi Gratis
       </Link>
      </div>
     </div>
    </div>
   )}
  </header>
 );
}
