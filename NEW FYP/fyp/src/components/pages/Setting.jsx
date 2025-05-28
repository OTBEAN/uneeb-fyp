import React, { useState } from 'react';
import { FaUser, FaBell, FaLock, FaPalette, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const tabs = [
    { id: 'profile', icon: <FaUser />, label: 'Profile' },
    { id: 'notifications', icon: <FaBell />, label: 'Notifications' },
    { id: 'security', icon: <FaLock />, label: 'Security' },
    { id: 'appearance', icon: <FaPalette />, label: 'Appearance' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <div className="flex flex-col md:flex-row gap-8">

          <div className="w-full md:w-64">
            <div className={`rounded-xl shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-semibold text-lg">Account Settings</h2>
              </div>
              <nav className="p-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg mb-1 text-left transition-colors ${activeTab === tab.id 
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
                <button className="flex items-center w-full px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <span className="mr-3"><FaSignOutAlt /></span>
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl shadow-md p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Dr. John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john.smith@university.edu" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Department</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Computer Science" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about yourself..."></textarea>
                  </div>
                  <div className="mt-8">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive email alerts for important updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Push Notifications</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive app notifications</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={notifications} onChange={() => setNotifications(!notifications)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium mb-3">Notification Types</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input id="meeting-reminders" type="checkbox" className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="meeting-reminders" className="ml-2 text-sm font-medium">Meeting Reminders</label>
                        </div>
                        <div className="flex items-center">
                          <input id="student-updates" type="checkbox" className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="student-updates" className="ml-2 text-sm font-medium">Student Progress Updates</label>
                        </div>
                        <div className="flex items-center">
                          <input id="deadline-alerts" type="checkbox" className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="deadline-alerts" className="ml-2 text-sm font-medium">Deadline Alerts</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Password</label>
                      <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter current password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">New Password</label>
                      <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter new password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                      <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Confirm new password" />
                    </div>
                    <div className="mt-8">
                      <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Dark Mode</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Enable dark theme for better night viewing</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;