import Testimonials from "@/components/global/testimonials";
import PresioHeader from "./header";
import CTA from "@/components/global/cta";

export default function PresioPage() {
  return (
    <div className="mt-14">
      <PresioHeader />
      <Testimonials />
      <div className="py-16">
        <CTA />
      </div>
    </div>
  );
}
