import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-indigo-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold hover:text-indigo-200 transition duration-300">
          FYP Supervisor Portal
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-indigo-200 transition duration-300">Dashboard</Link></li>
            <li><Link to="/projects" className="hover:text-indigo-200 transition duration-300">Projects</Link></li>
            <li><Link to="/students" className="hover:text-indigo-200 transition duration-300">Students</Link></li>
            <li><Link to="/meetings" className="hover:text-indigo-200 transition duration-300">Meetings</Link></li>
            <li><Link to="/settings" className="hover:text-indigo-200 transition duration-300">Settings</Link></li>
          </ul>
        </nav>
        
        {/* Login/User Section */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-indigo-200 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden md:inline ml-1">Login/Signout</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none" 
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-indigo-700 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Dashboard
          </Link>
          <Link 
            to="/projects" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link 
            to="/students" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Students
          </Link>
          <Link 
            to="/meetings" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Meetings
          </Link>
          <Link 
            to="/settings" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;