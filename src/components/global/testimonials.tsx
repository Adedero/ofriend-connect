import { data } from "@/content/pages/home";
import SectionTag from "../global/section-tag";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="space-y-12 bg-muted py-10">
      <header className="flex flex-col justify-center items-center gap-y-3 px-5">
        <SectionTag label={data.testimonials.title} inverted />

        <h2 className="max-w-lg font-semibold text-3xl text-center text-balance">
          {data.testimonials.headline}
        </h2>

        <p className="max-w-lg text-muted-foreground text-center text-balance">
          {data.testimonials.description}
        </p>
      </header>

      <div className="mt-20 px-5 lg:px-20 xl:px-40">
        <ul className="gap-4 grid md:grid-cols-3">
          {data.testimonials.testimonialList.map((user) => (
            <li key={user.name}>
              <div className="bg-background px-4 py-8 rounded-lg">
                <header className="flex justify-between items-start gap-4">
                  <div className="relative rounded-full size-12 overflow-hidden">
                    <img
                      src={user.imageUrl}
                      alt={user.name}
                      className="object-cover absolute w-full h-full"
                    />
                  </div>

                  <div className="text-electric">
                    <Quote />
                  </div>
                </header>

                <div className="space-y-1 mt-3">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-muted-foreground text-sm">{user.quote}</p>
                  <p className="mt-2 font-medium text-xs">{user.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
