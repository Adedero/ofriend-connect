import Testimonials from "@/components/global/testimonials";
import IndustriesHeader from "./header";
import CTA from "@/components/global/cta";
import Industries from "./industries";

export default function IndustriesPage() {
  return (
    <div>
      <IndustriesHeader />
      <Industries />
      <Testimonials />
      <div className="py-16">
        <CTA />
      </div>
    </div>
  );
}
