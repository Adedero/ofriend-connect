import NavigationLink from "@/types/navigation-link";

export const headerLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
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
        label: "Checked In",
        href: "/products/checked-in",
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
      },
      {
        label: "Businesses",
        description: "Lorem ipsum dolor sit ammet consequetur",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
