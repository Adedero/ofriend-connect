import { data } from "@/content/pages/about";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section className="px-5 lg:px-10 pt-10 pb-20 space-y-20">
      <header className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">{data.team.headline}</h2>
        <p className="text-muted-foreground mx-auto max-w-xl">
          {data.team.description}
        </p>
      </header>
      <div className="mt-8">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-5">
          {data.team.members.map((member) => (
            <div
              key={member.title}
              className="relative h-80 w-54 rounded-lg overflow-hidden"
            >
              <div className="absolute z-1 bg-electric-600 text-white rounded-lg left-1/2 -translate-x-1/2 bottom-4 p-2 w-[90%] text-center space-y-1">
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs">{member.title}</p>
              </div>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
