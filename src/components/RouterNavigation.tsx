import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Palette } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const RouterNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Animations', path: '/animations', icon: Palette },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl"
          whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
        >
          <ul className="flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-slate-300 hover:text-blue-400 hover:bg-blue-400/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 bg-blue-400/10 rounded-full border border-blue-400/20"
                        layoutId="navbar-active"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-6 right-6 z-50 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 shadow-2xl"
          whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.nav
              className="absolute top-20 right-6 bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="py-4">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-6 py-3 transition-all duration-300 ${
                          isActive(item.path)
                            ? 'text-blue-400 bg-blue-400/10 border-r-2 border-blue-400'
                            : 'text-slate-300 hover:text-blue-400 hover:bg-blue-400/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RouterNavigation;
