import React from 'react'

type UploadedProps = {
  imageLink: string;
}

function Uploaded({ imageLink }: UploadedProps): JSX.Element {
  return (
    <div className='relative h-[33rem] px-6 py-9 shadow-md rounded-lg
      max-w-full flex flex-col justify-between items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h4 className='text-gray-800 text-xl'>Uploaded Successfully!</h4>
      <img src={imageLink} className='w-full rounded-xl' alt="bg_image" />

    </div>
  )
}

export default Uploaded