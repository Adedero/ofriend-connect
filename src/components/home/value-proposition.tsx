import { data } from "@/content/pages/home";
import SectionTag from "../global/section-tag";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function ValueProposition() {
  return (
    <section>
      <header className="flex flex-col justify-center items-center gap-y-3 px-5">
        <SectionTag label={data.valueProposition.title} />
      </header>

      <div className="flex flex-col items-center space-y-12 mt-5 px-5">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-3 mt-5 w-full lg:max-w-[80%]">
          <h2 className="lg:min-w-120 max-w-lg font-semibold text-3xl lg:text-left text-center text-balance">
            {data.valueProposition.headline}
          </h2>

          <p className="max-w-lg text-muted-foreground text-center lg:text-right text-balance">
            {data.valueProposition.description}
          </p>
        </div>

        <div className="gap-10 grid lg:grid-cols-12 w-full lg:max-w-[80%]">
          <div className="relative lg:order-2 lg:col-span-8 h-80">
            <div className="-top-5 right-5 z-1 absolute bg-electric p-3 text-medium text-white text-sm">
              {data.valueProposition.image.label}
            </div>
            <Image
              src={data.valueProposition.image.src}
              alt={data.valueProposition.image.alt}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="lg:order-1 lg:col-span-4">
            <ul className="gap-y-4 grid">
              {data.valueProposition.values.map((value) => (
                <li key={value.title}>
                  <div className="flex items-start gap-2">
                    <div className="text-electric">
                      <BadgeCheck />
                    </div>
                    <div>
                      <h3>{value.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
