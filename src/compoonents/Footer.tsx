import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <a href="#home" className="text-2xl font-bold text-gradient">
                Dev.
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                Crafting digital experiences with care
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@alexchen.dev"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
