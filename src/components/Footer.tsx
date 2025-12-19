import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Download, Heart, ArrowUp } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1H0tgPnpvkgcE9X8FK2X8v9E8qXsMtHTy', '_blank');
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${resumeData.personalInfo.email}`,
      label: "Email",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      href: `tel:${resumeData.personalInfo.phone}`,
      label: "Phone",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      href: resumeData.personalInfo.linkedin,
      label: "LinkedIn",
      color: "text-blue-500"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/50 border-t border-slate-700">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: 3,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center neural-glow">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">{resumeData.personalInfo.name}</h3>
                <p className="text-sm text-slate-400">AI/ML Engineer & Data Scientist</p>
              </div>
            </motion.div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Transforming complex data into actionable insights through cutting-edge AI and machine learning solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Home', route: '/' },
                { label: 'About', route: '/about' },
                { label: 'Experience', route: '/experience' },
                { label: 'Projects', route: '/projects' },
                { label: 'Animations', route: '/animations' }
              ].map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => navigate(link.route)}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-left text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center text-slate-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-purple-400 mr-3" />
                <span className="text-sm">{resumeData.personalInfo.location}</span>
              </motion.div>
              <motion.a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-sm">{resumeData.personalInfo.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${resumeData.personalInfo.phone}`}
                className="flex items-center text-slate-300 hover:text-green-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 text-green-400 mr-3" />
                <span className="text-sm">{resumeData.personalInfo.phone}</span>
              </motion.a>
            </div>

            {/* Resume Download */}
            <motion.button
              onClick={handleResumeDownload}
              className="mt-4 flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download Resume</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 py-8 border-t border-slate-700"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target={social.label === 'LinkedIn' ? '_blank' : undefined}
                rel={social.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className={`w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-600 flex items-center justify-center ${social.color} hover:border-current transition-all duration-300 neural-glow`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright and Back to Top */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700"
          variants={itemVariants}
        >
          <motion.p 
            className="text-slate-400 text-sm flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> by Raghu Manjunatha © {currentYear}
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to Top</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
