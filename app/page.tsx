// app/page.tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioShowcase from "@/components/PortofolioShowcase";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
 return (
  <main className="min-h-screen">
   <Hero />
   <Services />
   <PortfolioShowcase />
   <Testimonials />
   <CallToAction />
  </main>
 );
}
