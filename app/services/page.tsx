// app/services/page.tsx
import ServicesOverview from "@/components/services/ServicesOverview";
import Pricing from "@/components/services/Pricing";
import Process from "@/components/services/Process";

export default function ServicesPage() {
 return (
  <div className="pt-24 pb-16">
   <div className="container mx-auto px-4">
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto mb-16">
     <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
     <p className="text-xl text-gray-600">
      Kami menawarkan berbagai layanan digital kreatif untuk membantu Anda
      menciptakan pengalaman online yang memukau.
     </p>
    </div>

    <ServicesOverview />
    <Pricing />
    <Process />
   </div>
  </div>
 );
}
