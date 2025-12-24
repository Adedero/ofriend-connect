import { data } from "@/content/pages/about";

export default function WhoWeAre() {
  return (
    <section className="grid md:grid-cols-3 gap-10 px-5 lg:px-10 py-10">
      <div>
        <h2 className="font-semibold text-3xl">{data.aboutUs.headline}</h2>
      </div>
      <div>{data.aboutUs.paragraph1}</div>
      <div>{data.aboutUs.paragraph2}</div>
    </section>
  );
}
