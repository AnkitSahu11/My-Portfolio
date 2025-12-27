import { useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './styles/globals.css';

/**
 * Main App component
 * Initializes smooth scrolling and renders all sections
 */
function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Contact />
      </Layout>
    </>
  );
}

export default App;