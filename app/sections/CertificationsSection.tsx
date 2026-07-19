"use client";
import { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { ArrowUpRight, X } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Generative AI – Art of the Possible",
    issuer: "AWS Training and Certification",
    date: "Jan 20, 2025",
    tags: ["Generative AI"],
    link: "/certificates/aws-generative-ai-art-of-possible.png",
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS x Forage",
    date: "Oct 19, 2025",
    tags: ["Solutions Architecture"],
    link: "/certificates/aws-forage-solutions-architecture.png",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte x Forage",
    date: "Oct 18, 2025",
    tags: ["Data Analytics"],
    link: "/certificates/deloitte-forage-data-analytics.png",
  },
  {
    title: "Build Your Generative AI Productivity Skills",
    issuer: "Microsoft x LinkedIn Learning",
    date: "Jan 22, 2025",
    tags: ["Generative AI", "Productivity"],
    link: "/certificates/linkedin-microsoft-genai-productivity.png",
  },
  {
    title: "Tech Event Participation (IBM Technovate)",
    issuer: "Brainware University x IBM",
    date: "Apr 1–2, 2025",
    tags: ["Tech Events"],
    link: "/certificates/brainware-ibm-technovate.png",
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    date: "Jan 21, 2025",
    tags: ["Prompt Engineering"],
    link: "/certificates/linkedin-prompt-engineering-genai.png",
  },
  {
    title: "PostgreSQL: Become an SQL Developer",
    issuer: "Simplilearn SkillUp",
    date: "Apr 22, 2025",
    tags: ["PostgreSQL", "SQL"],
    link: "/certificates/simplilearn-postgresql-sql.png",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA x Forage",
    date: "Oct 19, 2025",
    tags: ["Data Analytics", "GenAI"],
    link: "/certificates/tata-forage-genai-analytics.png",
  },
  {
    title: "Samsung Innovation Campus: Artificial Intelligence",
    issuer: "Samsung Innovation Campus",
    date: "Sep 03–Nov 15, 2025",
    tags: ["Artificial Intelligence"],
    link: "/certificates/samsung-innovation-campus-ai.png",
  },
];

export function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <>
      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-[#0C0C0C] border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeCert}
              alt="Certificate"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <section
        id="certifications"
        className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      >
        <FadeIn>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Certificates
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.06}>
              <div className="border border-[rgba(12,12,12,0.15)] rounded-2xl p-6 md:p-8 bg-white group hover:border-[#0C0C0C]/30 transition-colors h-full flex flex-col">
                <div className="mb-4 flex-1">
                  <h3 className="text-[#0C0C0C] font-semibold text-lg mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[#0C0C0C]/50 text-sm">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[rgba(12,12,12,0.15)] rounded-full px-3 py-1 text-xs text-[#0C0C0C]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveCert(cert.link)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[rgba(12,12,12,0.15)] text-sm text-[#0C0C0C]/60 hover:border-[#0C0C0C] hover:text-[#0C0C0C] transition-all group/btn shrink-0 ml-3"
                  >
                    View
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
