import SectionTag from "@/components/global/section-tag";
import { data } from "@/content/pages/industries";

export default function IndustriesHeader() {
  return (
    <header className="mt-14 h-120 relative p-5">
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 px-5 py-10 rounded-lg bg-black/10 backdrop-blur-sm">
          <SectionTag>{data.header.title}</SectionTag>
          <h1 className="text-center text-white font-semibold text-3xl">
            {data.header.headline}
          </h1>
          <p className="text-white text-center max-w-xl">
            {data.header.description}
          </p>
        </div>
      </div>

      <img
        src={data.header.image}
        alt={data.header.headline}
        className="w-full h-full object-cover object-top -z-1 absolute"
      />
    </header>
  );
}
