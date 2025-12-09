import AboutUs from "@/components/home/about-us";
import CTA from "@/components/global/cta";
import Hero from "@/components/home/hero";
import Industries from "@/components/home/industries";
import Partners from "@/components/home/partners";
import Products from "@/components/home/products";
import Testimonials from "@/components/global/testimonials";
import ValueProposition from "@/components/home/value-proposition";

export default function Home() {
  return (
    <div className="space-y-20 mb-20">
      <Hero />
      <Partners />
      <Products />
      <ValueProposition />
      <Industries />
      <AboutUs />
      <Testimonials />
      <CTA />
    </div>
  );
}
