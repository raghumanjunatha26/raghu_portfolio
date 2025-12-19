import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Instagram, Youtube, Calendar } from 'lucide-react';

interface AnimationWork {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'short' | 'reel';
  thumbnail: string;
  videoUrl: string;
  date: string;
  platform: 'YouTube' | 'Instagram';
  views: string;
  duration: string;
  playlistName?: string;
}

const AnimationPortfolioPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Real animation works from Raghu Dhvani YouTube channel
  const animationWorks: AnimationWork[] = [
    {
      id: '1',
      title: 'Kaundinya: The Indian Globe Trotter Who Built a Civilization',
      description: 'Animated story of Kaundinya, the Indian explorer who founded a civilization. A comprehensive historical narrative brought to life through 2D animation.',
      type: 'video',
      thumbnail: 'https://img.youtube.com/vi/xHCVDyIPZgs/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=xHCVDyIPZgs',
      date: '2024-11-25',
      platform: 'YouTube',
      views: '1,031',
      duration: '15:24'
    },
    {
      id: '2',
      title: '1st Carnatic War',
      description: 'Detailed animated explanation of the First Carnatic War, showcasing complex historical events through engaging visual storytelling.',
      type: 'video',
      thumbnail: 'https://img.youtube.com/vi/yrscRs-yzYg/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=yrscRs-yzYg',
      date: '2020-12-15',
      platform: 'YouTube',
      views: '23,000',
      duration: '4:50',
      playlistName: 'Carnatic Wars'
    },
    {
      id: '3',
      title: '2nd Carnatic War',
      description: 'Continuation of the Carnatic Wars series, featuring advanced animation techniques and historical accuracy.',
      type: 'video',
      thumbnail: 'https://img.youtube.com/vi/ILMzylUnrGY/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=ILMzylUnrGY',
      date: '2020-12-20',
      platform: 'YouTube',
      views: '13,000',
      duration: '6:09',
      playlistName: 'Carnatic Wars'
    },
    {
      id: '4',
      title: '3rd Carnatic War',
      description: 'Final installment of the Carnatic Wars trilogy, demonstrating evolution in animation style and storytelling.',
      type: 'video',
      thumbnail: 'https://img.youtube.com/vi/4_V-I82Oohk/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=4_V-I82Oohk',
      date: '2020-12-25',
      platform: 'YouTube',
      views: '9,600',
      duration: '2:58',
      playlistName: 'Carnatic Wars'
    },
    {
      id: '5',
      title: 'First Battle of Tarain',
      description: 'Animated documentation of the First Islamic Conquest of India, featuring detailed battle sequences and character design.',
      type: 'video',
      thumbnail: 'https://img.youtube.com/vi/NFvKK0pt9xg/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=NFvKK0pt9xg',
      date: '2022-11-10',
      platform: 'YouTube',
      views: '5,200',
      duration: '4:32',
      playlistName: 'First Islamic Conquest Of India'
    },
    {
      id: '6',
      title: 'Second Battle of Tarain - Return of Ghori',
      description: 'Follow-up animation showcasing advanced battle choreography and character development in historical context.',
      type: 'video',
      thumbnail: 'https://img.youtube.com/vi/TVJ0EcUt3xE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=TVJ0EcUt3xE',
      date: '2022-11-15',
      platform: 'YouTube',
      views: '2,100',
      duration: '3:45',
      playlistName: 'First Islamic Conquest Of India'
    }
  ];

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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <motion.div
        ref={ref}
        className="w-full px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          {/* Channel Conceptual Illustration */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated background rings - rectangular */}
              <motion.div
                className="absolute inset-0 w-80 h-56 md:w-96 md:h-64 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-pink-400/20 rounded-2xl"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-1 w-78 h-54 md:w-94 md:h-62 bg-gradient-to-r from-pink-400/15 via-purple-400/15 to-blue-400/15 rounded-2xl"
                animate={{ rotate: [0, -1, 1, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main illustration container - rectangular */}
              <motion.div
                className="relative w-80 h-56 md:w-96 md:h-64 bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-xl border-2 border-purple-400/30 shadow-2xl flex items-center justify-center overflow-hidden rounded-2xl"
                whileHover={{ 
                  borderColor: "rgba(168, 85, 247, 0.6)",
                  boxShadow: "0 0 50px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(168, 85, 247, 0.1)"
                }}
              >
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E22AQF6Ah0XkyYpJg/feedshare-shrink_800/B4EZaxvcDxHMAk-/0/1746738726224?e=1767830400&v=beta&t=u66EhkX4myAlU1dqtPuwHVEBV14J49iO-64KIq6i300"
                  alt="Raghu Dhvani Channel Conceptual Illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10 rounded-xl" />
                
                {/* Channel Branding Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-white text-sm font-medium">Raghu Dhvani</div>
                    <div className="text-slate-300 text-xs">Historical Animation & Illustration</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Raghu Dhvani
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto mb-4"
          >
            Historical Storytelling through 2D Animation & Illustration • Indian Heritage & Culture
          </motion.p>
          <motion.p 
            className="text-lg text-slate-500 leading-relaxed max-w-4xl mx-auto mb-8"
          >
            Creating an animated visual library and conceptual illustrations of Bharat's rich history and heritage for coming generations to explore and learn from India's glorious past
          </motion.p>
          
          {/* Channel Statistics */}
          <motion.div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8" variants={itemVariants}>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2.5K</div>
              <div className="text-sm text-slate-400">Combined Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-slate-400">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">600K+</div>
              <div className="text-sm text-slate-400">Total Views</div>
            </div>
          </motion.div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.instagram.com/raghudhvani/?igsh=MXY4ZnI0bTFiY3ZkYw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5 mr-2" />
              @raghudhvani
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@raghudhvani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube className="w-5 h-5 mr-2" />
              Raghu Dhvani
            </motion.a>
          </div>
        </motion.div>

        {/* Personal Journey Section */}
        <motion.div 
          className="max-w-7xl mx-auto mb-20"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 lg:p-16"
            whileHover={{ 
              borderColor: "rgba(139, 92, 246, 0.3)",
              boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.1)"
            }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-center mb-12"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                My Animation Journey
              </span>
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Story Section */}
              <div className="space-y-6 text-slate-200 leading-relaxed">
                <motion.p 
                  className="text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  I'm not a professional animator, not by degree, title, or training. But I consider animation to be my{' '}
                  <span className="text-purple-400 font-semibold">Ikigai.</span> 
                </motion.p>
                
                <motion.p 
                  className="text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I've been animating for over 8 years now, never chasing a big goal. Back in my undergrad days, what began as a side hobby slowly grew, thanks to encouragement from my parents and friends. They gave me space to experiment and express.
                </motion.p>
                
                <motion.p 
                  className="text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Over time, as I found more creative freedom, I felt drawn toward creating something impactful. That's how{' '}
                  <span className="text-blue-400 font-semibold">Raghu Dhvani</span> was born, a space to tell animated stories rooted in Indian psychology, history, and my evolving perspective.
                </motion.p>
                
                <motion.div 
                  className="bg-gradient-to-br from-orange-500/8 to-yellow-500/8 rounded-2xl p-8 border border-orange-400/20 mt-8 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {/* Subtle decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/5 to-yellow-400/5 rounded-full blur-3xl" />
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-orange-300 mb-6 flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      A Vision for Our Heritage
                    </h3>
                    
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        My journey into animation is deeply rooted in a love for{' '}
                        <span className="text-yellow-300 font-medium">India's timeless stories</span>. Each frame I create carries the essence of our{' '}
                        <span className="text-orange-300 font-medium">rich cultural tapestry</span> from ancient wisdom to forgotten heroes.
                      </p>
                      
                      <p>
                        Through Raghu Dhvani, I hope to weave together an{' '}
                        <span className="text-amber-300 font-medium">animated visual library</span> where future generations can discover, explore, and connect with the magnificent heritage of{' '}
                        <span className="text-orange-400 font-semibold">Bharat</span>. 
                      </p>
                      
                      <p className="text-slate-300 italic text-base border-l-2 border-orange-400/30 pl-4">
                        "Every animation is a bridge between our glorious past and curious minds of tomorrow."
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-500/20 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-green-300 mb-4">The Meditative Experience</h3>
                  <p className="text-lg">
                    It's <span className="text-green-400 font-medium">days of work for minutes of output</span>. Through patience, resilience, and concentration, it becomes like meditation. When I start, I forget the world around me — everything exists within my imagination, constantly focused on getting things right.
                  </p>
                </motion.div>
              </div>

              {/* Creative Process Workflow */}
              <div className="space-y-6">
                <motion.div 
                  className="bg-slate-800/40 rounded-2xl p-6 border border-slate-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6 text-center">The Creative Process & Illustration Workflow</h3>
                  
                  {/* Process Flow */}
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "Conceptualizing", desc: "Historical Research & Ideation", color: "from-blue-500 to-cyan-500" },
                      { step: 2, title: "Visualizing", desc: "Illustration, Storyboarding & Sketching", color: "from-purple-500 to-pink-500" },
                      { step: 3, title: "Scripting", desc: "Narrative & Voice Work", color: "from-green-500 to-teal-500" },
                      { step: 4, title: "Character Design", desc: "Visual Development & Illustration", color: "from-orange-500 to-red-500" },
                      { step: 5, title: "Animation", desc: "Bringing Illustrations to Life", color: "from-violet-500 to-purple-500" },
                      { step: 6, title: "Music & Score", desc: "Background Music & Sound", color: "from-pink-500 to-rose-500" },
                      { step: 7, title: "Post-Production", desc: "Editing & Color Grading", color: "from-indigo-500 to-blue-500" },
                      { step: 8, title: "Rendering", desc: "Multiple Format Export", color: "from-teal-500 to-cyan-500" }
                    ].map((process, index) => (
                      <motion.div
                        key={process.step}
                        className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/20 hover:border-purple-500/40 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.15 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                      >
                        {/* Step Number */}
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {process.step}
                        </motion.div>
                        
                        {/* Process Info */}
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white">{process.title}</h4>
                          <p className="text-sm text-slate-400">{process.desc}</p>
                        </div>
                        
                        {/* Comma separator */}
                        {index < 7 && (
                          <div className="text-slate-400 text-lg">
                            ,
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Creative Tools Section - Full Width */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
                <h4 className="text-2xl font-semibold text-purple-300 mb-6 text-center">Creative Tools & Software</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Sketchbook', 'KineMaster', 'Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Audacity'].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="px-6 py-3 bg-purple-500/20 text-purple-300 font-medium rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.0 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animation Works Grid - Always Visible & Smaller */}
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-center mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Animation & Illustration Portfolio
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {animationWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-700/40 overflow-hidden hover:border-purple-500/60 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.2)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-slate-700/50 overflow-hidden">
                  <img 
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <motion.a
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className={`w-12 h-12 ${work.platform === 'Instagram' ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-red-500/90'} backdrop-blur-sm rounded-full flex items-center justify-center group-hover:${work.platform === 'Instagram' ? 'from-purple-600 to-pink-600' : 'bg-red-500'} transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </motion.div>
                  </motion.a>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded">
                      {work.duration}
                    </span>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-red-500/80 backdrop-blur-sm text-white text-xs font-medium rounded flex items-center">
                      {work.platform === 'Instagram' ? (
                        <Instagram className="w-3 h-3 mr-1" />
                      ) : (
                        <Youtube className="w-3 h-3 mr-1" />
                      )}
                      {work.views}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-tight">
                    {work.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-3 line-clamp-3">
                    {work.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(work.date).toLocaleDateString()}</span>
                    </div>
                    
                    {work.playlistName && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {work.playlistName}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Many More Videos Notice */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-slate-400 italic">
              ...and many more historical animation videos and illustrations
            </p>
            <div className="flex justify-center items-center mt-4 space-x-6">
              <motion.a
                href="https://www.youtube.com/@raghudhvani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-400 hover:text-red-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Youtube className="w-5 h-5 mr-2" />
                View Full Channel
              </motion.a>
              <motion.a
                href="https://www.instagram.com/raghudhvani/?igsh=MXY4ZnI0bTFiY3ZkYw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram className="w-5 h-5 mr-2" />
                View Instagram
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimationPortfolioPage;
