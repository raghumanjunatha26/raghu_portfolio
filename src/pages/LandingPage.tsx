import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Brain, Palette, Building2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { resumeData } from '../data/resumeData';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <HeroSection onScrollToNext={() => {}} />

      {/* Content Preview Sections */}
      <motion.section 
        className="section-padding bg-slate-800/20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Explore My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* About Me Preview */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 cursor-pointer mb-8"
            onClick={() => navigate('/about')}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">About Me</h3>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-green-400 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300 text-base leading-relaxed">
                Passionate about transforming complex data into actionable insights and building innovative AI solutions. 
                Completed Master's in Data Analytics Engineering at George Mason University with a 3.80 GPA.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Education</h4>
                  <p className="text-slate-400 text-sm">{resumeData.education[0].degree}</p>
                  <p className="text-slate-400 text-xs">{resumeData.education[0].institution} • GPA: {resumeData.education[0].gpa}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Expertise</h4>
                  <p className="text-slate-400 text-sm">AI/ML Engineering, Data Analytics, Full-Stack Development</p>
                  <p className="text-slate-400 text-xs">3.5+ years of professional experience</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-400 font-semibold text-sm">
                    Learn More About My Journey
                  </p>
                  <p className="text-gray-300 text-xs">
                    Background, skills, interests, and what drives my passion for technology
                  </p>
                </div>
                <div className="flex items-center text-green-400 group-hover:text-white transition-colors bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/30">
                  <span className="text-xs font-bold">Discover More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience Preview */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer mb-8"
            onClick={() => navigate('/experience')}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Code className="h-8 w-8 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white">Professional Journey</h3>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-lg">{resumeData.experience[0].title}</p>
                    <p className="text-cyan-400 font-semibold">{resumeData.experience[0].company}</p>
                    <p className="text-sm text-gray-300 font-medium">{resumeData.experience[0].period}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-lg">{resumeData.experience[1].title}</p>
                    <p className="text-blue-400 font-semibold">{resumeData.experience[1].company}</p>
                    <p className="text-sm text-gray-300 font-medium">{resumeData.experience[1].period}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-lg">{resumeData.experience[2].title}</p>
                    <p className="text-purple-400 font-semibold">{resumeData.experience[2].company}</p>
                    <p className="text-sm text-gray-300 font-medium">{resumeData.experience[2].period}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-400 font-semibold text-lg">
                    +{resumeData.experience.length - 3} More Professional Roles
                  </p>
                  <p className="text-gray-300 text-sm">
                    Including Analytics Associate at Federal Bank, Full-Stack Developer, and Research roles
                  </p>
                </div>
                <div className="flex items-center text-cyan-400 group-hover:text-white transition-colors bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/30">
                  <span className="text-sm font-bold">View All Experiences</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Preview */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer mb-8"
            onClick={() => navigate('/projects')}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Featured Projects</h3>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700/30">
                <h4 className="text-white font-bold text-xl mb-3">{resumeData.projects[0].title}</h4>
                <p className="text-cyan-400 font-semibold mb-3">{resumeData.projects[0].subtitle}</p>
                <p className="text-sm text-gray-300 mb-4">AI-powered system analyzing 60+ research papers using advanced NLP and RAG pipeline</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.projects[0].technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className={`text-xs px-3 py-1 rounded-full font-medium ${
                      index === 0 ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30' :
                      index === 1 ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' :
                      index === 2 ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' :
                      'bg-green-600/20 text-green-300 border border-green-500/30'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-600/20 text-gray-300 border border-gray-500/30">
                    +{resumeData.projects[0].technologies.length - 4} more
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700/30">
                <h4 className="text-white font-bold text-xl mb-3">{resumeData.projects[1].title}</h4>
                <p className="text-blue-400 font-semibold mb-3">{resumeData.projects[1].subtitle}</p>
                <p className="text-sm text-gray-300 mb-4">Comprehensive ML suite with diabetes prediction, job market analysis, and sentiment classification</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.projects[1].technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className={`text-xs px-3 py-1 rounded-full font-medium ${
                      index === 0 ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' :
                      index === 1 ? 'bg-orange-600/20 text-orange-300 border border-orange-500/30' :
                      index === 2 ? 'bg-red-600/20 text-red-300 border border-red-500/30' :
                      'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-600/20 text-gray-300 border border-gray-500/30">
                    +{resumeData.projects[1].technologies.length - 4} more
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-400 font-semibold text-lg">
                    +{resumeData.projects.length - 2} More AI/ML Projects
                  </p>
                  <p className="text-gray-300 text-sm">
                    Including Smart Water Management System (Award-winning IoT Innovation) and more
                  </p>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-white transition-colors bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/30">
                  <span className="text-sm font-bold">Explore All Projects</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Creative Works Preview */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer mb-8"
            onClick={() => navigate('/animations')}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Palette className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-semibold text-white">Creative Portfolio</h3>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm text-white font-medium mb-1">2D Animation</p>
                <p className="text-xs text-gray-400">Storytelling & Design</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm text-white font-medium mb-1">Motion Graphics</p>
                <p className="text-xs text-gray-400">Visual Effects</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm text-white font-medium mb-1">Brand Design</p>
                <p className="text-xs text-gray-400">Logo & Identity</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-400 font-semibold text-sm">
                    Creative Side Projects & Visual Storytelling
                  </p>
                  <p className="text-gray-300 text-xs">
                    Exploring art, design, and animation beyond technical work
                  </p>
                </div>
                <div className="flex items-center text-purple-400 group-hover:text-white transition-colors bg-purple-500/10 px-3 py-2 rounded-lg border border-purple-500/30">
                  <span className="text-xs font-bold">View Gallery</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
