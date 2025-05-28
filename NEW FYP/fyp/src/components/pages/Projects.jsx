import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning System',
      student: 'Alice Johnson',
      progress: 75,
      status: 'In Progress',
      image: 'https://source.unsplash.com/random/600x400/?ai,technology',
    },
    {
      id: 2,
      title: 'Blockchain Voting System',
      student: 'Bob Smith',
      progress: 90,
      status: 'Final Review',
      image: 'https://source.unsplash.com/random/600x400/?blockchain,code',
    },
    {
      id: 3,
      title: 'IoT Smart Home Solution',
      student: 'Charlie Brown',
      progress: 60,
      status: 'In Progress',
      image: 'https://source.unsplash.com/random/600x400/?iot,smart-home',
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    student: '',
    progress: 0,
    status: 'In Progress',
    image: '',
  });

  const addProject = () => {
    if (newProject.title && newProject.student && newProject.image) {
      setProjects([
        ...projects,
        { 
          ...newProject, 
          id: Date.now(), 
          progress: Number(newProject.progress),
          image: newProject.image || 'https://source.unsplash.com/random/600x400/?technology'
        },
      ]);
      setNewProject({ title: '', student: '', progress: 0, status: 'In Progress', image: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const stats = {
    total: projects.length,
    inProgress: projects.filter((p) => p.status === 'In Progress').length,
    finalReview: projects.filter((p) => p.status === 'Final Review').length,
    completed: projects.filter((p) => p.status === 'Completed').length,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header & Stats */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
              Student Projects
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              <span className="inline-block mr-4">Total: <b className="text-white">{stats.total}</b></span>
              <span className="inline-block mr-4">In Progress: <b className="text-blue-400">{stats.inProgress}</b></span>
              <span className="inline-block mr-4">Final Review: <b className="text-purple-400">{stats.finalReview}</b></span>
              <span className="inline-block">Completed: <b className="text-green-400">{stats.completed}</b></span>
            </p>
          </div>
        </motion.div>

        {/* Add Project Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 bg-opacity-60 backdrop-blur-lg shadow-2xl rounded-xl p-6 mb-10 space-y-4 border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-2">
            Add New Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                className="border border-gray-700 bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="text"
                placeholder="Student Name"
                value={newProject.student}
                onChange={(e) => setNewProject({ ...newProject, student: e.target.value })}
                className="border border-gray-700 bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="number"
                placeholder="Progress %"
                value={newProject.progress}
                onChange={(e) => setNewProject({ ...newProject, progress: e.target.value })}
                className="border border-gray-700 bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                min="0"
                max="100"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <select
                value={newProject.status}
                onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                className="border border-gray-700 bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option className="bg-gray-800">In Progress</option>
                <option className="bg-gray-800">Final Review</option>
                <option className="bg-gray-800">Completed</option>
              </select>
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="text"
                placeholder="Image URL (or leave blank for random)"
                value={newProject.image}
                onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                className="border border-gray-700 bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={addProject}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition w-full font-medium"
              >
                + Add Project
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <div className="p-6 space-y-4 flex-grow">
                  <div>
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">By {project.student}</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="font-medium text-indigo-300">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          project.progress < 50
                            ? 'bg-red-500'
                            : project.progress < 80
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 mt-auto">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'In Progress'
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                          : project.status === 'Final Review'
                          ? 'bg-purple-900/50 text-purple-300 border border-purple-700/50'
                          : 'bg-green-900/50 text-green-300 border border-green-700/50'
                      }`}
                    >
                      {project.status}
                    </span>
                    <motion.button
                      onClick={() => deleteProject(project.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-red-400 hover:text-red-300 font-medium text-sm"
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {projects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No projects yet</h3>
            <p className="text-gray-500 max-w-md mx-auto">Add your first project using the form above to get started.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;