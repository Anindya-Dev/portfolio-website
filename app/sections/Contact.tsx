"use client";

import { Github, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { MagneticButton } from "../components/MagneticButton";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Anindya-Dev" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anindya-bhattacharya-83b68a254/",
  },
  { icon: Twitter, label: "Twitter", href: "https://x.com/dev_anindya" },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/anindya.bhattacharya.50",
  },
  { icon: Mail, label: "Email", href: "mailto:anindyaholycross@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-[clamp(5rem,12vw,9rem)] overflow-hidden">
      {/* Background blobs matching hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent)",
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-2), transparent)",
        }}
      />

      <div className="max-w-content mx-auto px-6 md:px-16 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.01em] text-text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-[1.0625rem] leading-[1.6] text-text-secondary mb-10">
              Interested in working together? Let's connect and discuss your next
              project.
            </p>

            <div className="flex items-center justify-center gap-4">
              {socials.map((social) => (
                <MagneticButton key={social.label} strength={0.2}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center card-border hover:border-accent hover:text-accent transition-colors"
                    aria-label={social.label}
                    data-cursor-hover
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
