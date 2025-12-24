import { data } from "@/content/pages/about";
import Image from "next/image";
import SectionTag from "../global/section-tag";

export default function AboutHeader() {
  return (
    <header className="mt-14 relative h-96">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <SectionTag>{data.header.title}</SectionTag>

        <h1 className="font-semibold text-3xl text-center text-white">
          {data.header.headline}
        </h1>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-1">
        <Image
          src={data.header.imageURL}
          alt={data.header.title}
          fill
          className="object-cover object-top"
        />
      </div>
    </header>
  );
}
