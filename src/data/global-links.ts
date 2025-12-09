import NavigationLink from "@/types/navigation-link";

export const headerLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Products",
    children: [
      {
        label: "Sentra",
        href: "/products/sentra",
        description: "Lorem ipsum dolor sit ammet consequetur",
      },
      {
        label: "Presio",
        href: "/products/presio",
        description: "Lorem ipsum dolor sit ammet consequetur",
      },
    ],
  },

  {
    label: "Industries",
    children: [
      {
        label: "Schools",
        description: "Lorem ipsum dolor sit ammet consequetur",
        href: "/industries#schools",
      },
      {
        label: "Businesses",
        description: "Lorem ipsum dolor sit ammet consequetur",
        href: "/industries#businesses",
      },
      {
        label: "Certificate Programs",
        description: "Lorem ipsum dolor sit ammet consequetur",
        href: "/industries#certificate-programs",
      },
      {
        label: "Remote Learning",
        description: "Lorem ipsum dolor sit ammet consequetur",
        href: "/industries#remote-learning",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
