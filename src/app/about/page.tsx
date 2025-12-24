import AboutHeader from "@/components/about/header";
import MeetTheTeam from "@/components/about/meet-the-team";
import WhatDrivesUs from "@/components/about/what-drives-us";
import WhoWeAre from "@/components/about/who-we-are";
import CTA from "@/components/global/cta";
import Testimonials from "@/components/global/testimonials";

export default function About() {
  return (
    <div>
      <AboutHeader />
      <WhoWeAre />
      <WhatDrivesUs />
      <MeetTheTeam />
      <Testimonials />
      <div className="py-16">
        <CTA />
      </div>
    </div>
  );
}
