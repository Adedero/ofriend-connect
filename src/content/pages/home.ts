export const data = {
  hero: {
    userMetric: {
      label: "250K+ Institutions and Learners worldwide",
      avatars: [
        {
          src: "https://github.com/shadcn.png",
          alt: "@shadcn",
          fallbackText: "CN",
        },
        {
          src: "https://github.com/maxleiter.png",
          alt: "@maxleiter",
          fallbackText: "LR",
        },
        {
          src: "https://github.com/evilrabbit.png",
          alt: "@evilrabbit",
          fallbackText: "ER",
        },
      ],
    },
    headline: "Systems That Never Fail You",
    description:
      "Our tools are built to run smoothly, stay secure, and support high-stakes learning without breaking.",

    cta: {
      button1: {
        text: "Book A Demo",
        href: "#",
      },
      button2: {
        text: "Learn More",
        href: "#",
      },
    },
  },

  partners: {
    title: "Our Partners",
    headline: "Join the Movement for Honest Learning",
    description:
      "We partner with institutions and organizations to provide our tools to the world.",

    logos: Array.from({ length: 9 }, (_, idx) => `Logo ${idx + 1}`),
  },

  products: {
    title: "The Suite",
    headline: "Enterprise-Grade Tools. Zero Tolerance for Malpractice.",
    description:
      "Built for institutions that require top-tier integrity, security, and performance.",

    productList: [
      {
        name: "Sentra",
        description:
          "AI-Powered Proctoring  Real-time monitoring, zero blind spots.",
        href: "/products/sentra",
        coverImageUrl: "/img/home/sentra-cover-image.png",
        logoUrl: "",
        featured: true,
        gallery: ["/img/home/sentra-gallery-img-1.jpg"],
      },
      {
        name: "Presio",
        description:
          "Attendance Intelligence Verify every check-in, eliminate proxy attendance.",
        coverImageUrl: "/img/home/presio-cover-image.png",
        logoUrl: "",
        featured: false,
      },
      {
        name: "Fora",
        description:
          "Verified Collaboration Structure, track, and validate peer interactions.",
        coverImageUrl: "/img/home/fora-cover-image.png",
        logoUrl: "",
        featured: false,
      },
      {
        name: "Verity",
        description:
          "Deep Originality Analysis Uncover plagiarism with precision.",
        coverImageUrl: "/img/home/verity-cover-image.png",
        logoUrl: "",
        featured: false,
      },
    ],
  },
};
