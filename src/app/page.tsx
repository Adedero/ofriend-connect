import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Products from "@/components/home/products";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Partners />
      <Products />
    </main>
  );
}
