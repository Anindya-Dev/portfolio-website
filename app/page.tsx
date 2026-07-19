import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { TechStackSection } from "./sections/TechStackSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
