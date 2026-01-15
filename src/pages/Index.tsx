import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import { PageTransition, SectionTransition } from '../compoonents/PageTransition';
import { AnimatedBackground } from '../compoonents/AnimatedBackground';
import { LoadingScreen } from '../compoonents/LoadingScreeen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <PageTransition>
            <motion.main
              className="min-h-screen bg-background relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedBackground />
              <Navbar />
              
              <SectionTransition>
                <HeroSection />
              </SectionTransition>
              
              <SectionTransition delay={0.1}>
                <AboutSection />
              </SectionTransition>
              
              <SectionTransition delay={0.1}>
                <ProjectsSection />
              </SectionTransition>
              
              <SectionTransition delay={0.1}>
                <SkillsSection />
              </SectionTransition>
              
              <SectionTransition delay={0.1}>
                <BlogSection />
              </SectionTransition>
              
              <SectionTransition delay={0.1}>
                <TestimonialsSection />
              </SectionTransition>
              
              <SectionTransition delay={0.1}>
                <ContactSection />
              </SectionTransition>
              
              <Footer />
            </motion.main>
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;

