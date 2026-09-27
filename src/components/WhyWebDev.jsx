import { Heart, Zap, Target, Users } from 'lucide-react';

const reasons = [
  { icon: Heart, title: 'Passion for Creation', desc: 'Web development lets me transform abstract ideas into tangible, interactive experiences that people can use and enjoy.' },
  { icon: Zap, title: 'Instant Impact', desc: 'Unlike many fields, web development provides immediate feedback — write code, see results, iterate, and improve in real-time.' },
  { icon: Target, title: 'Problem-Solving', desc: 'Every project presents unique challenges that push me to think critically and develop creative solutions.' },
  { icon: Users, title: 'Community & Collaboration', desc: 'The web dev community is incredibly supportive, with endless opportunities to learn, share, and build together.' },
];

export default function WhyWebDev() {
  return (
    <section className="why-webdev section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Why Web Development?</span>
          <h2 className="section-title">What Drives Me</h2>
        </div>

        <div className="why-content reveal-left">
          <blockquote className="why-quote">
            "I love how web development transforms ideas into experiences people can
            actually interact with. From designing interfaces to bringing them to life
            with code, I enjoy every step of the process. I'm excited to learn,
            collaborate, and contribute to meaningful projects with the club."
          </blockquote>
          <p className="why-author">— Arpita Acharya</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className={`reason-card glass-card reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="reason-icon">
                <reason.icon size={24} />
              </div>
              <h4>{reason.title}</h4>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
