"use client";
import { FadeIn } from "../components/FadeIn";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Anindya-Dev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anindya-bhattacharya-dev/" },
  { icon: Mail, label: "Email", href: "mailto:anindyabhattacharya940@gmail.com" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6 whitespace-nowrap"
            style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
          >
            Get In Touch
          </h2>
          <p
            className="text-[#D7E2EA] font-light leading-relaxed mb-10"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          >
            Interested in working together? Let's connect and discuss your next
            project.
          </p>

          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/60 hover:border-[#D7E2EA] hover:text-[#D7E2EA] transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="max-w-content mx-auto text-center mt-20">
        <p className="font-mono text-sm text-[#D7E2EA]/30">
          © 2026 Anindya Bhattacharya. All rights reserved.
        </p>
      </div>
    </section>
  );
}

