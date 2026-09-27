import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, well-structured code' },
  { icon: Lightbulb, title: 'Creative Thinking', desc: 'Finding innovative solutions to problems' },
  { icon: Rocket, title: 'Fast Learner', desc: 'Quickly picking up new technologies' },
  { icon: Users, title: 'Collaborative', desc: 'Enjoying teamwork and knowledge sharing' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate About Technology</h2>
          <p className="section-subtitle">A developer who loves turning ideas into interactive experiences</p>
        </div>

        <div className="about-content">
          <div className="about-text reveal-left">
            <h3 className="about-heading">
              Hello! I'm <span className="gradient-text">Arpita</span>, a Computer Science
              student with a deep passion for web development.
            </h3>
            <p className="about-paragraph">
              My journey into web development started with curiosity about how websites
              work, and it has grown into a genuine passion for creating digital experiences.
              I enjoy learning new technologies, experimenting with ideas, and building
              functional websites that solve real problems.
            </p>
            <p className="about-paragraph">
              Through hands-on projects, I've been improving my coding skills and
              understanding of web technologies. I believe in writing clean, efficient
              code and creating interfaces that are both beautiful and user-friendly.
              I'm always eager to learn more and take on new challenges that help me grow
              as a developer.
            </p>
            <p className="about-paragraph">
              When I'm not coding, you can find me exploring new frameworks, contributing
              to open-source projects, or collaborating with fellow developers on
              innovative ideas.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card glass-card reveal-right" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="highlight-icon">
                  <item.icon size={24} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
