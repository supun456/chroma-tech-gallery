
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-white/20 rounded-lg focus:border-current focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                  style={{ borderColor: formData.name ? 'var(--neon-primary)' : undefined }}
                  placeholder="Your Name"
                />
                <label 
                  className="absolute left-4 -top-2.5 px-2 text-sm font-mono transition-all duration-300 bg-black peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                  style={{ color: 'var(--neon-primary)' }}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-white/20 rounded-lg focus:border-current focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                  style={{ borderColor: formData.email ? 'var(--neon-primary)' : undefined }}
                  placeholder="your@email.com"
                />
                <label 
                  className="absolute left-4 -top-2.5 px-2 text-sm font-mono transition-all duration-300 bg-black peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                  style={{ color: 'var(--neon-primary)' }}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border-2 border-white/20 rounded-lg focus:border-current focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer resize-none"
                  style={{ borderColor: formData.message ? 'var(--neon-primary)' : undefined }}
                  placeholder="Your message..."
                />
                <label 
                  className="absolute left-4 -top-2.5 px-2 text-sm font-mono transition-all duration-300 bg-black peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                  style={{ color: 'var(--neon-primary)' }}
                >
                  Message
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full neon-button py-3 text-lg"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 glow-text">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: 'var(--neon-primary)' }}
                  >
                    <Mail className="h-5 w-5" style={{ color: 'var(--neon-primary)' }} />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <div className="text-white">john.doe@example.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: 'var(--neon-primary)' }}
                  >
                    <Github className="h-5 w-5" style={{ color: 'var(--neon-primary)' }} />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">GitHub</div>
                    <div className="text-white">github.com/johndoe</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: 'var(--neon-primary)' }}
                  >
                    <Linkedin className="h-5 w-5" style={{ color: 'var(--neon-primary)' }} />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">LinkedIn</div>
                    <div className="text-white">linkedin.com/in/johndoe</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Response
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, 
                feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
