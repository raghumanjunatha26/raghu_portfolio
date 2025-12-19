import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building2, Zap, Brain, Code, Database, ChevronDown, ChevronUp, TrendingUp, Target, Github, Star } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ExperiencePage: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

  const getIconForRole = (title: string) => {
    if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('ml')) return Brain;
    if (title.toLowerCase().includes('data') || title.toLowerCase().includes('analytics')) return Database;
    if (title.toLowerCase().includes('developer') || title.toLowerCase().includes('full-stack')) return Code;
    return Zap;
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
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
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16 max-w-4xl mx-auto" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Professional <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-400 leading-relaxed mb-4"
          >
            3.5+ years of experience spanning AI Engineering, Data Analytics, Full-Stack Development, and Research
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto space-y-12">
          {resumeData.experience.map((exp, index) => {
            const Icon = getIconForRole(exp.title);
            const isExpanded = expandedCards.includes(index);
            
            return (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline Line */}
                {index !== resumeData.experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-blue-400/50 to-purple-500/50 hidden md:block" />
                )}

                <motion.div
                  className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 overflow-hidden"
                  whileHover={{ 
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Compact Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4 relative"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-slate-300 text-sm mb-2">
                            <span className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1 text-blue-400" />
                              {exp.company}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1 text-purple-400" />
                              {exp.location}
                            </span>
                          </div>
                          
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-green-400" />
                            <span className="text-green-400 font-medium text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expand/Collapse Button */}
                      <motion.button
                        onClick={() => toggleCard(index)}
                        className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-lg border border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-blue-300 font-medium text-sm">
                          {isExpanded ? 'Collapse' : 'Expand'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-blue-300" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-blue-300" />
                        )}
                      </motion.button>
                    </div>

                    {/* Experience Summary - Visible when collapsed */}
                    {!isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-600/30 space-y-3">
                        {/* Role Summary */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Role Summary</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {exp.title.includes('AI') || exp.title.includes('ML') ? 
                              'Specialized in artificial intelligence and machine learning development, focusing on advanced algorithms and data processing systems.' :
                            exp.title.includes('Data') ? 
                              'Focused on data analytics, business intelligence, and statistical modeling to drive data-driven decision making.' :
                            exp.title.includes('Developer') || exp.title.includes('Full-Stack') ? 
                              'Developed comprehensive web applications and software solutions using modern technologies and frameworks.' :
                              'Contributed to innovative technology solutions and business process improvements.'}
                          </p>
                        </div>
                        
                        {/* Key Responsibility Preview */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Responsibility</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {exp.title.includes('AI') || exp.title.includes('ML') ? 
                              'Architected and implemented AI/ML systems, optimized performance, and ensured scalability for production environments.' :
                            exp.title.includes('Data') ? 
                              'Analyzed complex datasets, created insightful visualizations, and developed automated reporting solutions.' :
                            exp.title.includes('Developer') || exp.title.includes('Full-Stack') ? 
                              'Built responsive user interfaces, developed backend APIs, and maintained comprehensive testing frameworks.' :
                              'Led technical initiatives and collaborated with cross-functional teams to deliver high-quality solutions.'}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-600/20">
                          <span className="text-slate-500 text-xs">Click "Expand" for detailed achievements and technologies</span>
                          <motion.div 
                            className="flex items-center text-blue-400 text-xs"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span>View Details</span>
                            <ChevronDown className="w-3 h-3 ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          {/* Key Achievements */}
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                              Key Achievements & Impact
                            </h4>
                            <div className="space-y-4">
                              {exp.description.map((desc, descIndex) => (
                                <motion.div
                                  key={descIndex}
                                  className="flex items-start space-x-4 p-4 bg-slate-700/40 rounded-xl border border-slate-600/30 hover:border-blue-500/40 transition-all duration-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: descIndex * 0.1 }}
                                  whileHover={{ x: 8, backgroundColor: "rgba(51, 65, 85, 0.6)" }}
                                >
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-slate-200 leading-relaxed text-base">
                                    {desc}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies Section */}
                          {exp.technologies && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <Code className="w-6 h-6 mr-2 text-green-400" />
                                Technology Stack
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {exp.technologies.map((tech, techIndex) => (
                                  <motion.span
                                    key={techIndex}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 font-medium rounded-full border border-blue-500/30 hover:border-blue-400/60 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + techIndex * 0.05 }}
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Quick Preview (when collapsed) */}
                  {!isExpanded && (
                    <motion.div
                      className="px-8 pb-8"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {exp.description.slice(0, 2).map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30"
                            whileHover={{ x: 5, borderColor: "rgba(59, 130, 246, 0.3)" }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-300 text-sm leading-relaxed">
                              {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 6 && (
                            <span className="px-3 py-1 text-slate-400 text-sm">
                              +{exp.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Section */}
        <motion.div className="relative z-10 px-4 py-20" variants={itemVariants}>
          <motion.div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 text-center mb-16 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive toolkit spanning data science, AI/ML, software development, and creative technologies
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Programming */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Programming</h3>
                </div>
                <div className="space-y-2">
                  {['Python', 'JavaScript', 'R', 'HTML/CSS', 'Django'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gen AI & NLP */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Gen AI & NLP</h3>
                </div>
                <div className="space-y-2">
                  {['LLMs (GPT, Claude, BERT, T5)', 'RAG', 'OCR', 'Hugging Face', 'ML & Model Evaluation'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Data Science */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Data Science</h3>
                </div>
                <div className="space-y-2">
                  {['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Scikit-learn', 'Transformers', 'TensorFlow', 'PyTorch'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cloud & Engineering */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-orange-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Cloud & Engineering</h3>
                </div>
                <div className="space-y-2">
                  {['AWS (Lambda, S3, Bedrock)', 'ETL/Data Pipelines', 'PDF Processing', 'API Integration'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Databases</h3>
                </div>
                <div className="space-y-2">
                  {['PostgreSQL', 'MySQL', 'SQLite', 'Finacle (RDBMS)', 'Vector Databases (ChromaDB)'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Analytics & BI */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Analytics & BI</h3>
                </div>
                <div className="space-y-2">
                  {['Excel (Power Query, Pivot Tables)', 'Tableau', 'Power BI', 'Dashboard Design & Reporting'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Developer Tools */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Github className="w-6 h-6 text-indigo-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Developer Tools</h3>
                </div>
                <div className="space-y-2">
                  {['VS Code', 'Jupyter Notebook', 'Google Colab', 'Git/GitHub', 'Jira', 'YouTrack', 'WordPress'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Creative & Media */}
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Creative & Media</h3>
                </div>
                <div className="space-y-2">
                  {['2D Animation', 'Basic 3D (Modeling, Scanning)', '3D Printing', 'Illustration', 'Laser Cutting', 'Podcasting', 'Studio Lighting'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
