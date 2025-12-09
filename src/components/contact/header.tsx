import { data } from "@/content/pages/contact";
import SectionTag from "../global/section-tag";

export default function ContactHeader() {
  return (
    <header className="flex justify-center items-center bg-[url(/img/contact/contact-header-img.png)] bg-cover bg-no-repeat mt-18 px-5 py-40">
      <div className="flex flex-col justify-center items-center gap-5 md:max-w-120">
        <SectionTag label={data.header.title} />

        <h1 className="font-bold text-white text-4xl text-center">
          {data.header.headline}
        </h1>

        <p className="text-white/80 text-center">{data.header.description}</p>
      </div>
    </header>
  );
}
