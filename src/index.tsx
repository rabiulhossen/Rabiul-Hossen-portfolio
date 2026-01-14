import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './compoonents/Navbar';
import { HeroSection } from './compoonents/HeroSection';
import { AboutSection } from './compoonents/AboutSection';
import { ProjectsSection } from './compoonents/ProjectsSection';
import { SkillsSection } from './compoonents/SkillSection'
import { BlogSection } from './compoonents/BlogSection';
import { TestimonialsSection } from './compoonents/TestimonialSection';
import { ContactSection } from './compoonents/ContactSection';
import { Footer } from './compoonents/Footer';
import { AnimatedBackground } from './compoonents/AnimatedBackground';
import { LoadingScreen } from './compoonents/LoadingScreeen';

import { ParallexSection } from './compoonents/ParallexSection';

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
          <motion.main
            className="min-h-screen bg-background relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedBackground />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ParallexSection/>
            <BlogSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
