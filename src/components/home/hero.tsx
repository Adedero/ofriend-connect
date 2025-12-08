import AvatarGroup from "../ui/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import HeroImages from "./hero-images";
import { data } from "@/content/pages/home";

export default function Hero() {
  return (
    <div className="bg-[url(/img/home/home-hero-bg.png)] bg-cover bg-no-repeat min-h-96">
      <div className="flex lg:flex-row flex-col gap-5 pt-20 lg:pt-28">
        <div className="flex flex-col justify-center items-center lg:items-start gap-5 px-5 md:px-10 lg:px-5 xl:px-10 py-10 lg:max-w-96 xl:max-w-132">
          <div className="flex items-center gap-5 bg-muted p-1 rounded-full">
            <AvatarDesign />
            <p className="font-semibold text-xs">{data.hero.userMetric.label}</p>
          </div>
          <h1 className="font-bold text-5xl lg:text-left text-center text-balance lg:text-pretty">
            {data.hero.headline}
          </h1>

          <p className="max-w-80 text-muted-foreground lg:text-left text-center">
            {data.hero.description}
          </p>

          <CallToAction />
        </div>

        <div className="lg:grow">
          <HeroImages />
        </div>
      </div>
    </div>
  );
}

function AvatarDesign() {
  return (
    <AvatarGroup>
      {data.hero.userMetric.avatars.map((avatar) => (
        <Avatar key={avatar.src}>
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback>{avatar.fallbackText}</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  );
}

function CallToAction() {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-2">
      <Button size="lg">{data.hero.cta.button1.text}</Button>

      <Button size="lg" variant="outline">
        {data.hero.cta.button1.text}
      </Button>
    </div>
  );
}
