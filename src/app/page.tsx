import Navbar from "@/components/Navbar"
import FloatBar from "@/components/FloatBar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillSection from "@/components/SkillSection"
import ProjectSection from "@/components/ProjectSection"
import ExperienceSection from "@/components/ExperienceSection"
import ContactSection from "@/components/ContactSection"
import TestimonialSection from "@/components/TestimonialSection"

function Home() {
  return (
    <div className="relative pb-6">
      <Navbar />
      <FloatBar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  )
}

export default Home