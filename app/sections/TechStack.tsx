"use client";

import { ScrollReveal } from "../components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";

const techGroups = [
  {
    category: "Languages",
    subtitle: "Programming fundamentals",
    items: ["Python", "Java", "C", "HTML"],
  },
  {
    category: "Databases",
    subtitle: "Data storage",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Backend",
    subtitle: "APIs & services",
    items: ["Flask"],
  },
  {
    category: "Data Analytics",
    subtitle: "Insights & visualization",
    items: ["NumPy", "Pandas", "Matplotlib", "Excel", "Scikit-learn"],
  },
  {
    category: "Tools",
    subtitle: "Workflow & productivity",
    items: ["Git", "GitHub", "VS Code", "Docker", "Jupyter"],
  },
  {
    category: "AI Skills",
    subtitle: "Applied AI",
    items: ["Prompt Engineering", "OpenCV"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.08em] text-text-muted mb-3">
            Tech Stack
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.01em] text-text-primary mb-12">
            Technologies and tools I work with
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {techGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.05}>
              <div>
                <div className="mb-4">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {group.category}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted mt-1">
                    {group.subtitle}
                  </p>
                </div>
                <StaggerContainer
                  className="flex flex-wrap gap-2"
                  staggerDelay={0.03}
                >
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <span className="chip">{item}</span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
