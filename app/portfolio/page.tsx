// app/portfolio/page.tsx
"use client";

import {useState} from "react";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
 const [activeFilter, setActiveFilter] = useState("all");

 return (
  <div className="pt-24 pb-16">
   <div className="container mx-auto px-4">
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto mb-12">
     <h1 className="text-4xl md:text-5xl font-bold mb-6">Portofolio Kami</h1>
     <p className="text-xl text-gray-600">
      Jelajahi karya terbaru kami yang telah membantu klien menciptakan
      pengalaman digital yang memukau.
     </p>
    </div>

    <PortfolioFilter
     activeFilter={activeFilter}
     setActiveFilter={setActiveFilter}
    />
    <PortfolioGrid filter={activeFilter} />
   </div>
  </div>
 );
}
