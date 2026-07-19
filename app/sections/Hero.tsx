"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const handleScrollToProjects = () => {
    const el = document.querySelector("#featured-projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent)",
          y: blob1Y,
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--accent-2), transparent)",
          y: blob2Y,
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full opacity-10 blur-[90px]"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent)",
          y: blob3Y,
        }}
      />

      <div className="max-w-content mx-auto px-6 md:px-16 w-full py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-2">
                Available for work
              </span>
            </motion.div>

            {/* Location */}
            <motion.p
              className="font-mono text-sm uppercase tracking-[0.08em] text-text-muted mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Kolkata, India
            </motion.p>

            {/* H1 */}
            <motion.h1
              className="font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-text-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Anindya
              <br />
              Bhattacharya
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="font-display text-xl md:text-2xl text-text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              BTech CSE (AI/ML) Student
            </motion.p>

            {/* Body */}
            <motion.p
              className="text-body text-text-secondary max-w-md mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Building intelligent systems through machine learning and computer
              vision, with a focus on practical, real-world applications.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton strength={0.15}>
                <button
                  onClick={handleScrollToProjects}
                  className="px-8 py-3.5 rounded-full bg-accent text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,92,255,0.4)] hover:scale-[1.02]"
                  data-cursor-hover
                >
                  View Projects
                </button>
              </MagneticButton>
            </motion.div>

            {/* Stat cards */}
            <motion.div
              className="flex flex-wrap gap-3 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {[
                { label: "Program", value: "BTech CSE" },
                { label: "Specialization", value: "AI/ML" },
                { label: "Year", value: "3rd" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-border px-4 py-2.5 bg-bg-elevated"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-text-muted mb-0.5">
                    {stat.label}
                  </p>
                  <p className="font-display text-sm font-semibold text-text-primary">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Portrait */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Portrait image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border relative z-10">
                <img
                  src="/images/portrait.jpg"
                  alt="Anindya Bhattacharya"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge 1 */}
              <motion.div
                className="absolute -top-2 -right-4 md:right-0 card-border glass px-4 py-2.5 z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-text-muted">
                  Currently exploring
                </p>
                <p className="font-display text-sm font-semibold text-text-primary">
                  Quant Strategies
                </p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute -bottom-2 -left-4 md:left-0 card-border glass px-4 py-2.5 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-text-muted">
                  Role
                </p>
                <p className="font-display text-sm font-semibold text-text-primary">
                  AI & ML Specialist
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-text-muted" />
      </motion.div>
    </section>
  );
}
