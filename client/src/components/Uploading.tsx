import React from 'react'

function Uploading() {
  return (
    <div>
      <h2>Uploading...</h2>
      <div className='w-full bg-gray-300 h-1 relative rounded-full overflow-hidden'>
        <div className='w-1/4 bg-blue-500 h-[6px] absolute rounded-full' id='progress'></div>
      </div>
    </div>
  )
}

export default Uploading