"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Parking Slot Identification",
    subtitle: "Computer vision-based parking analysis",
    description:
      "Designed a system to detect occupied and available parking slots using visual data and object detection.",
    features: ["Image and video frame processing", "Parking occupancy detection"],
    tags: ["Python", "YOLO", "OpenCV"],
    github: "https://github.com/Anindya-Dev/Galaxy-Geeks",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "House Price Prediction",
    subtitle: "Predictive modeling on structured housing data",
    description:
      "Developed a regression model to estimate house prices using cleaned data and engineered features.",
    features: ["Data cleaning and feature engineering", "Linear regression modeling"],
    tags: ["Python", "Regression", "Data Analysis"],
    github: "https://github.com/Anindya-Dev/House_Price_Prediction",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Customer Segmentation System",
    subtitle: "Unsupervised learning for customer analysis",
    description:
      "Applied clustering to group customers by behavior patterns for clearer analysis and decisions.",
    features: ["Exploratory data analysis", "K-Means clustering"],
    tags: ["Python", "K-Means", "Machine Learning"],
    github: "https://github.com/Anindya-Dev/Customer_segmentation_system",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Hand Gesture Identification",
    subtitle: "CNN-based gesture recognition",
    description:
      "Built a convolutional neural network to classify grayscale hand gesture images.",
    features: ["Grayscale image preprocessing", "CNN model training"],
    tags: ["Python", "CNN", "Computer Vision"],
    github: "https://github.com/Anindya-Dev/Hand_Gesture_Recognition_System",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "05",
    title: "Cat-Dog Image Classifier",
    subtitle: "Image classification with machine learning",
    description:
      "Built an image classification pipeline to distinguish between cats and dogs with a focus on feature extraction.",
    features: ["Image preprocessing", "SVM-based classification model"],
    tags: ["Python", "SVM", "Classification"],
    github: "https://github.com/Anindya-Dev/cat_vs_dogs_classifier",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
  },
];

const AUTO_ADVANCE_MS = 4500;

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % projects.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  return (
    <section id="featured-projects" className="py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <ScrollReveal>
          <p className="font-mono text-sm uppercase tracking-[0.08em] text-text-muted mb-3">
            Featured Projects
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-text-primary max-w-4xl">
              Selected AI/ML projects from my GitHub
            </h2>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                aria-label="Previous project"
                data-cursor-hover
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                aria-label={isPlaying ? "Pause project carousel" : "Play project carousel"}
                data-cursor-hover
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                aria-label="Next project"
                data-cursor-hover
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative border-y border-border py-10 md:py-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.number}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[32rem]"
            >
              <div className="lg:col-span-2">
                <span className="font-mono text-[clamp(3rem,5vw,4rem)] text-text-muted leading-none">
                  {activeProject.number}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-text-secondary text-lg mb-4">
                  {activeProject.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="mb-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-text-muted mb-3">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-text-secondary text-sm flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2 transition-colors"
                  data-cursor-hover
                >
                  GitHub
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="lg:col-span-5">
                <div className="card-border overflow-hidden group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {projects.map((project, index) => (
              <button
                key={project.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-10 bg-accent" : "w-2 bg-text-muted/40"
                }`}
                aria-label={`Show ${project.title}`}
                aria-current={index === activeIndex}
                data-cursor-hover
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
