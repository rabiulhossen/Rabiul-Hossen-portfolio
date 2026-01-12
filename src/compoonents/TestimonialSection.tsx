import { Quote } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ui/ScrollReveal';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'Alex is an exceptional developer who consistently delivers high-quality work. Their attention to detail and user-focused approach made our product shine.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Developer at StartupXYZ',
    content: 'Working with Alex was a pleasure. They brought creative solutions to complex problems and always kept the team motivated with their positive energy.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Davis',
    role: 'UX Designer at DesignHub',
    content: 'Alex has a rare combination of technical skills and design sensibility. They translate designs into pixel-perfect implementations every time.',
    avatar: '👩‍🎨',
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kind words from colleagues and collaborators
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border/50 h-full">
                  <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
                  
                  <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
