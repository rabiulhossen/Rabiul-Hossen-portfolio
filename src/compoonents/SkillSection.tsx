import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

const skills = [
  { name: 'React.js', icon: '⚛️', color: 'from-cyan-500/20 to-blue-500/20' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-500/20 to-indigo-500/20' },
  { name: 'JavaScript', icon: '💛', color: 'from-yellow-400/20 to-amber-500/20' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-400/20 to-cyan-500/20' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-400/20 to-slate-500/20' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500/20 to-emerald-500/20' },
  { name: 'HTML5', icon: '🌐', color: 'from-orange-500/20 to-red-500/20' },
  { name: 'CSS3', icon: '🎭', color: 'from-blue-400/20 to-purple-500/20' },
  { name: 'Git', icon: '🐙', color: 'from-orange-400/20 to-red-400/20' },
  { name: 'Figma', icon: '🎯', color: 'from-pink-500/20 to-purple-500/20' },
  { name: 'REST APIs', icon: '🔗', color: 'from-green-400/20 to-teal-500/20' },
  { name: 'Framer Motion', icon: '✨', color: 'from-purple-500/20 to-pink-500/20' },
];

const tools = [
  { name: 'VS Code', description: 'Primary IDE' },
  { name: 'GitHub', description: 'Version Control' },
  { name: 'Vercel', description: 'Deployment' },
  { name: 'Postman', description: 'API Testing' },
  { name: 'Chrome DevTools', description: 'Debugging' },
  { name: 'npm/yarn', description: 'Package Manager' },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </ScrollReveal>

          {/* Skills Grid */}
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <StaggerItem key={skill.name}>
                  <motion.div
                    className={`bg-gradient-to-br ${skill.color} backdrop-blur-sm rounded-xl p-4 text-center border border-border/50 shadow-soft h-full`}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="font-bold text-sm">{skill.name}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Tools Section */}
          <ScrollReveal>
            <h3 className="text-2xl font-semibold mb-8 text-center">Daily Tools</h3>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <StaggerItem key={tool.name}>
                  <motion.div
                    className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50 shadow-soft"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">{tool.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-left">{tool.name}</p>
                      <p className="text-sm text-muted-foreground text-left">{tool.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
