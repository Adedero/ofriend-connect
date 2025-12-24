import { data } from "@/content/pages/home";
import SectionTag from "../global/section-tag";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Industries() {
  return (
    <section className="space-y-12 bg-muted py-10">
      <header className="flex flex-col justify-center items-center gap-y-3 px-5">
        <SectionTag label={data.industries.title} inverted />

        <h2 className="max-w-lg font-semibold text-3xl text-center text-balance">
          {data.industries.headline}
        </h2>

        <p className="max-w-lg text-muted-foreground text-center text-balance">
          {data.industries.description}
        </p>

        <Button size="lg" className="w-40">
          Strip
        </Button>
      </header>

      <div className="mt-16 px-5 lg:px-20">
        <ul className="gap-4 grid md:grid-cols-2 lg:grid-cols-4">
          {data.industries.industryList.map((industry) => (
            <li key={industry.name}>
              <div className="group space-y-2 bg-background p-2 rounded-xl">
                <div className="relative rounded-lg w-full h-60 overflow-hidden">
                  <Image
                    src={industry.imageUrl}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                  <div className="overflow-hidden min-h-0 space-y-2 flex flex-col items-center justify-center">
                    <p className="text-center">{industry.description}</p>
                    <Button asChild className="w-full">
                      <Link href={industry.href}>
                        More
                      </Link>
                    </Button>
                    <Separator className="mt-2" />
                  </div>
                </div>

                <div className="p-2">
                  <p className="font-medium text-center">{industry.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
