import React from 'react'

const Footer = () => {
  return (
    <div>


<div>
  {/* Your page content here */}
  <div className="min-h-screen">
    {/* Content would go here */}
  </div>
  {/* Footer */}
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo and copyright */}
        <div className="flex items-center mb-4 md:mb-0">
          <svg className="h-6 w-6 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <span className="font-bold">FYP<span className="text-blue-400">Supervisor</span></span>
          <span className="mx-2">•</span>
          <span className="text-gray-400 text-sm">© 2023 University Name. All rights reserved.</span>
        </div>
        {/* Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
        </div>
      </div>
      {/* Additional info for mobile */}
      <div className="mt-4 pt-4 border-t border-gray-700 text-center md:text-left">
        <p className="text-gray-400 text-xs">
          Final Year Project Supervisor Portal - Version 1.0.0
        </p>
      </div>
    </div>
  </footer>
</div>
      
    </div>
  )
}

export default Footer
