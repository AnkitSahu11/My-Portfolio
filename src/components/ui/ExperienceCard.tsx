import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  index: number;
}

/**
 * Experience timeline card with scroll animations
 * Displays work experience with animated reveal
 */
const ExperienceCard = ({
  company,
  position,
  duration,
  location,
  description,
  technologies,
  index,
}: ExperienceCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`flex items-center gap-8 ${isEven ? '' : 'flex-row-reverse'}`}>
        {/* Timeline dot and line */}
        <div className="relative flex-shrink-0">
          <motion.div
            className="w-4 h-4 rounded-full bg-neon-blue relative z-10"
            whileInView={{ scale: [0, 1.5, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-neon-blue"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Connecting line */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue to-transparent" />
        </div>

        {/* Content card */}
        <motion.div
          className="glass p-6 rounded-xl flex-1 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-hover group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                  {position}
                </h3>
                <h4 className="text-lg text-neon-purple font-semibold">{company}</h4>
              </div>
              <motion.div
                className="text-sm text-gray-400 font-mono whitespace-nowrap ml-4"
                whileHover={{ scale: 1.05, color: '#00f0ff' }}
              >
                {duration}
              </motion.div>
            </div>
            <p className="text-sm text-gray-500">{location}</p>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {description.map((item, i) => (
              <motion.li
                key={i}
                className="text-gray-300 text-sm flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
              >
                <span className="text-neon-blue mt-1">▹</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-dark-900/50 text-neon-blue text-xs rounded-full border border-neon-blue/30 font-mono"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: '#00f0ff' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-neon-blue/0 group-hover:border-neon-blue/50 transition-all duration-300" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-neon-purple/0 group-hover:border-neon-purple/50 transition-all duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;