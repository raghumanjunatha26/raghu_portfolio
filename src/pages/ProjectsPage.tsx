import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, TrendingUp, Zap, Brain, Database, Target, Code, ChevronDown, ChevronUp, Headphones } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ProjectsPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
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

  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('echopods') || title.toLowerCase().includes('invention')) return Headphones;
    if (title.toLowerCase().includes('recidivism') || title.toLowerCase().includes('analysis')) return Brain;
    if (title.toLowerCase().includes('analytics') || title.toLowerCase().includes('data')) return TrendingUp;
    if (title.toLowerCase().includes('water') || title.toLowerCase().includes('iot')) return Zap;
    return Database;
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
            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-400 leading-relaxed mb-4"
          >
            Innovative solutions spanning AI/ML, Data Analytics, IoT, and Web Development with real-world impact
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          {resumeData.projects.map((project, index) => {
            const Icon = getProjectIcon(project.title);
            const isExpanded = expandedProjects.has(index);
            
            return (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
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
                        {project.image ? (
                          <motion.div 
                            className="w-12 h-12 rounded-xl overflow-hidden mr-4 border-2 border-blue-400/30"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ) : (
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <p className="text-blue-400 font-medium">{project.subtitle}</p>
                          )}
                          
                          {/* Awards Badge */}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.awards && (
                              <span className="inline-flex items-center bg-yellow-500/20 px-2 py-1 rounded-lg border border-yellow-500/30 text-yellow-400 text-xs font-medium">
                                <Award className="w-3 h-3 mr-1" />
                                Award Winner
                              </span>
                            )}
                            <span className="inline-flex items-center bg-green-500/20 px-2 py-1 rounded-lg border border-green-500/30 text-green-400 text-xs font-medium">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expand/Collapse Button */}
                      <motion.button
                        onClick={() => toggleProject(index)}
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

                    {/* Project Summary */}
                    {!isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-600/30 space-y-4">
                        {/* Project Overview */}
                        <div>
                          <h4 className="text-sm font-semibold text-blue-300 mb-2">Project Summary</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {project.description[0]}
                          </p>
                        </div>

                        {/* Key Achievement Highlight */}
                        {project.highlights && project.highlights[0] && (
                          <div>
                            <h4 className="text-sm font-semibold text-green-300 mb-2">Key Impact</h4>
                            <p className="text-slate-300 text-sm leading-relaxed">
                              {project.highlights[0]}
                            </p>
                          </div>
                        )}

                        {/* Technology Preview */}
                        <div>
                          <h4 className="text-sm font-semibold text-purple-300 mb-2">Core Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs border border-slate-600/50 hover:border-purple-500/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className="px-2 py-1 text-slate-400 text-xs flex items-center">
                                +{project.technologies.length - 5} more technologies
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Call to action */}
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-slate-400 text-xs">Click "Expand" for detailed implementation & results</span>
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

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-600/30"
                      >
                        <div className="p-6 space-y-6">
                          {/* Award Details */}
                          {project.awards && (
                            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                              <div className="flex items-center">
                                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                                <span className="text-yellow-300 font-medium">
                                  {project.awards[0]}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Project Overview */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Target className="w-5 h-5 mr-2 text-blue-400" />
                              Project Overview
                            </h4>
                            <div className="space-y-2">
                              {project.description.map((desc, descIndex) => (
                                <div key={descIndex} className="flex items-start space-x-3 p-3 bg-slate-700/40 rounded-lg">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-slate-200 text-sm leading-relaxed">
                                    {desc}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Highlights */}
                          {project.highlights && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                                Key Achievements
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {project.highlights.map((highlight, highlightIndex) => (
                                  <div
                                    key={highlightIndex}
                                    className="flex items-start space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                                  >
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-green-200 text-sm font-medium">
                                      {highlight}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Technology Stack */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Code className="w-5 h-5 mr-2 text-purple-400" />
                              Technology Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
