import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';

/**
 * Animated navigation bar with scroll effects
 * Includes mobile menu and glassmorphism design
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.9)']
  );

  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{ 
        backgroundColor: navBackground,
        backdropFilter: navBlur,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold gradient-text cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            AS
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`font-mono text-sm cursor-hover transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-neon-blue'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                <span className="text-neon-blue mr-1">0{index + 1}.</span>
                {link.name}
              </motion.a>
            ))}
            
            {/* Resume button */}
            <motion.a
              href="/ankit-resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
              className="px-4 py-2 border border-neon-blue text-neon-blue rounded font-semibold hover:bg-neon-blue/10 transition-all cursor-hover"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-hover"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-neon-blue"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neon-blue"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neon-blue"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden fixed inset-0 top-20 bg-dark-900/95 backdrop-blur-lg"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%',
        }}
        transition={{ type: 'tween', duration: 0.3 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-2xl font-mono text-gray-400 hover:text-neon-blue transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              <span className="text-neon-blue mr-2">0{index + 1}.</span>
              {link.name}
            </motion.a>
          ))}
          
          <motion.a
            href="#"
            className="px-8 py-3 border-2 border-neon-blue text-neon-blue rounded-lg font-semibold hover:bg-neon-blue/10 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ delay: NAV_LINKS.length * 0.1 }}
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;