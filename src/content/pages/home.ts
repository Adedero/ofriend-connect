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

  valueProposition: {
    title: "Value Proposition",
    headline: "Integrity Is Not Optional",
    description:
      "Institutions focused on integrity rely on Ofriend Edu for fair, high-performing solutions.",

    image: {
      src: "/img/home/value-proposition-img.png",
      alt: "value proposition",
      label: "20k+ Remote Learners | 50k+ Educators",
    },

    values: [
      {
        title: "Built for trust",
        description:
          "Ensuring integrity, accountability, and reliable performance for every institution.",
      },
      {
        title: "Designed for accuracy",
        description:
          "Ensuring precise, reliable, and verifiable results for every institution and user.",
      },
      {
        title: "Ready for real-world demands",
        description:
          "Built to handle high-stakes environments with reliability and performance.",
      },
    ],
  },

  industries: {
    title: "Industries",
    headline: "Trusted by Institutions That Need Accuracy.",
    description:
      "Supports universities, training teams, and certification programs with reliable, integrity-focused tools.",

    industryList: [
      {
        name: "Higher Education",
        description: "This is the description",
        href: "/industries#schools",
        imageUrl: "/img/home/industry-higher-education.png",
      },
      {
        name: "Corporate Training",
        description: "This is the description",
        href: "/industries#schools",
        imageUrl: "/img/home/industry-corporate-training.png",
      },
      {
        name: "Certificate Programs",
        description: "This is the description",
        href: "/industries#schools",
        imageUrl: "/img/home/industry-certificate-programs.png",
      },
      {
        name: "Remote Learning",
        description: "This is the description",
        href: "/industries#schools",
        imageUrl: "/img/home/industry-remote-learning.png",
      },
    ],
  },

  about: {
    title: "About Us",
    headline: "Engineering Systems That Don't Break Under Pressure.",
    description:
      "Ofriend operates in Nigeria and the USA, building enterprise-grade integrity infrastructure for organizations that cannot afford compromised standards. A focused team. A clear mission. Zero tolerance for incompetence.",
    imageUrl: "/img/home/about-us-img.png",
    aboutUsList: [
      {
        title: "Global engineering team",
        description:
          "Ensuring integrity, accountability, and reliable performance for every institution.",
      },
      {
        title: "Rapid production development cycles",
        description:
          "Ensuring precise, reliable, and verifiable results for every institution and user.",
      },
      {
        title: "Integrity-first Technology Philosophy",
        description:
          "Built to handle high-stakes environments with reliability and performance.",
      },
      {
        title: "Valuation and team metrics",
        description:
          "Built to handle high-stakes environments with reliability and performance.",
      },
    ],
  },

  testimonials: {
    title: "Client Stories",
    headline: "Real Experiences. Real Trust",
    description:
      "Real stories from organizations that rely on Ofriend Edu to maintain integrity, enforce accountability, and achieve consistent performance.",

    testimonialList: [
      {
        name: "Dr. Amina Yusuf",
        quote:
          "Ofriend Edu has completely transformed our approach to assessments. The AI proctoring and attendance verification give us confidence that integrity is never compromised.",
        role: "University Administrator",
        imageUrl: "/img/home/testimonial-user-1.png",
      },
      {
        name: "Mr. Chike Obi",
        quote:
          "With Ofriend Edu, we can monitor our remote training programs in real-time. The system's accuracy and reliability have saved us countless hours and eliminated fraud.",
        role: "Corporate Training Manager",
        imageUrl: "/img/home/testimonial-user-2.png",
      },
      {
        name: "Prof. John Drey",
        quote:
          "The plagiarism detection engine is remarkable. It catches issues we would have missed manually, ensuring every submission meets our strict originality standards.",
        role: "Academic Co-ordinator",
        imageUrl: "/img/home/testimonial-user-3.png",
      },
    ],
  },
};
