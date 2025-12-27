import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import ExperienceCard from '../ui/ExperienceCard';
import { fadeInUp } from '../../utils/animations';

/**
 * Experience section with vertical timeline
 * Displays work history with parallax effects
 */
const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

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
            04. Journey
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Experience cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} {...exp} index={index} />
            ))}
          </div>
        </div>

        {/* Download resume button */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
      
  href="C:\Users\ankit\OneDrive\Desktop\portfolio\public\ankit-resume.pdf"
  target="_blank"
  rel="noopener noreferrer"

            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 cursor-hover group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;