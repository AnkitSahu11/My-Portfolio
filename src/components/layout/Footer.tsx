import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../utils/constants';

/**
 * Footer component with social links
 * Includes copyright and back to top button
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ankit Sahu
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Building intelligent solutions for real-world problems.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue hover:bg-neon-blue/10 transition-all cursor-hover"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-400 hover:text-neon-blue transition-colors">
                    {social.name[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-mono">
            © 2025 Ankit Sahu. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm font-mono">
            Designed & Built with{' '}
            <motion.span
              className="text-neon-pink inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ♥
            </motion.span>
            {' '}by Ankit
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue hover:bg-neon-blue/10 transition-all cursor-hover"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-neon-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;