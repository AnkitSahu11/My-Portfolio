import { motion } from 'framer-motion';
import { personalInfo, education, certifications, achievements } from '../../data/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';
import { useFadeIn } from '../../hooks/useScrollAnimation';

/**
 * About section with animated timeline and bio
 * Displays personal information, education, certifications, and achievements
 */
const About = () => {
  const bioRef = useFadeIn('right');
  const imageRef = useFadeIn('left');

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
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
            01. Introduction
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image side */}
          <div ref={imageRef}>
            <motion.div
              className="relative group cursor-hover"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image container with initials */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-square bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <div className="text-9xl gradient-text font-bold">AS</div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-neon-blue/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
              </div>

              {/* Border decoration */}
              <div className="absolute -inset-4 border-2 border-neon-blue/30 rounded-2xl -z-10 group-hover:border-neon-purple/50 transition-all duration-300" />
              
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"
              />
            </motion.div>
          </div>

          {/* Bio side */}
          <div ref={bioRef} className="space-y-6">
            <motion.div
              className="space-y-4 text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p>{personalInfo.bio}</p>
              
              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-neon-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-mono text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-neon-purple">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-mono text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-neon-green">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="font-mono text-sm">{personalInfo.availability}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Key Achievements */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Key Achievements</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Education</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎓</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-neon-purple font-semibold mb-2 text-sm">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 font-mono">{edu.year}</span>
                      <span className="text-neon-green font-semibold">{edu.honors}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 cursor-hover group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-neon-blue font-semibold text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs font-mono mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;