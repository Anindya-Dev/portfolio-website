export type CertificateLogo = {
  src: string;
  alt: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  imageSrc: string;
  logos?: CertificateLogo[];
};

export const certificates: Certificate[] = [
  {
    title: "Introduction to Generative AI - Art of the Possible",
    issuer: "AWS Training and Certification",
    date: "Jan 20, 2025",
    description: "Foundational generative AI concepts and practical applications.",
    skills: ["Generative AI"],
    imageSrc: "/certificates/aws-generative-ai-art-of-possible.png",
    logos: [{ src: "/certificates/logos/aws.png", alt: "AWS" }],
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS x Forage",
    date: "Oct 19, 2025",
    description:
      "Hands-on architecture work covering scalable, secure, and cost-efficient cloud solution design.",
    skills: ["Solutions Architecture"],
    imageSrc: "/certificates/aws-forage-solutions-architecture.png",
    logos: [
      { src: "/certificates/logos/aws.png", alt: "AWS" },
      { src: "/certificates/logos/forage.png", alt: "Forage" },
    ],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte x Forage",
    date: "Oct 18, 2025",
    description: "Job simulation focused on data analytics workflows and insight generation.",
    skills: ["Data Analytics"],
    imageSrc: "/certificates/deloitte-forage-data-analytics.png",
    logos: [
      { src: "/certificates/logos/deloitte.png", alt: "Deloitte" },
      { src: "/certificates/logos/forage.png", alt: "Forage" },
    ],
  },
  {
    title: "Build Your Generative AI Productivity Skills",
    issuer: "Microsoft x LinkedIn Learning",
    date: "Jan 22, 2025",
    description: "Learning path completion in generative AI productivity skills.",
    skills: ["Generative AI", "Productivity"],
    imageSrc: "/certificates/linkedin-microsoft-genai-productivity.png",
    logos: [
      { src: "/certificates/logos/microsoft.png", alt: "Microsoft" },
      { src: "/certificates/logos/linkedin.png", alt: "LinkedIn Learning" },
    ],
  },
  {
    title: "Tech Event Participation (IBM Technovate)",
    issuer: "Brainware University x IBM",
    date: "Apr 1-2, 2025",
    description: "Certificate of participation in the IBM Technovate tech event.",
    skills: ["Tech Events"],
    imageSrc: "/certificates/brainware-ibm-technovate.png",
    logos: [
      { src: "/certificates/logos/brainware-university.png", alt: "Brainware University" },
      { src: "/certificates/logos/ibm.png", alt: "IBM" },
    ],
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    date: "Jan 21, 2025",
    description: "Course completion covering prompt engineering fundamentals.",
    skills: ["Prompt Engineering"],
    imageSrc: "/certificates/linkedin-prompt-engineering-genai.png",
    logos: [{ src: "/certificates/logos/linkedin.png", alt: "LinkedIn Learning" }],
  },
  {
    title: "PostgreSQL: Become an SQL Developer",
    issuer: "Simplilearn SkillUp",
    date: "Apr 22, 2025",
    description: "Course completion focused on PostgreSQL and SQL development.",
    skills: ["PostgreSQL", "SQL"],
    imageSrc: "/certificates/simplilearn-postgresql-sql.png",
    logos: [{ src: "/certificates/logos/simplilearn.png", alt: "Simplilearn SkillUp" }],
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA x Forage",
    date: "Oct 19, 2025",
    description:
      "Applied exploratory analysis, risk profiling, prediction, and business reporting for collections strategy.",
    skills: ["Data Analytics", "GenAI"],
    imageSrc: "/certificates/tata-forage-genai-analytics.png",
    logos: [
      { src: "/certificates/logos/tata.png", alt: "Tata" },
      { src: "/certificates/logos/forage.png", alt: "Forage" },
    ],
  },
  {
    title: "Samsung Innovation Campus: Artificial Intelligence",
    issuer: "Samsung Innovation Campus",
    date: "Sep 03-Nov 15, 2025",
    description: "Certificate of completion for the Artificial Intelligence course program.",
    skills: ["Artificial Intelligence"],
    imageSrc: "/certificates/samsung-innovation-campus-ai.png",
    logos: [{ src: "/certificates/logos/samsung.png", alt: "Samsung" }],
  },
];
