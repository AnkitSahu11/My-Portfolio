import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
  delay?: number;
}

/**
 * 3D rotating skill card with animated progress bar
 * Displays skill name, icon, and proficiency level
 */
const SkillCard = ({ name, level, icon, delay = 0 }: SkillCardProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedLevel((prev) => {
            if (prev >= level) {
              clearInterval(interval);
              return level;
            }
            return prev + 1;
          });
        }, 20);
        
        return () => clearInterval(interval);
      }, delay * 100);

      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <motion.div
      className="group relative cursor-hover"
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      onViewportEnter={() => setIsVisible(true)}
      whileHover={{ 
        y: -5,
        rotateY: 5,
        scale: 1.05,
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="glass p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 backdrop-blur-sm">
        {/* Icon */}
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Skill name */}
        <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-neon-blue transition-colors">
          {name}
        </h3>

        {/* Progress bar container */}
        <div className="relative">
          {/* Background bar */}
          <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
            {/* Animated progress bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink relative"
              initial={{ width: '0%' }}
              animate={{ width: `${animatedLevel}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow" />
            </motion.div>
          </div>

          {/* Level percentage */}
          <motion.div
            className="absolute -top-8 right-0 text-2xl font-bold gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: animatedLevel > 0 ? 1 : 0, 
              scale: animatedLevel > 0 ? 1 : 0.5 
            }}
            transition={{ duration: 0.3 }}
          >
            {animatedLevel}%
          </motion.div>
        </div>

        {/* Proficiency label */}
        <div className="mt-3 text-xs text-gray-400 font-mono">
          {level >= 90 ? 'Expert' : level >= 75 ? 'Advanced' : level >= 60 ? 'Intermediate' : 'Familiar'}
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;