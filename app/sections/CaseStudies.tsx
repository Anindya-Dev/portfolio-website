"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";

const caseStudies = [
  {
    title: "Parking Slot Identification",
    github: "https://github.com/Anindya-Dev/Galaxy-Geeks",
    problem: "Identifying occupied and available parking slots manually is inefficient at scale.",
    approach:
      "Applied a YOLO v11n object detection model to analyze video frames and detect parking slot occupancy.",
    outcome:
      "Built a vision-based system that identifies parking availability from visual data.",
    tags: ["Python", "YOLO v11n", "Computer Vision"],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "House Price Prediction",
    github: "https://github.com/Anindya-Dev/House_Price_Prediction",
    problem: "House prices vary due to multiple interacting factors.",
    approach:
      "Used data preprocessing and feature engineering followed by Linear Regression.",
    outcome: "Developed a regression model for price prediction from structured inputs.",
    tags: ["Python", "Linear Regression", "Data Analysis"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customer Segmentation System",
    github: "https://github.com/Anindya-Dev/Customer_segmentation_system",
    problem: "Understanding customer behavior is difficult without clear grouping patterns.",
    approach:
      "Applied K-Means clustering on cleaned and normalized customer data.",
    outcome: "Generated meaningful customer groups for analysis and decisions.",
    tags: ["Python", "K-Means", "Unsupervised Learning"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hand Gesture Identification",
    github: "https://github.com/Anindya-Dev/Hand_Gesture_Recognition_System",
    problem: "Hand gesture recognition is sensitive to noise, lighting, and background variation.",
    approach: "Trained a CNN on grayscale hand gesture images for classification.",
    outcome: "Built a gesture recognition model for image inputs.",
    tags: ["Python", "CNN", "Computer Vision"],
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cat-Dog Image Classifier",
    github: "https://github.com/Anindya-Dev/cat_vs_dogs_classifier",
    problem: "Image classification needs robust feature separation between visually similar classes.",
    approach: "Extracted image features and trained an SVM classifier.",
    outcome: "Created an image classifier for unseen cat and dog images.",
    tags: ["Python", "SVM", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
  },
];

export function CaseStudies() {
  return (
    <section className="py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-text-primary mb-12">
            Case Study Snapshots
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.06}
        >
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <div className="card-border bg-bg-elevated overflow-hidden h-full flex flex-col group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {study.title}
                    </h3>
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      data-cursor-hover
                      aria-label={`${study.title} GitHub repository`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-text-muted mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-text-muted mb-1">
                        Approach
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-text-muted mb-1">
                        Outcome
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
