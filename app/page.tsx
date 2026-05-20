import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { AnimationsSection } from "@/components/animations-section"
import { ContactSection, Footer } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <AnimationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
