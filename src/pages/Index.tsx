import { Navbar } from "../compoonents/Navbar";
import { HeroSection } from "../compoonents/HeroSection";
import { AboutSection } from "../compoonents/AboutSection";
import { ProjectsSection } from "../compoonents/ProjectsSection";
import { SkillsSection } from "../compoonents/SkillSection";
import { BlogSection } from "../compoonents/BlogSection";
import { TestimonialsSection } from "../compoonents/TestimonialSection";
import { ContactSection } from "../compoonents/ContactSection";
import { Footer } from "../compoonents/Footer";
import '..//index.css'
import '../App.css'


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection/>+
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
