import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import { fadeInUp } from '../../utils/animations';
import { SOCIAL_LINKS } from '../../utils/constants';

/**
 * Contact section with animated form
 * Includes social links and contact information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
      
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-neon-blue font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            05. What's Next?
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm currently looking for internship and entry-level opportunities where I can contribute 
            my skills in full-stack development and AI/ML. Let's connect and build something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-blue focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-blue focus:outline-none transition-all duration-300"
                  placeholder="ankit@example.com"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-blue focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit button */}
              <AnimatedButton
                variant="primary"
                size="lg"
                className="w-full"
              >
                {isSubmitted ? (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </AnimatedButton>
            </form>
          </motion.div>

          {/* Contact info and social links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact info cards */}
            <div className="space-y-4">
              <motion.div
                className="glass p-6 rounded-xl border border-white/10 cursor-hover group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:ankitsahu41190@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                      ankitsahu41190@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-xl border border-white/10 cursor-hover group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <a
                    href="https://www.google.com/maps?q=Jabalpur,+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    Jabalpur, Madhya Pradesh
                  </a>
                </div>
              </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Find Me On</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 cursor-hover group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-gray-400 group-hover:text-neon-blue transition-colors text-xl">
                      {social.name[0]}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;