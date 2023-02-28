import React from 'react'
import { serverOrigin } from '../main';

type UploadedProps = {
  imageLink: {
    imgUrl: string;
    publicId: string;
  };
}

function Uploaded({ imageLink }: UploadedProps): JSX.Element {
  console.log(imageLink)
  return (
    <div className='relative h-[33rem] px-6 py-9 shadow-md rounded-lg w-96
      max-w-full flex flex-col justify-between items-center'>
      <div className='rounded-full bg-green-500 w-6 h-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h4 className='text-gray-800 text-lg'>Uploaded Successfully!</h4>
      <img src={imageLink.imgUrl} className='w-full rounded-xl h-1/2 object-cover' alt="bg_image" />
    </div>
  )
}

export default Uploaded