"use client";
import { FadeIn } from "../components/FadeIn";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";

const caseStudies = [
  {
    number: "01",
    name: "AI Journal API",
    category: "Generative AI / Backend",
    description:
      "Engineered a highly secure, FastAPI-driven backend to power an intelligent journaling application. By integrating Groq LLM for dynamic context generation and ChromaDB for vector-based semantic memory, the system effectively transformed static journal entries into an interactive, context-aware AI assistant. Implemented JWT authentication for robust user data privacy.",
    tags: ["FastAPI", "LangChain", "ChromaDB", "Groq API"],
  },
  {
    number: "02",
    name: "Document Q&A API",
    category: "RAG / LLM",
    description:
      "Designed an end-to-end Retrieval-Augmented Generation (RAG) pipeline to solve information retrieval bottlenecks in large documents. The solution leverages LangChain and HuggingFace embeddings to chunk and store document data in ChromaDB. This enabled a semantic search architecture capable of returning highly accurate, contextually relevant answers directly from source materials.",
    tags: ["RAG Pipeline", "HuggingFace", "LangChain", "Semantic Search"],
  },
  {
    number: "03",
    name: "URL Shortener API",
    category: "Backend / Deployment",
    description:
      "Developed a scalable microservice for URL shortening and management, focusing on high availability and fast redirect resolution. Built from the ground up using FastAPI and SQLite for lightweight persistent storage. Streamlined the deployment pipeline by containerizing the application and hosting it on Railway for robust, zero-downtime performance.",
    tags: ["FastAPI", "SQLite", "Railway", "System Design"],
  },
  {
    number: "04",
    name: "Customer Segmentation",
    category: "Unsupervised Learning",
    description:
      "Led a data-driven initiative to identify distinct customer behavioral profiles. Executed comprehensive data cleaning and normalization pipelines before applying K-Means clustering algorithms. The resulting segmentation provided actionable insights into purchasing patterns, directly influencing targeted marketing strategies and decision-making processes.",
    tags: ["Python", "K-Means", "Data Analysis", "Scikit-learn"],
  },
  {
    number: "05",
    name: "Hand Gesture Identification",
    category: "Computer Vision",
    description:
      "Constructed a custom Convolutional Neural Network (CNN) optimized for recognizing complex hand gestures from grayscale imagery. Iterated through multiple model architectures to improve spatial feature extraction and classification accuracy, paving the way for intuitive, touchless human-computer interaction systems.",
    tags: ["Python", "CNN", "TensorFlow", "Image Processing"],
  },
  {
    number: "06",
    name: "House Price Prediction",
    category: "Machine Learning",
    description:
      "Built an end-to-end regression model aimed at predicting real estate valuations. Conducted rigorous exploratory data analysis (EDA), addressed missing values, and engineered new predictive features from mixed numerical and categorical datasets. The final model provided a high-accuracy baseline for automated property valuation.",
    tags: ["Python", "Regression", "Feature Engineering", "Pandas"],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
          >
            Case Studies
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.number} delay={index * 0.1}>
              <div
                className={`flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 ${
                  index > 0 ? "border-t border-[#D7E2EA]/10" : ""
                }`}
              >
                <span
                  className="text-[#D7E2EA]/30 font-black shrink-0 leading-none"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
                >
                  {study.number}
                </span>
                <div className="pt-2 sm:pt-4">
                  <p className="text-[#D7E2EA]/50 text-sm uppercase tracking-widest mb-1">
                    {study.category}
                  </p>
                  <h3
                    className="text-[#D7E2EA] font-medium uppercase mb-2 sm:mb-3"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {study.name}
                  </h3>
                  <p
                    className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl opacity-60 mb-4"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#D7E2EA]/20 rounded-full px-3 py-1 text-xs text-[#D7E2EA]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

