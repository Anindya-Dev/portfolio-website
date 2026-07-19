"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { certificates } from "../lib/certificates";

export function Certifications() {
  return (
    <section id="certifications" className="py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.08em] text-text-muted mb-3">
            Certifications
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-text-primary mb-12">
            Learning milestones
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.06}
        >
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <div className="card-border bg-bg-elevated p-6 md:p-8 group h-full">
                {cert.logos?.length ? (
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {cert.logos.map((logo) => (
                      <img
                        key={`${cert.title}-${logo.alt}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-9 w-9 object-contain"
                      />
                    ))}
                  </div>
                ) : null}

                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {cert.issuer} - {cert.date}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="chip text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium text-text-secondary hover:border-accent hover:text-accent transition-all group/btn"
                    data-cursor-hover
                  >
                    View Certificate
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
