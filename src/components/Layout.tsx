import React from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-neural text-slate-100 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3" />
                <circle cx="0" cy="0" r="0.5" fill="currentColor" opacity="0.2" />
                <circle cx="50" cy="0" r="0.5" fill="currentColor" opacity="0.2" />
                <circle cx="0" cy="50" r="0.5" fill="currentColor" opacity="0.2" />
                <circle cx="50" cy="50" r="0.5" fill="currentColor" opacity="0.2" />
                <line x1="25" y1="25" x2="0" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                <line x1="25" y1="25" x2="50" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                <line x1="25" y1="25" x2="0" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                <line x1="25" y1="25" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-8 bg-slate-700 rounded-full relative overflow-hidden"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-400 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Layout;
