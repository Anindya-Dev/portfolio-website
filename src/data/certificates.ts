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
  icon: string;
  imageSrc: string;
  logos?: CertificateLogo[];
};

export const certificates: Certificate[] = [
  {
    title: 'Introduction to Generative AI - Art of the Possible',
    issuer: 'AWS Training and Certification',
    date: 'Jan 20, 2025',
    description: 'Certificate of completion for foundational generative AI concepts and applications.',
    skills: ['Generative AI'],
    icon: '🤖',
    imageSrc: '/src/assets/certificates/aws-generative-ai-art-of-possible.png',
    logos: [
      { src: '/src/assets/certificates/logos/aws-training-certification.png', alt: 'AWS Training and Certification' }
    ]
  },
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'AWS x Forage',
    date: 'Oct 19, 2025',
    description: 'Completed the AWS Solutions Architecture Job Simulation on Forage with hands-on experience designing scalable, secure, and cost-efficient cloud solutions. Covered high-availability auto-scaling architectures, deployment automation with Elastic Beanstalk and CodePipeline, and real-world challenges like downtime, disaster recovery, and performance optimization.',
    skills: ['Solutions Architecture'],
    icon: '🧩',
    imageSrc: '/src/assets/certificates/aws-forage-solutions-architecture.png',
    logos: [
      { src: '/src/assets/certificates/logos/aws.png', alt: 'AWS' },
      { src: '/src/assets/certificates/logos/forage.png', alt: 'Forage' }
    ]
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte x Forage',
    date: 'Oct 18, 2025',
    description: 'Job simulation completion focused on data analytics tasks.',
    skills: ['Data Analytics'],
    icon: '📊',
    imageSrc: '/src/assets/certificates/deloitte-forage-data-analytics.png',
    logos: [
      { src: '/src/assets/certificates/logos/deloitte.png', alt: 'Deloitte' },
      { src: '/src/assets/certificates/logos/forage.png', alt: 'Forage' }
    ]
  },
  {
    title: 'Build Your Generative AI Productivity Skills',
    issuer: 'Microsoft x LinkedIn Learning',
    date: 'Jan 22, 2025',
    description: 'Learning path completion in generative AI productivity skills.',
    skills: ['Generative AI', 'Productivity'],
    icon: '✨',
    imageSrc: '/src/assets/certificates/linkedin-microsoft-genai-productivity.png',
    logos: [
      { src: '/src/assets/certificates/logos/microsoft.png', alt: 'Microsoft' },
      { src: '/src/assets/certificates/logos/linkedin.png', alt: 'LinkedIn Learning' }
    ]
  },
  {
    title: 'Tech Event Participation (IBM Technovate)',
    issuer: 'Brainware University x IBM',
    date: 'Apr 1–2, 2025',
    description: 'Certificate of participation in the IBM Technovate tech event.',
    skills: ['Tech Events'],
    icon: '🏆',
    imageSrc: '/src/assets/certificates/brainware-ibm-technovate.png',
    logos: [
      { src: '/src/assets/certificates/logos/brainware-university.png', alt: 'Brainware University' },
      { src: '/src/assets/certificates/logos/ibm.png', alt: 'IBM' }
    ]
  },
  {
    title: 'Introduction to Prompt Engineering for Generative AI',
    issuer: 'LinkedIn Learning',
    date: 'Jan 21, 2025',
    description: 'Course completion covering prompt engineering fundamentals.',
    skills: ['Prompt Engineering'],
    icon: '💡',
    imageSrc: '/src/assets/certificates/linkedin-prompt-engineering-genai.png',
    logos: [
      { src: '/src/assets/certificates/logos/linkedin.png', alt: 'LinkedIn Learning' }
    ]
  },
  {
    title: 'PostgreSQL: Become an SQL Developer',
    issuer: 'Simplilearn SkillUp',
    date: 'Apr 22, 2025',
    description: 'Course completion focused on PostgreSQL and SQL development.',
    skills: ['PostgreSQL', 'SQL'],
    icon: '🗃️',
    imageSrc: '/src/assets/certificates/simplilearn-postgresql-sql.png',
    logos: [
      { src: '/src/assets/certificates/logos/simplilearn.png', alt: 'Simplilearn SkillUp' }
    ]
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'TATA x Forage',
    date: 'Oct 19, 2025',
    description: 'Completed the GenAI Powered Data Analytics Job Simulation with Tata Group on Forage, covering exploratory data analysis and financial risk profiling, delinquency prediction with AI/ML models, and data-driven business reporting for collections strategy. Strengthened the ability to connect insights with actionable, ethical, and transparent AI decisions.',
    skills: ['Data Analytics', 'GenAI'],
    icon: '🧠',
    imageSrc: '/src/assets/certificates/tata-forage-genai-analytics.png',
    logos: [
      { src: '/src/assets/certificates/logos/tata.png', alt: 'Tata' },
      { src: '/src/assets/certificates/logos/forage.png', alt: 'Forage' }
    ]
  },
  {
    title: 'Samsung Innovation Campus: Artificial Intelligence',
    issuer: 'Samsung Innovation Campus',
    date: 'Sep 03–Nov 15, 2025',
    description: 'Certificate of completion for the AI course program.',
    skills: ['Artificial Intelligence'],
    icon: '🤖',
    imageSrc: '/src/assets/certificates/samsung-innovation-campus-ai.png',
    logos: [
      { src: '/src/assets/certificates/logos/samsung.png', alt: 'Samsung' }
    ]
  }
];
