import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Includes navbar, footer, and custom cursor
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white noise-overlay">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;