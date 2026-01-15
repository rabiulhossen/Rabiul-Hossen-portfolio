import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

const blogPosts = [
  {
    title: 'Building Scalable React Applications with Modern Patterns',
    excerpt: 'Learn how to structure your React projects for maintainability and scale using composition patterns, custom hooks, and smart state management.',
    category: 'React',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    image: '⚛️',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'The Art of Micro-Interactions in UI Design',
    excerpt: 'Discover how subtle animations and feedback can transform user experience and make your interfaces feel alive and responsive.',
    category: 'UI/UX',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    image: '✨',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Mastering TypeScript for Frontend Development',
    excerpt: 'A comprehensive guide to leveraging TypeScript features that will make your code more robust and developer-friendly.',
    category: 'TypeScript',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    image: '📘',
    gradient: 'from-blue-600/20 to-indigo-500/20',
  },
  {
    title: 'CSS Grid vs Flexbox: When to Use What',
    excerpt: 'Understanding the strengths of each layout system and how to combine them for powerful, responsive designs.',
    category: 'CSS',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    image: '🎨',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-18 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts on frontend development, design patterns, and building better user experiences
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <StaggerItem key={post.title}>
                <motion.article
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 border border-border/50 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  <div className={`aspect-[2/1] bg-gradient-to-br ${post.gradient} flex items-center justify-center text-6xl`}>
                    {post.image}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="w-fit group/btn">
                      Read More
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight size={18} />
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
