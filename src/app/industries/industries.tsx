import { Separator } from "@/components/ui/separator";
import { data } from "@/content/pages/industries";

export default function Industries() {
  return (
    <section className="px-5 lg:px-10 py-20 space-y-10">
      <header className="text-center">
        <h2 className="text-center font-semibold text-2xl">
          {data.industries.headline}
        </h2>
      </header>

      <div className="space-y-20 mx-auto max-w-6xl">
        {data.industries.items.map((item, index) => (
          <div key={item.label} id={item.id}>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-20">
              <div
                className={`space-y-3 ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.label}
                </h3>
                <Separator />
                <p className="">{item.description}</p>
              </div>

              <div
                className={`bg-muted rounded-lg overflow-hidden min-h-60 ${index % 2 === 1 ? "md:order-1" : ""}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
