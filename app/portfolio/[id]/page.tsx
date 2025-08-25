// app/portfolio/[id]/page.tsx
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {HiArrowLeft, HiExternalLink} from "react-icons/hi";

// This would typically come from a database or CMS
const portfolioItems = [
 {
  id: "wedding-invitation",
  title: "Undangan Pernikahan Digital",
  category: "digital-invitation",
  image: "/api/placeholder/800/500",
  description:
   "Undangan pernikahan elegan dengan animasi floral dan RSVP terintegrasi.",
  fullDescription:
   "Sebuah undangan pernikahan digital yang dibuat dengan teknologi modern untuk pasangan yang menginginkan pengalaman undangan yang unik dan memorable. Fitur termasuk RSVP terintegrasi, gallery foto, countdown timer, dan lokasi interaktif.",
  technologies: [
   "React",
   "Next.js",
   "Tailwind CSS",
   "Framer Motion",
   "Node.js",
  ],
  features: [
   "Design Responsif",
   "RSVP System",
   "Photo Gallery",
   "Countdown Timer",
   "Google Maps Integration",
   "Guest Management",
  ],
  client: "Sarah & Budi",
  date: "Januari 2023",
  liveUrl: "https://wedding-sarah-budi.digitalinvite.com",
  images: [
   "/api/placeholder/800/500",
   "/api/placeholder/800/500",
   "/api/placeholder/800/500",
  ],
 },
 // Add other portfolio items here...
];

interface PortfolioDetailPageProps {
 params: {
  id: string;
 };
}

export default function PortfolioDetailPage({
 params,
}: PortfolioDetailPageProps) {
 const item = portfolioItems.find((item) => item.id === params.id);

 if (!item) {
  notFound();
 }

 return (
  <div className="pt-24 pb-16">
   <div className="container mx-auto px-4">
    {/* Back Button */}
    <Link
     href="/portfolio"
     className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-8">
     <HiArrowLeft className="w-5 h-5 mr-2" />
     Kembali ke Portofolio
    </Link>

    {/* Header */}
    <div className="mb-12">
     <span className="text-sm text-cyan-500 font-medium capitalize">
      {item.category.replace("-", " ")}
     </span>
     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
      {item.title}
     </h1>
     <p className="text-xl text-gray-600">{item.description}</p>
    </div>

    {/* Main Image */}
    <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-12">
     <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover"
     />
    </div>

    {/* Project Details */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
     <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tentang Proyek</h2>
      <p className="text-gray-700 mb-8">{item.fullDescription}</p>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">Fitur Utama</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
       {item.features.map((feature, index) => (
        <li
         key={index}
         className="flex items-start">
         <svg
          className="w-5 h-5 text-cyan-500 mt-0.5 mr-2 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
           fillRule="evenodd"
           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
           clipRule="evenodd"
          />
         </svg>
         <span>{feature}</span>
        </li>
       ))}
      </ul>

      {/* Additional Images */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
       Galeri Proyek
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {item.images.map((image, index) => (
        <div
         key={index}
         className="relative h-64 rounded-lg overflow-hidden">
         <Image
          src={image}
          alt={`${item.title} ${index + 1}`}
          fill
          className="object-cover"
         />
        </div>
       ))}
      </div>
     </div>

     <div>
      <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
       <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Detail Proyek
       </h3>

       <div className="space-y-6">
        <div>
         <h4 className="text-sm font-medium text-gray-500 mb-2">Klien</h4>
         <p className="text-gray-900">{item.client}</p>
        </div>

        <div>
         <h4 className="text-sm font-medium text-gray-500 mb-2">Tanggal</h4>
         <p className="text-gray-900">{item.date}</p>
        </div>

        <div>
         <h4 className="text-sm font-medium text-gray-500 mb-2">Kategori</h4>
         <p className="text-gray-900 capitalize">
          {item.category.replace("-", " ")}
         </p>
        </div>

        <div>
         <h4 className="text-sm font-medium text-gray-500 mb-2">Teknologi</h4>
         <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, index) => (
           <span
            key={index}
            className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">
            {tech}
           </span>
          ))}
         </div>
        </div>

        {item.liveUrl && (
         <div>
          <a
           href={item.liveUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
           Lihat Proyek Live
           <HiExternalLink className="w-4 h-4 ml-1" />
          </a>
         </div>
        )}
       </div>
      </div>
     </div>
    </div>

    {/* Call to Action */}
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 text-center text-white mt-16">
     <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Tertarik dengan Proyek Seperti Ini?
     </h2>
     <p className="text-lg mb-6">
      Jadikan ide Anda menjadi kenyataan dengan layanan profesional kami
     </p>
     <Link
      href="/contact"
      className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
      Konsultasi Gratis
     </Link>
    </div>
   </div>
  </div>
 );
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
 return portfolioItems.map((item) => ({
  id: item.id,
 }));
}
