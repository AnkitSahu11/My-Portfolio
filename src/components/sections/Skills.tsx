import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import SkillCard from '../ui/SkillCard';
import { fadeInUp } from '../../utils/animations';

/**
 * Skills section with animated 3D skill cards
 * Organized by category with progress indicators
 */
const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      
      {/* Animated background shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />

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
            02. Technical Arsenal
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-20">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category title */}
              <div className="mb-8">
                <motion.h3
                  className="text-3xl font-bold text-white mb-2 inline-block"
                  whileHover={{ x: 10, color: '#00f0ff' }}
                >
                  {category.category}
                </motion.h3>
                <motion.div
                  className="h-1 bg-gradient-to-r from-neon-blue to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.3 }}
                />
              </div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: 'Years Experience', value: '8+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Happy Clients', value: '30+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass rounded-xl border border-white/10 cursor-hover group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;