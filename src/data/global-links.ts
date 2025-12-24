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
        description:
          "Secure online proctoring for remote exams and assessments",
      },
      {
        label: "Presio",
        href: "/products/presio",
        description: "Automated attendance tracking and classroom management",
      },
      {
        label: "Fora",
        href: "/products/fora",
        description:
          "Interactive educational forums and peer learning communities",
      },
      {
        label: "Verity",
        href: "/products/verity",
        description:
          "Comprehensive plagiarism detection and originality checking",
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
