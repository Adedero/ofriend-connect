import { data } from "@/content/components/footer";
import Logo from "../app/logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Footer() {
  const copyrightYear = process.env.NEXT_PUBLIC_COPYRIGHT_YEAR;

  return (
    <footer>
      <div className="bg-midnight p-5 md:p-10 text-white">
        <Logo shapeColor="fill-white" />

        <div className="gap-4 grid lg:grid-cols-5 mt-3">
          <div className="space-y-3 lg:col-span-2">
            <div className="lg:max-w-[80%]">
              <h2 className="font-bold text-2xl">{data.headline}</h2>
              <p className="text-muted-foreground">{data.description}</p>
            </div>

            <Button className="bg-white hover:bg-white/80 dark:bg-white dark:hover:bg-white/80 w-40 text-midnight">
              Sign Up
            </Button>
          </div>

          <div className="lg:col-span-3">
            <div className="gap-2 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
              {data.navigation.map((nav) => (
                <div
                  key={nav.groupName}
                  className="justify-center place-content-start grid"
                >
                  <p className="font-medium">{nav.groupName}</p>

                  <ul className="mt-1">
                    {nav.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground text-sm hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-2 mt-5">Socials</div>

        <div className="mt-5 mb-2">
          <Separator />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-2">
          <p className="text-muted-foreground text-xs">
            &copy; Ofriend {copyrightYear}. All rights reserved.
          </p>

          <div className="flex gap-2">
            <Link
              href="/legal/terms-of-use"
              className="text-muted-foreground text-xs hover:underline"
            >
              Terms of use
            </Link>
            <Link
              href="/legal/privacy-policy"
              className="text-muted-foreground text-xs hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
