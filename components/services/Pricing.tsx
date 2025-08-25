// components/services/Pricing.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import { HiCheck, } from 'react-icons/hi2';

const pricingPlans = [
  {
    name: "Basic",
    description: "Cocok untuk undangan digital sederhana",
    price: "499K",
    features: [
      "Desain undangan digital",
      "1 revisi desain",
      "Form RSVP dasar",
      "Domain gratis (subdomain)",
      "Masa aktif 3 bulan"
    ],
    notIncluded: [
      "Custom domain",
      "Fitur premium",
      "Support prioritas"
    ],
    popular: false,
    href: "/contact"
  },
  {
    name: "Professional",
    description: "Pilihan terbaik untuk kebutuhan profesional",
    price: "899K",
    features: [
      "Desain premium undangan digital",
      "3 revisi desain",
      "RSVP dengan manajemen tamu",
      "Custom domain",
      "Foto gallery",
      "Maps integration",
      "Masa aktif 6 bulan",
      "Support 24/7"
    ],
    notIncluded: [
      "Fitur kustom khusus"
    ],
    popular: true,
    href: "/contact"
  },
  {
    name: "Enterprise",
    description: "Solusi lengkap untuk kebutuhan khusus",
    price: "1.499K",
    features: [
      "Desain eksklusif & interaktif",
      "Revisi tanpa batas",
      "RSVP lengkap dengan konfirmasi",
      "Custom domain & hosting",
      "Unlimited gallery",
      "Live streaming integration",
      "Gift registry",
      "Masa aktif 1 tahun",
      "Support prioritas",
      "Fitur kustom sesuai kebutuhan"
    ],
    notIncluded: [],
    popular: false,
    href: "/contact"
  }
];

export default function Pricing() {
  return (
    <section className="py-12 bg-gray-50 rounded-xl mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Harga</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-8 ${
                plan.popular 
                  ? 'bg-white border-2 border-cyan-500 shadow-xl transform scale-105' 
                  : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Populer
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">Rp {plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <HiCheck className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <HiX className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={plan.href}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                Pilih Paket
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            Butuh paket khusus atau penyesuaian?
          </p>
          <Link 
            href="/contact" 
            className="text-cyan-500 font-semibold hover:text-cyan-600 inline-flex items-center"
          >
            Hubungi kami untuk konsultasi
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}