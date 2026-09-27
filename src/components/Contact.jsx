import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree integration: replace action URL with your Formspree endpoint
    // Example: action="https://formspree.io/f/your-form-id"
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Have a question or want to collaborate? Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal-left">
            <h3>Let's build something together</h3>
            <p>
              I'm always interested in discussing new projects, creative ideas, or
              opportunities to be part of the web development community.
            </p>
            <div className="contact-details">
              <a href="mailto:arpitariya2006@gmail.com" className="contact-item">
                <div className="contact-item-icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">arpitariya2006@gmail.com</span>
                </div>
              </a>
              <a href="https://github.com/arpita2901" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-item-icon"><GithubIcon size={20} /></div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/arpita2901</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/arpita-acharya-653974402?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-item-icon"><LinkedinIcon size={20} /></div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/arpita-acharya</span>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon"><MapPin size={20} /></div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">West Bengal, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper reveal-right">
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
