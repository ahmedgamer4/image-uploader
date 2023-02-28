import React from 'react'

type UploadedProps = {
  imageLink: {
    imgUrl: string;
    publicId: string;
  };
}

function Uploaded({ imageLink }: UploadedProps): JSX.Element {

  const handleCopy = () => {
    navigator.clipboard.writeText(imageLink.imgUrl)

    alert("Copied the text: " + imageLink.imgUrl)
  }

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
      <div className="w-full">
        <div className="mt-2 flex rounded-md shadow-sm my-3">
          <div className="relative flex items-stretch flex-grow
                        focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex
                          items-center pointer-events-none">
            </div>
            <input type="text" name="url" id="url"
              className="focus:ring-indigo-500
                        focus:border-indigo-500 block w-full
                        rounded-none rounded-l-md sm:text-sm pl-3
                        border-gray-300 bg-gray-100"
              value={imageLink.imgUrl}
            />
          </div>
          <button type="button" className="-ml-px relative
                        inline-flex items-center space-x-6 px-4 py-2
                        border border-gray-300 text-sm font-medium
                        rounded-md text-white bg-blue-500
                        hover:bg-blue-500 focus:outline-none focus:ring-1
                        focus:ring-indigo-500 focus:border-indigo-500"
            onClick={handleCopy}>
            <span>copy</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Uploaded