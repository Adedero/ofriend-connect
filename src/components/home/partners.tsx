import { data } from "@/content/pages/home";
import SectionTag from "../global/section-tag";
import { Separator } from "../ui/separator";

export default function Partners() {
  return (
    <section>
      <header className="flex flex-col justify-center items-center gap-y-3 px-5">
        <SectionTag label={data.partners.title} />

        <h2 className="max-w-lg font-semibold text-3xl text-center text-balance">
          {data.partners.headline}
        </h2>

        <p className="max-w-lg text-muted-foreground text-center text-balance">
          {data.partners.description}
        </p>
      </header>

      <div className="py-10">
        <PartnerLogos />
      </div>
    </section>
  );
}

function PartnerLogos() {
  return (
    <div>
      <Separator />
      <div className="grid grid-cols-12">
        <div className="flex justify-end col-span-2">
          <Separator orientation="vertical" />
        </div>

        <div className="grid md:grid-cols-3 col-span-8 divide-x divide-y divide-muted-background">
          {data.partners.logos.map((logo) => (
            <div
              key={logo}
              className="flex-center px-5 py-10 font-bold text-muted-foreground hover:text-foreground cursor-context-menu"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="col-span-2">
          <Separator orientation="vertical" />
        </div>
      </div>
      <Separator />
    </div>
  );
}
