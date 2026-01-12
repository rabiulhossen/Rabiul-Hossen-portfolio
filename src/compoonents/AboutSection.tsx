import { Code, Heart, Lightbulb, Users } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import profilePhoto from '../assets/rabiul.jpeg';
const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that others can understand and build upon.',
  },
  {
    icon: Heart,
    title: 'User-First',
    description: 'Every pixel matters. I design with empathy, prioritizing user experience above all.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Technology evolves daily. I stay curious and embrace new tools and frameworks.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great products are built by great teams. I value open communication and teamwork.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi there! I'm a passionate Frontend Developer with over 4 years of experience 
                  building modern web applications. My journey started when I discovered the magic 
                  of transforming designs into interactive experiences.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in React.js ecosystem, creating performant and accessible applications 
                  that users love. When I'm not coding, you'll find me exploring new design trends, 
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe that great software is built at the intersection of technology and design. 
                  My goal is to create experiences that are not just functional, but delightful.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl shadow-soft overflow-hidden border border-border/50">
                  <img 
                    src={profilePhoto} 
                    alt="Alex Chen - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
