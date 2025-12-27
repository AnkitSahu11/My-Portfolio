import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingShapes from '../three/FloatingShapes';
import AnimatedButton from '../ui/AnimatedButton';
import { personalInfo } from '../../data/portfolio';
import { fadeInUp, staggerContainer, textReveal } from '../../utils/animations';

/**
 * Hero section with 3D background and animated text
 * Full-screen landing section with CTA buttons
 */
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/50 to-dark-900/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5 z-0" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Greeting */}
        <motion.div
          className="mb-6 overflow-hidden"
          variants={fadeInUp}
        >
          <motion.p
            className="text-neon-blue font-mono text-lg md:text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello World! I'm
          </motion.p>
        </motion.div>

        {/* Name with text reveal animation */}
        <div className="mb-4 overflow-hidden">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            Ankit Sahu
          </motion.h1>
        </div>

        {/* Title */}
        <motion.div
          className="mb-6 overflow-hidden"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personalInfo.title}
          </motion.h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <AnimatedButton
            onClick={scrollToProjects}
            variant="primary"
            size="lg"
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </AnimatedButton>
          
          <AnimatedButton
            onClick={scrollToContact}
            variant="outline"
            size="lg"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </AnimatedButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 2 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full p-1">
            <motion.div
              className="w-1 h-3 bg-neon-blue rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 font-mono">SCROLL</p>
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-neon-blue"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-neon-purple"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      />
    </section>
  );
};

export default Hero;