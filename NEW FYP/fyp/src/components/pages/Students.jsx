import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Students = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@university.edu',
      project: 'AI-Powered Learning System',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@university.edu',
      project: 'Blockchain Voting System',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@university.edu',
      project: 'IoT Smart Home Solution',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      status: 'On Leave',
    },
  ]);

  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    avatar: '',
    status: 'Active',
  });
  const [darkMode, setDarkMode] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Background images for light and dark modes
  const lightBg = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
  const darkBg = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';

  // Toggle dark mode
  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  }, [darkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...formData,
      avatar: formData.avatar || `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
    };
    setStudents((prev) => [...prev, newStudent]);
    setFormData({
      name: '',
      email: '',
      project: '',
      avatar: '',
      status: 'Active',
    });
    setIsFormOpen(false);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

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
      y: -5,
      boxShadow: darkMode 
        ? "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className={`min-h-screen bg-cover bg-center bg-no-repeat transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}
      style={{ backgroundImage: `url(${darkMode ? darkBg : lightBg})` }}
    >
      {/* Overlay */}
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-90'} transition-colors duration-300`}>
        <div className="container mx-auto p-4 md:p-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
          >
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} mb-1`}>
                Student Management
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Students: <span className="font-semibold">{students.length}</span> | 
                Filtered: <span className="font-semibold">{filteredStudents.length}</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search by name..."
                className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-800 border-gray-700 focus:ring-indigo-400 placeholder-gray-500 text-white' : 'bg-white border-gray-300 focus:ring-indigo-500'}`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsFormOpen(!isFormOpen)}
                  className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
                >
                  {isFormOpen ? 'Cancel' : '+ Add Student'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Add Student Form */}
          <AnimatePresence>
            {isFormOpen && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleAddStudent}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl rounded-xl p-6 mb-8 space-y-4 overflow-hidden`}
              >
                <h2 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-4`}>
                  Add New Student
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-400' : 'bg-white border-gray-300 text-gray-800 focus:ring-indigo-500'} border focus:outline-none focus:ring-2`}
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-400' : 'bg-white border-gray-300 text-gray-800 focus:ring-indigo-500'} border focus:outline-none focus:ring-2`}
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      name="project"
                      placeholder="Project Title"
                      value={formData.project}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-400' : 'bg-white border-gray-300 text-gray-800 focus:ring-indigo-500'} border focus:outline-none focus:ring-2`}
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <input
                      type="url"
                      name="avatar"
                      placeholder="Avatar Image URL (optional)"
                      value={formData.avatar}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-400' : 'bg-white border-gray-300 text-gray-800 focus:ring-indigo-500'} border focus:outline-none focus:ring-2`}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-indigo-400' : 'bg-white border-gray-300 text-gray-800 focus:ring-indigo-500'} border focus:outline-none focus:ring-2`}
                    >
                      <option value="Active" className={darkMode ? 'bg-gray-700' : 'bg-white'}>Active</option>
                      <option value="On Leave" className={darkMode ? 'bg-gray-700' : 'bg-white'}>On Leave</option>
                    </select>
                  </motion.div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'} shadow-md transition`}
                >
                  Add Student
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Student Cards (Mobile) */}
          <div className="block md:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-4"
            >
              {filteredStudents.map((student) => (
                <motion.div
                  key={student.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="p-4"
                  >
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={student.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
                        alt={student.name}
                      />
                      <div className="ml-4">
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{student.name}</h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{student.email}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-medium">Project:</span> {student.project}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            student.status === 'Active'
                              ? darkMode 
                                ? 'bg-green-900 text-green-300' 
                                : 'bg-green-100 text-green-800'
                              : darkMode 
                                ? 'bg-yellow-900 text-yellow-300' 
                                : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {student.status}
                        </span>
                        <div className="flex gap-2">
                          <button 
                            className={`text-sm px-3 py-1 rounded ${darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-800'}`}
                          >
                            View
                          </button>
                          <button
                            className={`text-sm px-3 py-1 rounded ${darkMode ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800'}`}
                            onClick={() => deleteStudent(student.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              {filteredStudents.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`rounded-xl p-8 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <h3 className={`mt-2 text-lg font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    No students found
                  </h3>
                  <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {search ? 'Try a different search term' : 'Add a new student to get started'}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Student Table (Desktop) */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-gray-200">
                  <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Avatar</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className={`${darkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'} divide-y`}>
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={student.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
                            alt={student.name}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.project}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full font-medium ${
                              student.status === 'Active'
                                ? darkMode
                                  ? 'bg-green-900 text-green-300'
                                  : 'bg-green-100 text-green-800'
                                : darkMode
                                  ? 'bg-yellow-900 text-yellow-300'
                                  : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className={`text-sm px-3 py-1 rounded ${darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                            View
                          </button>
                          <button
                            onClick={() => deleteStudent(student.id)}
                            className={`text-sm px-3 py-1 rounded ${darkMode ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800'}`}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;