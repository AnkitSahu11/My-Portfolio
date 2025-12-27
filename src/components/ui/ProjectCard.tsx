import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  onClick: () => void;
}

/**
 * Animated project card with hover effects
 * Displays project information with smooth transitions
 */
const ProjectCard = ({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
  featured = false,
  onClick,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative cursor-pointer cursor-hover overflow-hidden rounded-xl bg-dark-800 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20 bg-neon-blue text-dark-900 px-3 py-1 rounded-full text-xs font-bold">
          FEATURED
        </div>
      )}

      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          transition={{ duration: 0.3 }}
        />

        {/* Tech stack badges */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {tech.slice(0, 3).map((item, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 bg-dark-900/80 backdrop-blur-sm rounded text-xs text-neon-blue border border-neon-blue/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item}
            </motion.span>
          ))}
          {tech.length > 3 && (
            <motion.span
              className="px-2 py-1 bg-dark-900/80 backdrop-blur-sm rounded text-xs text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              +{tech.length - 3} more
            </motion.span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        {/* Action buttons */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 px-4 py-2 bg-neon-blue text-dark-900 rounded font-semibold text-center hover:bg-neon-purple transition-colors"
          >
            View Live
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 px-4 py-2 border border-neon-blue text-neon-blue rounded font-semibold text-center hover:bg-neon-blue/10 transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        animate={{
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)'
            : '0 0 0px rgba(0, 240, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;