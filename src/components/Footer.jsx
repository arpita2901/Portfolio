import { Code2, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <Code2 size={24} />
              <span>Arpita Acharya</span>
            </a>
            <p className="footer-tagline">Building ideas into interactive digital experiences</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/arpita-acharya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/arpita-acharya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:arpita@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Designed & Built by <span className="gradient-text">Arpita Acharya</span></p>
          <p className="footer-copy">
            <Heart size={14} className="heart-icon" /> {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
