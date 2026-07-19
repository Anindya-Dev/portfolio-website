"use client";
import { FadeIn } from "../components/FadeIn";

const techGroups = [
  {
    number: "01",
    category: "Languages",
    items: "Python, Java, C, HTML",
  },
  {
    number: "02",
    category: "Frameworks",
    items: "FastAPI, LangChain, SQLAlchemy",
  },
  {
    number: "03",
    category: "Databases",
    items: "SQLite, PostgreSQL, MySQL, ChromaDB (Vector DB)",
  },
  {
    number: "04",
    category: "AI / ML",
    items: "LLMs, RAG, Sentence Transformers, Semantic Search, OpenCV, Scikit-learn, NumPy, Pandas, Matplotlib",
  },
  {
    number: "05",
    category: "Tools & Deployment",
    items: "Git, GitHub, Docker, Jupyter, VS Code, Railway, Vercel, JWT, bcrypt",
  },
  {
    number: "06",
    category: "Soft Skills",
    items: "Problem-Solving, Team Player, Project Management, Adaptability, Prompt Engineering",
  },
];

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {techGroups.map((group, index) => (
          <FadeIn key={group.number} delay={index * 0.1}>
            <div
              className={`flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 ${
                index > 0 ? "border-t border-[rgba(12,12,12,0.15)]" : ""
              }`}
            >
              <span
                className="text-[#0C0C0C] font-black shrink-0 leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {group.number}
              </span>
              <div className="pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase mb-2 sm:mb-3"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {group.category}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {group.items}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

