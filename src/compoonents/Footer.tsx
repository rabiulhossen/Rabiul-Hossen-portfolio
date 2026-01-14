import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rabiulhossen/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rabiulhossen/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/nomand_rabiul', label: 'Twitter' },
    { icon: Mail, href: 'mailto:rabiulhossen001@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 border-t border-border">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '20%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="inline-block group">
                <span className="text-3xl font-bold text-gradient relative">
                𝕽𝖆𝖇𝖎𝖚𝕷
                  <motion.span
                    className="absolute -top-1 -right-3"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                  </motion.span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Crafting exceptional digital experiences with passion and precision. 
                Let's build something amazing together.
              </p>
              
              {/* Social links with enhanced hover effects */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <motion.span
                        className="w-0 h-[2px] bg-primary rounded-full group-hover:w-3 transition-all duration-300"
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-sm">
                Have a project in mind or just want to chat? I'm always open to new opportunities.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
            <motion.p
              className="text-muted-foreground text-sm flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} Rabiul. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              & lots of ☕
            </motion.p>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs font-medium">Back to Top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
