import { data } from "@/content/pages/about";
import { Card, CardContent } from "../ui/card";

export default function WhatDrivesUs() {
  return (
    <section className="px-5 lg:px-10 py-10 space-y-10">
      <div className="flex items-center justify-center">
        <h2 className="text-center font-semibold text-3xl">
          {data.ourDrive.headline}
        </h2>
      </div>

      <div className="mx-auto w-full max-w-3xl grid grid-cols-2 gap-5">
        {data.ourDrive.items.map((item) => (
          <Card key={item.text}>
            <CardContent>
              <div className="flex items-start gap-2">
                <img
                  src={item.imageURL}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <p className="text-sm">{item.text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto w-full max-w-5xl space-y-3">
        <div className="relative">
          <div className="w-full md:w-[80%] h-60 md:h-80 overflow-hidden relative">
            <img
              src={data.images.img1}
              alt=""
              className="object-cover rounded-lg absolute w-full h-full"
            />
          </div>

          <div className="hidden md:block h-60 w-96 absolute top-1/2 -translate-y-1/2 right-0 rounded-lg overflow-hidden">
            <img
              src={data.images.img2}
              alt=""
              className="object-cover rounded-lg absolute w-full h-full"
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground md:max-w-96">
          {data.images.label}
        </p>
      </div>
    </section>
  );
}
