import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Brain, Database, Bot, Code2, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "AI/ML Engineer",
    "Data Scientist", 
    "Data Analyst",
    "Full-Stack Developer",
    "Research Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        delay: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="w-full">
          {/* Profile Photo */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHLgmij06tOgw/profile-displayphoto-shrink_400_400/B4EZZq91afHkAg-/0/1745551316990?e=1767830400&v=beta&t=BPkJXiSbb-TwW9QuCt3qOXY2m0t5GjXqhApmNz7NP9E"
                  alt="Raghu Manjunatha"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            variants={itemVariants}
          >
            {[Brain, Database, Bot, Code2].map((Icon, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-600 flex items-center justify-center neural-glow"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-6 h-6 text-blue-400" />
              </motion.div>
            ))}
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">{resumeData.personalInfo.name}</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            className="h-16 mb-8"
            variants={itemVariants}
          >
            <motion.h2
              key={currentRole}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Summary */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {resumeData.personalInfo.summary}
          </motion.p>

          {/* Contact Info Bar */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neural-800/50 border border-neural-600 hover:border-accent-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 text-accent-400 group-hover:rotate-12 transition-transform" />
              <span className="text-sm text-neural-300 group-hover:text-accent-400 transition-colors">
                {resumeData.personalInfo.email}
              </span>
            </motion.a>

            <motion.a
              href={`tel:${resumeData.personalInfo.phone}`}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neural-800/50 border border-neural-600 hover:border-accent-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4 text-accent-400 group-hover:rotate-12 transition-transform" />
              <span className="text-sm text-neural-300 group-hover:text-accent-400 transition-colors">
                {resumeData.personalInfo.phone}
              </span>
            </motion.a>

            <motion.a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neural-800/50 border border-neural-600 hover:border-accent-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4 text-accent-400 group-hover:rotate-12 transition-transform" />
              <span className="text-sm text-neural-300 group-hover:text-accent-400 transition-colors">
                LinkedIn
              </span>
            </motion.a>

            <motion.div
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neural-800/50 border border-neural-600"
            >
              <MapPin className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-neural-300">
                {resumeData.personalInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Action Button - Smaller Download Resume */}
          <motion.div
            className="flex justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => {
                window.open('https://drive.google.com/uc?export=download&id=1H0tgPnpvkgcE9X8FK2X8v9E8qXsMtHTy', '_blank');
              }}
              className="px-6 py-3 border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-white rounded-full font-medium transition-all duration-300 group text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>Download Resume</span>
                <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={onScrollToNext}
            className="flex flex-col items-center space-y-2 text-neural-400 hover:text-accent-400 transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
