import SectionTag from "@/components/global/section-tag";
import { data } from "@/content/pages/sentra";

export default function SentraHeader() {
  return (
    <header className="h-96 relative">
      <div className="h-full w-full flex flex-col items-center justify-center gap-5">
        <SectionTag>{data.header.title}</SectionTag>
        <h1 className="text-center text-white font-semibold text-3xl">
          {data.header.headline}
        </h1>
      </div>

      <img
        src={data.header.image}
        alt={data.header.headline}
        className="object-cover object-top -z-1 absolute"
      />
    </header>
  );
}
