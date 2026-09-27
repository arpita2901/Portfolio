import { useEffect, useState } from 'react';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

const roles = ['Web Developer', 'Creative Problem Solver', 'Tech Enthusiast'];

function TypeWriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="typewriter">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}

function CodeWindow() {
  const codeLines = [
    { indent: 0, tokens: [{ text: 'const', color: 'keyword' }, { text: ' ', color: 'default' }, { text: 'developer', color: 'variable' }, { text: ' = ', color: 'operator' }, { text: '{', color: 'default' }] },
    { indent: 1, tokens: [{ text: 'name', color: 'property' }, { text: ': ', color: 'default' }, { text: "'Arpita Acharya'", color: 'string' }, { text: ',', color: 'default' }] },
    { indent: 1, tokens: [{ text: 'role', color: 'property' }, { text: ': ', color: 'default' }, { text: "'Web Developer'", color: 'string' }, { text: ',', color: 'default' }] },
    { indent: 1, tokens: [{ text: 'passion', color: 'property' }, { text: ': ', color: 'default' }, { text: "'Building Ideas'", color: 'string' }, { text: ',', color: 'default' }] },
    { indent: 1, tokens: [{ text: 'skills', color: 'property' }, { text: ': ', color: 'default' }, { text: '[', color: 'default' }, { text: "'React'", color: 'string' }, { text: ', ', color: 'default' }, { text: "'JS'", color: 'string' }, { text: ']', color: 'default' }, { text: ',', color: 'default' }] },
    { indent: 0, tokens: [{ text: '};', color: 'default' }] },
    { indent: 0, tokens: [{ text: '', color: 'default' }] },
    { indent: 0, tokens: [{ text: 'function', color: 'keyword' }, { text: ' ', color: 'default' }, { text: 'create', color: 'function' }, { text: '() {', color: 'default' }] },
    { indent: 1, tokens: [{ text: 'return', color: 'keyword' }, { text: ' ', color: 'default' }, { text: "'Digital Experiences'", color: 'string' }, { text: ';', color: 'default' }] },
    { indent: 0, tokens: [{ text: '}', color: 'default' }] },
  ];

  return (
    <div className="code-window glass-card">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="code-title">
          <Terminal size={14} />
          <span>developer.js</span>
        </div>
      </div>
      <div className="code-body">
        {codeLines.map((line, i) => (
          <div key={i} className="code-line" style={{ paddingLeft: `${line.indent * 24}px` }}>
            <span className="line-number">{i + 1}</span>
            <span className="line-content">
              {line.tokens.map((token, j) => (
                <span key={j} className={`token ${token.color}`}>{token.text}</span>
              ))}
            </span>
          </div>
        ))}
        <div className="code-line typing-line">
          <span className="line-number">{codeLines.length + 1}</span>
          <span className="line-content">
            <span className="token function">create</span>
            <span className="token default">();</span>
            <span className="cursor-code">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${mounted ? 'animate-in' : ''}`}>
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Building Web Experience</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Arpita Acharya</span>
            </h1>
            <h2 className="hero-subtitle">
              <TypeWriter />
            </h2>
            <p className="hero-description">
              I'm a passionate developer exploring the world of web technologies,
              creative problem-solving, and building projects that turn ideas into reality.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>
          </div>
          <div className={`hero-visual ${mounted ? 'animate-in delay' : ''}`}>
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
