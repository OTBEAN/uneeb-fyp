import React from 'react'

function NotificationPanel() {
  return (
    <div>
      
  <div className="bg-white rounded-lg shadow-md border border-gray-200 w-72">
  <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
    <h3 className="font-semibold text-gray-800">Notifications</h3>
    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">3 new</span>
  </div>
  <div className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex">
        <div className="mr-3">
          <div className="bg-red-100 text-red-800 rounded-full p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Deadline Approaching</p>
          <p className="text-xs text-gray-500">Project proposal submission due in 2 days</p>
          <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
        </div>
      </div>
    </div>
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex">
        <div className="mr-3">
          <div className="bg-blue-100 text-blue-800 rounded-full p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">New Message</p>
          <p className="text-xs text-gray-500">From Team B: We have completed the prototype</p>
          <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
        </div>
      </div>
    </div>
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex">
        <div className="mr-3">
          <div className="bg-green-100 text-green-800 rounded-full p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Document Approved</p>
          <p className="text-xs text-gray-500">Chapter 3 of John's thesis has been approved</p>
          <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
        </div>
      </div>
    </div>
  </div>
  <div className="px-4 py-2 bg-gray-50 text-center">
    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Mark All as Read</button>
  </div>
</div>



    </div>
  )
}

export default NotificationPanel
