import React, { useState } from 'react';
import {
  FaUserGraduate,
  FaBook,
  FaCalendarAlt,
  FaChartLine,
  FaUsersCog,
  FaLightbulb,
  FaBell,
  FaSearch,
  FaEllipsisV,
  FaPlus,
  FaFileAlt,
  FaUserPlus,
  FaCommentAlt,
  FaChevronDown
} from 'react-icons/fa';
import { FiClock, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { BsGraphUp, BsThreeDotsVertical } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

// Sample images (in a real app, these would be imported or fetched)
const sampleImages = {
  supervisor1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  supervisor2: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  student1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  student2: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  student3: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  project1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80',
  project2: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80'
};

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <h2 className="font-bold text-lg">Application Error</h2>
          <p className="mt-2">{this.state.error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const InfoBox = ({ icon, title, value, description, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    indigo: 'bg-indigo-100 text-indigo-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className={`${colorClasses[color]} p-3 rounded-xl mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          {description && (
            <p className="text-xs text-gray-500 mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const MeetingScheduleComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const meetings = [
    {
      id: 1,
      title: "Progress Review",
      team: "Team A (E-Commerce Project)",
      date: "May 10, 2024",
      time: "10:00 AM - 10:30 AM",
      type: "progress"
    },
    {
      id: 2,
      title: "Thesis Draft Review",
      team: "Sarah Johnson (AI Project)",
      date: "May 12, 2024",
      time: "2:00 PM - 3:00 PM",
      type: "thesis"
    },
    {
      id: 3,
      title: "Initial Proposal Discussion",
      team: "Team B (Blockchain Project)",
      date: "May 15, 2024",
      time: "11:00 AM - 12:00 PM",
      type: "proposal"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Upcoming Meetings</h3>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-indigo-100 hover:text-white"
          >
            <FaChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {meetings.slice(0, expanded ? meetings.length : 2).map((meeting) => (
          <div key={meeting.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <div className={`${
                meeting.type === 'progress' ? 'bg-blue-100 text-blue-800' :
                meeting.type === 'thesis' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              } p-2 rounded-lg mr-3`}>
                <FaCalendarAlt className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{meeting.title}</h4>
                <p className="text-sm text-gray-600">{meeting.team}</p>
                <p className="text-sm text-gray-500 mt-1">{meeting.date} • {meeting.time}</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 px-5 py-3 text-center">
        <button 
          onClick={() => console.log("View all meetings clicked")}
          className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center justify-center w-full"
        >
          View All Meetings
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Deadline Approaching",
      message: "Project proposal submission due in 2 days",
      time: "10 minutes ago",
      read: false,
      type: "alert"
    },
    {
      id: 2,
      title: "New Message",
      message: "From Team B: We have completed the prototype",
      time: "1 hour ago",
      read: false,
      type: "message"
    },
    {
      id: 3,
      title: "Document Approved",
      message: "Chapter 3 of John's thesis has been approved",
      time: "3 hours ago",
      read: false,
      type: "approval"
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({...n, read: true})));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
        <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
          {notifications.filter(n => !n.read).length} new
        </span>
      </div>
      <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 transition-colors ${!notification.read ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
          >
            <div className="flex">
              <div className="mr-3">
                <div className={`${
                  notification.type === 'alert' ? 'bg-red-100 text-red-800' :
                  notification.type === 'message' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                } rounded-full p-2`}>
                  {notification.type === 'alert' ? <FiAlertTriangle className="w-4 h-4" /> :
                   notification.type === 'message' ? <FaCommentAlt className="w-4 h-4" /> :
                   <FiCheckCircle className="w-4 h-4" />}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className={`text-sm font-medium ${
                    !notification.read ? 'text-indigo-800' : 'text-gray-800'
                  }`}>{notification.title}</p>
                  {!notification.read && (
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="text-xs text-indigo-600 hover:text-indigo-800"
                    >
                      Mark read
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 bg-gray-50 text-center border-t border-gray-100">
        <button 
          onClick={markAllAsRead}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          Mark All as Read
        </button>
      </div>
    </div>
  );
};

const ProjectCardComponent = () => {
  const [activeTab, setActiveTab] = useState('active');

  const projects = {
    active: [
      {
        id: 1,
        title: "E-Commerce Platform",
        code: "CS-401",
        semester: "Spring 2024",
        description: "Developing a full-stack e-commerce solution with React and Node.js",
        status: "active",
        students: [
          { id: 1, name: "Alice", image: sampleImages.student1 },
          { id: 2, name: "Bob", image: sampleImages.student2 }
        ],
        image: sampleImages.project1
      },
      {
        id: 2,
        title: "AI Research Project",
        code: "CS-402",
        semester: "Spring 2024",
        description: "Exploring new machine learning algorithms for image recognition",
        status: "active",
        students: [
          { id: 3, name: "Charlie", image: sampleImages.student3 }
        ],
        image: sampleImages.project2
      }
    ],
    completed: [
      {
        id: 3,
        title: "Blockchain Implementation",
        code: "CS-399",
        semester: "Fall 2023",
        description: "Created a blockchain prototype for academic credentials",
        status: "completed",
        students: [
          { id: 4, name: "David", image: "https://randomuser.me/api/portraits/men/42.jpg" },
          { id: 5, name: "Eve", image: "https://randomuser.me/api/portraits/women/42.jpg" }
        ],
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80"
      }
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Project Overview</h3>
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3 py-1 text-sm rounded-lg ${
                activeTab === 'active' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-3 py-1 text-sm rounded-lg ${
                activeTab === 'completed' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects[activeTab].map((project) => (
            <div key={project.id} className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <div className="h-32 bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2">
                  <span className={`${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  } text-xs px-2 py-1 rounded-full`}>
                    {project.status === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.code} • {project.semester}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <BsThreeDotsVertical />
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.students.map((student) => (
                      <img 
                        key={student.id}
                        className="w-8 h-8 rounded-full border-2 border-white" 
                        src={student.image} 
                        alt={student.name}
                        title={student.name}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => console.log(`View project ${project.id}`)}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => console.log("Add new project")}
          className="mt-6 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" />
          Add New Project
        </button>
      </div>
    </div>
  );
};

const QuickActionPanel = () => {
  const actions = [
    {
      id: 1,
      icon: <FaCalendarAlt className="w-5 h-5" />,
      label: "Schedule Meeting",
      color: "blue",
      onClick: () => console.log("Schedule meeting clicked")
    },
    {
      id: 2,
      icon: <FaFileAlt className="w-5 h-5" />,
      label: "Add Project",
      color: "green",
      onClick: () => console.log("Add project clicked")
    },
    {
      id: 3,
      icon: <FaUserPlus className="w-5 h-5" />,
      label: "Add Student",
      color: "purple",
      onClick: () => console.log("Add student clicked")
    },
    {
      id: 4,
      icon: <FaCommentAlt className="w-5 h-5" />,
      label: "Add Feedback",
      color: "yellow",
      onClick: () => console.log("Add feedback clicked")
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    green: 'bg-green-100 text-green-800 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    yellow: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className={`${colorClasses[action.color]} p-4 rounded-xl flex flex-col items-center justify-center transition-colors`}
          >
            <div className="p-3 rounded-full mb-2">
              {action.icon}
            </div>
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const StudentProgressTracker = () => {
  const [selectedStudent, setSelectedStudent] = useState(1);

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      image: sampleImages.student1,
      progress: {
        literature: 85,
        implementation: 45,
        documentation: 30,
        nextMilestone: "System Design Review - Due May 15, 2024"
      }
    },
    {
      id: 2,
      name: "Bob Smith",
      image: sampleImages.student2,
      progress: {
        literature: 70,
        implementation: 60,
        documentation: 40,
        nextMilestone: "Code Submission - Due May 18, 2024"
      }
    },
    {
      id: 3,
      name: "Charlie Brown",
      image: sampleImages.student3,
      progress: {
        literature: 90,
        implementation: 30,
        documentation: 20,
        nextMilestone: "Literature Review Submission - Due May 12, 2024"
      }
    }
  ];

  const currentStudent = students.find(s => s.id === selectedStudent);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Progress Tracker</h3>
        <div className="relative">
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(parseInt(e.target.value))}
            className="appearance-none bg-gray-100 border border-gray-200 rounded-lg pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FaChevronDown className="w-3 h-3 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <img 
          src={currentStudent.image} 
          alt={currentStudent.name} 
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="font-medium text-gray-800">{currentStudent.name}</h4>
          <p className="text-xs text-gray-500">Computer Science</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Literature Review</span>
            <span className="text-sm text-gray-500">{currentStudent.progress.literature}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{width: `${currentStudent.progress.literature}%`}} 
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Implementation</span>
            <span className="text-sm text-gray-500">{currentStudent.progress.implementation}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-yellow-500 h-2 rounded-full" 
              style={{width: `${currentStudent.progress.implementation}%`}} 
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Documentation</span>
            <span className="text-sm text-gray-500">{currentStudent.progress.documentation}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full" 
              style={{width: `${currentStudent.progress.documentation}%`}} 
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Next Milestone</h4>
        <div className="flex items-start">
          <FiClock className="text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-sm text-gray-600">{currentStudent.progress.nextMilestone}</p>
        </div>
      </div>

      <button 
        onClick={() => console.log(`View full progress for ${currentStudent.name}`)}
        className="mt-6 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
      >
        View Full Progress
      </button>
    </div>
  );
};

const SupervisorCard = ({ name, department, expertise, availability, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center">
          <img 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm" 
            src={imageUrl} 
            alt={name}
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{department}</p>
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {expanded && (
          <>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Current Projects</h4>
              <div className="flex items-center space-x-2">
                <RiTeamFill className="text-gray-400" />
                <span className="text-sm text-gray-600">3 active supervisions</span>
              </div>
            </div>
          </>
        )}
        
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-sm px-3 py-1 rounded-full ${
            availability === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {availability}
          </span>
          <button 
            onClick={() => console.log(`View profile of ${name}`)}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
          >
            View Profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const CardLayout = ({ title, children, action }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {action && (
          <button 
            onClick={action.onClick}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            {action.label}
          </button>
        )}
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

function App() {
  const supervisors = [
    {
      name: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      expertise: ['AI', 'Machine Learning', 'NLP', 'Deep Learning'],
      availability: 'Available',
      imageUrl: sampleImages.supervisor1
    },
    {
      name: 'Prof. Michael Chen',
      department: 'Data Science',
      expertise: ['Big Data', 'Data Mining', 'Cloud Computing', 'IoT'],
      availability: 'Limited',
      imageUrl: sampleImages.supervisor2
    }
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden mr-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-xl font-bold text-indigo-800">Supervisor Control Center</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 relative">
                  <FaBell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="flex items-center">
                  <img 
                    className="w-8 h-8 rounded-full" 
                    src="https://randomuser.me/api/portraits/men/41.jpg" 
                    alt="User profile" 
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:inline">Dr. Smith</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <InfoBox
              icon={<FaUserGraduate className="w-6 h-6" />}
              title="Supervising"
              value="5 Students"
              description="Active supervisions"
              color="indigo"
            />
            <InfoBox
              icon={<FaBook className="w-6 h-6" />}
              title="Projects"
              value="3 Active"
              description="FYPs this semester"
              color="green"
            />
            <InfoBox
              icon={<FaCalendarAlt className="w-6 h-6" />}
              title="Meetings"
              value="2 Scheduled"
              description="Upcoming in 3 days"
              color="purple"
            />
            <InfoBox
              icon={<BsGraphUp className="w-6 h-6" />}
              title="Completion Rate"
              value="85%"
              description="Better than avg."
              color="yellow"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side */}
            <div className="lg:col-span-2 space-y-8">
              <CardLayout 
                title="Available Supervisors"
                action={{ label: "View All", onClick: () => console.log("View all supervisors") }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {supervisors.map((supervisor, index) => (
                    <SupervisorCard key={index} {...supervisor} />
                  ))}
                </div>
              </CardLayout>

              <ProjectCardComponent />
            </div>

            {/* Right side */}
            <div className="space-y-6">
              <QuickActionPanel />
              <StudentProgressTracker />
              <MeetingScheduleComponent />
              <NotificationPanel />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;