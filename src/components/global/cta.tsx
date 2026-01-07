import { data } from "@/content/components/cta";

import CTAForm from "./cta-form";

export default function CTA() {
  return (
    <section className="flex justify-center px-5">
      <div className="overflow-hidden relative bg-electric rounded-2xl w-full lg:max-w-[80%] h-80">
        <div className="top-10 left-5 md:left-10 z-2 absolute space-y-3 pr-5 md:max-w-[60%] lg:max-w-96">
          <h3 className="font-bold text-white text-4xl">{data.headline}</h3>
          <p className="text-white">{data.description}</p>

          <div className="mt-10">
            <CTAForm />
          </div>
        </div>
        <img
          src="/img/home/person-1.png"
          alt=""
          className="hidden md:block right-0 bottom-0 z-1 absolute object-cover h-full"
        />
        <img
          src="/img/home/abstract-decor-1.png"
          alt=""
          className="right-10 absolute object-cover w-full h-full"
        />
        <img
          src="/img/home/abstract-decor-1.png"
          alt=""
          className="right-0 bottom-0 rotate-180 absolute object-cover w-full h-full"
        />
        <div className="w-full h-ful"></div>
      </div>
    </section>
  );
}
