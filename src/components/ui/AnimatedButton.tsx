import { motion } from 'framer-motion';
import { useMagneticEffect } from '../../hooks/useCursorPosition';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

/**
 * Animated button with magnetic effect and hover animations
 * Supports different variants and sizes
 */
const AnimatedButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
}: AnimatedButtonProps) => {
  const { position, handlers } = useMagneticEffect(0.3);

  const baseClasses = 'relative cursor-hover overflow-hidden font-semibold transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:shadow-neon-blue/50',
    secondary: 'bg-dark-700 text-white hover:bg-dark-600',
    outline: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: variant === 'primary' ? 0.8 : 0 }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        whileHover={{ translateX: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Button text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...handlers}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...handlers}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;