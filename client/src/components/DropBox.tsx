import axios from 'axios';
import React, { useState } from 'react'
import bgImage from '/assets/image.svg'
import { serverOrigin } from '../main';

type ImageLink = {
  imgUrl: string;
  publicId: string;
}

type DropBoxProps = {
  setImageUrl: React.Dispatch<React.SetStateAction<ImageLink>>;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropBox({ setImageUrl, setUploading }: DropBoxProps): JSX.Element {
  const [dragActive, setDragActive] = useState(false)

  const uploadImage = async (image: File) => {
    const baseUrl = serverOrigin + '/api/images/uploads'

    const formData = new FormData()
    formData.append('image', image)
    setUploading(true)

    const res = await axios({
      method: 'POST',
      url: baseUrl,
      data: formData
    })

    if (!!res.data) setImageUrl(res.data)

    setUploading(false)
  }

  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    if (e.type === 'dragover') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    try {
      if (e.dataTransfer.files && e.dataTransfer.files[0].type.slice(0, 5) === 'image') uploadImage(e.dataTransfer.files[0])
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    try {
      if (e.target.files && e.target.files[0]) uploadImage(e.target.files[0])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onDragEnter={handleDrag} className='relative h-[33rem] px-6 py-9 shadow-md rounded-lg
      max-w-full flex flex-col justify-between items-center'>
      <h3 className='text-2xl'>Upload you image</h3>
      <p className='text-gray-400 text-xs'>File should be Jpeg, Png...</p>
      <input
        type='file'
        accept='image/*'
        className='hidden'
        id='input-file-field'
        name='image'
        onChange={handleChange}
      />
      <div className='flex flex-col justify-center items-center gap-4 border-2 py-12 border-dashed
       w-96 border-blue-200 rounded-xl bg-gray-100'>
        <img src={bgImage} className='w-1/2' alt="bg_image" />
        <p>Drag & Drop your Image</p>
      </div>
      <p className='text-gray-300'>or</p>
      <label htmlFor="input-file-field" className='block max-w-[120px]'>
        <p className='px-4 py-2 bg-blue-500 rounded-lg text-white cursor-pointer text-sm'>Choose a file</p>
      </label>
      {dragActive &&
        <div
          className='w-full h-full absolute left-0 top-0 border-inherit'
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop} />}
    </form>
  )
}

export default DropBox