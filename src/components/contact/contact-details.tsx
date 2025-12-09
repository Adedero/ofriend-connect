import * as React from "react";
import { data } from "@/content/pages/contact";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Socials from "../global/socials";

export default function ContactDetails() {
  return (
    <div className="space-y-10 bg-electric-100 dark:bg-electric-300 p-5 lg:p-8 rounded-md h-full text-midnight">
      <div>
        <h3 className="font-bold text-3xl">{data.contactDetails.headline}</h3>
        <p className="text-midnight/50">{data.contactDetails.description}</p>
      </div>

      <div className="gap-4 grid">
        <ContactDetailItem
          title="Head Office"
          value={data.contactDetails.offices}
          logo={<MapPinIcon />}
        />

        <ContactDetailItem
          title="Email Us"
          value={data.contactDetails.emailAddress}
          logo={<MailIcon />}
        />

        <ContactDetailItem
          title="Call Us"
          value={data.contactDetails.phoneNumbers}
          logo={<PhoneIcon />}
        />
      </div>

      <div>
        <p className="text-xs">Follow our social media</p>

        <div className="mt-1">
          <Socials size={20} />
        </div>
      </div>
    </div>
  );
}

interface ContactDetailItemProps {
  logo?: string | React.ReactNode;
  title: string;
  value: string | string[];
}
function ContactDetailItem({ logo, title, value }: ContactDetailItemProps) {
  const finalValue = typeof value === "string" ? [value] : value;

  return (
    <div className="flex items-start gap-2">
      {logo && (
        <div className="bg-midnight p-2 rounded-full aspect-square text-white shrink-0">
          {logo}
        </div>
      )}

      <div>
        <p className="font-semibold text-lg">{title}</p>
        <div>
          {finalValue.map((value) => (
            <p key={value} className="text-midnight/50 text-sm">
              {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
