import { ExternalLink, Gamepad2, Coins, User } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const projects = [
  {
    title: 'Currency Converter',
    description: 'A responsive currency conversion website that allows users to select currencies and view converted values using an exchange-rate API. Features real-time rates and a clean, intuitive interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    icon: Coins,
    color: 'purple',
    liveUrl: 'https://arpita2901.github.io/Currency-Exchange/',
    githubUrl: 'https://github.com/arpita2901/Currency-Exchange',
    features: ['Real-time exchange rates', 'Multiple currency support', 'Responsive design'],
  },
  {
    title: 'Interactive Web Game',
    description: 'A browser-based game featuring interactive gameplay, user-friendly controls, and a responsive interface. Built with vanilla JavaScript to demonstrate core programming concepts.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Gamepad2,
    color: 'blue',
    liveUrl: 'https://arpita2901.github.io/stone-paper-scissors/',
    githubUrl: 'https://github.com/arpita2901/stone-paper-scissors',
    features: ['Interactive gameplay', 'Score tracking', 'Smooth animations'],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio showcasing my skills, projects, and journey as an aspiring developer. Features smooth animations, dark theme, and modern design principles.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: User,
    color: 'cyan',
    liveUrl: 'http://localhost:5173',
    githubUrl: '#',
    features: ['Responsive layout', 'Smooth animations', 'Modern UI design'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">Each project represents a step in my learning journey</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card glass-card reveal`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className={`project-visual ${project.color}`}>
                <project.icon size={48} className="project-icon" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" title="Live Demo" aria-label={`Live demo of ${project.title}`}>
                      <ExternalLink size={18} />
                    </a>
                    <a href={project.githubUrl} className="project-link" title="GitHub Repository" aria-label={`GitHub repository of ${project.title}`}>
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`tech-tag ${project.color}`}>{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.liveUrl} className="btn btn-primary btn-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary btn-sm">
                    <GithubIcon size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
