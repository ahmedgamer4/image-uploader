import React, { useEffect } from 'react'

function Uploading() {
  useEffect(() => {
    setTimeout(() => {
      if (window.confirm('Try again?')) {
        window.location.reload()
      }
    }, 5000);

  }, [])

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