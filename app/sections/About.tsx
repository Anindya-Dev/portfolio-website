"use client";

import { motion } from "framer-motion";
import { User, Code2, Briefcase, Download } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { MagneticButton } from "../components/MagneticButton";

const infoCards = [
  { label: "CURRENT FOCUS", value: "Machine learning + CV" },
  { label: "WORKING STYLE", value: "Structured & reproducible" },
  { label: "UNIVERSITY", value: "Brainware University" },
  { label: "PROGRAM", value: "BTech CSE (AI/ML)" },
  { label: "CURRENT YEAR", value: "3rd Year" },
  { label: "FOCUS", value: "AI/ML Projects" },
];

export function About() {
  return (
    <section id="about" className="py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Portrait */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Anindya Bhattacharya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            {/* Status pill */}
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  Third-year BTech CSE (AI/ML) student
                </span>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={0.15}>
              <p className="text-[1.0625rem] leading-[1.6] text-text-secondary mb-4">
                I'm a BTech CSE (AI/ML) student at Brainware University,
                currently in my third year. My academic focus is on artificial
                intelligence and machine learning, where I work on understanding
                core concepts and applying them to practical problem-solving
                scenarios.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[1.0625rem] leading-[1.6] text-text-secondary mb-8">
                I build clean, testable prototypes and iterate with feedback,
                aiming for solutions that are practical, explainable, and ready
                for real-world use.
              </p>
            </ScrollReveal>

            {/* Info cards grid */}
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8"
              staggerDelay={0.05}
            >
              {infoCards.map((card) => (
                <StaggerItem key={card.label}>
                  <div className="card-border bg-bg-elevated px-4 py-3.5">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-text-muted mb-1">
                      {card.label}
                    </p>
                    <p className="font-display text-sm font-semibold text-text-primary">
                      {card.value}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Icon row */}
            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-4 mb-6">
                {[User, Code2, Briefcase].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center card-border"
                  >
                    <Icon className="w-4 h-4 text-text-secondary" />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Download Resume */}
            <ScrollReveal delay={0.35}>
              <MagneticButton strength={0.15}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,92,255,0.4)]"
                  data-cursor-hover
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
