"use client";

import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";

const stats = [
  { label: "FOCUSED ON", value: "AI/ML - Applied Learning" },
  { label: "PROJECTS", value: "Published on GitHub" },
  { label: "CERTIFICATES", value: "Learning milestones" },
];

export function StatsStrip() {
  return (
    <section className="py-8 border-y border-border">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="card-border bg-bg-elevated px-6 py-5 flex flex-col">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-text-muted mb-1.5">
                  {stat.label}
                </span>
                <span className="font-display text-base font-semibold text-text-primary">
                  {stat.value}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
