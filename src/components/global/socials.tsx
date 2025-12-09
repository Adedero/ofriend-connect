import { socialLinks } from "@/content/components/social-links";
import { twMerge } from "tailwind-merge";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import X from "../icons/x";
import Linkedin from "../icons/linkedin";

interface SocialsProps {
  size?: number;
  orientation?: "vertical" | "horizontal";
  className?: string;
  iconClass?: string;
}
export default function Socials({
  size,
  orientation = "horizontal",
  iconClass = "text-midnight",
  className,
}: SocialsProps) {
  return (
    <div
      className={twMerge(
        className,
        "flex gap-2",
        `${orientation === "horizontal" ? "flex-row items-center" : "flex-col justify-center"}`,
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
          className={iconClass}
        >
          {link.name.toLowerCase() === "facebook" && <Facebook size={size} />}
          {link.name.toLowerCase() === "instagram" && <Instagram size={size} />}
          {link.name.toLowerCase() === "x" && <X size={size} />}
          {link.name.toLowerCase() === "linkedin" && <Linkedin size={size} />}
        </a>
      ))}
    </div>
  );
}
