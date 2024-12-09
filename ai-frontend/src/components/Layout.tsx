import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
