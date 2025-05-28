import React from 'react'

function MeetingScheduleComponent() {
  return (
    <div>


<div className="bg-white rounded-lg shadow overflow-hidden">
  <div className="bg-blue-700 px-4 py-3">
    <h3 className="text-lg font-semibold text-white">Upcoming Meetings</h3>
  </div>
  <div className="divide-y divide-gray-200">
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start">
        <div className="bg-blue-100 text-blue-800 rounded-lg p-2 mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-800">Progress Review</h4>
          <p className="text-sm text-gray-600">With Team A (E-Commerce Project)</p>
          <p className="text-sm text-gray-500 mt-1">May 10, 2024 • 10:00 AM - 10:30 AM</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm">Details</button>
      </div>
    </div>
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start">
        <div className="bg-green-100 text-green-800 rounded-lg p-2 mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-800">Thesis Draft Review</h4>
          <p className="text-sm text-gray-600">With Sarah Johnson (AI Project)</p>
          <p className="text-sm text-gray-500 mt-1">May 12, 2024 • 2:00 PM - 3:00 PM</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm">Details</button>
      </div>
    </div>
  </div>
  <div className="bg-gray-50 px-4 py-3 text-center">
    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View All Meetings</button>
  </div>
</div>



      
    </div>
  )
}

export default MeetingScheduleComponent
