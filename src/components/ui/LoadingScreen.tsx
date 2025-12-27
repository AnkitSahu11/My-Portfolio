import { motion, AnimatePresence } from 'framer-motion';
import { usePreloader } from '../../hooks/usePreloader';

/**
 * Cinematic loading screen with percentage counter
 * Displays loading progress and fades out smoothly
 */
const LoadingScreen = () => {
  const { progress, isLoading } = usePreloader(2500);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />
          
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Logo/Name animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-bold gradient-text">
                AS
              </h1>
            </motion.div>

            {/* Progress counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="text-8xl md:text-9xl font-bold text-white mb-8">
                {Math.floor(progress)}
                <span className="text-neon-blue">%</span>
              </div>

              {/* Progress bar */}
              <div className="w-64 md:w-96 mx-auto h-1 bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Loading text */}
              <motion.p
                className="mt-8 text-gray-400 font-mono text-sm tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                INITIALIZING EXPERIENCE
              </motion.p>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
              <motion.div
                className="absolute inset-0 border border-neon-blue/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 border border-neon-purple/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-neon-blue" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-neon-purple" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-neon-purple" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-neon-blue" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;