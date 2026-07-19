"use client";
import { FadeIn } from "../components/FadeIn";
import { Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-[#0C0C0C]"
      style={{ overflow: "clip" }}
    >
      {/* ── Navbar ─────────────────────────────────────────── */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-12 lg:px-16 pt-6 md:pt-8 relative z-20">
          <a
            href="#home"
            className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#D7E2EA] hover:opacity-70 transition-opacity"
          >
            AB
          </a>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hidden sm:block text-xs md:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* ── Hero body ─────────────────────────────────────── */}
      {/*
        Desktop: 55 / 45 grid.
        The right column constrains the image to a fixed box;
        the left column fills the remaining space.
      */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[55fr_45fr] px-6 md:px-12 lg:px-16 pb-10 lg:pb-0 gap-8 lg:gap-0">

        {/* ── Left: text ─────────────────────────────────── */}
        <div className="flex flex-col justify-center z-10 py-10 lg:py-16 lg:pr-12">

          <FadeIn delay={0.1} y={30} duration={0.8}>
            <span className="text-xs font-mono tracking-[0.3em] text-[#7C5CFF] uppercase mb-3 block">
              AI / ML Engineer
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={40} duration={0.9}>
            <h1
              className="font-black uppercase leading-[0.9] tracking-tight text-[#D7E2EA] mb-5"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 7rem)" }}
            >
              <span className="hero-heading block">Anindya</span>
              <span className="hero-heading block">Bhattacharya</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20} duration={0.7}>
            <p
              className="text-[#D7E2EA]/55 font-light leading-relaxed max-w-[440px] mb-9"
              style={{ fontSize: "clamp(0.85rem, 1.15vw, 1.08rem)" }}
            >
              Building intelligent systems through machine learning and
              computer vision — practical, explainable solutions ready for
              real-world use.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <div className="flex flex-wrap items-center gap-3">
              {/* Contact CTA */}
              <a
                href="#contact"
                className="rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white inline-block transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)",
                  boxShadow:
                    "0px 4px 20px rgba(181,1,167,0.3),4px 4px 12px #7721B1 inset",
                  outline: "2px solid white",
                  outlineOffset: "-3px",
                }}
              >
                Contact Me
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/70 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-all inline-block"
              >
                View Projects
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download="Anindya_Bhattacharya_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest text-[#4FE3C1] border border-[#4FE3C1]/30 hover:border-[#4FE3C1]/70 hover:bg-[#4FE3C1]/8 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.65} y={20}>
            <div className="flex gap-8 mt-12 pt-8 border-t border-[#D7E2EA]/10">
              <div>
                <p className="text-2xl font-black text-[#D7E2EA]">6+</p>
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mt-0.5">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#D7E2EA]">9+</p>
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mt-0.5">Certificates</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#D7E2EA]">8.32</p>
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mt-0.5">CGPA</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Right: portrait ────────────────────────────── */}
        {/*
          Rules applied here:
          • The column itself never overflows: items-center + justify-center
          • Inner wrapper is capped at 480×600 with 48px padding on all sides
            that face a viewport edge (top, right, bottom via py-12 pr-12 on col)
          • The glow div uses a negative inset (-32px) so it bleeds outside
            the image but is contained by the parent wrapper (which has no
            overflow:hidden).  Because the parent wrapper has no clip, the glow
            is fully visible on every side.
          • The mask-image is applied to <img> itself, so it fades the photo
            internally — the parent wrapper does NOT clip it.
        */}
        <FadeIn
          delay={0.4}
          y={30}
          duration={1}
          className="hidden lg:flex items-center justify-center"
          style={{ paddingTop: 48, paddingRight: 48, paddingBottom: 48 }}
        >
          {/*
            Wrapper: no overflow-hidden so the glow can bleed outside the img.
            Width fills the column; height is capped at 600px.
          */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{ maxWidth: 480, maxHeight: 600 }}
          >
            {/* Glow blob — extends 40px outside the circle on every side */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                inset: -40,
                background:
                  "radial-gradient(ellipse at 50% 55%, rgba(124,92,255,0.28) 0%, rgba(79,227,193,0.12) 45%, transparent 72%)",
                filter: "blur(32px)",
                borderRadius: "50%",
              }}
            />

            {/*
              Circle clip wrapper:
              - aspect-ratio:1 forces a square so border-radius:50% gives a perfect circle
              - overflow:hidden clips the white JPEG corners
              - The glow is outside this wrapper so it is NOT clipped
            */}
            <div
              className="relative z-10 w-full"
              style={{
                aspectRatio: "1",
                borderRadius: "50%",
                overflow: "hidden",
                maxWidth: 460,
                maxHeight: 460,
              }}
            >
              <img
                src="/images/portrait.jpg"
                alt="Anindya Bhattacharya"
                draggable={false}
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  /* Fade bottom quarter of the circle */
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 58%, transparent 92%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 58%, transparent 92%)",
                }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Mobile portrait (below text, smaller) */}
        <FadeIn
          delay={0.4}
          y={20}
          duration={0.8}
          className="lg:hidden flex justify-center pb-10"
        >
          <img
            src="/images/portrait.jpg"
            alt="Anindya Bhattacharya"
            draggable={false}
            className="w-48 sm:w-60 rounded-2xl object-cover object-top"
            style={{ maxHeight: 280 }}
          />
        </FadeIn>
      </div>
    </section>
  );
}
