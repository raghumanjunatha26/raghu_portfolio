import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-slate-800/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className="w-full px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Introduction Card */}
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50"
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">AI/ML Engineer & Data Scientist</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Innovative engineer with 3.5+ years specializing in AI systems, NLP, and full-stack development. 
                Expertise spans federal contract analysis, financial risk assessment, and educational technology.
              </p>
            </motion.div>
          </motion.div>

          {/* Personal Info & Education Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personal Details */}
            <motion.div 
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20"
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.4)" }}
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                Personal Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>Fairfax, Virginia - 22030</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>+1 571-574-2896</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>raghumanjunatha26@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20"
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(168, 85, 247, 0.4)" }}
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 text-purple-400 mr-2" />
                Education
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-slate-200">{resumeData.education[0].degree}</h5>
                  <p className="text-sm text-slate-400">{resumeData.education[0].institution}</p>
                  <div className="flex items-center mt-2">
                    <Award className="w-4 h-4 text-purple-400 mr-1" />
                    <span className="text-sm text-purple-400">GPA: {resumeData.education[0].gpa}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">{resumeData.education[0].period}</p>
                </div>
              </div>
            </motion.div>

            {/* Core Expertise */}
            <motion.div 
              className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20"
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(34, 197, 94, 0.4)" }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Specializations</h4>
              <div className="space-y-2">
                {[
                  "AI & Machine Learning",
                  "NLP & RAG Systems", 
                  "Cloud Computing",
                  "Data Analytics",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Academic Coursework Section */}
          <motion.div 
            className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50"
            variants={itemVariants}
            whileHover={{ scale: 1.01, borderColor: "rgba(168, 85, 247, 0.4)" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-400 mr-2" />
                Master's Coursework
              </h3>
              <p className="text-slate-400">Advanced curriculum in Data Analytics Engineering</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumeData.education[0].coursework.map((course, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-purple-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -2,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 4px 15px rgba(168, 85, 247, 0.1)" 
                  }}
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm leading-relaxed">{course}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { label: "Years Experience", value: "3.5+" },
              { label: "Major Projects", value: "10+" },
              { label: "Tech Workshops", value: "50+" },
              { label: "Companies Worked", value: "6" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-700/30 to-slate-600/30 border border-slate-600/50 text-center"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                }}
              >
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-2xl p-8 border border-slate-600/30"
              whileHover={{ scale: 1.02 }}
            >
              <motion.blockquote 
                className="text-lg text-slate-300 italic relative"
                whileHover={{ scale: 1.01 }}
              >
                <motion.span 
                  className="absolute -top-2 -left-2 text-4xl text-blue-400 opacity-30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 }}
                >
                  "
                </motion.span>
                "Building AI solutions that bridge the gap between complex data and meaningful insights, 
                one algorithm at a time."
              </motion.blockquote>
              <motion.cite 
                className="block mt-4 text-blue-400 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 }}
              >
                — Raghu Manjunatha
              </motion.cite>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
