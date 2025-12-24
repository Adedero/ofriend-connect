import { data } from "@/content/pages/home";
import SectionTag from "../global/section-tag";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { StarIcon } from "lucide-react";

export default function Products() {
  const featured = data.products.productList.find(
    (product) => product.featured,
  );

  return (
    <section className="space-y-12 bg-muted py-10">
      <header className="flex flex-col justify-center items-center gap-y-3 px-5">
        <SectionTag label={data.products.title} inverted />

        <h2 className="max-w-lg font-semibold text-3xl text-center text-balance">
          {data.products.headline}
        </h2>

        <p className="max-w-lg text-muted-foreground text-center text-balance">
          {data.products.description}
        </p>
      </header>

      {featured && (
        <div className="flex justify-center items-center px-5">
          <div className="group relative border-2 border-electric rounded-xl w-full lg:max-w-[80%] h-140 overflow-hidden">
            <div className="top-2 right-4 z-1 absolute">
              <Badge className="flex items-center bg-electric-500 text-midnight">
                <StarIcon />
                Featured
              </Badge>
            </div>

            <div className="bottom-2 left-4 z-1 absolute">
              <div className="flex items-center gap-2 bg-white rounded-full group-hover:rounded-lg w-12 group-hover:w-80 h-12 overflow-hidden transition-[width]">
                <div className="flex justify-center items-center bg-white rounded-full group-hover:rounded-lg size-12 shrink-0">
                  <Image
                    src={featured.logoUrl || "/logo.png"}
                    width={28}
                    height={28}
                    alt={`${featured.name} logo`}
                  />
                </div>

                <p className="text-midnight text-xs">{featured.description}</p>
              </div>
            </div>
            {/* Carousel of gallery images */}
            <Image
              src={featured.gallery?.[0] ?? ""}
              alt={featured.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="flex justify-center px-5">
        <ProductList />
      </div>
    </section>
  );
}

function ProductList() {
  const orderedList = [...data.products.productList].sort((a, b) => {
    if (a.featured) return -1;
    if (b.featured) return 1;
    return 0;
  });

  return (
    <ul className="gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full lg:max-w-[80%]">
      {orderedList.map((product) => (
        <li key={product.name}>
          <div className="bg-background p-2 rounded-xl">
            <div className="relative rounded-xl w-full h-44 overflow-hidden">
              <Image
                src={product.coverImageUrl}
                alt={`${product.name} cover image`}
                fill
                className="object-cover"
              />
            </div>

            <div className="pt-2 space-y-2">
              <div className="ml-1">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
              <Button
                asChild
                variant={product.featured ? "default" : "outline"}
                className="w-full"
              >
                <Link href={product.href ?? "#"}>Learn More</Link>
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
