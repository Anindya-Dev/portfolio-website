"use client";

import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { ScrollReveal } from "../components/ScrollReveal";

const cards = [
  {
    title: "Applied Machine Learning",
    description:
      "Building and evaluating models for real-world problem solving.",
    tags: ["Classification", "Regression", "Model evaluation"],
  },
  {
    title: "Data Analytics",
    description:
      "Transforming data into insights with clean, explainable workflows.",
    tags: ["Exploratory analysis", "Visualization", "Feature engineering"],
  },
  {
    title: "Developer Workflow",
    description:
      "Organized, reproducible work with strong tooling and version control.",
    tags: ["Git/GitHub", "Jupyter", "Docker basics"],
  },
];

export function WhatImBuilding() {
  return (
    <section className="py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.08em] text-text-muted mb-3">
            What I'm Building
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.01em] text-text-primary mb-12">
            A clear view of the work I focus on and enjoy
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="card-border bg-bg-elevated p-6 md:p-8 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-text-secondary text-[1.0625rem] leading-[1.6] mb-6 flex-1">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
