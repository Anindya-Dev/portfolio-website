"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

const projectData = [
  {
    number: "01",
    name: "AI Journal API",
    category: "Generative AI / Backend",
    description:
      "Built a FastAPI-based journaling backend with secure JWT authentication. Integrated Groq LLM to generate intelligent responses and ChromaDB for semantic search and persistent memory retrieval.",
    features: ["FastAPI + JWT Auth", "Groq LLM Integration", "ChromaDB Vector Search"],
    image: "/images/ai-journal.png",
    github: "https://github.com/Anindya-Dev",
    tech: "FastAPI · LangChain · SQLAlchemy · ChromaDB · Groq",
  },
  {
    number: "02",
    name: "Document Q&A API",
    category: "RAG / LLM",
    description:
      "Built a RAG-based question-answering system for querying document content. Used LangChain with ChromaDB and HuggingFace embeddings for semantic retrieval of context-aware answers.",
    features: ["RAG Pipeline", "HuggingFace Embeddings", "Semantic Search"],
    image: "/images/doc-qa.png",
    github: "https://github.com/Anindya-Dev",
    tech: "LangChain · ChromaDB · HuggingFace · SQLAlchemy",
  },
  {
    number: "03",
    name: "URL Shortener API",
    category: "Backend / Deployment",
    description:
      "Developed a scalable URL shortener with FastAPI for link creation and management. Used SQLite for persistent storage and deployed on Railway for accessible, lightweight hosting.",
    features: ["FastAPI Routing", "SQLite Storage", "Railway Deployment"],
    image: "/images/url-shortener.png",
    github: "https://github.com/Anindya-Dev",
    tech: "FastAPI · SQLite · Railway · Vercel",
  },
  {
    number: "04",
    name: "Cat–Dog Image Classifier",
    category: "Deep Learning",
    description:
      "Built a convolutional neural network to classify images of cats and dogs with a focus on feature extraction and model evaluation.",
    features: ["Image preprocessing and augmentation", "CNN-based classification model"],
    image: "/images/cat-dog.png",
    github: "https://github.com/Anindya-Dev",
    tech: "Python · TensorFlow · OpenCV · NumPy",
  },
  {
    number: "05",
    name: "Parking Slot Identification",
    category: "Computer Vision",
    description:
      "Applied a YOLO v11n object detection model to analyze video frames and detect parking slot occupancy in real-time.",
    features: ["Image/video frame processing", "Parking slot detection logic"],
    image: "/images/parking.png",
    github: "https://github.com/Anindya-Dev",
    tech: "Python · YOLO v11n · OpenCV · Scikit-learn",
  },
  {
    number: "06",
    name: "House Price Prediction",
    category: "Machine Learning",
    description:
      "Developed a regression-based model to predict house prices using multiple numerical and categorical features with thorough data cleaning.",
    features: ["Data cleaning and feature engineering", "Regression model training"],
    image: "/images/house.png",
    github: "https://github.com/Anindya-Dev",
    tech: "Python · Scikit-learn · Pandas · Matplotlib",
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projectData)[0];
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[90vh] sticky"
      style={{ top: `${80 + index * 24}px` }}
    >
      <motion.div
        className="h-full rounded-[32px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden"
        style={{ scale }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-3 sm:mb-5 flex-shrink-0">
          <div className="flex items-end gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA]/30 font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              {project.number}
            </span>
            <div className="pb-2 sm:pb-4">
              <p className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest mb-1">
                {project.category}
              </p>
              <h3
                className="text-[#D7E2EA] font-semibold uppercase"
                style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.8rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pt-2 sm:pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D7E2EA]/40 px-5 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 inline-block"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#D7E2EA]/60 text-sm sm:text-base mb-3 max-w-2xl flex-shrink-0">
          {project.description}
        </p>

        {/* Features */}
        <ul className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
          {project.features.map((f) => (
            <li
              key={f}
              className="border border-[#D7E2EA]/15 rounded-full px-3 py-1 text-xs sm:text-sm text-[#D7E2EA]/50"
            >
              {f}
            </li>
          ))}
          <li className="border border-[#7C5CFF]/40 rounded-full px-3 py-1 text-xs sm:text-sm text-[#7C5CFF]/80">
            {project.tech}
          </li>
        </ul>

        {/* Project Image */}
        <div className="flex-1 rounded-[20px] sm:rounded-[28px] overflow-hidden min-h-0 bg-[#111]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projectData.length}
          />
        ))}
      </div>
    </section>
  );
}
