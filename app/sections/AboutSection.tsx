"use client";
import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]"
    >
      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10 max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="I'm a BTech CSE (AI/ML) student at Brainware University, currently in my third year. My academic focus is on artificial intelligence and machine learning, where I work on understanding core concepts and applying them to practical problem-solving scenarios. I build clean, testable prototypes and iterate with feedback, aiming for solutions that are practical, explainable, and ready for real-world use."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", maxWidth: "700px" }}
        />

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { label: "Program", value: "BTech CSE" },
            { label: "Specialization", value: "AI/ML" },
            { label: "Year", value: "3rd Year" },
            { label: "University", value: "Brainware University" },
          ].map((stat) => (
            <FadeIn key={stat.label} delay={0.1}>
              <div className="border border-[#D7E2EA]/20 rounded-2xl px-5 py-3 bg-[#0C0C0C]">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[#D7E2EA]/50 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-[#D7E2EA]">
                  {stat.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 sm:mt-10 md:mt-14">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

