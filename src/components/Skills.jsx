import { Code2, Globe, Wrench, Palette } from 'lucide-react';

const skillCategories = [
  {
    icon: Globe,
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    color: 'purple',
  },
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C'],
    color: 'blue',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code'],
    color: 'cyan',
  },
];

const additionalSkills = ['Responsive Design', 'REST APIs', 'JSON', 'npm', 'Figma Basics'];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category glass-card reveal`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className={`skill-category-icon ${category.color}`}>
                <category.icon size={28} />
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className={`skill-badge ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills reveal">
          <h4 className="additional-title">Also Exploring</h4>
          <div className="additional-list">
            {additionalSkills.map((skill, i) => (
              <span key={i} className="additional-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
