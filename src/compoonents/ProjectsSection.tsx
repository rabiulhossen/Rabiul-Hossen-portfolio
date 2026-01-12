import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

import projectEcommerce from '../assets/rabiul.jpeg';
import projectTaskmanager from '../assets/rabiul.jpeg';
import projectWeather from '../assets/rabiul.jpeg';
import projectAnalytics from '../assets/rabiul.jpeg';
import projectRecipes from '../assets/rabiul.jpeg';
import projectPortfolio from '../assets/rabiul.jpeg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration. Built for scale and performance.',
    image: projectEcommerce,
    tech: ['React', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop, and team features.',
    image: projectTaskmanager,
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with 7-day forecasts, location search, and interactive charts.',
    image: projectWeather,
    tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics with beautiful data visualizations.',
    image: projectAnalytics,
    tech: ['React', 'D3.js', 'Tailwind', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Recipe Finder',
    description: 'Search and save recipes with filters for dietary preferences and ingredients.',
    image: projectRecipes,
    tech: ['React', 'Spoonacular API', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'Tool for developers to create and customize their portfolio websites with templates.',
    image: projectPortfolio,
    tech: ['React', 'Node.js', 'Tailwind', 'Markdown'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each one taught me something new and 
              helped me grow as a developer.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 border border-border/50 h-full"
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
