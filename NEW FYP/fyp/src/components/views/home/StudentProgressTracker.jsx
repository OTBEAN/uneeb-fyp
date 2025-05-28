import React from 'react'

function StudentProgressTracker() {
  return (
    <div>


<div className="bg-white rounded-lg shadow p-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Progress</h3>
  <div className="space-y-4">
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Literature Review</span>
        <span className="text-sm text-gray-500">85%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}} />
      </div>
    </div>
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Implementation</span>
        <span className="text-sm text-gray-500">45%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}} />
      </div>
    </div>
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Documentation</span>
        <span className="text-sm text-gray-500">30%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}} />
      </div>
    </div>
  </div>
  <div className="mt-6 pt-4 border-t border-gray-200">
    <h4 className="text-sm font-medium text-gray-700 mb-2">Next Milestone</h4>
    <p className="text-sm text-gray-600">System Design Review - Due May 15, 2024</p>
  </div>
</div>


      
    </div>
  )
}

export default StudentProgressTracker
