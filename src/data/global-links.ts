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
        description:
          "Comprehensive solutions for K-12 schools and higher education institutions",
        href: "/industries#schools",
      },
      {
        label: "Businesses",
        description:
          "Elevate your employee development programs with professional-grade assessment tools",
        href: "/industries#businesses",
      },
      {
        label: "Certificate Programs",
        description:
          "Maintain the credibility and value of your certifications with industry-leading proctoring technology",
        href: "/industries#certificate-programs",
      },
      {
        label: "Remote Learning",
        description:
          "Bridge the distance with tools built for virtual education",
        href: "/industries#remote-learning",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
